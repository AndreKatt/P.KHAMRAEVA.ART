import type { IVideoProps } from "../../Components/Video/types";

export type IVideoBackgroundProps = IVideoProps & {
  BackgroundId?: string;
  IsClickable?: boolean;
  className?: string;
}