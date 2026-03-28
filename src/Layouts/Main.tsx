import {Container} from '../Components/Container/Container'
import {Outlet, useLocation} from 'react-router'
import {Header} from '../Modules/Header/Header'
import { useEffect } from 'react'

export const MainLayout = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    document.body.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
