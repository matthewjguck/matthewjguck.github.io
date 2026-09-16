'use client'

import React, {
  cloneElement,
  isValidElement,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
} from 'react'
import { motion, type Transition } from 'framer-motion'

interface ImageZoomProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  children: ReactElement
  zoomScale?: number
  transition?: Transition
  style?: CSSProperties
  zoomOnClick?: boolean
  zoomOnHover?: boolean
  disabled?: boolean
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

const DEFAULT_TRANSITION: Transition = { type: 'spring', stiffness: 200, damping: 28 }

export function ImageZoom({
  children,
  zoomScale = 3,
  transition = DEFAULT_TRANSITION,
  style,
  zoomOnClick = true,
  zoomOnHover = true,
  disabled = false,
  width,
  height,
  className = '',
  ...props
}: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [origin, setOrigin] = useState('50% 50%')
  const [clicked, setClicked] = useState(false)

  const updateOrigin = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = ((e.clientX - rect.left) / rect.width) * 100
    const py = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${px}% ${py}%`)
  }

  if (disabled) {
    return (
      <div className={className} style={{ width, height, ...style }} {...props}>
        {children}
      </div>
    )
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!zoomOnHover) return
    updateOrigin(e)
    setScale(zoomScale)
  }

  const handleMouseLeave = () => {
    if (!clicked) setScale(1)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!zoomOnClick) return
    updateOrigin(e)
    setClicked((prev) => {
      const next = !prev
      setScale(next ? zoomScale : 1)
      return next
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${zoomOnClick ? 'cursor-zoom-in' : ''} ${className}`}
      style={{ width, height, ...style }}
      onMouseMove={zoomOnHover ? updateOrigin : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      <motion.div
        animate={{ scale }}
        transition={transition}
        style={{ transformOrigin: origin, width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface ImageProps extends React.ComponentProps<'img'> {
  objectFit?: CSSProperties['objectFit']
  as?: React.ElementType
}

export function Image({ objectFit = 'cover', as: Component = 'img', className = '', style, ...props }: ImageProps) {
  return (
    <Component
      className={`w-full h-full ${className}`}
      style={{ objectFit, ...style }}
      {...props}
    />
  )
}
