import type {ReactNode} from "react";

export type IProjectItemProps = {
  Link: string;
  Src: string;
  SrcSet: string;
  Title: ReactNode | string;
  Description: ReactNode | string;
  BorderRight?: boolean;
}