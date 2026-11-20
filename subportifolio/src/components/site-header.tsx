"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "@/components/icons"

import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/use-active-section"
import { useLocale } from "@/i18n/locale-provider"
import { NAV_ITEMS, SCROLL_SECTION_IDS } from "@/lib/nav"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

function NavLinks({
  activeId,
  className,
  linkClassName,
  onNavigate,
}: {
  activeId: string
  className?: string
  linkClassName?: string
  onNavigate?: () => void
}) {
  const { t } = useLocale()

  return (
    <nav className={className} aria-label="Principal">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id

        return (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-2 py-1.5 text-sm whitespace-nowrap transition-colors",
              isActive
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              linkClassName
            )}
            aria-current={isActive ? "true" : undefined}
          >
            {t.nav[item.id]}
          </Link>
        )
      })}
    </nav>
  )
}

export function SiteHeader() {
  const { t } = useLocale()
  const activeId = useActiveSection(SCROLL_SECTION_IDS)
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full min-w-0 max-w-5xl items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          href="#hero_section"
          className="font-heading min-w-0 shrink truncate text-base font-semibold tracking-tight text-foreground"
        >
          {SITE.name}
        </Link>

        {/*
          Desktop links only from `xl` up — at `md`/`lg` the full PT label set
          + brand + controls overflow the viewport (horizontal scroll).
        */}
        <NavLinks
          activeId={activeId}
          className="ml-2 hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overscroll-x-contain xl:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        />

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 xl:ml-0">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <LocaleSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="xl:hidden"
                  aria-label={t.openMenu}
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0">
              <SheetHeader>
                <SheetTitle>{t.menu}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-6 px-4 pb-6">
                <NavLinks
                  activeId={activeId}
                  className="flex flex-col gap-1"
                  linkClassName="px-3 py-2.5 text-base whitespace-normal"
                  onNavigate={() => setOpen(false)}
                />
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <ThemeToggle />
                  <SheetClose
                    render={<Button variant="outline" size="sm" />}
                  >
                    {t.close}
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
