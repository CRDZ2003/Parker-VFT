import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Loader } from "@/components/loader"
import { WhatsappIcon } from "@/components/whatsappicon"

export const metadata: Metadata = {
  title: "Parker Express Shipping LLC",
  description: "Transport Anything From Anywhere",
  icons: {
    icon: "/logo/fav.png",
  },
}

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${workSans.variable}`}>
      <head>
        {/* Preconnects help establish early TLS to your asset host */}
        <link rel="preconnect" href="https://blackpool-ltd.s3.us-east-1.amazonaws.com" crossOrigin="" />
        {/* Preload background video (fix the double .mp4) */}
        <link
          rel="preload"
          as="video"
          href="https://blackpool-ltd.s3.us-east-1.amazonaws.com/Parker.mp4"
          type="video/mp4"
          // fetchpriority isn't standard here, but browsers may consider it.
          // If you move this into <video>, set preload="auto".
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
       {/* <Loader /> */}
        {/* accessibility skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 z-50 bg-primary text-primary-foreground px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <SiteNav />
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsappIcon />
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
