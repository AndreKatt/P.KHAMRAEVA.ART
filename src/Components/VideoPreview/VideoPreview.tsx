import {useState, type FC} from 'react'
import classNames from 'classnames'
import {ProjectPreview} from '../ProjectPreview/ProjectPreview'
import PlayIcon from '../../assets/Icons/Play.svg'

import type {IVideoPreviewProps} from './types'

import styles from './styles.module.scss'

export const VideoPreview: FC<IVideoPreviewProps> = ({
  VideoId,
  IsLazy,
  ...props
}) => {
  const [isShowVideo, setIsShowVideo] = useState(false);

  const $video = VideoId && isShowVideo ? (
    <div
      className={styles.videoPlayer}
    >
      <iframe
        src={`https://kinescope.io/embed/${VideoId}?autoplay=1&loop=1`}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="100%"
        loading={IsLazy ? 'lazy' : 'eager'}
      >
      </iframe>
    </div>
  ) : null

  const onShowVideo = () => {
    if (!VideoId) {
      return
    }
    setIsShowVideo(true)
  }

  return (
    <div className={styles.videoPreviewContainer}>
      <div
        className={classNames(styles.projectPreviewWrapper, {
          [styles.hidden]: isShowVideo
        })}
      >
        <ProjectPreview
          WhithGradient
          OnClick={onShowVideo}
          {...props}
        >
          <div className={styles.videoPreviewPlayButton}>
            <PlayIcon className={styles.videoPreviewPlayIcon}/>
          </div>
        </ProjectPreview>
      </div>

      {$video}
    </div>
  )
}
