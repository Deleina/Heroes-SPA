import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { getRoutes } from './routes';



export const AppRouter = () => {
  const router = getRoutes()
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
