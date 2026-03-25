import {videoPreviewProps as metamorphosisProps} from "../Metamorphosis/constants";
import {
  galleryBasePath as edenGalleryPath,
  previewProps as edenPreviewProps,
} from "../EdenIllusion/constants";
import {previewProps as gardenProps} from "../GardenCity/constants";
import {imagesBasePath as crepeImagesPath} from "../CrepeDeChine/constants";

import type { IProjectPreviewProps } from "./Preview/types";

export const previewItems: ReadonlyArray<IProjectPreviewProps> = [
  {
    Src: metamorphosisProps.ImageSrc,
    SrcSet: metamorphosisProps.ImageSrcSet,
    Link: 'metamorphosis',
    Title: metamorphosisProps.Title,
    Description: metamorphosisProps.Description,
  },
  {
    Src: `${edenGalleryPath}/Gallery2-1440.webp`,
    SrcSet: `
      ${edenGalleryPath}/Gallery2-900.webp 900w,
      ${edenGalleryPath}/Gallery2-1440.webp 1440w,
      ${edenGalleryPath}/Gallery2-1920.webp 1920w
    `,
    Link: 'eden',
    Title: edenPreviewProps.Title,
    Description: edenPreviewProps.Description,
  },
  {
    Src: gardenProps.ImageSrc,
    SrcSet: gardenProps.ImageSrcSet,
    Link: 'garden',
    Title: 'ГОРОД САД: МУЛЬТИВСЕЛЕННЫЕ',
    Description: `ФИДЖИТАЛ ВЫСТАВКА.\nТОТАЛЬНАЯ ИНСТАЛЛЯЦИЯ`,
  },
  {
    Src: `${crepeImagesPath}/CrepeDeChine-1440.webp`,
    SrcSet: `
      ${crepeImagesPath}/CrepeDeChine-900.webp 900w,
      ${crepeImagesPath}/CrepeDeChine-1440.webp 1440w,
      ${crepeImagesPath}/CrepeDeChine-1920.webp 1920w
    `,
    Link: 'crepedechine',
    Title: 'СИНИЙ КРЕПДЕШИН',
    Description: `ЭКСПЕРИМЕНТАЛЬНЫЙ\nСПЕКТАКЛЬ-ТРАГИФАРС`,
  },
  {
    Src: '/Images/Zavist/Zavist-1440.webp',
    SrcSet: `
      /Images/Zavist/Zavist-900.webp 900w,
      /Images/Zavist/Zavist-1440.webp 1440w,
      /Images/Zavist/Zavist-1920.webp 1920w
    `,
    Link: 'zavist',
    Title: 'ZAVIST',
    Description: `СПЕКТАКЛЬ ПО МАЛЕНЬКОЙ ТРАГЕДИИ\nПУШКИНА «МОЦАРТ И САЛЬЕРИ»`,
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
    Description: `РАБОТЫ ДЛЯ КИНО\nИ КОММЕРЧЕСКИХ ПРОЕКТОВ`,
  },
]