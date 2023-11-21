import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from "./layouts";

import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export function Router() {
  return (
    <RouterProvider router={router} />
  )
}
