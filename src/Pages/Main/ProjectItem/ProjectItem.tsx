import {useNavigateCustom} from '../../../utils/useNavigate'
import {useIsMobile} from '../../../utils/useIsMobile'
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
  const navigate = useNavigateCustom();
  const isMobile = useIsMobile()

  const $title = isMobile ? null : (
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
      className={styles.projectItemWrapper}
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
