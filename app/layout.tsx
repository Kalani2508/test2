import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pixelsurge.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pixelsurge | Professional Web Development Company',
    template: '%s | Pixelsurge'
  },
  description: 'Pixelsurge is a professional web development company delivering stunning, high-performance websites and web applications. Transform your digital presence with our expert team.',
  keywords: ['web development', 'web design', 'website development', 'web applications', 'UI/UX design', 'e-commerce', 'digital solutions', 'Pixelsurge'],
  authors: [{ name: 'Pixelsurge' }],
  creator: 'Pixelsurge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Pixelsurge',
    title: 'Pixelsurge | Professional Web Development Company',
    description: 'Transform your digital presence with Pixelsurge. We create stunning, high-performance websites and web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixelsurge Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixelsurge | Professional Web Development Company',
    description: 'Transform your digital presence with Pixelsurge.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark antialiased">
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
          strategy="afterInteractive"
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
