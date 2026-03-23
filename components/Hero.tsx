'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: Record<string, unknown>) => { destroy: () => void }
    }
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    let attempts = 0
    const maxAttempts = 20

    const initVanta = () => {
      if (vantaEffect.current || !vantaRef.current) return

      if (window.VANTA) {
        try {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
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
    <section ref={vantaRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Creating Digital Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 mb-6">
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Exceptional
            </span>{' '}
            Digital Experiences
          </h1>

          {/* Subheading */}
          <p className="text-body max-w-2xl mx-auto mb-10">
            Transform your vision into reality with our expert web development services. 
            We create stunning, high-performance websites that drive results and elevate your brand.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
