import classNames from "classnames";
import {useState, type FC} from "react";
import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth";
import {Video} from "../../Components/Video/Video";
import OpenIcon from '../../assets/Icons/ArrowOpen.svg'

import type {IVideoProps} from "../../Components/Video/types";

import styles from "./styles.module.scss"

export const VideoBackground: FC<IVideoProps & {className?: string}> = ({
  className,
  ...props
}) => {
  const [isBackGroundVideo, setIsBackGroundVideo] = useState(true);

  const $videoAriaClickable = isBackGroundVideo ? (
    <div
      onClick={() => setIsBackGroundVideo(false)}
      className={styles.videoAriaClickable}
    >
      <OpenIcon className={styles.videoPlayButton}/>
    </div>
  ) : null
  
  return (
    <ContainerFullWidth
      className={classNames(styles.videoWrapper, className)}
    >
      <Video
        IsBackground={isBackGroundVideo}
        {...props}
      />
      {$videoAriaClickable}
    </ContainerFullWidth>
  )
}
