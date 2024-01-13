import React from "react"
import { useQuery } from "@tanstack/react-query"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../../components/ui/badge"
import { ProjectSkeleton } from "../../components/ProjectSkeleton"

type RepoProps = {
  id: number
  name: string
  html_url: string
  language: string
  description: string | null
  fork: boolean
}

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/davi-souzadev/repos?sort=created&direction=desc"
  )
  return response.json()
}

export function Projects() {
  const {
    data: repos,
    isLoading,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ["repos"], queryFn: fetchRepos })

  const filteredRepos = repos
    ? repos.filter((repo: RepoProps) => {
        if (!repo.language || repo.fork) {
          return false
        }
        return true
      })
    : []

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="h-full w-full flex flex-col mt-8 pb-8 gap-4 px-4 ">
      <h2 className="text-2xl mb-4">Projetos</h2>
      <p className="text-muted-foreground">
        Projetos desenvolvidos em cursos, porjetos pessoais ou desafios de código.
        Encontre mais no meu{" "}
        <a
          href="https://github.com/davi-souzadev"
          className="underline"
          target="blank"
        >
          Github
        </a>
        .
      </p>
      <div className="flex flex-col items-start md:grid w-full grid-cols-1 gap-3 justify-center md:grid-cols-2">
        {!isLoading ? (
          filteredRepos.slice(0, 6).map((repo: RepoProps) => {
            return (
              <Card
                key={repo.id}
                className="w-full md:w-80  h-40 flex flex-col justify-between"
              >
                <CardHeader className="p-6">
                  <div className="flex justify-between">
                    <CardTitle className="text-base">{repo.name}</CardTitle>
                    <a
                      href={repo.html_url}
                      target="blank"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </CardHeader>
                <CardContent className="flex justify-between p-6 pt-0">
                  <Badge
                    variant={"outline"}
                    className="self"
                  >
                    {repo.language}
                  </Badge>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                </CardContent>
              </Card>
            )
          })
        ) : (
          <ProjectSkeleton />
        )}
      </div>
    </div>
  )
}
