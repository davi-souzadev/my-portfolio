import { ExperienceCard } from "../ExperienceCard"
import { Badge } from "../ui/badge"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const badgeStacks = ["ReactJS", "JavaScript", "TypeScript", "Python", "Ruby on Rails"]
const experiences = [
  {
    id: 1,
    company: "Fi-Analytics",
    role: "Estágio em Desenvolvimento de sistemas",
    since: "Abril 2023 - Atualmente",
  },
  {
    id: 2,
    company: "Proviter IT Academy",
    role: "Estudante em desenvolvimento Full-stack",
    since: "Março 2023 - Julho 2023",
  },
  {
    id: 3,
    company: "dio.me",
    role: "Estudante em desenvolvimento Front-end",
    since: "Julho 2023 - Dezembro 2023",
  },
  {
    id: 4,
    company: "Rocketseat",
    role: "Estudante em desenvolvimento Front-end",
    since: "Maio 2022 - Dezembro 2022",
  },
  {
    id: 5,
    company: "UNESA",
    role: "Estudante em Sistemas de Informação",
    since: "Fevereiro 2020 - Atualmente",
  },
]

export function About() {
  return (
    <div className="lg:max-w-3xl mx-auto px-4 flex flex-col">
      {/* Cards com  Experiências/ Cursos */}
      <h1 className="text-2xl ">Olá, meu nome é Davi.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Eu sou um desenvolvedor Front-end apaixonado por criar interfaces intuitivas e
        experiências digitais envolventes.
      </p>
      <p className="mt-4 text-lg text-muted-foreground">
        Essas são minhas as principais Stacks que utilizo no meu dia a dia:
      </p>
      <div className="mt-4 flex gap-4 text-muted-foreground">
        {badgeStacks.map((badge) => (
          <Badge
            key={badge}
            variant={"secondary"}
            className="text-base rounded-md"
          >
            {badge}
          </Badge>
        ))}
      </div>
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
      <div className="mt-12 ">
        <h2 className="text-2xl">Experiências</h2>

        {experiences.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              role={exp.role}
              since={exp.since}
              fallback={exp.company.slice(0, 2)}
            />
          )
        })}
      </div>
    </div>
  )
}
