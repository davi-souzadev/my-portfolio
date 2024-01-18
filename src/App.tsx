import React from "react"
import AppRoutes from "./routes/routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <QueryClientProvider client={queryClient}>
        <div className="container flex min-h-screen justify-between flex-col px-0 md:px-8 pb-8 w-dvw md:w-[45rem]">
          <AppRoutes />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
