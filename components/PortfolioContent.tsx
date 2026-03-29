'use client'

import PortfolioCard from './PortfolioCard'
import MotionWrapper, { StaggerContainer, StaggerItem } from './MotionWrapper'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platforms',
    category: 'We Can Build',
    description: 'We can create modern online stores with seamless checkout, inventory management, payment integration, and customer analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Corporate Websites',
    category: 'We Can Build',
    description: 'We design professional corporate websites with modern aesthetics, optimized for conversions and search engine visibility.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Booking Systems',
    category: 'We Can Build',
    description: 'We develop online reservation systems with real-time availability, scheduling, and automated customer notifications.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    link: '/contact',
  },
  {
    id: 4,
    title: 'Real Estate Platforms',
    category: 'We Can Build',
    description: 'We build property listing websites with advanced search filters, virtual tours, maps integration, and agent dashboards.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    link: '/contact',
  },
  {
    id: 5,
    title: 'Business Portals',
    category: 'We Can Build',
    description: 'We create custom business portals with user management, dashboards, reporting, and workflow automation features.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    link: '/contact',
  },
  {
    id: 6,
    title: 'Learning Platforms',
    category: 'We Can Build',
    description: 'We develop online learning platforms with course management, video streaming, quizzes, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    link: '/contact',
  },
]

export default function PortfolioContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Section Header */}
        <MotionWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-6">What We Build</h2>
          <p className="text-body">
            We specialize in building high-quality websites and web applications tailored to your needs. 
            Whether you need an e-commerce store, corporate website, booking system, real estate platform, 
            business portal, or learning management system — we&apos;ve got you covered.
          </p>
        </MotionWrapper>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <PortfolioCard
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <MotionWrapper animation="fadeUp" delay={0.5} className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Have a different project in mind? <a href="/contact" className="text-primary font-semibold hover:underline">Let&apos;s discuss your ideas</a>
          </p>
        </MotionWrapper>
      </div>
    </section>
  )
}
