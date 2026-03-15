import classNames from 'classnames'
import {useRef, useState} from 'react'
import {Drawer} from '../Drawer/Drawer'
import {Image} from '../Image/Image.tsx'
import {useWindowWidth} from '../../utils/useWindowWidth'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'
import MenuIcon from '../../assets/Icons/Menu.svg'
import MenuCloseIcon from '../../assets/Icons/MenuClose.svg'
import CopyIcon from '../../assets/Icons/Copy.svg'
import TelegramIcon from '../../assets/Icons/TelegramLogo.svg'
import PhoneIcon from '../../assets/Icons/Phone.svg'

import styles from "./styles.module.scss"

const imageBasePath = '/Images/Contacts'

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<'menu' | 'contacts'>('contacts');
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth === 'small'

  const onToggleOpenContacts = () => {
    if (drawerContent !== 'contacts') {
      setDrawerContent('contacts')
    }
    if (isMobile) {
      return
    }
    setIsOpenDrawer(!isOpenDrawer)
  }

  const onToggleOpenMenu = () => {
    if (drawerContent !== 'menu') {
      setDrawerContent('menu')
    }
    setIsOpenDrawer(!isOpenDrawer)
  }

  const $headerItems = (
    <>
      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuItem}>
          ГЛАВНАЯ
        </div>
        <div className={styles.headerMenuItem}>
          ПРОЕКТЫ
          <OpenIcon />
        </div>
        <div className={classNames(styles.headerMenuItem, styles.blue)}>
          СИНИЙ КРЕПДЕШИН
        </div>
        <div className={styles.headerMenuItem}>
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

  return (
    <>
      <div className={styles.headerContainer}>
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

const Contacts = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const emailRef = useRef<HTMLDivElement | null>(null);

  const onClickEmail = () => {
    if (!emailRef.current) {
      return;
    }
    navigator.clipboard.writeText(emailRef.current.textContent);
  
    setIsShowTooltip(true)

    setTimeout(() => {
      setIsShowTooltip(false)
    }, 3000);
  }

  return (
    <div className={styles.contacts}>
      <div className={styles.contactsAvatarWrapper}>
        <div className={styles.contactsAvatar}>
          <Image
            Src={`${imageBasePath}/ContactsPhoto-1440.webp`}
            SrcSet={`
              ${imageBasePath}/ContactsPhoto-900.webp 900w,
              ${imageBasePath}/ContactsPhoto-1440.webp 1440w,
              ${imageBasePath}/ContactsPhoto-1920.webp 1920w`}
            Sizes='50wv'
            className={styles.contactsAvatarImage}
          />
        </div>
      </div>
      <div
        ref={emailRef}
        className={classNames(styles.contactItem, styles.first)}
        onClick={onClickEmail}
      >
        <CopyIcon />
        <div className={styles.contactText}>
          hamhamkham@gmail.com
        </div>

        <div
          className={classNames(styles.tooltip, {
            [styles.hidden]: !isShowTooltip,
          })}
        >
          Скопировано!
        </div>
      </div>

      <a
        href='https://t.me/polina_khamr'
        target='_blank'
        className={styles.contactItem}
      >
        <TelegramIcon />
        <div className={styles.contactText}>
          @polina_khamr
        </div>
      </a>
      <a
        href='tel:+79500148784'
        className={classNames(styles.contactItem, styles.last)}
      >
        <PhoneIcon />
        <div className={styles.contactText}>
          +79500148784
        </div>
      </a>
    </div>
  )
}
