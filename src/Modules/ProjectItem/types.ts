import type { IImageProps } from "../../Components/Image/types";
import type { IProjectTitleProps } from "../../Components/ProjectTitle/types";

export type IProjectItemProps = IImageProps & Partial<IProjectTitleProps> & {
  Link?: string;
  WithoutBorder?: boolean;
  WithoutGradient?: boolean;
  ClassNameImage?: string;
}