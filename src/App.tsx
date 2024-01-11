import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import React from "react"

import { ThemeProvider } from "./components/ThemeProvider"
import AppRoutes from "./routes/routes"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <div className="container flex min-h-screen flex-col px-8 pb-8 md:w-[45rem]">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
