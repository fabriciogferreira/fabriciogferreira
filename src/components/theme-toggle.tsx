"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@/components/icons"

import { Switch } from "@/components/ui/switch"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { t } = useLocale()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SunIcon className="size-4 text-muted-foreground" aria-hidden />
      <Switch
        checked={mounted ? isDark : false}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label={t.themeToggle}
        disabled={!mounted}
      />
      <MoonIcon className="size-4 text-muted-foreground" aria-hidden />
    </div>
  )
}
