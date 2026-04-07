import type { FC } from 'react'
import type { IVideoProps } from './types'

import styles from './styles.module.scss'

export const Video: FC<IVideoProps> = ({
  VideoId,
  IsLazy = false,
  IsBackground = false,
}) => {
  const background = IsBackground ? '&background=1' : '';

  return (
    <div className={styles.videoPlayer}>
      <iframe
        src={`https://kinescope.io/embed/${VideoId}?autoplay=1&loop=1&autopause=1&playsinline=1&preload=1${background}&transparent=false`}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="100%"
        loading={IsLazy ? 'lazy' : 'eager'}
      >
      </iframe>
    </div>
  )
}
