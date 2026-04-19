import type { ReactElement } from "react";

export type IDrawerContext = {
  IsOpen: boolean;
  ToggleOpenDrawer: VoidFunction;
  SetIsOpenDrawer: (isOpen: boolean) => void;
  SetDrawerContent: (content: ReactElement) => void;
  GetDrawerContent: () => ReactElement | null;
}