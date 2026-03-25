import { galleryImages as metamorphosisImages } from "../Metamorphosis/constants";
import { galleryImages as edenImages } from "../EdenIllusion/constants";
import { imagesBasePath as gardenImagesPath } from "../GardenCity/constants";
import { videoPreviewProps, videoId } from "../Metamorphosis/constants";

import type { IGalleryProps } from "../../Components/Gallery/types";
import type { IVideoPreviewProps } from "../../Components/VideoPreview/types";

export const galleryItems: IGalleryProps['Images'] = [
  metamorphosisImages[0],
  edenImages[1],
  {
    Key: 'Installation',
    Src: `${gardenImagesPath}/Installation-1440.webp`,
    SrcSet: `
      ${gardenImagesPath}/Installation-900.webp 900w,
      ${gardenImagesPath}/Installation-1440.webp 1440w,
      ${gardenImagesPath}/Installation-1920.webp 1920w
    `,
  }
]

export const videoProps: IVideoPreviewProps = {
  ImageSrc: videoPreviewProps.ImageSrc,
  ImageSrcSet: videoPreviewProps.ImageSrcSet,
  VideoId: videoId,
  Title: "ШОУРИЛ",
}