'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Check, ExternalLink, Sparkles } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

const featuredProjects = [
  {
    id: 1,
    name: 'FLINE',
    type: 'E-Commerce Platform',
    liveUrl: 'https://fline.lk',
    description: 'Premium streetwear e-commerce website for Sri Lanka\'s rising t-shirt brand. Built with a clean, minimalist design, fast performance, smooth shopping experience, and islandwide delivery integration.',
    image: '/images/fline-featured.png',
    logo: '/images/fline-logo.png',
    highlights: [
      'Modern minimalist design',
      'Fast & mobile-optimized',
      'Seamless checkout',
      'Sri Lanka focused delivery system',
    ],
    badge: 'Recently Launched',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Section Header */}
        <MotionWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="heading-2 mt-4 mb-6">Featured Projects</h2>
          <p className="text-body">
            Real projects we&apos;ve delivered for our clients. See our work in action.
          </p>
        </MotionWrapper>

        {/* Featured Projects */}
        {featuredProjects.map((project) => (
          <MotionWrapper key={project.id} animation="fadeUp" delay={0.2}>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image 
                    src={project.image}
                    alt={`${project.name} - Featured Project`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
                    {project.name}
                  </h3>
                  
                  {/* Logo */}
                  {project.logo && (
                    <div className="mb-6 flex justify-center">
                      <Image 
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        width={200}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  )
}
