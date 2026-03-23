'use client'

import PortfolioCard from './PortfolioCard'
import MotionWrapper, { StaggerContainer, StaggerItem } from './MotionWrapper'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'A modern online store with seamless checkout experience, inventory management, and customer analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with modern design, optimized for conversions and search engines.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    category: 'Web Application',
    description: 'Online reservation system with real-time availability, table management, and customer notifications.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing website with advanced search filters, virtual tours, and agent dashboard.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    link: '#',
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    category: 'Web Application',
    description: 'Patient management system with appointment booking, medical records, and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    link: '#',
  },
  {
    id: 6,
    title: 'Educational Platform',
    category: 'E-commerce',
    description: 'Online learning platform with course management, video streaming, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    link: '#',
  },
]

export default function PortfolioContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-8">
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

        {/* Load More */}
        <MotionWrapper animation="fadeUp" delay={0.5} className="text-center mt-12">
          <p className="text-gray-500">
            More projects coming soon...
          </p>
        </MotionWrapper>
      </div>
    </section>
  )
}
