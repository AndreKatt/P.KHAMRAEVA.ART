import { useNavigate } from 'react-router-dom'
import {Image} from '../../../Components/Image/Image'
import { ProjectTitle } from '../../../Components/ProjectTitle/ProjectTitle'

import type { FC } from 'react'
import type { IProjectPreviewProps } from './types'

import styles from './styles.module.scss'

export const Preview: FC<IProjectPreviewProps> = ({
  Src,
  SrcSet,
  Link,
  Title,
  Description,
}) => {
  const nav = useNavigate();

  const navigate = () => {
    if (!Link) {
      return
    }
    nav(Link)
  }

  return (
    <div
      onClick={navigate}
      className={styles.projectPreviewWrapper}
    >
      <Image
        Src={Src}
        SrcSet={SrcSet}
        className={styles.projectPreview}
      />
      <ProjectTitle 
        Title={Title}
        Description={Description}
        className={styles.projectPreviewTitle}
      />
    </div>
  )
}
