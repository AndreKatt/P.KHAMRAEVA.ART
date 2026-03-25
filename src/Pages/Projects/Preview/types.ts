import type { IImageProps } from "../../../Components/Image/types";
import type { IProjectTitleProps } from "../../../Components/ProjectTitle/types";

export type IProjectPreviewProps = IImageProps & IProjectTitleProps & {
  Link?: string;
}