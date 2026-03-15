import type {IImageProps} from "../Image/types";

export type IGalleryProps = {
  Images: ReadonlyArray<IImage>;
};

export type IImage = IImageProps & {
  Key: string;
}
