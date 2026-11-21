import type { Metadata } from "next"
import { Figtree, Geist_Mono, Space_Grotesk } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fabrício Ferreira — Desenvolvedor Fullstack",
  description:
    "Portfólio de Fabrício Gonçalves Ferreira. Produtos web com Laravel e Next.js/Vue.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        figtree.variable,
        spaceGroteskHeading.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
