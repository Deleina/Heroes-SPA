import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { getRoutes } from './routes';

const router = getRoutes()

export const AppRouter = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
