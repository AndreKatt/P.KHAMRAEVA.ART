import type { ReactNode } from "react"

export type IProjectPreviewProps = {
  ImageSrc: string;
  ImageSrcSet: string;
  Title?: string | ReactNode;
  Description?: string | ReactNode;
  WhithGradient?: boolean;
  className?: string;
  ClassNameImage?: string;
  OnClick?: VoidFunction;
}
