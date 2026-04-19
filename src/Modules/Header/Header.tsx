import {useCallback, useEffect, useMemo, useState} from 'react'
import { useLocation } from 'react-router'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import {useNavigateCustom} from '../../utils/useNavigate.ts'
import {useDrawerContext} from '../../utils/useDrawerContext.ts'
import {Contacts} from './Contacts/Contacts.tsx'
import {HeaderItems} from './HeaderItems/HeaderItems.tsx'
import BurgerIcon from '../../assets/Icons/Burger.svg'
import MenuCloseIcon from '../../assets/Icons/Cross.svg'
import ArrowLeftIcon from '../../assets/Icons/ArrowLeft.svg'

import styles from "./styles.module.scss"

export const Header = () => {
  const [drawerContent, setDrawerContent] = useState<'menu' | 'contacts'>('contacts')
  const {pathname} = useLocation()
  const {
    IsOpen,
    ToggleOpenDrawer,
    SetDrawerContent,
  } = useDrawerContext()
  const navigate = useNavigateCustom()
  const isMobile = useIsMobile()

  const isMainPage = pathname === '/'
  const isGoToPrevEnabled = IsOpen ? drawerContent === 'contacts' : !isMainPage
  const isOpenContacts = IsOpen && drawerContent === 'contacts'

  const onToggleOpenContacts = useCallback(() => {
    if (drawerContent !== 'contacts') {
      setDrawerContent('contacts')
    }
    if (isMobile) {
      return
    }
    ToggleOpenDrawer()
  }, [ToggleOpenDrawer, drawerContent, isMobile])

  const onShowMenu = () => {
    if (drawerContent !== 'menu') {
      setDrawerContent('menu')
    }
  }

  const onToggleOpenMenu = () => {
    onShowMenu()
    ToggleOpenDrawer()
  }

  const onGoPrev = () => {
    if (drawerContent === 'contacts') {
      onShowMenu()

      return
    }
    navigate(-1)
  }

  const $menuButton = isMobile ? (
    <div
      className={styles.menuButton}
      onClick={onToggleOpenMenu}
    >
      {IsOpen ? (
        <MenuCloseIcon className={styles.menuIcon}/>
      ) : (
        <BurgerIcon className={styles.menuIcon}/>
      )}
    </div>
  ) : null

  const $headerItems = useMemo(() => (
    <HeaderItems
      IsOpenContacts={isOpenContacts}
      OnToggleOpenContacts={onToggleOpenContacts}
    />
  ), [isOpenContacts, onToggleOpenContacts])

  const $goToPrevButton = isMobile && isGoToPrevEnabled ? (
    <div
      className={styles.goToPrevButton}
      onClick={onGoPrev}
    >
      <ArrowLeftIcon className={styles.goToPrevButtonIcon}/>
    </div>
  ) : null

  useEffect(() => {
    if (drawerContent === 'menu') {
      SetDrawerContent(
        <div className={styles.drawerMenu}>
          {$headerItems}
        </div>
      )

      return
    }
    SetDrawerContent(<Contacts />)
  }, [$headerItems, SetDrawerContent, drawerContent])

  return (
    <>
      <div className={styles.headerContainer}>
        {$goToPrevButton}

        <div className={styles.headerTitle}>
          ПОЛИНА ХАМРАЕВА
        </div>

        {!isMobile ? $headerItems : null}

        {$menuButton}
      </div>
    </>
  )
}

