import { FaGithub, FaLinkedin } from "react-icons/fa"

export function SocialMedia() {
  return (
    <div className="flex mt-6 gap-4 items-start">
      <a
        href="https://github.com/davi-souzadev"
        target="blank"
        className="rounded h-9 w-9 hover:bg-accent flex justify-center items-center"
      >
        <FaGithub className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/davi-souzadev/"
        className="rounded h-9 w-9 hover:bg-accent flex justify-center items-center"
        target="blank"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
    </div>
  )
}
