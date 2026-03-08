import classNames from 'classnames'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'

import styles from "./styles.module.scss"
import { useWindowWidth } from '../../utils/useWindowWidth'

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

      <div className={styles.headerMenuItem}>
        КОНТАКТЫ
      </div>
    </>
  ) : null;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        ПОЛИНА ХАМРАЕВА
      </div>

      {$headerItems}
    </div>
  )
}
