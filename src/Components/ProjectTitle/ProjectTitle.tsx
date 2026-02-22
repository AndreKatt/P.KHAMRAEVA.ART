import type {FC} from 'react'
import type {IProjectTitleProps} from './types.ts'

import styles from "./styles.module.scss"

export const ProjectTitle: FC<IProjectTitleProps> = ({
  Title,
  Description,
}) => {
  return (
    <div
      className={styles.titleContainer}
    >
      <div
        className={styles.title}
      >
        {Title}
      </div>
      <div
        className={styles.description}
      >
        {Description}
      </div>
    </div>
  )
}
