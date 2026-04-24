import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
}

export default function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const currentRef = imgRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(currentRef)
        }
      },
      {
        rootMargin: '150px',
        threshold: 0.1,
      }
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', wrapperClassName)}
    >
      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-card via-muted/40 to-card animate-pulse" />
      )}

      {/* Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}