import {
  crepeItem,
  edenItem,
  edenTitle,
  gardenTitle,
  garderItem,
  metamorphosisItem,
  metamorphosisTitle,
  zavistItem,
  zavistTitle,
} from "../Projects/constants";
import {videoPreviewAuditoriumProps} from "../CrepeDeChine/constants";

import type { IProjectItemProps } from "../../Modules/ProjectItem/types";
import type { IVideoProps } from "../../Components/Video/types";
import type { IVideoPreviewProps } from "../../Modules/VideoPreview/types";

export const videoProps: IVideoProps = {
  VideoId: 'iUN14JzuvpGN8mQVLpauzh',
}

export const projectItemsFirstRow: ReadonlyArray<IProjectItemProps> = [
  {
    ...zavistItem,
    Description: zavistTitle,
  },
  {
    ...edenItem,
    Description: edenTitle,
  },
]

export const projectItemsSecondRow: ReadonlyArray<IProjectItemProps> = [
  {
    ...metamorphosisItem,
    Description: metamorphosisTitle,
  },
  {
    ...garderItem,
    Description: gardenTitle,
  },
]

export const videoCrepeProps: IVideoPreviewProps = {
  VideoId: videoPreviewAuditoriumProps.VideoId,
  ImageSrc: crepeItem.Src,
  ImageSrcSet: crepeItem.SrcSet!,
  Title: crepeItem.Title,
  Description: crepeItem.Description,
}