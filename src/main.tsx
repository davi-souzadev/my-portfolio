import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "./lib/i18n.ts"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home/index.tsx"
import { Projects } from "./pages/Projects/index.tsx"

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/contact",
        element: <Projects />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
