'use client'

import Link from 'next/link'
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Check,
  MessageCircle,
  Palette,
  Smartphone,
  Search,
  Zap,
  ArrowRight,
  Gift
} from 'lucide-react'
import MotionWrapper, { StaggerContainer, StaggerItem } from './MotionWrapper'

const whyNeedWebsite = [
  {
    icon: Shield,
    title: 'Credibility',
    description: 'A professional website builds trust instantly. Customers expect legitimate businesses to have an online presence.',
  },
  {
    icon: Clock,
    title: '24/7 Sales',
    description: 'Your website works around the clock, showcasing your products and services even while you sleep.',
  },
  {
    icon: Users,
    title: 'More Leads',
    description: 'Capture potential customers through contact forms and engaging content that drives inquiries.',
  },
  {
    icon: Award,
    title: 'Brand Authority',
    description: 'Establish yourself as an industry expert. A well-designed website positions you above competitors.',
  },
  {
    icon: Target,
    title: 'Traffic Control',
    description: 'Direct customers exactly where you want them – your offers, your content, your terms.',
  },
  {
    icon: TrendingUp,
    title: 'High Conversions',
    description: 'A focused landing page converts visitors into customers better than social media alone.',
  },
]

const whatsIncluded = [
  { icon: Palette, text: 'Professional custom design' },
  { icon: Smartphone, text: 'Fully mobile responsive' },
  { icon: Search, text: 'Basic SEO optimization' },
  { icon: Zap, text: 'Fast loading speed' },
  { icon: Check, text: 'One round of revisions' },
  { icon: MessageCircle, text: 'Contact form integration' },
]

const steps = [
  {
    number: '1',
    title: 'Contact Us',
    description: 'Reach out with your business details and requirements.',
  },
  {
    number: '2',
    title: 'We Design',
    description: 'Our team creates your professional single-page website.',
  },
  {
    number: '3',
    title: 'You Review',
    description: 'Review the design and request one round of changes.',
  },
  {
    number: '4',
    title: 'Go Live!',
    description: 'Your free website is launched and ready for visitors.',
  },
]

export default function FreeWebsiteContent() {
  return (
    <>
      {/* Why You Need a Website */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <MotionWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Power of Online Presence</span>
            <h2 className="heading-2 mt-4 mb-6">Why Your Business Needs a Website</h2>
            <p className="text-body">
              In today&apos;s digital world, not having a website means missing out on countless opportunities. 
              Here&apos;s why a professional website is essential for your success.
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {whyNeedWebsite.map((item, index) => (
              <StaggerItem key={index}>
                <div className="p-8 rounded-2xl bg-light hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gradient-to-br from-dark to-gray-900 text-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper animation="fadeRight">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What&apos;s Included in Your Free Website
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We&apos;re not cutting corners. Your free single-page website includes everything 
                you need to make a strong first impression online.
              </p>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {whatsIncluded.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </MotionWrapper>

            <MotionWrapper animation="fadeLeft" delay={0.2}>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 text-center">
                <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                  $0
                </div>
                <p className="text-2xl font-semibold mb-2">Completely Free</p>
                <p className="text-gray-400 mb-8">No hidden fees. No obligations.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 w-full"
                >
                  Claim Your Free Website
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <MotionWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="heading-2 mt-4 mb-6">How It Works</h2>
            <p className="text-body">
              Getting your free website is easy. Just follow these simple steps.
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Terms & Perfect For */}
      <section className="section-padding bg-light">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <MotionWrapper animation="fadeUp">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm h-full">
                <h3 className="text-2xl font-bold text-dark mb-6">Terms & Conditions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Limited to one single-page website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">One free website per business/individual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Limited time offer – may end without notice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">One round of revisions included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Domain and Hosting not included (we can advise)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">E-commerce functionality not included</span>
                  </li>
                </ul>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fadeUp" delay={0.15}>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm h-full">
                <h3 className="text-2xl font-bold text-dark mb-6">Perfect For</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Landing pages for new products or services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Coming soon / launch pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Personal portfolios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Event or promotion pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Small business starter websites</span>
                  </li>
                </ul>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Upgrade to Full Website */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper animation="fadeRight">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Love Your Free Website?</span>
              <h2 className="heading-2 mt-4 mb-6">
                Ready for a Full Website?
              </h2>
              <p className="text-body mb-6">
                Once you experience the quality of our work with your free single-page website, 
                imagine what we can do with a complete multi-page website for your business.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Multiple pages tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Advanced features like booking systems, e-commerce, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ongoing support and maintenance options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Special pricing for free website customers</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Discuss Full Website Options
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MotionWrapper>

            <MotionWrapper animation="fadeLeft" delay={0.2}>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Satisfied customers often upgrade to</p>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-4">
                    Full Websites
                  </div>
                  <p className="text-xl font-semibold text-dark mb-2">with us because they trust our quality</p>
                  <p className="text-gray-500 mt-6 text-sm">
                    Start with free. Scale when you&apos;re ready.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-light">
        <div className="container-custom mx-auto px-4 md:px-8">
          <MotionWrapper animation="zoomIn">
            <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-16 overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Don&apos;t Miss This Opportunity!
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                  This limited-time offer won&apos;t last forever. Get your free professional 
                  website today and see why businesses trust Pixelsurge.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Claim Your Free Website Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
