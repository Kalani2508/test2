import { Globe, Palette, ShoppingCart, Smartphone, Zap, Shield } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites built with modern frameworks and best practices for optimal performance and scalability.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with seamless checkout experiences and robust inventory management.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Websites that look and work perfectly on all devices, from desktop to mobile.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading speeds and optimized performance for better user experience and SEO.',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and security monitoring to keep your website running smoothly.',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="heading-2 mt-4 mb-6">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-body">
            We offer comprehensive web development services tailored to your unique needs. 
            From concept to launch and beyond, we&apos;re your trusted digital partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-light hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
