import {Container} from '../Components/Container/Container'
import {Outlet} from 'react-router'
import {Header} from '../Modules/Header/Header'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
