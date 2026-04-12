import SPBConcertLogo from "../../assets/Icons/SPBConcertLogo.svg"
import AttaqueDePaniqueLogo from "../../assets/Icons/AttaqueDePaniqueLogo.svg"
import ClassicElectricLogo from "../../assets/Icons/ClassicElectricLogo.svg"
import PlanetariumLogo from "../../assets/Icons/PlanetariumLogo.svg"
import EdenIllusion_900 from '../../assets/Gif/EdenIllusion-900.webp'
import EdenIllusion_1440 from '../../assets/Gif/EdenIllusion-1440.webp'
import EdenIllusion_1920 from '../../assets/Gif/EdenIllusion-1920.webp'

import type {IGalleryProps} from "../../Components/Gallery/types.ts"
import type {IAuthorsProps} from "../../Components/Authors/types.ts"
import type { IImageProps } from "../../Components/Image/types.ts"
import type { IProjectPreviewProps } from "../../Components/ProjectPreview/types.ts"
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types.ts"

export const footerIcons = [
  SPBConcertLogo,
  AttaqueDePaniqueLogo,
  ClassicElectricLogo,
  PlanetariumLogo,
]

export const imagesBasePath = "/Images/EdenIllusion"

export const previewProps: IProjectPreviewProps = {
  WhithGradient: true,
  ImageSrc: EdenIllusion_900,
  ImageSrcSet: `
    ${EdenIllusion_900} 900w,
    ${EdenIllusion_1440} 1440w,
    ${EdenIllusion_1920} 1920w
  `,
  Title: 'EDEN ILLUSION',
  Description: 'МУЛЬТИМЕДИЙНЫЙ СПЕКТАКЛЬ 360°',
}

export const videoPreviewProps: IVideoPreviewProps = {
  WhithGradient: true,
  ImageSrc: `${imagesBasePath}/Photo-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Photo-900.webp 900w,
    ${imagesBasePath}/Photo-1440.webp 1440w,
    ${imagesBasePath}/Photo-1920.webp 1920w
  `,
  VideoId:'toErC6LtF9QyEutk19gu7Q',
}

export const galleryBasePath = `${imagesBasePath}/Gallery`
const galleryImagesName = [
  "Gallery1",
  "Gallery2",
  "Gallery3",
  "Gallery4",
  "Gallery5",
  "Gallery6",
  "Gallery7",
]
export const galleryImages: IGalleryProps["Images"] = galleryImagesName.map(name => (
  {
    Key: name,
    Src: `${galleryBasePath}/${name}-1440.webp`,
    SrcSet: `
      ${galleryBasePath}/${name}-900.webp 900w,
      ${galleryBasePath}/${name}-1440.webp 1440w,
      ${galleryBasePath}/${name}-1920.webp 1920w
    `,
  }
))

const videoPreviewBasePath = `${imagesBasePath}/Video`
const videoPreviewName = [
  "Video1",
  "Video2",
  "Video3",
]
export const videoPreviewImages: ReadonlyArray<IImageProps> = videoPreviewName.map(name => (
  {
    Src: `${videoPreviewBasePath}/${name}-1440.webp`,
    SrcSet: `
      ${videoPreviewBasePath}/${name}-900.webp 900w,
      ${videoPreviewBasePath}/${name}-1440.webp 1440w,
      ${videoPreviewBasePath}/${name}-1920.webp 1920w
    `,
  }
))

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "РЕЖИССЁР-ХУДОЖНИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "МЕДИА ХУДОЖНИК",
    Name: "ДАНИИЛ ЗВЯГИНЦЕВ",
  },
  {
    Role: "МЕДИА ХУДОЖНИК",
    Name: "ПАВЕЛ РОБЕРТ",
  },
  {
    Role: "ПРОДЮСЕР",
    Name: "ОЛЬГА МАЛЬЦЕВА (CLASSIC ELECTRIC)",
  },
  {
    Role: "ХОР",
    Name: "ДМИТРИЙ ШЕЛКОВИН (ATTAQUEDEPANIQUE)",
  },
  {
    Role: "ХОР",
    Name: "ДАНИИЛ ЛАШИН (LEPRA)",
  },
  {
    Role: "КОМПОЗИТОР",
    Name: "ВАЛЕРИЯ ФИНКИШТЕЙН",
  },
  {
    Role: "КОМПОЗИТОР",
    Name: "АРТЁМ ПИТАЙКИН",
  },
  {
    Role: "КОМПОЗИТОР",
    Name: "ВЛАДИСЛАВ ГРИГОРЬЕВ",
  },
  {
    Role: "ГЕНЕРАЛЬНЫЙ ПАРТНЕР",
    Name: "ПЛАНЕТАРИЙ 1",
  },
]
