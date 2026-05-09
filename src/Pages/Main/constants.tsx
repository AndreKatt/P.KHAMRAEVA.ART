import {
  crepeItem,
  edenItem,
} from "../Projects/constants";
import {videoPreviewAuditoriumProps} from "../CrepeDeChine/constants";
import {galleryImagesBasePath as  methamorphosisGalleryImagesBasePath} from "../Metamorphosis/constants";
import {routes} from "../../assets";

import type { IProjectItemProps } from "./ProjectItem/types";
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types";
import type { IVideoBackgroundProps } from "../../Modules/VideoBackground/types";

import styles from './styles.module.scss'

export const videoProps: IVideoBackgroundProps = {
  VideoId: 'ktmidtSkrYhh6oEf5VYW3U',
  BackgroundId: 'iUN14JzuvpGN8mQVLpauzh',
}

const imageBasePath = '/Images/Main'

const {
  METAMORPHOSIS,
  EDEN,
  GARDEN,
  ZAVIST,
} = routes

export const projectItemsFirstRow: ReadonlyArray<IProjectItemProps> = [
  {
    Src: edenItem.Src,
    SrcSet: edenItem.SrcSet!,
    Link: EDEN,
    Title: 'EDEN ILLUSION',
    Description: 'ДИДЖИТАЛ МИСТЕРИЯ',
  },
  {
    Link: METAMORPHOSIS,
    Src: `${methamorphosisGalleryImagesBasePath}/Gallery2-1440.webp`,
    SrcSet: `
      ${methamorphosisGalleryImagesBasePath}/Gallery2-900.webp 900w,
      ${methamorphosisGalleryImagesBasePath}/Gallery2-1440.webp 1440w,
      ${methamorphosisGalleryImagesBasePath}/Gallery2-1920.webp 1920w
    `,
    Title: (
      <>
        МЕТАМОРФОЗЫ
        <br />
        ПЕТЕРБУРГСКОГО ДОМА
      </>
    ),
    Description: 'МАППИНГ ШОУ',
  },
]

export const projectItemsSecondRow: ReadonlyArray<IProjectItemProps> = [
  {
    Link: ZAVIST,
    Src: `${imageBasePath}/Zavist-1440.webp`,
    SrcSet: `
      ${imageBasePath}/Zavist-900.webp 900w,
      ${imageBasePath}/Zavist-1440.webp 1440w,
      ${imageBasePath}/Zavist-1920.webp 1920w
    `,
    Title: 'ZAVIST',
    Description: 'ТЕАТРАЛЬНЫЕ ПОСТАНОВКИ',
  },
  {
    Link: GARDEN,
    Src: `${imageBasePath}/GardenCity-1440.webp`,
    SrcSet: `
      ${imageBasePath}/GardenCity-900.webp 900w,
      ${imageBasePath}/GardenCity-1440.webp 1440w,
      ${imageBasePath}/GardenCity-1920.webp 1920w
    `,
    Title: (
      <>
        ГОРОД САД.
        <br />
        МУЛЬТИВСЕЛЕННЫЕ
      </>
    ),
    Description: 'ФИДЖИТАЛ ВЫСТАВКА',
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