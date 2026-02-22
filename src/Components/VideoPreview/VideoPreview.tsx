import PlayIcon from '../../assets/Icons/Play.svg'

import type { FC } from 'react'
import type { IVideoPreviewProps } from './types.ts'

import styles from "./styles.module.scss"

export const VideoPreview: FC<IVideoPreviewProps> = ({
  ImageSrc,
  ImageSrcSet,
  WhithoutPlayButton,
}) => {
  const $playButton = WhithoutPlayButton ? null : (
    <div className={styles.videoPreviewPlayButton}>
      <PlayIcon />
    </div>
  )

  return (
    <div
      className={styles.videoPreviewWrapper}
    >
      <div className={styles.videoPreviewImageContainer}>
        {$playButton}
        <img
          src={ImageSrc}
          srcSet={ImageSrcSet}
          sizes="100vw"
          loading="lazy"
          className={styles.imagePreviewHorizontal}
        />
      </div>
    </div>
  )
}

