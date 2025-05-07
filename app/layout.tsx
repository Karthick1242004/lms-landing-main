import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Company Name | TagLine",
    template: "%s | Company Name",
  },
  description:
    "Companies description",
  keywords: ["enterprise applications", "data analytics", "web development", "cloud solutions", "custom software"],
  authors: [{ name: "Company name" }],
  creator: "Company name",
  publisher: "Company name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thecloud.company"),
  openGraph: {
    title: "Company Name | TagLine",
    description: "Transform your business with our cutting-edge enterprise solutions and data analytics applications.",
    url: "https://thecloud.company",
    siteName: "Company Name",
    images: [
      {
        url: "https://sjc.microlink.io/mYCnMvn4eh1KBbmRJbeMoc8fOoYiZcTNZA8NapKs8KHh18R-5NSEcLBWHTk_B2YGUVtxYAqIYsCNxX92LJCrpQ.jpeg",
        width: 1200,
        height: 630,
        alt: "Company Name",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Name | TagLine",
    description: "Transform your business with our cutting-edge enterprise solutions and data analytics applications.",
    images: [
      "https://sjc.microlink.io/mYCnMvn4eh1KBbmRJbeMoc8fOoYiZcTNZA8NapKs8KHh18R-5NSEcLBWHTk_B2YGUVtxYAqIYsCNxX92LJCrpQ.jpeg",
    ],
    creator: "@companyname",
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-wKlEvJnqRpBlcdT9ULn3RBx7lMXID3.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-wf9MApwO0kQMoqXqarDkm9lKzHuiQg.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-OX8MQjAlsTa6O0uUOVc5Gx3jaWqeA0.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-j0AsQlGBmYZp21mXOaoU5F2UTL0GLT.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-t3iE1AK0ATNgSxW1Yj6PHzxyUCtEdq.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-wf9MApwO0kQMoqXqarDkm9lKzHuiQg.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
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
        <link rel="canonical" href="https://thecloud.company" />
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