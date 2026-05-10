import {createPortal} from 'react-dom'
import {useDrawerContext} from '../../utils/useDrawerContext'
import {HeaderItems} from '../../Components/HeaderItems/HeaderItems'
import {Contacts} from '../../Components/Contacts/Contacts'
import {useIsMobile} from '../../utils/useIsMobile'
import {useCallback, useEffect, useRef, type FC} from 'react'

import styles from './styles.module.scss'

const ANIMATION_DELAY = 300

export const Drawer: FC = () => {
  const refDrawer = useRef<HTMLDivElement | null>(null)
  const refContent = useRef<HTMLDivElement | null>(null)
  const refAnimationTimerId = useRef<number | null>(null)

  const isMobile = useIsMobile()
  const {
    IsOpen,
    DrawerContentType,
    ToggleOpenDrawer,
    SetDrawerContentType,
  } = useDrawerContext()

  const isOpenContacts = IsOpen && DrawerContentType === 'contacts'

  const onToggleOpenContacts = useCallback(() => {
    if (DrawerContentType !== 'contacts') {
      SetDrawerContentType('contacts')
    }
    if (isMobile) {
      return
    }
    ToggleOpenDrawer()
  }, [DrawerContentType, SetDrawerContentType, ToggleOpenDrawer, isMobile])

  const $content = (
    <div
      ref={refDrawer}
      className={styles.drawer}
    >
      <div
        className={styles.drawerMask}
        onClick={ToggleOpenDrawer}
      />
      <div
        ref={refContent}
        className={styles.drawerContent}
      >
        {DrawerContentType === 'menu' ? (
          <div className={styles.drawerMenu}>
            <HeaderItems
              IsOpenContacts={isOpenContacts}
              OnToggleOpenContacts={onToggleOpenContacts}
            />
          </div>
        ) : <Contacts />}
      </div>
    </div>
  )

  useEffect(() => {
    const drawer = refDrawer.current
    const content = refContent.current
    
    if (!drawer || !content) {
      return
    }
    if (!IsOpen) {
      content.style.right = `-${content.offsetWidth}px`
      drawer.style.opacity = '0'

      refAnimationTimerId.current = setTimeout(() => {
        drawer.style.display = 'none'
      }, ANIMATION_DELAY)

      return
    }
    const animationTimerId = refAnimationTimerId.current

    if (animationTimerId) {
      clearTimeout(animationTimerId)
      refAnimationTimerId.current = null
    }
    drawer.style.display = 'flex'
    requestAnimationFrame(() => {
      drawer.style.opacity = '1'
      content.style.right = '0'
    })
  }, [IsOpen])

  return (
    createPortal(
      $content,
      document.body
    )
  )
}
