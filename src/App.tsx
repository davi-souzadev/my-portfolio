import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import React from "react"

import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Navbar />
      <main className="w-auto h-auto ">
        <About sectionType="about" />
      </main>
    </ThemeProvider>
  )
}

export default App
