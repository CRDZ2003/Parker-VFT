import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string
  title: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("mb-6", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{eyebrow}</p> : null}
      <h2 className="text-cyan-600 text-pretty text-2xl font-bold md:text-3xl">{title}</h2>
    </div>
  )
}
