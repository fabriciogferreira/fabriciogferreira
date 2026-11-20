import type { ComponentProps } from "react"
import { Github, GoogleGmail } from "@dev.icons/react"
import { BR, US } from "country-flag-icons/react/3x2"
import {
  ArrowUpRightIcon as LucideArrowUpRight,
  CheckIcon as LucideCheck,
  ChevronRightIcon as LucideChevronRight,
  DownloadIcon as LucideDownload,
  EyeIcon as LucideEye,
  LanguagesIcon as LucideLanguages,
  LoaderCircleIcon as LucideLoaderCircle,
  MailIcon as LucideMail,
  MenuIcon as LucideMenu,
  MoonIcon as LucideMoon,
  SunIcon as LucideSun,
  XIcon as LucideX,
} from "lucide-react"

import { cn } from "@/lib/utils"

/** Brand marks — from `@dev.icons/react`, not Lucide. */
const GmailIcon = GoogleGmail

/**
 * GitHub mark is near-black (`#161614`) — sit it on white so it keeps contrast
 * on dark UI / outline buttons.
 */
function GithubIcon({
  size = 16,
  className,
  ...props
}: ComponentProps<typeof Github>) {
  const px = typeof size === "number" ? size : 16
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[3px] bg-white",
        className
      )}
      style={{ width: px, height: px }}
      aria-hidden
    >
      <Github size={Math.round(px * 0.85)} {...props} />
    </span>
  )
}

/** Locale cues — language ≠ country, but BR/US + label matches this site’s locales. */
const BrazilFlagIcon = BR
const UsFlagIcon = US

/** Generic envelope when brand mark is not wanted. */
const MailIcon = LucideMail

const DownloadIcon = LucideDownload
const EyeIcon = LucideEye
const ArrowUpRightIcon = LucideArrowUpRight
const MenuIcon = LucideMenu
const LanguagesIcon = LucideLanguages
const MoonIcon = LucideMoon
const SunIcon = LucideSun
const XIcon = LucideX
const CheckIcon = LucideCheck
const ChevronRightIcon = LucideChevronRight
const SpinnerIcon = LucideLoaderCircle

export {
  ArrowUpRightIcon,
  BrazilFlagIcon,
  CheckIcon,
  ChevronRightIcon,
  DownloadIcon,
  EyeIcon,
  GithubIcon,
  GmailIcon,
  LanguagesIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  SpinnerIcon,
  SunIcon,
  UsFlagIcon,
  XIcon,
}
