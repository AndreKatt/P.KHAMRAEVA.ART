import type { FC } from "react"

import styles from "./styles.module.scss"

export const Footer: FC<{
  Icons: ReadonlyArray<string>
}> = ({Icons}) => {
  return (
    <div
      className={styles.footer}
    >
      {Icons.map(Icon => <Icon />)}
    </div>
  )
}
