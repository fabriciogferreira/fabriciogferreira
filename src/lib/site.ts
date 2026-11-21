import type { TechName } from "@/data/technologies"
import type { LocalizedString } from "@/i18n/types"

/** Site-wide constants — migrate from old types/ as sections land. */
export const SITE = {
  name: "Fabrício Ferreira",
  role: {
    br: "Desenvolvedor Fullstack Junior",
    en: "Junior Fullstack Developer",
  } satisfies LocalizedString,
  /** One quiet line under the role — where + openness (recruiter scan). */
  location: {
    br: "Santa Fé do Sul — SP",
    en: "Santa Fé do Sul — SP, Brazil",
  } satisfies LocalizedString,
  availability: {
    br: "Aberto a oportunidades",
    en: "Open to opportunities",
  } satisfies LocalizedString,
  tagline: {
    br: "Construo produtos web com Laravel e Next.js/Vue — do backend à interface que a pessoa usa.",
    en: "I build web products with Laravel and Next.js/Vue — from the backend to the interface people use.",
  } satisfies LocalizedString,
  /** Primary stack on the first fold — proof without a stats strip. */
  heroStack: [
    "Laravel",
    "Next.js",
    "Vue.js",
    "PHP",
  ] as const satisfies readonly TechName[],
  email: "fabriciof481@gmail.com",
  mailto:
    "mailto:fabriciof481@gmail.com?subject=Contato%20via%20portf%C3%B3lio&body=Ol%C3%A1%20Fabr%C3%ADcio%2C%0A%0A",
  /** Locale-aware CV — source in `resume/`; regenerate with `npm run resume:build`. */
  resumePath: {
    br: "/files/curriculo-br.pdf",
    en: "/files/resume-en.pdf",
  } satisfies LocalizedString,
  /** Legacy single path — same file as PT-BR (kept for old bookmarks). */
  resumePathLegacy: "/files/curriculo.pdf",
  github: "https://github.com/fabriciogferreira",
  portfolioUrl: "https://fabriciogferreira.vercel.app/",
  heroImage: {
    src: "/hero/serio.jpg",
    alt: "Fabrício Ferreira",
  },
  socials: [
    {
      name: "Gmail",
      href: "mailto:fabriciof481@gmail.com",
      label: "fabriciof481@gmail.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/fabriciogferreira",
      label: "github.com/fabriciogferreira",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fabriciogferreira/",
      label: "linkedin.com/in/fabriciogferreira",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fabricio1103/",
      label: "@fabricio1103",
    },
  ],
} as const
