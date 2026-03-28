import type { IImageProps } from "../../../Components/Image/types";
import type { IProjectTitleProps } from "../../../Components/ProjectTitle/types";

export type IProjectPreviewProps = IImageProps & Partial<IProjectTitleProps> & {
  Link?: string;
}