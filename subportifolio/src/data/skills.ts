import type { TechName } from "@/data/technologies"

export type SkillGroupId = "backend" | "frontend" | "tools"

export type SkillGroup = {
  id: SkillGroupId
  items: TechName[]
}

/**
 * Skills surfaced on the portfolio — order within each group is intentional
 * (strongest / most used first). Group titles come from i18n (`t.skills[id]`).
 * Logos come from `TECHNOLOGIES` via TechBadge — not a 90px Devicons grid.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    items: ["Laravel", "PHP", "PostgreSQL", "MySQL"],
  },
  {
    id: "frontend",
    items: [
      "Next.js",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "tools",
    items: ["Docker", "Git", "GitHub"],
  },
]
