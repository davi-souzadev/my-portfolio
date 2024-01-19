import React from "react"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Projects } from "../pages/Projects"
import { Layout } from "../components/Layout"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/my-portfolio/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/my-portfolio/",
        element: <Home />,
      },
      {
        path: "/my-portfolio/projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
