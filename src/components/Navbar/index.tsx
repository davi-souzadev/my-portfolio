import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PiGear } from "react-icons/pi"
import { FiSun, FiMoon, FiMenu, FiFolder } from "react-icons/fi"
import { HiOutlineHome } from "react-icons/hi2"

import { useTheme } from "@/components/ThemeProvider"
import { Button } from "../ui/button"
import { useChangeLanguage } from "../../hooks/useChangeLanguage"
import { Link } from "react-router-dom"

export function Navbar() {
  const [isOptionsOpen, setIsOptionOpen] = useState(false)
  const [isDesktopOptionsOpen, setDesktopIsOptionOpen] = useState(false)
  const { t, handleChangeLanguage } = useChangeLanguage()
  const { setTheme } = useTheme()

  function toggleOpenOptions() {
    setIsOptionOpen(!isOptionsOpen)
  }

  function toggleDesktopOpenOptions() {
    setDesktopIsOptionOpen(!isDesktopOptionsOpen)
  }

  return (
    <nav className="w-full bg-transparent  md:mx-auto mt-4">
      <div className="w-full border-b-[1px] border-gray-900 border-opacity-10 h-16 flex items-center justify-between dark:border-gray-100 dark:border-opacity-10">
        <div className="flex ml-4 md:ml-0">
          <div className="md:flex space-x-1 items-center justify-center font-bold w-40">
            <Link
              to="/"
              className="flex text-xl items-center md:text-2xl w-full cursor-pointer"
              // onClick={() => handleNavigate("/my-portfolio/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Davi Souza
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <Button
            asChild
            variant={"ghost"}
            // onClick={() => handleNavigate("/")}
          >
            <Link to="/">Home</Link>
          </Button>

          <Button
            asChild
            variant={"ghost"}
          >
            <Link to="/projects">{t("navbar.projects")}</Link>
          </Button>

          <DropdownMenu
            open={isDesktopOptionsOpen}
            onOpenChange={toggleDesktopOpenOptions}
          >
            <DropdownMenuTrigger
              className="mr-4"
              asChild
            >
              <Button
                variant={"outline"}
                size={"icon"}
              >
                <PiGear
                  className={`w-[1.35rem] h-[1.35rem] ${
                    isDesktopOptionsOpen
                      ? "rotate-180 transition ease-in-out delay-100"
                      : "-rotate-180 transition ease-in-out delay-100"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <DropdownMenuLabel>{t("navbar.theme")}</DropdownMenuLabel>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => setTheme("dark")}
              >
                <FiMoon className="w-4 h-4 mr-2" />

                {t("navbar.dark")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => setTheme("light")}
              >
                <FiSun className="w-4 h-4 mr-2" />
                {t("navbar.light")}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuLabel>{t("navbar.language")}</DropdownMenuLabel>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => handleChangeLanguage("ptBr")}
              >
                {t("navbar.portuguese")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => handleChangeLanguage("en")}
              >
                {t("navbar.english")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="md:hidden w-full h-full flex justify-end items-center">
          <DropdownMenu
            open={isOptionsOpen}
            onOpenChange={toggleOpenOptions}
          >
            <DropdownMenuTrigger
              className="mr-4"
              asChild
            >
              <Button
                variant={"outline"}
                size={"icon"}
              >
                <PiGear
                  className={`w-[1.35rem] h-[1.35rem] ${
                    isOptionsOpen
                      ? "rotate-180 transition ease-in-out delay-100"
                      : "-rotate-180 transition ease-in-out delay-100"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <DropdownMenuLabel>{t("navbar.theme")}</DropdownMenuLabel>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => setTheme("dark")}
              >
                <FiMoon className="w-4 h-4 mr-2" />
                {t("navbar.dark")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => setTheme("light")}
              >
                <FiSun className="w-4 h-4 mr-2" />
                {t("navbar.light")}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuLabel>{t("navbar.language")}</DropdownMenuLabel>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => handleChangeLanguage("ptBr")}
              >
                {t("navbar.portuguese")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="ml-4 text-base"
                onClick={() => handleChangeLanguage("en")}
              >
                {t("navbar.english")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className=" mr-4"
              asChild
            >
              <Button
                variant={"outline"}
                size={"icon"}
              >
                <FiMenu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <DropdownMenuItem className="ml-4 text-base">
                <HiOutlineHome className="w-4 h-4 mr-2" />

                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 text-base">
                <FiFolder className="w-4 h-4 mr-2" />
                <Link to="/projects">{t("navbar.projects")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
