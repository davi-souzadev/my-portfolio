import { useChangeLanguage } from "@/hooks/useChangeLanguage"
import { ExperienceCard } from "../ExperienceCard"
import { SocialMedia } from "../SocialMedia"
import { Badge } from "../ui/badge"

const badgeStacks = ["ReactJS", "JavaScript", "TypeScript", "Python", "Ruby on Rails"]

type ExperienceProps = {
  id: number
  company: string
  role: string
  since: string
}

export function About() {
  const { t } = useChangeLanguage()

  const experiences: ExperienceProps[] = t("experiences", {
    returnObjects: true,
  })

  return (
    <div className="max-w-full lg:max-w-3xl mx-auto px-4 flex flex-col ">
      <h1 className="text-2xl ">{t("about.aboutTitle")}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{t("about.aboutParagraph")}</p>
      <p className="mt-4 text-lg text-muted-foreground">{t("about.aboutStacks")}</p>
      <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
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
      <SocialMedia />
      <div className="mt-12 ">
        <h2 className="text-2xl">{t("about.experiences")}</h2>

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
