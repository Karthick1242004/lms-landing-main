import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Quantum Path | Learning Management System",
    template: "%s | Quantum Path LMS",
  },
  description:
    "Quantum Path is a modern Learning Management System designed to empower educators and learners with intuitive tools for course creation, student engagement, and educational achievement.",
  keywords: ["learning management system", "online education", "e-learning", "course creation", "educational platform", "LMS"],
  authors: [{ name: "Quantum Path" }],
  creator: "Quantum Path",
  publisher: "Quantum Path",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://quantam-path.vercel.app/"),
  openGraph: {
    title: "Quantum Path | Learning Management System",
    description: "Transform education with our modern Learning Management System designed for instructors and institutions.",
    url: "https://quantam-path.vercel.app/",
    siteName: "Quantum Path LMS",
    images: [
      {
        url: "https://sjc.microlink.io/mYCnMvn4eh1KBbmRJbeMoc8fOoYiZcTNZA8NapKs8KHh18R-5NSEcLBWHTk_B2YGUVtxYAqIYsCNxX92LJCrpQ.jpeg",
        width: 1200,
        height: 630,
        alt: "Quantum Path LMS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Path | Learning Management System",
    description: "Transform education with our modern Learning Management System designed for instructors and institutions.",
    images: [
      "https://sjc.microlink.io/mYCnMvn4eh1KBbmRJbeMoc8fOoYiZcTNZA8NapKs8KHh18R-5NSEcLBWHTk_B2YGUVtxYAqIYsCNxX92LJCrpQ.jpeg",
    ],
    creator: "@quantumpath",
  },
  // Discord and Slack use the Open Graph protocol
  // Facebook (Meta) specific
  facebook: {
    appId: "your-facebook-app-id", // Replace with your actual Facebook App ID if you have one
  },
  // Additional verification tags if needed
  verification: {
    // Add verification strings if you have them
    // google: "your-google-verification",
    // yandex: "your-yandex-verification",
  },
  icons: {
    icon: [
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://folio-lynkr-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F33.42e81fdb.png&w=256&q=75",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'Quantum Path'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="canonical" href="https://quantam-path.vercel.app/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'