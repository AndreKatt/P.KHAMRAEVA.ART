import {createPortal} from 'react-dom'

import type {FC, PropsWithChildren} from 'react'

import styles from './styles.module.scss'

export const Drawer: FC<PropsWithChildren> = ({ children }) => {
  const $content = (
    <div className={styles.drawer}>
      {children}
    </div>
  )

  return (
    createPortal(
      $content,
      document.body
    )
  )
}
