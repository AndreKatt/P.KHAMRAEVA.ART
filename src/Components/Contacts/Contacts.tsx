import {useRef, useState} from 'react'
import classNames from 'classnames'
import {Image} from '../Image/Image.tsx'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import CopyIcon from '../../assets/Icons/Copy.svg'
import TelegramIcon from '../../assets/Icons/TelegramLogo.svg'
import MailIcon from '../../assets/Icons/Mail.svg'

import styles from './styles.module.scss'

const imageBasePath = '/Images/Contacts'

export const Contacts = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

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
            Src={`${imageBasePath}/Contacts-1440.webp`}
            SrcSet={`
              ${imageBasePath}/Contacts-900.webp 900w,
              ${imageBasePath}/Contacts-1440.webp 1440w,
              ${imageBasePath}/Contacts-1920.webp 1920w
            `}
            className={styles.contactsAvatarImage}
          />
        </div>
      </div>
      <div
        ref={emailRef}
        className={styles.contactItem}
        onClick={onClickEmail}
      >
        <MailIcon />
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
        href={isMobile ? 'tel:+79500148784' : undefined}
        className={classNames(
          styles.contactItem,
          styles.phone,
        )}
      >
        <CopyIcon />
        <div className={styles.contactText}>
          +79500148784
        </div>
      </a>
    </div>
  )
}