"use client"

import { useEffect, useState } from "react"

/**
 * Tracks which section is in view and keeps `location.hash` in sync via
 * `replaceState` (no history spam while scrolling).
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "")

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "")
    if (hash && ids.includes(hash)) {
      setActiveId(hash)
    }
  }, [ids])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (nextId) {
          setActiveId(nextId)
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [ids])

  useEffect(() => {
    if (!activeId || !ids.includes(activeId)) return
    const nextHash = `#${activeId}`
    if (window.location.hash === nextHash) return
    window.history.replaceState(null, "", nextHash)
  }, [activeId, ids])

  return activeId
}
