import FundLogo from "../../assets/Icons/FundForCulturalInitiativesLogo.svg"
import SinteziaLogo from "../../assets/Icons/SinteziaLogo.svg"
import SkorohodLogo from "../../assets/Icons/SkorohodLogo.svg"

import type {IGalleryProps} from "../../Components/Gallery/types.ts"
import type {IAuthorsProps} from "../../Components/Authors/types.ts"
import type { IImageProps } from "../../Components/Image/types.ts"
import type { IProjectPreviewProps } from "../../Modules/ProjectPreview/types.ts"
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types.ts"

export const footerIcons = [
  FundLogo,
  SkorohodLogo,
  SinteziaLogo,
]

export const imagesBasePath = "/Images/Zavist"

export const previewProps: IProjectPreviewProps = {
  WhithGradient: true,
  ImageSrc: `${imagesBasePath}/Zavist-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Zavist-900.webp 900w,
    ${imagesBasePath}/Zavist-1440.webp 1440w,
    ${imagesBasePath}/Zavist-1920.webp 1920w
  `,
  Title: 'ZAVIST',
  Description: (
    <>
      СПЕКТАКЛЬ ПО МАЛЕНЬКОЙ ТРАГЕДИИ
      <br />
      ПУШКИНА «МОЦАРТ И САЛЬЕРИ»
    </>
  ),
}

export const videoPreviewProps: IVideoPreviewProps = {
  WhithGradient: false,
  ImageSrc: `${imagesBasePath}/VideoPreview-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/VideoPreview-900.webp 900w,
    ${imagesBasePath}/VideoPreview-1440.webp 1440w,
    ${imagesBasePath}/VideoPreview-1920.webp 1920w
  `,
}

export const imageProps: IImageProps = {
  Src: `${imagesBasePath}/SashaPhoto-1440.webp`,
  SrcSet: `
    ${imagesBasePath}/SashaPhoto-900.webp 900w,
    ${imagesBasePath}/SashaPhoto-1440.webp 1440w,
    ${imagesBasePath}/SashaPhoto-1920.webp 1920w
  `,
}

export const galleryBasePath = `${imagesBasePath}/Gallery`
const galleryImagesName = [
  "Gallery1",
  "Gallery2",
  "Gallery3",
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

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "ХУДОЖНИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "РЕЖИССЁР",
    Name: "СОФИЯ НИКИФОРОВА",
  },
  {
    Role: "ПРОДЮСЕР",
    Name: "СВЕТЛАНА КРЯЖЕВА",
  },
  {
    Role: "ОПЕРАТОР ПОСТАНОВЩИК",
    Name: "ДМИТРИЙ СИЛЬНИЦКИЙ",
  },
  {
    Role: "ВИДЕО ИНЖЕНЕР",
    Name: "ИГОРЬ ДОМАШКЕВИЧ",
  },
  {
    Role: "ХУДОЖНИК ПО СВЕТУ",
    Name: "СТАНИСЛАВ НОВИКОВ",
  },
  {
    Role: "МОЦАРТ",
    Name: "СТАНИСЛАВ НОВИКОВ",
  },
  {
    Role: "САЛЬЕРИ",
    Name: "МАРГАРИТА ТАНИЧЕВА",
  },
  {
    Role: "МУЗЫКА",
    Name: "КСЕНИЯ ШАМАРИН",
  },
  {
    Role: "ЗВУК",
    Name: "ЕВГЕНИЙ РОДНЯНСКИЙ",
  },
]
