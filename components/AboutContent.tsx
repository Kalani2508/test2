'use client'

import { Target, Eye, Heart, Lightbulb, Users, Rocket } from 'lucide-react'
import FallbackImage from './FallbackImage'
import MotionWrapper, { StaggerContainer, StaggerItem } from './MotionWrapper'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do. Our passion for web development drives us to create exceptional work every single day.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of the curve, constantly exploring new ideas and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork. Working closely with our clients ensures we truly understand their vision.',
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'We set high standards and strive to exceed them. Quality is at the heart of everything we create.',
  },
]

export function StorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper animation="fadeRight">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="heading-2 mt-4 mb-6">Building Digital Dreams Since Day One</h2>
            <div className="space-y-4 text-body">
              <p>
                Pixelsurge was founded with a simple yet powerful vision: to help businesses 
                succeed in the digital age through exceptional web development and design.
              </p>
              <p>
                What started as a small team with big dreams has grown into a dynamic agency 
                serving clients across various industries. Our journey has been defined by our 
                commitment to quality, innovation, and client success.
              </p>
              <p>
                Today, we continue to push boundaries, embracing new challenges and opportunities 
                to deliver digital solutions that make a real difference for our clients.
              </p>
            </div>
          </MotionWrapper>
          <MotionWrapper animation="fadeLeft" delay={0.2} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <FallbackImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Pixelsurge Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

export function MissionVisionSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <MotionWrapper animation="fadeUp">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-2 mb-4">Our Mission</h3>
              <p className="text-body">
                To empower businesses with innovative web solutions that drive growth, 
                enhance user experiences, and create lasting digital impact. We are committed 
                to delivering excellence in every project, treating each client&apos;s vision 
                as our own.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm h-full">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-2 mb-4">Our Vision</h3>
              <p className="text-body">
                To be a leading force in digital innovation, recognized for our creativity, 
                technical expertise, and unwavering commitment to client success. We envision 
                a future where every business, regardless of size, has access to world-class 
                digital solutions.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

export function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        <MotionWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
          <h2 className="heading-2 mt-4 mb-6">What Drives Us Forward</h2>
          <p className="text-body">
            Our core values shape everything we do. They guide our decisions, 
            define our culture, and ensure we deliver the best for our clients.
          </p>
        </MotionWrapper>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <div className="text-center p-6 rounded-2xl hover:bg-light transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-3 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
