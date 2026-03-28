import type { ReactNode } from "react"

export type IProjectPreviewProps = {
  ImageSrc: string;
  ImageSrcSet: string;
  Title?: string | ReactNode;
  Description?: ReactNode;
  WhithGradient?: boolean;
  className?: string;
  OnClick?: VoidFunction;
}
