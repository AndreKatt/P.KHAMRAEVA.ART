import type { ReactNode } from "react";
import type {IImageProps} from "../../../Components/Image/types"

export type IAuthorItemProps = IImageProps & {
  Name: string;
  Profession: string;
  Description: string | ReactNode;
}