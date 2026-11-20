"use server"

import { Resend } from "resend"

export type ContactErrorCode =
  | "missing"
  | "email"
  | "long"
  | "config"
  | "send"

export type ContactState = {
  ok: boolean
  error?: ContactErrorCode
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContactMessage(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — bots fill "website"; humans never see it.
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: true }
  }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!email || !message) {
    return { ok: false, error: "missing" }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "email" }
  }
  if (message.length > 5000) {
    return { ok: false, error: "long" }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, error: "config" }
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "fabriciof481@gmail.com"
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>"

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: name ? `Portfólio — ${name}` : "Contato via portfólio",
    text: [
      `De: ${name || "(sem nome)"} <${email}>`,
      "",
      message,
    ].join("\n"),
  })

  if (error) {
    return { ok: false, error: "send" }
  }

  return { ok: true }
}
