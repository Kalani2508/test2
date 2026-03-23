import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import { StorySection, MissionVisionSection, ValuesSection } from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Pixelsurge - a passionate web development company dedicated to creating exceptional digital experiences. Discover our mission, vision, and values.',
  openGraph: {
    title: 'About Us | Pixelsurge',
    description: 'Learn about Pixelsurge - a passionate web development company dedicated to creating exceptional digital experiences.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="About Us"
        title="We're a Team of"
        highlight="Digital Creators"
        description="Pixelsurge is a web development company driven by creativity and innovation. We transform ideas into powerful digital experiences that help businesses thrive in the digital world."
      />

      {/* Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Values */}
      <ValuesSection />

      {/* CTA */}
      <CTA />
    </>
  )
}
