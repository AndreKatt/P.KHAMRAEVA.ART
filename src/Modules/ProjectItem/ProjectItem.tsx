import classNames from 'classnames'
import {Image} from '../../Components/Image/Image'
import {useNavigateCustom} from '../../utils/useNavigate'

import type { FC } from 'react'
import type { IProjectItemProps } from './types'

import styles from './styles.module.scss'

export const ProjectItem: FC<IProjectItemProps> = ({
  Src,
  SrcSet,
  Link,
  Title,
  Description,
  WithoutBorder = false,
  WithoutGradient = false,
  ClassNameImage,
}) => {
  const nav = useNavigateCustom();

  const navigate = () => {
    if (!Link) {
      return
    }
    nav(Link)
  }

  return (
    <div
      onClick={navigate}
      className={classNames(styles.projectItemWrapper, {
        [styles.border]: !WithoutBorder,
        [styles.gradient]: !WithoutGradient,
      })}
    >
      <Image
        Src={Src}
        SrcSet={SrcSet}
        className={classNames(styles.projectItem, ClassNameImage)}
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
