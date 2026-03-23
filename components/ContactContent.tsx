'use client'

import { Phone, MapPin, Clock, Facebook, Linkedin } from 'lucide-react'
import ContactForm from './ContactForm'
import MotionWrapper, { StaggerContainer, StaggerItem } from './MotionWrapper'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+94 74 252 65 65',
    link: 'tel:+94742526565',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    content: '+94 74 252 65 65',
    link: 'https://wa.me/94742526565',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Kudagalgamuwa, Kurunegala, Sri Lanka',
    link: null,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: null,
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/thepixelsurge',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pixel-surge/',
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <MotionWrapper animation="fadeRight" className="lg:col-span-1">
            <h2 className="heading-2 mb-8">Get in Touch</h2>
            
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-dark mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary rounded-lg transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm font-medium text-primary group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-light rounded-2xl">
              <h3 className="font-semibold text-dark mb-3">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                Not sure where to start? Book a free 30-minute consultation call 
                with our team to discuss your project needs.
              </p>
            </div>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper animation="fadeLeft" delay={0.2} className="lg:col-span-2">
            <div className="bg-light rounded-3xl p-8 md:p-12">
              <h2 className="heading-2 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'We Receive Your Message',
      description: 'Your inquiry lands in our inbox and our team reviews it promptly.',
    },
    {
      number: '2',
      title: 'Discovery Call',
      description: 'We schedule a call to understand your project requirements and goals.',
    },
    {
      number: '3',
      title: 'Custom Proposal',
      description: 'We prepare a detailed proposal tailored to your specific needs.',
    },
    {
      number: '4',
      title: 'Project Kickoff',
      description: 'Once approved, we start bringing your vision to life.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        <MotionWrapper animation="fadeUp" className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">What Happens Next?</h2>
        </MotionWrapper>
        
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
