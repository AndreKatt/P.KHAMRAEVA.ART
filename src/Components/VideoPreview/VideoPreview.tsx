import classNames from 'classnames'
import {ProjectTitle} from '../ProjectTitle/ProjectTitle.tsx'
import {Image} from '../Image/Image.tsx'
import PlayIcon from '../../assets/Icons/Play.svg'

import type {FC} from 'react'
import type {IVideoPreviewProps} from './types.ts'

import styles from "./styles.module.scss"

export const VideoPreview: FC<IVideoPreviewProps> = ({
  ImageSrc,
  ImageSrcSet,
  WhithoutPlayButton,
  Title,
  Description,
  WhithoutGradient,
}) => {
  const $title = Title ? (
    <div className={styles.videoPreviewTitleWrapper}>
      <ProjectTitle
        Title={Title}
        Description={Description}
      />
    </div>
  ) : null

  const $playButton = WhithoutPlayButton ? null : (
    <div className={styles.videoPreviewPlayButton}>
      <PlayIcon className={styles.videoPreviewPlayIcon}/>
    </div>
  )

  return (
    <div className={styles.videoPreviewContainer}>
      {$title}
      <div className={classNames(styles.videoPreviewImageContainer, {
        [styles.gradient]: !WhithoutGradient,
      })}>
        {$playButton}
        <Image
          IsLazy
          Src={ImageSrc}
          SrcSet={ImageSrcSet}
          className={styles.imagePreviewHorizontal}
        />
      </div>
    </div>
  )
}

