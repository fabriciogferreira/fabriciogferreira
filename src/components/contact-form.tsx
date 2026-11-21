"use client"

import { useActionState, useEffect, useRef, useState } from "react"

import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/i18n/locale-provider"

const initialState: ContactState | null = null
const EMAIL_HISTORY_KEY = "portfolio-contact-emails"
const EMAIL_HISTORY_MAX = 8
const EMAIL_LIST_ID = "contact-email-history"

function readEmailHistory(): string[] {
  try {
    const raw = window.localStorage.getItem(EMAIL_HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((value): value is string => typeof value === "string")
  } catch {
    return []
  }
}

function rememberEmail(email: string): string[] {
  const normalized = email.trim().toLowerCase()
  if (!normalized) return readEmailHistory()
  const next = [
    normalized,
    ...readEmailHistory().filter((value) => value !== normalized),
  ].slice(0, EMAIL_HISTORY_MAX)
  window.localStorage.setItem(EMAIL_HISTORY_KEY, JSON.stringify(next))
  return next
}

export function ContactForm() {
  const { t } = useLocale()
  const [state, action, pending] = useActionState(
    sendContactMessage,
    initialState
  )
  const formRef = useRef<HTMLFormElement>(null)
  const [emailHistory, setEmailHistory] = useState<string[]>([])

  useEffect(() => {
    setEmailHistory(readEmailHistory())
  }, [])

  useEffect(() => {
    if (!state?.ok || !formRef.current) return
    const email = new FormData(formRef.current).get("email")
    if (typeof email === "string") {
      setEmailHistory(rememberEmail(email))
    }
    formRef.current.reset()
  }, [state])

  const errorMessage =
    state && !state.ok && state.error
      ? t.contact.errors[state.error]
      : null

  return (
    <form
      ref={formRef}
      action={action}
      className="relative flex flex-col gap-4"
      noValidate
      autoComplete="on"
    >
      {/* Honeypot — clipped in-flow (never off-screen: that causes page horizontal scroll) */}
      <div
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">{t.contact.name}</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.contact.namePlaceholder}
            disabled={pending}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">{t.contact.email}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            list={EMAIL_LIST_ID}
            required
            placeholder={t.contact.emailPlaceholder}
            disabled={pending}
          />
          <datalist id={EMAIL_LIST_ID}>
            {emailHistory.map((email) => (
              <option key={email} value={email} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">{t.contact.message}</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={t.contact.messagePlaceholder}
          disabled={pending}
          className="min-h-28 resize-y"
          autoComplete="off"
        />
      </div>

      {state?.ok && (
        <p className="text-sm text-foreground" role="status">
          {t.contact.success}
        </p>
      )}
      {errorMessage && (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? t.contact.sending : t.contact.submit}
      </Button>
    </form>
  )
}
