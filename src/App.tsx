import { Navbar } from "./components/Navbar"
import { About } from "./components/About"

function App() {
  return (
    <div className="w-dvw h-dvh dark ">
      <main className=" bg-slate-100 dark:bg-neutral-900 dark:text-white">
        <Navbar />
        <About sectionType="about" />
        <About sectionType="projects" />
        <About sectionType="contact" />
      </main>
    </div>
  )
}

export default App
