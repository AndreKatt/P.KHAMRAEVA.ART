import classNames from "classnames";

import type {FC, ReactNode} from "react";

import styles from './styles.module.scss'

export const Title: FC<{Text: string | ReactNode, className?: string}> = ({
  Text,
  className,
}) => (
  <div className={classNames(styles.title, className)}>
    {Text}
  </div>
)