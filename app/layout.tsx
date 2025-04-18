import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "English Language Center | Learn English Effectively",
    template: "%s | English Language Center",
  },
  description: "Professional English language training center offering various courses for all ages and levels",
  keywords: ["english", "language", "courses", "learning", "education"],
  authors: [{ name: "English Center" }],
  creator: "English Center",
  publisher: "English Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://englishcenter.com",
    siteName: "English Language Center",
    title: "English Language Center | Learn English Effectively",
    description: "Professional English language training center offering various courses for all ages and levels",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "English Language Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "English Language Center | Learn English Effectively",
    description: "Professional English language training center offering various courses for all ages and levels",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
