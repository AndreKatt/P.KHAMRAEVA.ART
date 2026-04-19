import type { IAuthorsProps } from "../../Components/Authors/types"
import type {IGalleryProps} from "../../Components/Gallery/types"
import type {IProjectPreviewProps} from "../../Modules/ProjectPreview/types"

import ArtRussiaLogo from "../../assets/Icons/ArtRussiaLogo.svg"
import BeInOpenLogo from "../../assets/Icons/BeInOpenLogo.svg"
import VKLogo from "../../assets/Icons/VKLogo.svg"
import HSELogo from "../../assets/Icons/HSELogo.svg"
import MarsLogo from "../../assets/Icons/MarsLogo.svg"
import DesignFabricLogo from "../../assets/Icons/DesignFabricLogo.svg"

export const imagesBasePath = "/Images/GardenCity"

export const previewProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/GardenCity-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/GardenCity-900.webp 900w,
    ${imagesBasePath}/GardenCity-1440.webp 1440w,
    ${imagesBasePath}/GardenCity-1920.webp 1920w
  `,
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
  "Gallery9",
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

export const authors: IAuthorsProps["Items"] = [
  {
    Role: "АВТОР ТОТАЛЬНЫХ ИНСТАЛЛЯЦИЙ / ХУДОЖНИК",
    Name: "ПОЛИНА ХАМРАЕВА",
  },
  {
    Role: "ЗВУКОРЕЖИССЕР",
    Name: "НИКИТА ВАРХОЛ",
  },
  {
    Role: "ПРОДЮСЕР",
    Name: "АЛЕКСЕЙ БАЖЕНОВ",
  },
  {
    Role: "АРТ-ДИРЕКТОР",
    Name: "АНИСИЯ ЕРИНА",
  },
  {
    Role: "ХУДОЖНИК ПО СВЕТУ",
    Name: "НИКИТА БОЯК",
  },
  {
    Role: "ГЕНЕРАЛЬНЫЙ ПАРТНЕР",
    Name: "ИНСТИТУТ РАЗВИТИЯ МОДЫ BIENOPEN",
  },
]

export const footerIcons = [
  ArtRussiaLogo,
  BeInOpenLogo,
  VKLogo,
  HSELogo,
  MarsLogo,
  DesignFabricLogo,
]

export const titleDescription = '«Город сад: мультивселенные» погружает зрителя в мир ближайшего будущего – в пространство смешанной реальности, где у каждого есть аватары и миры, разнообразие которых ограничено только нашим воображением. Это живой организм — целостная среда, связывающая инсталляции и медиа-арт в единый путь.'