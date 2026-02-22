import type { IImage } from "../types"

export type IPreviewProps = {
  Image: IImage;
  OnClose: VoidFunction;
  ArrowLeft: {
    OnClick: VoidFunction;
    IsDisabled?: boolean;
  };
  ArrowRight: {
    OnClick: VoidFunction;
    IsDisabled?: boolean;
  }
}
