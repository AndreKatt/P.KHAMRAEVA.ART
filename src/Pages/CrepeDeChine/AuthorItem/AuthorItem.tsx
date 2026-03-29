import {Image} from '../../../Components/Image/Image'

import type {FC} from 'react'
import type {IAuthorItemProps} from './types'

import styles from './styles.module.scss'

export const AuthorItem: FC<IAuthorItemProps> = ({
  Name,
  Profession,
  Description,
  ...imageProps
}) => {
  return (
    <div className={styles.authorContainer}>
      <Image
        {...imageProps}
        className={styles.authorImage}
      />
      <div className={styles.authorMainInfo}>
        <div>
          {Name}
        </div>
        <div className={styles.authorProfessionText}>
          {Profession}
        </div>
      </div>
      <div className={styles.authorDescription}>
        {Description}
      </div>
    </div>
  )
}
