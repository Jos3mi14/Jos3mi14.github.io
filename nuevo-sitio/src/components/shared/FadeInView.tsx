import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
}

export default function FadeInView({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 30,
  once = true,
}: FadeInViewProps) {
  const initialOffset = (() => {
    switch (direction) {
      case 'up':
        return { y: distance }
      case 'down':
        return { y: -distance }
      case 'left':
        return { x: distance }
      case 'right':
        return { x: -distance }
      case 'none':
        return {}
    }
  })()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.12, margin: '0px 0px -60px 0px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
