import classNames from 'classnames'

import {Image} from '../Image/Image.tsx'
import {Copy} from '../Copy/Copy.tsx'
import {useIsMobile} from '../../utils/useIsMobile.ts'
import CopyIcon from '../../assets/Icons/Copy.svg'
import TelegramIcon from '../../assets/Icons/TelegramLogo.svg'
import MailIcon from '../../assets/Icons/Mail.svg'
import PhoneIcon from '../../assets/Icons/Phone.svg'

import styles from './styles.module.scss'

const IMAGE_BASE_PATH = '/Images/Contacts'

export const Contacts = () => {
  const isMobile = useIsMobile();

  const $avatar = (
    <div className={styles.contactsAvatarWrapper}>
      <div className={styles.contactsAvatar}>
        <Image
          Src={`${IMAGE_BASE_PATH}/Contacts-1440.webp`}
          SrcSet={`
            ${IMAGE_BASE_PATH}/Contacts-900.webp 900w,
            ${IMAGE_BASE_PATH}/Contacts-1440.webp 1440w,
            ${IMAGE_BASE_PATH}/Contacts-1920.webp 1920w
          `}
          className={styles.contactsAvatarImage}
        />
      </div>
    </div>
  )

  const $email = (
    <Copy>
      <div className={styles.contactItem}>
        <MailIcon />
        hamhamkham@gmail.com
      </div>
    </Copy>
  )

  const $tg = (
    <a
      href='https://t.me/polina_khamr'
      target='_blank'
      className={styles.contactItem}
    >
      <TelegramIcon />
      @polina_khamr
    </a>
  )

  const $phone = isMobile ? (
    <a
      href='tel:+79500148784'
      className={classNames(
        styles.contactItem,
        styles.phone,
      )}
    >
      <PhoneIcon />
      +79500148784
    </a>
  ) : (
    <Copy>
      <div className={styles.contactItem}>
        <CopyIcon />
        +79500148784
      </div>
    </Copy>
  )

  return (
    <div className={styles.contacts}>
      {$avatar}
      {$email}
      {$tg}
      {$phone}
    </div>
  )
}