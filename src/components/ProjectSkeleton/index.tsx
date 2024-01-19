import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function ProjectSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <Card
            key={index}
            className="w-full md:78 h-40 flex flex-col justify-between"
          >
            <CardHeader className="p-6">
              <div className="flex justify-between">
                <CardTitle className="text-base">
                  <Skeleton className="h-6 w-48" />
                </CardTitle>
                <Skeleton className="h-6 w-6" />
              </div>
              <Skeleton className="h-10 w-60" />
            </CardHeader>
            <CardContent className="flex justify-between p-6 pt-0">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-8" />
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}
