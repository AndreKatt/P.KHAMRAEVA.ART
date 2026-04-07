import FundLogo from "../../assets/Icons/FundForCulturalInitiativesLogo.svg"
import HermitageLogo from "../../assets/Icons/HermitageLogo.svg"
import StranaSvetaLogo from "../../assets/Icons/StranaSvetaLogo.svg"
import GazpromLogo from "../../assets/Icons/GazpromLogo.svg"
import T2Logo from "../../assets/Icons/T2Logo.svg"

import type {IAuthorsProps} from "../../Components/Authors/types.ts"
import type {IGalleryProps} from "../../Components/Gallery/types.ts"
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types.ts"

export const footerIcons = [
  FundLogo,
  HermitageLogo,
  StranaSvetaLogo,
  GazpromLogo,
  T2Logo,
]

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "РЕЖИССЁР-ХУДОЖНИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "МЕДИА ХУДОЖНИК",
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

export const videoPreviewProps: IVideoPreviewProps = {
  ImageSrc: `${imagesBasePath}/StranaSveta-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/StranaSveta-900.webp 900w,
    ${imagesBasePath}/StranaSveta-1440.webp 1440w,
    ${imagesBasePath}/StranaSveta-1920.webp 1920w
  `,
  Title: 'МЕТАМОРФОЗЫ ПЕТЕРБУРГСКОГО ДОМА',
  Description: (
    <>
      ПОБЕДИТЕЛЬ ВСЕРОССИЙСКОГО МЕДИА-КОНКУРСА
      <br />
      «СТРАНА СВЕТА 2025». МАППИНГ-ШОУ.
    </>
  ),
  VideoId: 'bCkWuGGuKgiqvBY5b4rXat',
}

export const videoMednyiPreviewProps: IVideoPreviewProps = {
  ImageSrc: `${imagesBasePath}/MednyiVsadnik-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/MednyiVsadnik-900.webp 900w,
    ${imagesBasePath}/MednyiVsadnik-1440.webp 1440w,
    ${imagesBasePath}/MednyiVsadnik-1920.webp 1920w
  `,
  VideoId: 'sFpsQiB8KF4eBx2hhTvv71',
}

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
