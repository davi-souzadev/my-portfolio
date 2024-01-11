import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type ExperienceCardProps = {
  fallback?: string
  company: string
  role: string
  since: string
}

export function ExperienceCard({ fallback, company, role, since }: ExperienceCardProps) {
  return (
    <Card className="flex flex-row items-center border-none gap-4 h-24 mt-4">
      <CardHeader className="p-0">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent
        className="flex flex-col justify-center pt-6 pl-0 flex-grow"
        id="123"
      >
        <h3 className="text-white">{company}</h3>
        <div className="text-muted-foreground">
          <p>{role}</p>
          <p>{since}</p>
        </div>
      </CardContent>
    </Card>
  )
}
