"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"

import { DownloadIcon, SpinnerIcon } from "@/components/icons"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

/** Show “Baixando…” first; start the file only after this delay. */
const FEEDBACK_MS = 500

type DownloadLinkProps = {
  href: string
  children: ReactNode
  className?: string
  /** Shown only while idle; replaced by spinner while “downloading”. */
  showIcon?: boolean
}

function triggerDownload(href: string) {
  const anchor = document.createElement("a")
  anchor.href = href
  anchor.setAttribute("download", "")
  anchor.rel = "noopener"
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
}

/**
 * Feedback then download: busy label first, file starts after FEEDBACK_MS.
 * (Native `<a download>` would start the transfer immediately.)
 */
export function DownloadLink({
  href,
  children,
  className,
  showIcon = true,
}: DownloadLinkProps) {
  const { t } = useLocale()
  const [busy, setBusy] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <Link
      href={href}
      download
      rel="noopener noreferrer"
      aria-busy={busy}
      className={cn(className, busy && "pointer-events-none")}
      onClick={(event) => {
        event.preventDefault()
        if (busy) return
        if (timerRef.current) clearTimeout(timerRef.current)
        setBusy(true)
        timerRef.current = setTimeout(() => {
          triggerDownload(href)
          setBusy(false)
          timerRef.current = null
        }, FEEDBACK_MS)
      }}
    >
      {busy ? (
        <>
          <SpinnerIcon className="animate-spin" />
          {t.common.downloading}
        </>
      ) : (
        <>
          {showIcon ? <DownloadIcon /> : null}
          {children}
        </>
      )}
    </Link>
  )
}
