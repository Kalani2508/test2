'use client'

import { motion } from 'framer-motion'

export default function FreeWebsiteHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-light">
      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block bg-red-100 text-red-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full"
          >
            Limited Time Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-1 mt-6 mb-6"
          >
            Get Your{' '}
            <span className="text-red-500">Free</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Single-Page Website
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-2xl mx-auto"
          >
            Experience our quality firsthand with a completely free, professionally designed 
            single-page website. No strings attached – let our work speak for itself.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
