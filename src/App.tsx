import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"

import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <div className="container flex h-dvh flex-col px-8 pb-8 md:w-[45rem]">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
