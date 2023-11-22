import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from "./layouts";

import { Home, Profile, Community } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ],
  },
]);

export function Router() {
  return (
    <RouterProvider router={router} />
  )
}
