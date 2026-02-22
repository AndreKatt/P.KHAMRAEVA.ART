import type {FC} from 'react'
import type {IAuthorsProps} from './types.ts'

import styles from "./styles.module.scss"

export const Authors: FC<IAuthorsProps> = ({
  Items,
  ProjectName,
}) => {
  const baseTitle = 'Команда проекта';
  const title = ProjectName ? `${baseTitle} ${ProjectName}` : baseTitle;

  return (
    <div
      className={styles.authorsContainer}
    >
      <div>
        {title}
      </div>
      <div
        className={styles.authors}
      >
        {Items.map(({Role, Name}) => (
          <div
            className={styles.authorItem}
          >
            <div>{Role}</div>
            <DividerDotted />
            <div>{Name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const DividerDotted = () => (
  <div
    className={styles.dividerDotted}
  />
)
