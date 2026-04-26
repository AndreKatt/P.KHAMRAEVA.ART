import { galleryImages as gardenImages} from "../GardenCity/constants";
import {
  crepeItem,
  edenItem,
  garderItem,
  metamorphosisItem,
  zavistItem,
} from "../Projects/constants";
import {videoPreviewAuditoriumProps} from "../CrepeDeChine/constants";

import type { IProjectItemProps } from "../../Modules/ProjectItem/types";
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types";
import type { IVideoBackgroundProps } from "../../Modules/VideoBackground/types";

import styles from './styles.module.scss'

export const videoProps: IVideoBackgroundProps = {
  VideoId: 'iUN14JzuvpGN8mQVLpauzh',
  BackgroundId: 'iUN14JzuvpGN8mQVLpauzh',
}

const imageBasePath = '/Images/Main'

export const projectItemsFirstRow: ReadonlyArray<IProjectItemProps> = [
  {
    ...edenItem,
    Description: (
      <>
        ДИДЖИТАЛ
        <br />
        МИСТЕРИЯ
      </>
    ),
  },
  {
    Link: metamorphosisItem.Link,
    Src: `${imageBasePath}/StranaSvetaPhoto-1440.webp`,
    SrcSet: `
      ${imageBasePath}/StranaSvetaPhoto-900.webp 900w,
      ${imageBasePath}/StranaSvetaPhoto-1440.webp 1440w,
      ${imageBasePath}/StranaSvetaPhoto-1920.webp 1920w
    `,
    Description: (
      <>
        МАППИНГ
        <br />
        ШОУ
      </>
    ),
  },
]

export const projectItemsSecondRow: ReadonlyArray<IProjectItemProps> = [
  {
    ...zavistItem,
    Description: (
      <>
        ТЕАТРАЛЬНЫЕ
        <br />
        ПОСТАНОВКИ
      </>
    ),
  },
  {
    Link: garderItem.Link,
    Src: gardenImages[4].Src,
    SrcSet: gardenImages[4].SrcSet,
    Description: (
      <>
        ФИДЖИТАЛ
        <br />
        ВЫСТАВКА
      </>
    ),
  },
]

export const videoCrepeProps: IVideoPreviewProps = {
  WhithGradient: false,
  VideoId: videoPreviewAuditoriumProps.VideoId,
  ImageSrc: videoPreviewAuditoriumProps.ImageSrc,
  ImageSrcSet: videoPreviewAuditoriumProps.ImageSrcSet,
  Description: (
    <div className={styles.videoPreviewCrepeDescription}>
      {crepeItem.Description}
    </div>
  ),
}