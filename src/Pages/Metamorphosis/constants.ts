import type {IAuthorsProps} from "../../Components/Authors/types.ts"
import type {IGalleryProps} from "../../Components/Gallery/types.ts"
import type { IProjectPreviewProps } from "../../Components/ProjectPreview/types.ts"

import FundLogo from "../../assets/Icons/FundForCulturalInitiativesLogo.svg"
import HermitageLogo from "../../assets/Icons/HermitageLogo.svg"
import StranaSvetaLogo from "../../assets/Icons/StranaSvetaLogo.svg"
import GazpromLogo from "../../assets/Icons/GazpromLogo.svg"
import T2Logo from "../../assets/Icons/T2Logo.svg"

export const footerIcons = [
  FundLogo,
  HermitageLogo,
  StranaSvetaLogo,
  GazpromLogo,
  T2Logo,
]

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "РЕЖИССЁР И ХУДОЖНИК ПОСТАНОВЩИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "ВИДЕО ХУДОЖНИК",
    Name: "ИГОРЬ ДОМАШКЕВИЧ",
  },
  {
    Role: "ЗВУКОРЕЖИССЕР",
    Name: "ЕВГЕНИЙ РОДНЯНСКИЙ",
  },
  {
    Role: "3D ХУДОЖНИК",
    Name: "ДМИТРИЙ СИЛЬНИЦКИЙ",
  },
  {
    Role: "САУНД ДИЗАЙНЕР",
    Name: "АНАТОЛИЙ СИМОНОВ",
  },
  {
    Role: "ГОЛОС",
    Name: "РОМАН КОЧЕРЖЕВСКИЙ",
  },
]

export const imagesBasePath = "/Images/Metamorphosis"

export const videoPreviewProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/StranaSveta-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/StranaSveta-900.webp 900w,
    ${imagesBasePath}/StranaSveta-1440.webp 1440w,
    ${imagesBasePath}/StranaSveta-1920.webp 1920w
  `,
  Title: 'МЕТАМОРФОЗЫ\nПЕТЕРБУРГСКОГО ДОМА',
  Description: 'ПОБЕДИТЕЛЬ ВСЕРОССИЙСКОГО МЕДИА-КОНКУРСА\n«СТРАНА СВЕТА 2025». МАППИНГ-ШОУ.',
}

export const videoId = "bCkWuGGuKgiqvBY5b4rXat"

const galleryImagesBasePath = `${imagesBasePath}/Gallery`
const galleryImagesName = [
  "Gallery1",
  "Gallery2",
  "Gallery3",
  "Gallery4",
  "Gallery5",
  "Gallery6",
  "Gallery7",
  "Gallery8",
]
export const galleryImages: IGalleryProps["Images"] = galleryImagesName.map(name => (
  {
    Key: name,
    Src: `${galleryImagesBasePath}/${name}-1440.webp`,
    SrcSet: `
      ${galleryImagesBasePath}/${name}-900.webp 900w,
      ${galleryImagesBasePath}/${name}-1440.webp 1440w,
      ${galleryImagesBasePath}/${name}-1920.webp 1920w
    `,
  }
))
