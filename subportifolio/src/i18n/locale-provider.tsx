"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import { messages, type Messages } from "@/i18n/messages"
import { LOCALES, type Locale } from "@/i18n/types"

const STORAGE_KEY = "portfolio-locale"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("br")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored)) {
      setLocaleState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "br" ? "pt-BR" : "en"
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale, setLocale]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return ctx
}
