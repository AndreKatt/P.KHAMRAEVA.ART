import type { ReactNode } from "react";

export type IVideoPreviewProps = {
  ImageSrc: string,
  ImageSrcSet: string,
  Title?: ReactNode,
  Description?: ReactNode,
  WhithoutPlayButton?: boolean,
  WhithoutGradient?: boolean,
}
