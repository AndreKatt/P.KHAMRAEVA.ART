import {Container} from '../Components/Container/Container'
import {Outlet, useLocation} from 'react-router'
import {Header} from '../Modules/Header/Header'
import { useEffect } from 'react'
import { DrawerProvider } from '../Providers/Drawer/DrawerProvider'
import { Drawer } from '../Components/Drawer/Drawer'

export const MainLayout = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    document.body.scrollTo(0, 0)
  }, [pathname])

  return (
    <DrawerProvider>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Drawer />
    </DrawerProvider>
  )
}
