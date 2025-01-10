import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Run Doors - Expert Door Installation & Maintenance',
  description: 'Professional door installation, maintenance, and repair services. Get 20% off for our first 10 clients!',
  keywords: 'door installation, door maintenance, door repair, home improvement',
  openGraph: {
    title: 'Run Doors - Transform Your Home with Expert Door Solutions',
    description: 'Elevate your home\'s security, style, and energy efficiency with our professional door services. Get 20% off now!',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

