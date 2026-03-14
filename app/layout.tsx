import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Extreme Riders | Professional Bike Workshop & Accessories',
  description: 'Get your bike riding like new in 24 hours. Professional service, reliable parts, and expert advice from certified mechanics.',
  keywords: ['bike workshop', 'bicycle repair', 'MTB service', 'bike accessories', 'bike maintenance'],
}

export const viewport: Viewport = {
  themeColor: '#131B23',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
