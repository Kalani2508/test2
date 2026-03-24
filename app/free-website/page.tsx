import { Metadata } from 'next'
import FreeWebsiteContent from '@/components/FreeWebsiteContent'
import FreeWebsiteHero from '@/components/FreeWebsiteHero'

export const metadata: Metadata = {
  title: 'Free Single-Page Website',
  description: 'Get a free professional single-page website from Pixelsurge. Limited time offer to experience our quality web development services risk-free.',
  keywords: ['free website', 'free landing page', 'free web design', 'single page website', 'Pixelsurge free offer'],
  openGraph: {
    title: 'Free Single-Page Website | Pixelsurge',
    description: 'Get a free professional single-page website. Limited time offer!',
  },
}

export default function FreeWebsitePage() {
  return (
    <>
      <FreeWebsiteHero />
      <FreeWebsiteContent />
    </>
  )
}
