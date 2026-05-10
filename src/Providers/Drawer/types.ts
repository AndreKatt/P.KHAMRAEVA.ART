export type IDrawerContext = {
  IsOpen: boolean;
  DrawerContentType: IDrawerContentType;
  ToggleOpenDrawer: VoidFunction;
  SetIsOpenDrawer: (isOpen: boolean) => void;
  SetDrawerContentType: (content: IDrawerContentType) => void;
}

export type IDrawerContentType = 'menu' | 'contacts'