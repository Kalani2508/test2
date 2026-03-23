import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import PortfolioContent from '@/components/PortfolioContent'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of successful web development projects. See how Pixelsurge has helped businesses transform their digital presence.',
  openGraph: {
    title: 'Portfolio | Pixelsurge',
    description: 'Explore our portfolio of successful web development projects.',
  },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Our Portfolio"
        title="We will build"
        highlight="any website"
        description="Explore our portfolio of successful projects. Each one represents our commitment to quality, innovation, and client satisfaction."
      />

      {/* Portfolio Grid */}
      <PortfolioContent />

      {/* CTA */}
      <CTA />
    </>
  )
}
