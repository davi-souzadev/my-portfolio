import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import React from "react"

import { ThemeProvider } from "./components/ThemeProvider"
import AppRoutes from "./routes/routes"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
