'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: Record<string, unknown>) => { destroy: () => void }
    }
  }
}

interface PageHeroProps {
  badge: string
  title: string
  highlight: string
  description: string
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    let attempts = 0
    const maxAttempts = 20

    const initVanta = () => {
      if (vantaEffect.current || !heroRef.current) return

      if (window.VANTA) {
        try {
          vantaEffect.current = window.VANTA.BIRDS({
            el: heroRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf7f7f7,
            color1: 0x0012fc,
            color2: 0x00d4ff,
            birdSize: 1.5,
            wingSpan: 20.00,
            speedLimit: 5.00,
            separation: 60.00,
            alignment: 40.00,
            cohesion: 40.00,
            quantity: 4.00,
          })
        } catch (error) {
          console.error('Failed to load Vanta effect:', error)
        }
      } else if (attempts < maxAttempts) {
        attempts++
        setTimeout(initVanta, 500)
      }
    }

    initVanta()

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            {badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-1 mt-4 mb-6"
          >
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {highlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
