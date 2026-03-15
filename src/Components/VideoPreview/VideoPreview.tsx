import {ProjectPreview} from '../ProjectPreview/ProjectPreview'
import PlayIcon from '../../assets/Icons/Play.svg'

import type {FC} from 'react'
import type {IProjectPreviewProps} from '../ProjectPreview/types'

import styles from './styles.module.scss'

export const VideoPreview: FC<IProjectPreviewProps> = (props) => {
  return (
    <ProjectPreview
      WhithGradient
      {...props}
    >
      <div className={styles.videoPreviewPlayButton}>
        <PlayIcon className={styles.videoPreviewPlayIcon}/>
      </div>
    </ProjectPreview>
  )
}
