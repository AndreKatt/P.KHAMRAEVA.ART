import {useState, type FC} from 'react'
import classNames from 'classnames'
import {ProjectPreview} from '../ProjectPreview/ProjectPreview'
import {ContainerFullWidth} from '../../Components/ContainerFullWidth/ContainerFullWidth'
import {Video} from '../../Components/Video/Video'
import PlayIcon from '../../assets/Icons/ArrowOpen.svg'

import type {IVideoPreviewProps} from './types'

import styles from './styles.module.scss'

export const VideoPreview: FC<IVideoPreviewProps> = ({
  VideoId,
  IsLazy,
  ...props
}) => {
  const [isShowVideo, setIsShowVideo] = useState(false);

  const $video = VideoId && isShowVideo ? (
    <Video
      VideoId={VideoId}
      IsLazy={IsLazy}
    />
  ) : null

  const onShowVideo = () => {
    if (!VideoId) {
      return
    }
    setIsShowVideo(true)
  }

  return (
    <ContainerFullWidth className={classNames(styles.videoPreviewContainer, {
      [styles.onPlay]: isShowVideo,
    })}>
      <div
        className={classNames(styles.videoPreviewWrapper, {
          [styles.hidden]: isShowVideo,
        })}
      >
        <ProjectPreview
          WhithGradient
          OnClick={onShowVideo}
          className={styles.videoPreview}
          {...props}
        >
          <div className={styles.videoPreviewPlayButton}>
            <PlayIcon className={styles.videoPreviewPlayIcon}/>
          </div>
        </ProjectPreview>
      </div>

      {$video}
    </ContainerFullWidth>
  )
}
