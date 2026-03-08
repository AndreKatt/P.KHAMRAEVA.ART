import classNames from 'classnames'
import {useRef, useState} from 'react'
import {Drawer} from '../Drawer/Drawer'
import {useWindowWidth} from '../../utils/useWindowWidth'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'
import MenuIcon from '../../assets/Icons/Menu.svg'
import CopyIcon from '../../assets/Icons/Copy.svg'
import TelegramIcon from '../../assets/Icons/TelegramLogo.svg'
import PhoneIcon from '../../assets/Icons/Phone.svg'

import styles from "./styles.module.scss"

export const Header = () => {
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const windowWidth = useWindowWidth();

  const $headerItems = windowWidth !== 'small' ? (
    <>
      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuItem}>
          БИО
        </div>
        <div className={styles.headerMenuItem}>
          ПРОЕКТЫ
          <OpenIcon />
        </div>
        <div className={classNames(styles.headerMenuItem, styles.blue)}>
          СИНИЙ КРЕПДЕШИН
        </div>
        <div className={styles.headerMenuItem}>
          ПУБЛИКАЦИИ
        </div>
      </div>

      <div
        className={classNames(styles.headerMenuItem, styles.contactsButton)}
        onClick={() => setIsOpenContacts(!isOpenContacts)}
      >
        КОНТАКТЫ
      </div>
    </>
  ) : null

  const $menuButton = windowWidth === 'small' ? (
    <div className={styles.menuButton}>
      <MenuIcon className={styles.menuIcon}/>
    </div>
  ) : null

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          ПОЛИНА ХАМРАЕВА
        </div>

        {$headerItems}
        {$menuButton}
      </div>
      {isOpenContacts ? (
        <Drawer>
          <Contacts />
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
      <div className={styles.contactsAvatar}/>
      <div
        ref={emailRef}
        className={styles.contactItem}
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
        className={styles.contactItem}
      >
        <PhoneIcon />
        <div className={styles.contactText}>
          +79500148784
        </div>
      </a>
    </div>
  )
}
