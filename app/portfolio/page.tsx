import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import PortfolioContent from '@/components/PortfolioContent'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Discover the types of websites and web applications we can build for your business. From e-commerce to corporate sites, we bring your vision to life.',
  keywords: ['web development services', 'custom websites', 'web applications', 'e-commerce development', 'business websites'],
  openGraph: {
    title: 'Projects | Pixelsurge',
    description: 'Discover what we can build for your business - from e-commerce platforms to custom web applications.',
  },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="What We Build"
        title="We can create"
        highlight="any website"
        description="From e-commerce platforms to corporate websites, we have the expertise to bring any web project to life. Here's what we can build for you."
      />

      {/* Portfolio Grid */}
      <PortfolioContent />

      {/* CTA */}
      <CTA />
    </>
  )
}
