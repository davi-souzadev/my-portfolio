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
  const response = await fetch("https://api.github.com/users/davi-souzadev/repos")
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

  return (
    <div className="h-full w-full flex flex-col mt-16">
      <h2 className="text-2xl mb-4">Projetos</h2>
      <div className="w-full flex flex-wrap gap-4">
        {!isLoading &&
          filteredRepos.map((repo: RepoProps) => {
            return (
              <Card
                key={repo.id}
                className="w-80"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{repo.description}</p>
                  <Badge>{repo.language}</Badge>
                </CardContent>
              </Card>
            )
          })}
      </div>
    </div>
  )
}
