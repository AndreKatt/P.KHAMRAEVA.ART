import {createContext} from "react"

import type {IDrawerContext} from "./types"

export const DrawerContext = createContext<IDrawerContext>({
  IsOpen: false,
  DrawerContentType: 'menu',
  ToggleOpenDrawer: () => {},
  SetIsOpenDrawer: () => {},
  SetDrawerContentType: () => {},
})