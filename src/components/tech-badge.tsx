import { TECHNOLOGIES, type TechName } from "@/data/technologies"
import { cn } from "@/lib/utils"

export function TechBadge({
  tech,
  className,
}: {
  tech: TechName
  className?: string
}) {
  const entry = TECHNOLOGIES[tech]
  const Icon = "Icon" in entry ? entry.Icon : undefined

  return (
    <li
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground",
        className
      )}
    >
      {Icon ? (
        <Icon size={14} aria-hidden="true" className="size-3.5 shrink-0" />
      ) : null}
      <span>{entry.name}</span>
    </li>
  )
}

export function TechBadgeList({
  technologies,
  className,
  "aria-label": ariaLabel = "Technologies",
}: {
  technologies: readonly TechName[]
  className?: string
  "aria-label"?: string
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={ariaLabel}>
      {technologies.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </ul>
  )
}
