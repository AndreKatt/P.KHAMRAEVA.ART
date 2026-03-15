import {useRef, useState} from 'react'
import classNames from 'classnames'
import {Image} from '../../../Components/Image/Image.tsx'
import {useIsMobile} from '../../../utils/useIsMobile.ts'
import CopyIcon from '../../../assets/Icons/Copy.svg'
import TelegramIcon from '../../../assets/Icons/TelegramLogo.svg'
import PhoneIcon from '../../../assets/Icons/Phone.svg'

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
        href={isMobile ? 'tel:+79500148784' : undefined}
        className={classNames(
          styles.contactItem,
          styles.last,
          styles.phone,
        )}
      >
        <PhoneIcon />
        <div className={styles.contactText}>
          +79500148784
        </div>
      </a>
    </div>
  )
}