import {useCallback, useMemo, useRef, useState} from "react"
import {DrawerContext} from "./DrawerContext"

import type {FC, PropsWithChildren, ReactElement} from 'react'
import type {IDrawerContext} from "./types"

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<ReactElement | null>(null)

  const toggleOpenDrawer = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const setIsOpenDrawer = (isOpenDrawer: boolean) => {
    setIsOpen(isOpenDrawer)
  }

  const getDrawerContent = () => contentRef.current

  const setDrawerContent = (drawerContent: ReactElement) => {
    contentRef.current = drawerContent
  }

  const contextValue = useMemo<IDrawerContext>(() => ({
    IsOpen: isOpen,
    ToggleOpenDrawer: toggleOpenDrawer,
    SetIsOpenDrawer: setIsOpenDrawer,
    SetDrawerContent: setDrawerContent,
    GetDrawerContent: getDrawerContent,
  }), [isOpen, toggleOpenDrawer])

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}