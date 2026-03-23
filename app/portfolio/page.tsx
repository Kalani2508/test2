import { Metadata } from 'next'
import PortfolioCard from '@/components/PortfolioCard'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of successful web development projects. See how Pixelsurge has helped businesses transform their digital presence.',
  openGraph: {
    title: 'Portfolio | Pixelsurge',
    description: 'Explore our portfolio of successful web development projects.',
  },
}

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

const categories = ['All', 'Web Development', 'E-commerce', 'Web Application']

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
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-light text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>

          {/* Load More (Optional) */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              More projects coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
