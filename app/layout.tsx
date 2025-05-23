import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";
import {NextIntlClientProvider} from 'next-intl';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabrício Ferreira",
  description: "Generated by create next app",
};

import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      data-theme="dark"
      style={{colorScheme:"dark"}}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" themes={['light', 'dark']}>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Script src="https://kit.fontawesome.com/59948feead.js"></Script>
      </body>
    </html>
  );
}
