import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import {MainLayout} from './Layouts/Main'
import {MainPage} from './Pages/Main/Main'
import {routes} from './assets'

import './index.css'

const {
  MAIN,
  PROJECTS,
  METAMORPHOSIS,
  EDEN,
  GARDEN,
  CREPE_DE_CHINE,
  ZAVIST,
  FILMS,
  BIO,
} = routes

export const router = createBrowserRouter([
  {
    path: MAIN,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: PROJECTS,
        element: <Outlet />,
        children: [
          {
            index: true,
            lazy: () => import('./Pages/Projects/Projects'),
          },
          {
            path: METAMORPHOSIS,
            lazy: () => import('./Pages/Metamorphosis/Metamorphosis'),
          },
          {
            path: EDEN,
            lazy: () => import('./Pages/EdenIllusion/EdenIllusion'),
          },
          {
            path: GARDEN,
            lazy: () => import('./Pages/GardenCity/GardenCity'),
          },
          {
            path: CREPE_DE_CHINE,
            lazy: () => import('./Pages/CrepeDeChine/CrepeDeChine'),
          },
          {
            path: ZAVIST,
            lazy: () => import('./Pages/Zavist/Zavist'),
          },
          {
            path: FILMS,
            element: <>СТРАНИЦА В РАЗРАБОТКЕ</>,
          },
        ]
      },
      {
        path: BIO,
        lazy: () => import('./Pages/Bio/Bio'),
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
