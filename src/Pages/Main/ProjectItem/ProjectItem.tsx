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
}) => {
  const nav = useNavigateCustom();

  return (
    <div
      onClick={() => nav(Link)}
      className={styles.projectItemWrapper}
    >
      <Image
        Src={Src}
        SrcSet={SrcSet}
        className={styles.projectImage}
      />
      <div className={styles.projectItemTitle}>
        <div className={styles.projectItemTitleText}>
          {Title}
        </div>
        <div className={styles.projectItemDescription}>
          {Description}
        </div>
      </div>
    </div>
  )
}
