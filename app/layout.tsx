import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Nimmy | Web Designer for Local Businesses',
  description: 'I build fast, professional websites for small businesses across Hertfordshire and Bedfordshire. Fixed price, no jargon, no ongoing surprises.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
