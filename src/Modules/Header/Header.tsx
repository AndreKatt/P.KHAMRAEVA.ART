import {useState} from 'react'
import { useLocation } from 'react-router'
import classNames from 'classnames'
import {Drawer} from '../../Components/Drawer/Drawer.tsx'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import {Contacts} from './Contacts/Contacts.tsx'
import { useNavigateCustom } from '../../utils/useNavigate.ts'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'
import MenuIcon from '../../assets/Icons/Menu.svg'
import MenuCloseIcon from '../../assets/Icons/MenuClose.svg'
import ArrowLeftIcon from '../../assets/Icons/ArrowLeft.svg'

import styles from "./styles.module.scss"

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<'menu' | 'contacts'>('contacts');
  const navigate = useNavigateCustom();
  const {pathname} = useLocation();
  const isMobile = useIsMobile();

  const isMainPage = pathname === '/'
  const isGoToPrevEnabled = isOpenDrawer ? drawerContent === 'contacts' : !isMainPage

  const onCloseDrawer = () => {
    if (isOpenDrawer) {
      setIsOpenDrawer(false)
    }
  }

  const onToggleOpenContacts = () => {
    if (drawerContent !== 'contacts') {
      setDrawerContent('contacts')
    }
    if (isMobile) {
      return
    }
    setIsOpenDrawer(!isOpenDrawer)
  }

  const onShowMenu = () => {
    if (drawerContent !== 'menu') {
      setDrawerContent('menu')
    }
  }

  const onToggleOpenMenu = () => {
    onShowMenu()
    setIsOpenDrawer(!isOpenDrawer)
  }

  const onGoPrev = () => {
    if (drawerContent === 'contacts') {
      onShowMenu()

      return
    }
    navigate(-1)
  }

  const $headerItems = (
    <>
      <div className={styles.headerMenuContainer}>
        <div
          className={styles.headerMenuItem}
          onClick={() => {
            navigate('/')
            onCloseDrawer()
          }}
        >
          ГЛАВНАЯ
        </div>

        <div
          className={styles.headerMenuItem}
          onClick={() => {
            navigate('projects')
            onCloseDrawer()
          }}
        >
          ПРОЕКТЫ
        </div>

        <div
          className={styles.headerMenuItem}
          onClick={() => {
            navigate('projects/crepedechine')
            onCloseDrawer()
          }}
        >
          АКТУАЛЬНОЕ
        </div>

        <div
          className={styles.headerMenuItem}
          onClick={() => {
            navigate('bio')
            onCloseDrawer()
          }}
        >
          БИО
        </div>
      </div>

      <div
        className={classNames(styles.headerMenuItem, styles.contactsButtonContainer)}
        onClick={onToggleOpenContacts}
      >
        <div
          className={styles.contactsButton}
        >
          КОНТАКТЫ
        </div>
        <OpenIcon />
      </div>
    </>
  );

  const $menuButton = isMobile ? (
    <div
      className={styles.menuButton}
      onClick={onToggleOpenMenu}
    >
      {isOpenDrawer ? (
        <MenuCloseIcon className={styles.menuIcon}/>
      ) : (
        <MenuIcon className={styles.menuIcon}/>
      )}
    </div>
  ) : null

  const drawerContent$ = drawerContent === 'menu' ? (
    <div className={styles.drawerMenu}>
      {$headerItems}
    </div>
  ) : (
    <Contacts />
  )

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

      {isOpenDrawer ? (
        <Drawer>
          {drawerContent$}
        </Drawer>
      ) : null}
    </>
  )
}

