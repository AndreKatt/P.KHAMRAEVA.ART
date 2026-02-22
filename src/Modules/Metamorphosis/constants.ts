import type {IAuthorsProps} from "../../Components/Authors/types"
import type {IGalleryProps} from "../../Components/Gallery/types"

import FundLogo from "../../assets/Icons/FundForCulturalInitiativesLogo.svg"
import HermitageLogo from "../../assets/Icons/HermitageLogo.svg"
import StranaSvetaLogo from "../../assets/Icons/StranaSvetaLogo.svg"
import GaspromLogo from "../../assets/Icons/GaspromLogo.svg"
import T2Logo from "../../assets/Icons/T2Logo.svg"

export const footerIcons = [
  FundLogo,
  HermitageLogo,
  StranaSvetaLogo,
  GaspromLogo,
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

const galleryImagesBasePath = "/Images/Metamorphosis/Gallery/"
const galleryImagesName = [
  "Gallery1",
  "Gallery2",
  "Gallery3",
  "Gallery4",
  "Gallery5",
  "Gallery6",
]
export const galleryImages: IGalleryProps["Images"] = galleryImagesName.map(name => (
  {
    Key: name,
    Src: `${galleryImagesBasePath}${name}-1440.webp`,
    SrcSet: `
      ${galleryImagesBasePath}${name}-900.webp 900w,
      ${galleryImagesBasePath}${name}-1440.webp 1440w,
      ${galleryImagesBasePath}${name}-1920.webp 1920w
    `,
  }
))
