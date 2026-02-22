import type {IGalleryProps} from "../../Components/Gallery/types"

import SPBConcertLogo from "../../assets/Icons/SPBConcertLogo.svg"
import AttaqueDePaniqueLogo from "../../assets/Icons/AttaqueDePaniqueLogo.svg"
// import ClassicElectricLogo from "../../assets/Icons/ClassicElectricLogo.svg"
import PlanetariumLogo from "../../assets/Icons/PlanetariumLogo.svg"
import type { IAuthorsProps } from "../../Components/Authors/types"

export const footerIcons = [
  SPBConcertLogo,
  AttaqueDePaniqueLogo,
  // ClassicElectricLogo,
  PlanetariumLogo,
]

export const imagesBasePath = "/Images/EdenIllusion/"

const galleryBasePath = `${imagesBasePath}Gallery/`
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
    Src: `${galleryBasePath}${name}-1440.webp`,
    SrcSet: `
      ${galleryBasePath}${name}-900.webp 900w,
      ${galleryBasePath}${name}-1440.webp 1440w,
      ${galleryBasePath}${name}-1920.webp 1920w
    `,
  }
))

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "ХУДОЖНИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "РЕЖИССЁР / АРТ-ДИРЕКТОР",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "МЕДИА ХУДОЖНИКИ",
    Name: "ДАНИИЛ ЗВЯГИНЦЕВ И ПАВЕЛ РОБЕРТ",
  },
  {
    Role: "ПРОДЮСЕР",
    Name: "ОЛЬГА МАЛЬЦЕВА (CLASSIC ELECTRIC)",
  },
  {
    Role: "ХОР",
    Name: "ЛЕПРА И АТАКДЕПАНИК",
  },
  {
    Role: "ГЕНЕРАЛЬНЫЙ ПРТНЕР",
    Name: "ПЛАНЕТАРИЙ 1",
  },
]
