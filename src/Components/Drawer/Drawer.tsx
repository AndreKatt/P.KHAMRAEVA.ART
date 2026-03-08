import {createPortal} from 'react-dom'

import type {FC, PropsWithChildren} from 'react'

import styles from './styles.module.scss'

export const Drawer: FC<PropsWithChildren> = ({children}) => {
  return (
    createPortal(
      <div className={styles.drawer}>
        {children}
      </div>,
      document.body
    )
  )
}
