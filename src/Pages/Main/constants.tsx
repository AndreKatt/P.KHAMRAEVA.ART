import {edenItem} from "../Projects/constants";
import { galleryImagesBasePath as gardenGalleryImagesBasePath } from "../GardenCity/constants";
import {videoPreviewAuditoriumProps} from "../CrepeDeChine/constants";
import {routes} from "../../assets";

import type { IProjectItemProps } from "./ProjectItem/types";
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types";
import type { IVideoBackgroundProps } from "../../Modules/VideoBackground/types";

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
    Src: `${imageBasePath}/Metamorphosis-1440.webp`,
    SrcSet: `
      ${imageBasePath}/Metamorphosis-900.webp 900w,
      ${imageBasePath}/Metamorphosis-1440.webp 1440w,
      ${imageBasePath}/Metamorphosis-1920.webp 1920w
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
    Src: `${gardenGalleryImagesBasePath}/Gallery2-1440.webp`,
    SrcSet: `
      ${gardenGalleryImagesBasePath}/Gallery2-900.webp 900w,
      ${gardenGalleryImagesBasePath}/Gallery2-1440.webp 1440w,
      ${gardenGalleryImagesBasePath}/Gallery2-1920.webp 1920w
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
  HoverFilterType: 'gradient',
  VideoId: videoPreviewAuditoriumProps.VideoId,
  ImageSrc: videoPreviewAuditoriumProps.ImageSrc,
  ImageSrcSet: videoPreviewAuditoriumProps.ImageSrcSet,
}