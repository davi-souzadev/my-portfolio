export function Navbar() {
  return (
    <nav className="flex justify-center items-center w-dvw h-20 bg-transparent text-xl text-black dark:text-gray-400 border-b-[1px] border-gray-100 border-opacity-10 ">
      <ul className="flex w-full h-full justify-around ">
        <li className="flex items-center justify-evenly font-bold dark:text-white">
          Davi Souza
        </li>
        <li className="flex items-center justify-evenly gap-4 ">
          <a
            href=""
            className="duration-200 ease-[ease-in-out] dark:hover:text-white"
          >
            Início
          </a>
          <a
            href=""
            className="duration-200 ease-[ease-in-out] dark:hover:text-white"
          >
            Sobre mim
          </a>
          <a
            href=""
            className=" duration-200 ease-[ease-in-out] dark:hover:text-white"
          >
            Projetos
          </a>
          <a
            href=""
            className="duration-200 ease-[ease-in-out] dark:hover:text-white"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}
