import type {ComponentType, FC, SVGProps} from "react"

import styles from "./styles.module.scss"

export const Footer: FC<{
  Icons: ReadonlyArray<ComponentType<SVGProps<SVGSVGElement>>>
}> = ({Icons}) => {
  return (
    <div
      className={styles.footer}
    >
      {Icons.map((Icon, idx) => <Icon key={idx}/>)}
    </div>
  )
}
