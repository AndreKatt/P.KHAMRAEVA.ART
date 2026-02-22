export type IGalleryProps = {
  Images: ReadonlyArray<IImage>;
};

export type IImage = {
  Key: string;
  Src: string;
  SrcSet: string;
}
