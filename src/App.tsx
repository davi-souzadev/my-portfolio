import { Navbar } from "./components/Navbar"
import { About } from "./components/About"

function App() {
  return (
    <div className="dark">
      <main className="w-dvw h-dvh bg-slate-100 dark:bg-neutral-900 dark:text-white">
        <Navbar />
        <About />
      </main>
    </div>
  )
}

export default App
