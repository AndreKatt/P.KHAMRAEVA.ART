import classNames from 'classnames'
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'

import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <div
      className={styles.headerContainer}
    >
      <div
        className={styles.headerTitle}
      >
        ПОЛИНА ХАМРАЕВА
      </div>

      <div
        className={styles.headerMenuContainer}
      >
        <div
          className={styles.headerMenuItem}
        >
          БИО
        </div>
        <div
          className={styles.headerMenuItem}
        >
          ПРОЕКТЫ
          <OpenIcon />
        </div>
        <div
          className={classNames(styles.headerMenuItem, styles.blue)}
        >
          СИНИЙ КРЕПДЕШИН
        </div>
        <div
          className={styles.headerMenuItem}
        >
          ПУБЛИКАЦИИ
        </div>
      </div>

      <div
        className={styles.headerMenuItem}
      >
        КОНТАКТЫ
      </div>
    </div>
  )
}
