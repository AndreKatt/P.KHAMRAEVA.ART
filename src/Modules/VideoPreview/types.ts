import type { IProjectPreviewProps } from "../../Components/ProjectPreview/types";

export type IVideoPreviewProps = IProjectPreviewProps & {
  VideoId?: string;
  IsLazy?: boolean;
}