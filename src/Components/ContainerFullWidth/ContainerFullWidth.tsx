import classNames from 'classnames'

import type {FC, HTMLAttributes, PropsWithChildren} from 'react'

import styles from './styles.module.scss'

export const ContainerFullWidth: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.containerFullWidth, className)}
      {...props}
    >
      {children}
    </div>
  )
}
