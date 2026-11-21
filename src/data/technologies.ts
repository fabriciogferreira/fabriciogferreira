import type { ComponentType, SVGProps } from "react"
import {
  Bootstrap,
  Css3,
  Docker,
  Git,
  Github,
  Html5,
  Javascript,
  Laravel,
  Mongodb,
  Mysql,
  Nextjs,
  Nuxt,
  Php,
  Playwright,
  Postgresql,
  Redis,
  Tailwind,
  Typescript,
  Websocket,
  _React,
  _Vue,
} from "@dev.icons/react"

type TechIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    size?: number | string
    alt?: string
  }
>

export type Technology = {
  name: string
  /** Omit when Devicons has no mark (e.g. Pest, PHPStan). */
  Icon?: TechIcon
}

/**
 * Only the stack names used on the site — named imports from `@dev.icons/react`
 * (tree-shakeable; `_React` / `_Vue` avoid colliding with framework imports).
 */
export const TECHNOLOGIES = {
  Laravel: { name: "Laravel", Icon: Laravel },
  React: { name: "React", Icon: _React },
  "Next.js": { name: "Next.js", Icon: Nextjs },
  Nuxt: { name: "Nuxt", Icon: Nuxt },
  "Tailwind CSS": { name: "Tailwind CSS", Icon: Tailwind },
  "Vue.js": { name: "Vue.js", Icon: _Vue },
  TypeScript: { name: "TypeScript", Icon: Typescript },
  Bootstrap: { name: "Bootstrap", Icon: Bootstrap },
  Docker: { name: "Docker", Icon: Docker },
  MySQL: { name: "MySQL", Icon: Mysql },
  PostgreSQL: { name: "PostgreSQL", Icon: Postgresql },
  Redis: { name: "Redis", Icon: Redis },
  MongoDB: { name: "MongoDB", Icon: Mongodb },
  PHP: { name: "PHP", Icon: Php },
  JavaScript: { name: "JavaScript", Icon: Javascript },
  HTML: { name: "HTML", Icon: Html5 },
  CSS: { name: "CSS", Icon: Css3 },
  Git: { name: "Git", Icon: Git },
  GitHub: { name: "GitHub", Icon: Github },
  Playwright: { name: "Playwright", Icon: Playwright },
  WebSockets: { name: "WebSockets", Icon: Websocket },
  Pest: { name: "Pest" },
  PHPStan: { name: "PHPStan" },
} as const satisfies Record<string, Technology>

export type TechName = keyof typeof TECHNOLOGIES
