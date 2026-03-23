import { ExternalLink } from 'lucide-react'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  image: string
  link?: string
}

export default function PortfolioCard({ title, category, description, image, link }: PortfolioCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Link Icon */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-primary text-sm font-medium">{category}</span>
        <h3 className="heading-3 mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
