import {useCallback, useMemo, useState} from "react"
import {DrawerContext} from "./DrawerContext"

import type {FC, PropsWithChildren} from 'react'
import type {IDrawerContentType, IDrawerContext} from "./types"

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentType, setContentType] = useState<IDrawerContentType>('menu')

  const toggleOpenDrawer = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const setIsOpenDrawer = useCallback((isOpenDrawer: boolean) => {
    setIsOpen(isOpenDrawer)
  }, [])

  const setDrawerContentType = useCallback((drawerContent: IDrawerContentType) => {
    setContentType(drawerContent)
  }, [])

  const contextValue = useMemo<IDrawerContext>(() => ({
    IsOpen: isOpen,
    DrawerContentType: contentType,
    ToggleOpenDrawer: toggleOpenDrawer,
    SetIsOpenDrawer: setIsOpenDrawer,
    SetDrawerContentType: setDrawerContentType,
  }), [
    isOpen,
    contentType,
    setDrawerContentType,
    setIsOpenDrawer,
    toggleOpenDrawer,
  ])

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}