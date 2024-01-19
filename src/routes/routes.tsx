import React from "react"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Projects } from "../pages/Projects"
import { Layout } from "../components/Layout"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
