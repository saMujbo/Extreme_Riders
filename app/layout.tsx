import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Extreme Riders | Taller profesional de bicicletas y accesorios',
  description:
    'Haz que tu bici vuelva a rodar como nueva en 24 horas. Servicio profesional, repuestos confiables y asesoría experta de mecánicos certificados.',
  keywords: [
    'taller de bicicletas',
    'reparación de bicicletas',
    'servicio MTB',
    'accesorios para bicicletas',
    'mantenimiento de bicicletas',
  ],
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
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
