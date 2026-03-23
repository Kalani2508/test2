import { CheckCircle2, Users, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Quality Focused',
    description: 'We never compromise on quality. Every project is crafted with attention to detail and industry best practices.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time and deadlines. Our efficient workflow ensures projects are delivered on schedule.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'With years of experience and numerous successful projects, we have a track record of delivering exceptional results.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-6">
              Your Trusted Partner for Digital Success
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8">
              We combine creativity, technical expertise, and strategic thinking to deliver 
              web solutions that make a real impact on your business.
            </p>
            
            <div className="space-y-5 sm:space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square max-w-sm mx-auto lg:max-w-none bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-6 sm:p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  100%
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4">Commitment to</p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">Your Success</p>
              </div>
            </div>
            {/* Decorative elements - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
