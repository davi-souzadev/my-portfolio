import React from "react"
import { About } from "../../components/About"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <main>
      <Navbar />
      <section className="py-16">
        <About />
      </section>
      <Footer />
    </main>
  )
}
