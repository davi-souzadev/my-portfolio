import React from "react"
import { Navbar } from "../../components/Navbar"
import { About } from "../../components/About"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-auto h-auto ">
        <About sectionType="about" />
      </main>
    </>
  )
}
