import {useContext} from "react"
import {DrawerContext} from "../Providers/Drawer/DrawerContext"

export const useDrawerContext = () => useContext(DrawerContext)
