import {videoPreviewProps as metamorphosisProps} from "../Metamorphosis/constants";
import {
  galleryBasePath as edenGalleryPath,
  previewProps as edenPreviewProps,
} from "../EdenIllusion/constants";
import {previewProps as gardenProps} from "../GardenCity/constants";
import {imagesBasePath as crepeImagesPath} from "../CrepeDeChine/constants";
import {previewProps as zavistProps} from "../Zavist/constants";

import type { IProjectItemProps } from "../../Modules/ProjectItem/types";

export const metamorphosisItem: IProjectItemProps = {
  Src: metamorphosisProps.ImageSrc,
  SrcSet: metamorphosisProps.ImageSrcSet,
  Link: 'metamorphosis',
};
export const metamorphosisTitle = metamorphosisProps.Title

export const edenItem: IProjectItemProps = {
  Src: `${edenGalleryPath}/Gallery2-1440.webp`,
  SrcSet: `
    ${edenGalleryPath}/Gallery2-900.webp 900w,
    ${edenGalleryPath}/Gallery2-1440.webp 1440w,
    ${edenGalleryPath}/Gallery2-1920.webp 1920w
  `,
  Link: 'eden',
};
export const edenTitle = edenPreviewProps.Title

export const garderItem: IProjectItemProps = {
  Src: gardenProps.ImageSrc,
  SrcSet: gardenProps.ImageSrcSet,
  Link: 'garden',
}
export const gardenTitle = 'ГОРОД САД: МУЛЬТИВСЕЛЕННЫЕ'

export const zavistItem: IProjectItemProps = {
  Src: zavistProps.ImageSrc,
  SrcSet: zavistProps.ImageSrcSet,
  Link: 'zavist',
}
export const zavistTitle = zavistProps.Title

export const crepeItem: IProjectItemProps = {
  Src: `${crepeImagesPath}/CrepeDeChine-1440.webp`,
  SrcSet: `
    ${crepeImagesPath}/CrepeDeChine-900.webp 900w,
    ${crepeImagesPath}/CrepeDeChine-1440.webp 1440w,
    ${crepeImagesPath}/CrepeDeChine-1920.webp 1920w
  `,
  Link: 'crepedechine',
  Title: 'СИНИЙ КРЕПДЕШИН',
  Description: (
    <>
      ЭКСПЕРИМЕНТАЛЬНЫЙ
      <br />
      СПЕКТАКЛЬ-ТРАГИФАРС
    </>
  ),
}

export const previewItems: ReadonlyArray<IProjectItemProps> = [
  {
    ...metamorphosisItem,
    Title: (
      <>
        МЕТАМОРФОЗЫ
        <br />
        ПЕТЕРБУРГСКОГО ДОМА
      </>
    ),
    Description: metamorphosisProps.Description,
  },
  {
    ...edenItem,
    Title: edenTitle,
    Description: edenPreviewProps.Description,
  },
  {
    ...garderItem,
    Title: gardenTitle,
    Description: (
      <>
        ФИДЖИТАЛ ВЫСТАВКА.
        <br />
        ТОТАЛЬНАЯ ИНСТАЛЛЯЦИЯ
      </>
    ),
  },
  crepeItem,
  {
    ...zavistItem,
    Title: zavistTitle,
    Description: zavistProps.Description,
  },
  {
    Src: '/Images/Films/Films-1440.webp',
    SrcSet: `
      /Images/Films/Films-900.webp 900w,
      /Images/Films/Films-1440.webp 1440w,
      /Images/Films/Films-1920.webp 1920w
    `,
    Link: 'films',
    Title: 'КИНО',
    Description: (
      <>
        РАБОТЫ ДЛЯ КИНО
        <br />
        И КОММЕРЧЕСКИХ ПРОЕКТОВ
      </>
    ),
  },
]