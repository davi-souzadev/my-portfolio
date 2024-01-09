import { Badge } from "../ui/badge"

export function About() {
  return (
    <div className="lg:max-w-5xl mx-auto px-4 flex flex-col">
      {/* Cards com  Experiências/ Cursos */}
      <h1 className="text-2xl ">Olá, eu sou Davi.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Eu sou um desenvolvedor Front-end apaixonado por criar interfaces intuitivas e
        experiências digitais envolventes.
      </p>
      <p className="mt-4 text-lg text-muted-foreground">
        Essas são minhas as principais Stacks que utilizo em meu trabalho:
      </p>
      <div className="mt-4 flex gap-4 text-muted-foreground">
        <Badge
          variant={"secondary"}
          className="text-base rounded-md"
        >
          ReactJS
        </Badge>
        <Badge
          variant={"secondary"}
          className="text-base rounded-md"
        >
          JavaScript
        </Badge>
        <Badge
          variant={"secondary"}
          className="text-base rounded-md"
        >
          TypeScript
        </Badge>
        <Badge
          variant={"secondary"}
          className="text-base rounded-md"
        >
          Python
        </Badge>
        <Badge
          variant={"secondary"}
          className="text-base rounded-md"
        >
          Ruby on Rails
        </Badge>
      </div>
    </div>
  )
}
