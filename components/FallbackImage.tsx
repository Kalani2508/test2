'use client'

import { useState } from 'react'

interface FallbackImageProps {
  src: string
  alt: string
  className?: string
}

export default function FallbackImage({ src, alt, className }: FallbackImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
