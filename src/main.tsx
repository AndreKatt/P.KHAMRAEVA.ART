import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import {MainLayout} from './Layouts/Main'

import './index.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'projects',
        element: <Outlet />,
        children: [
          {
            index: true,
            lazy: () => import('./Pages/Projects/Projects'),
          },
          {
            path: 'metamorphosis',
            lazy: () => import('./Pages/Metamorphosis/Metamorphosis'),
          },
          {
            path: 'eden',
            lazy: () => import('./Pages/EdenIllusion/EdenIllusion'),
          },
          {
            path: 'garden',
            lazy: () => import('./Pages/GardenCity/GardenCity'),
          },
          {
            path: 'crepedechine',
            lazy: () => import('./Pages/CrepeDeChine/CrepeDeChine'),
          },
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
