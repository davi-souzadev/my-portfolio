import { Navbar } from "../Navbar"
import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <div className="container flex min-h-screen justify-between flex-col px-0 md:px-8 pb-8 w-dvw md:w-[45rem]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
