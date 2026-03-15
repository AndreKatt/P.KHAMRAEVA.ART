import {useState} from 'react'
import classNames from 'classnames'
import {Drawer} from '../../Components/Drawer/Drawer.tsx'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import {Contacts} from './Contacts/Contacts.tsx'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'
import MenuIcon from '../../assets/Icons/Menu.svg'
import MenuCloseIcon from '../../assets/Icons/MenuClose.svg'

import ArrowLeftIcon from '../../assets/Icons/ArrowLeft.svg'

import styles from "./styles.module.scss"
import { useNavigate } from 'react-router'

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<'menu' | 'contacts'>('contacts');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const isGoToPrevButtonVisible = isMobile && isOpenDrawer && drawerContent === 'contacts'

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

  const onOpenMenu = () => {
    if (drawerContent !== 'menu') {
      setDrawerContent('menu')
    }
  }

  const onToggleOpenMenu = () => {
    onOpenMenu()
    setIsOpenDrawer(!isOpenDrawer)
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
          <OpenIcon />
        </div>

        <div
          className={classNames(styles.headerMenuItem, styles.blue)}
          onClick={() => {
            navigate('projects/crepedechine')
            onCloseDrawer()
          }}
        >
          СИНИЙ КРЕПДЕШИН
        </div>

        <div
          className={styles.headerMenuItem}
          // onClick={() => navigate('bio')}
        >
          БИО
        </div>
      </div>

      <div
        className={classNames(styles.headerMenuItem, styles.contactsButton)}
        onClick={onToggleOpenContacts}
      >
        КОНТАКТЫ
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

  const $goToPrevButton = isGoToPrevButtonVisible ? (
    <div
      className={styles.goToPrevButton}
      onClick={onOpenMenu}
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

