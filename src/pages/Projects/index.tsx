import React from "react"
import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../../components/ui/badge"

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

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // formatar cards
  // Limitar resultados
  //

  return (
    <div className="h-full w-full flex flex-col mt-16">
      <h2 className="text-2xl mb-4">Projetos</h2>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {!isLoading &&
          filteredRepos.slice(0, 6).map((repo: RepoProps) => {
            return (
              <Card
                key={repo.id}
                className="w-80 h-40 flex flex-col justify-between"
              >
                <CardHeader className="p-6">
                  <div className="flex justify-between">
                    <CardTitle className="text-base">{repo.name}</CardTitle>
                    <a
                      href={repo.html_url}
                      target="blank"
                    >
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
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
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
          })}
      </div>
    </div>
  )
}
