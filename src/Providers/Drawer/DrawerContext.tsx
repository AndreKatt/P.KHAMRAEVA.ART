import {createContext} from "react"

import type {IDrawerContext} from "./types"

export const DrawerContext = createContext<IDrawerContext>({
  IsOpen: false,
  ToggleOpenDrawer: () => {},
  SetIsOpenDrawer: () => {},
  SetDrawerContent: () => {},
  GetDrawerContent: () => null,
})