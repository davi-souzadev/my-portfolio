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
      <main className="w-dvw h-dvh">
        <Navbar />
        <About sectionType="about" />
        <About sectionType="projects" />
        <About sectionType="contact" />
      </main>
    </ThemeProvider>
  )
}

export default App
