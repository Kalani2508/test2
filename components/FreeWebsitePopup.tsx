'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { X, Gift } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const POPUP_DELAYS = [5000, 30000, 90000] // 5s, 30s, 90s

export default function FreeWebsitePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissCount, setDismissCount] = useState(0)
  const [isFullyDismissed, setIsFullyDismissed] = useState(false)

  const schedulePopup = useCallback((delayIndex: number) => {
    if (delayIndex >= POPUP_DELAYS.length) {
      setIsFullyDismissed(true)
      sessionStorage.setItem('freeWebsitePopupDismissed', 'true')
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, POPUP_DELAYS[delayIndex])

    return timer
  }, [])

  useEffect(() => {
    const dismissed = sessionStorage.getItem('freeWebsitePopupDismissed')
    if (dismissed) {
      setIsFullyDismissed(true)
      return
    }

    // Schedule first popup at 15 seconds
    const timer = schedulePopup(0)

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [schedulePopup])

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
    
    const newDismissCount = dismissCount + 1
    setDismissCount(newDismissCount)
    
    // Schedule next popup if there are more delays
    if (newDismissCount < POPUP_DELAYS.length) {
      schedulePopup(newDismissCount)
    } else {
      setIsFullyDismissed(true)
      sessionStorage.setItem('freeWebsitePopupDismissed', 'true')
    }
  }

  if (isFullyDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 shadow-2xl w-64">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Content */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-90">Limited Offer</span>
              </div>
              <h3 className="text-lg font-bold mb-1">
                Get a <span className="text-yellow-300">FREE</span> Website!
              </h3>
              <p className="text-sm text-white/80 mb-3">
                Professional single-page website at no cost.
              </p>
              <Link 
                href="/free-website"
                className="inline-flex items-center text-sm font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                Claim Now →
              </Link>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
