import {createPortal} from 'react-dom'
import {useDrawerContext} from '../../utils/useDrawerContext'

import {useEffect, useRef, type FC} from 'react'

import styles from './styles.module.scss'

const ANIMATION_DELAY = 300

export const Drawer: FC = () => {
  const refDrawer = useRef<HTMLDivElement | null>(null);
  const refContent = useRef<HTMLDivElement | null>(null);
  const refAnimationTimerId = useRef<number | null>(null)
  const {
    IsOpen,
    GetDrawerContent,
    ToggleOpenDrawer,
  } = useDrawerContext()

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
        {GetDrawerContent()}
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
      content.style.right = '0'
      drawer.style.opacity = '1'
    })
  }, [IsOpen])

  return (
    createPortal(
      $content,
      document.body
    )
  )
}
