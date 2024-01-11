import React from "react"
import { Navbar } from "../../components/Navbar"
import { About } from "../../components/About"
import { Footer } from "../../components/Footer"

export default function Home() {
  return (
    <main>
      <section className="py-16">
        <About />
      </section>
    </main>
  )
}
