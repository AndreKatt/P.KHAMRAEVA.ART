import UnderConstruction from "../../assets/Icons/UnderConstruction.svg"

import styles from "./styles.module.scss"

export function Component() {
  return (
    <div className={styles.content}>
      <UnderConstruction
        className={styles.iconEmpty}
      />
      . . . cтраница в разработке . . .
    </div>
  )
}
