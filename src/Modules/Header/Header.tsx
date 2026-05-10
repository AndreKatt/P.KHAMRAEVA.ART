import {useCallback, useMemo} from 'react'
import {useLocation } from 'react-router'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import {useNavigateCustom} from '../../utils/useNavigate.ts'
import {useDrawerContext} from '../../utils/useDrawerContext.ts'
import {HeaderItems} from '../../Components/HeaderItems/HeaderItems.tsx'
import BurgerIcon from '../../assets/Icons/Burger.svg'
import MenuCloseIcon from '../../assets/Icons/Cross.svg'
import ArrowLeftIcon from '../../assets/Icons/ArrowLeft.svg'

import styles from "./styles.module.scss"

export const Header = () => {
  const {pathname} = useLocation()
  const {
    IsOpen,
    DrawerContentType,
    ToggleOpenDrawer,
    SetDrawerContentType,
  } = useDrawerContext()
  const navigate = useNavigateCustom()
  const isMobile = useIsMobile()

  const isMainPage = pathname === '/'
  const isGoToPrevEnabled = IsOpen ? DrawerContentType === 'contacts' : !isMainPage
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

  const onShowMenu = () => {
    if (DrawerContentType !== 'menu') {
      SetDrawerContentType('menu')
    }
  }

  const onToggleOpenMenu = () => {
    onShowMenu()
    ToggleOpenDrawer()
  }

  const onGoPrev = () => {
    if (DrawerContentType === 'contacts') {
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

