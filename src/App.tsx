import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <QueryClientProvider client={queryClient}>
          <div className="container flex h-dvh flex-col px-8 pb-8 md:w-[45rem]">
            <Navbar />
            <AppRoutes />
            <Footer />
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
