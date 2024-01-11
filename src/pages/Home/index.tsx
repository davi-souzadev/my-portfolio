import React from "react"
import { Navbar } from "../../components/Navbar"
import { About } from "../../components/About"
import { Footer } from "../../components/Footer"

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto px-8 pb-8">
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <section className="py-16 max-w-3xl mx-auto">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  )
}
