import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { ContactSection, ProcessSection } from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Pixelsurge. We\'re here to help bring your web development project to life. Contact us for a free consultation.',
  openGraph: {
    title: 'Contact Us | Pixelsurge',
    description: 'Get in touch with Pixelsurge. We\'re here to help bring your web development project to life.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Contact Us"
        title="Let's"
        highlight="Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Section */}
      <ContactSection />

      {/* What to Expect Section */}
      <ProcessSection />
    </>
  )
}
