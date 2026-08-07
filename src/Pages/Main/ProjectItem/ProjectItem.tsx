import classNames from 'classnames'
import {useNavigateCustom} from '../../../utils/useNavigate'
import {Image} from '../../../Components/Image/Image'

import type {FC} from 'react'
import type {IProjectItemProps} from './types'

import styles from './styles.module.scss'

export const ProjectItem: FC<IProjectItemProps> = ({
  Link,
  Src,
  SrcSet,
  Title,
  Description,
  BorderRight,
}) => {
  const navigate = useNavigateCustom();

  const $title = (
    <div className={styles.projectItemTitle}>
      <div className={styles.projectItemTitleText}>
        {Title}
      </div>
      <div className={styles.projectItemDescription}>
        {Description}
      </div>
    </div>
  )

  return (
    <div
      onClick={() => navigate(Link)}
      className={classNames(styles.projectItemWrapper, {
        [styles.borderRight]: BorderRight,
      })}
    >
      <Image
        Src={Src}
        SrcSet={SrcSet}
        className={styles.projectImage}
      />
      {$title}
    </div>
  )
}
