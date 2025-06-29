"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-aqua/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-12 h-12 bg-teal/25 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Squares */}
      <motion.div
        className="absolute top-60 right-10 w-8 h-8 bg-primary/15 transform rotate-45"
        animate={{
          rotate: [45, 135, 45],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-6 h-6 bg-aqua/20 transform rotate-45"
        animate={{
          rotate: [45, -45, 45],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}

export function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="url(#waveGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(14, 165, 233)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function ConnectedDots() {
  const dots = [
    { x: 10, y: 20, delay: 0 },
    { x: 30, y: 40, delay: 0.2 },
    { x: 60, y: 30, delay: 0.4 },
    { x: 80, y: 60, delay: 0.6 },
    { x: 20, y: 70, delay: 0.8 },
    { x: 50, y: 80, delay: 1 },
    { x: 90, y: 20, delay: 1.2 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Connection Lines */}
        {dots.map((dot, index) => {
          const nextDot = dots[(index + 1) % dots.length]
          return (
            <motion.line
              key={`line-${index}`}
              x1={dot.x}
              y1={dot.y}
              x2={nextDot.x}
              y2={nextDot.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: dot.delay + 1,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* Dots */}
        {dots.map((dot, index) => (
          <motion.circle
            key={`dot-${index}`}
            cx={dot.x}
            cy={dot.y}
            r="0.5"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: dot.delay,
              ease: "easeOut",
            }}
          />
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(14, 165, 233)" />
            <stop offset="50%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(20, 184, 166)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
