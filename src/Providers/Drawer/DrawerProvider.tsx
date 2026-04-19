import {useCallback, useMemo, useState} from "react"
import {DrawerContext} from "./DrawerContext"

import type {FC, PropsWithChildren, ReactElement} from 'react'
import type {IDrawerContext} from "./types"

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactElement | null>(null)

  const toggleOpenDrawer = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const setIsOpenDrawer = useCallback((isOpenDrawer: boolean) => {
    setIsOpen(isOpenDrawer)
  }, [])

  const getDrawerContent = useCallback(() => content, [content])

  const setDrawerContent = useCallback((drawerContent: ReactElement) => {
    setContent(drawerContent)
  }, [])

  const contextValue = useMemo<IDrawerContext>(() => ({
    IsOpen: isOpen,
    ToggleOpenDrawer: toggleOpenDrawer,
    SetIsOpenDrawer: setIsOpenDrawer,
    SetDrawerContent: setDrawerContent,
    GetDrawerContent: getDrawerContent,
  }), [
    getDrawerContent,
    isOpen,
    setDrawerContent,
    setIsOpenDrawer,
    toggleOpenDrawer,
  ])

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}