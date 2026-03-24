'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  highlight?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/free-website', label: 'Free Website', highlight: true },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Pixelsurge"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  link.highlight 
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
                {link.highlight && <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Free</span>}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 py-2 ${
                    link.highlight 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {link.highlight && <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Free</span>}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
