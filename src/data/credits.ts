import type { LocalizedString } from "@/i18n/types"

export type Credit = {
  slug: string
  kind: LocalizedString
  product: string
  href: string
  description: LocalizedString
}

/**
 * Third-party work this portfolio builds on — attribution for recruiters
 * and for the people behind the tools.
 */
export const CREDITS: Credit[] = [
  {
    slug: "lucide",
    kind: { br: "Ícones", en: "Icons" },
    product: "Lucide",
    href: "https://lucide.dev/",
    description: {
      br: "Conjunto de ícones usados nas ações da interface.",
      en: "Icon set used for UI actions.",
    },
  },
  {
    slug: "shadcn",
    kind: { br: "Componentes", en: "Components" },
    product: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    description: {
      br: "Peças de UI (botão, sheet, formulário) adaptadas ao design do site.",
      en: "UI primitives (button, sheet, form) adapted to this site’s design.",
    },
  },
  {
    slug: "devicons",
    kind: { br: "Logos de stack", en: "Stack logos" },
    product: "Devicons",
    href: "https://devicons.io/",
    description: {
      br: "SVGs das tecnologias nos badges e o ícone do Gmail.",
      en: "Technology SVGs in badges and the Gmail mark.",
    },
  },
  {
    slug: "resend",
    kind: { br: "E-mail", en: "Email" },
    product: "Resend",
    href: "https://resend.com/",
    description: {
      br: "Envio das mensagens do formulário de contato.",
      en: "Delivery for the contact form messages.",
    },
  },
  {
    slug: "country-flag-icons",
    kind: { br: "Bandeiras", en: "Flags" },
    product: "country-flag-icons",
    href: "https://gitlab.com/catamphetamine/country-flag-icons",
    description: {
      br: "Bandeiras no seletor de idioma (PT / EN).",
      en: "Flags in the language switcher (PT / EN).",
    },
  },
]
