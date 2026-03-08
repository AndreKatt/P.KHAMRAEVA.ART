import classNames from 'classnames'
import {useWindowWidth} from '../../utils/useWindowWidth'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'
import MenuIcon from '../../assets/Icons/Menu.svg'

import styles from "./styles.module.scss"

export const Header = () => {
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

      <div className={classNames(styles.headerMenuItem, styles.contacts)}>
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
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        ПОЛИНА ХАМРАЕВА
      </div>

      {$headerItems}
      {$menuButton}
    </div>
  )
}
