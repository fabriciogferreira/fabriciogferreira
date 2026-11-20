export type NavItem = {
  id:
    | "hero_section"
    | "projects"
    | "jobs"
    | "education"
    | "skills"
    | "statistics"
    | "testimonials"
    | "contact"
    | "about_me"
}

/**
 * Visible portfolio sections.
 * Order rationale: see DECISIONS.md — “Ordem das seções”.
 * Labels come from i18n messages (`t.nav[id]`).
 * Credits stays on the page (end) but out of the primary nav — see DECISIONS.md.
 */
export const NAV_ITEMS: NavItem[] = [
  { id: "hero_section" },
  { id: "projects" },
  { id: "jobs" },
  { id: "education" },
  { id: "skills" },
  { id: "statistics" },
  { id: "testimonials" },
  { id: "contact" },
  { id: "about_me" },
]

/** Sections that update the URL hash on scroll (nav + credits, which is off-nav). */
export const SCROLL_SECTION_IDS = [
  ...NAV_ITEMS.map((item) => item.id),
  "credits",
] as const
