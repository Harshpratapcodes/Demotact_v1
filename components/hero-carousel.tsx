"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HeroTypographyProps {
  onBookConsultation: () => void
}

const quotes = [
  {
    id: 1,
    text: "You are driven and ready for electoral politics but don't know where to begin?",
    type: "question",
  },
  {
    id: 2,
    text: "Struggling to campaign in the modern age? Fuse your classic style with new tactics to win.",
    type: "question",
  },
  {
    id: 3,
    text: "If you read the pulse of society and the play of politics. Help craft the rise of visionary leaders",
  },
]

// Animation variants for different transition types
const slideDownVariants = {
  initial: { y: -120, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 120, opacity: 0 },
}

const slideUpVariants = {
  initial: { y: 120, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -120, opacity: 0 },
}


// Slower, smoother transition settings
const transitionConfig = {
  duration: 1.0, // Increased from 1.2 to 2.0 seconds
  ease: [0.16, 1, 0.3, 1] as any, // Smoother easing curve, cast as any for TS compatibility
}

export function HeroCarousel({ onBookConsultation }: HeroTypographyProps) {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  // Define animation sequence: slideDown -> slideUp -> rightToLeft -> leftToRight -> repeat
  const getAnimationVariant = (index: number) => {
    const animationCycle = index % 4
    switch (animationCycle) {
      case 0:
        return slideDownVariants
      case 1:
        return slideUpVariants
      default:
        return slideDownVariants
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
      setAnimationKey((prev) => prev + 1)
    }, 7000) // Increased from 4000 to 6000ms for slower pacing

    return () => clearInterval(interval)
  }, [])

  const currentVariant = getAnimationVariant(animationKey)

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={animationKey}
            variants={currentVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionConfig}
            className="space-y-6 md:space-y-8"
          >
            {/* Quote Mark for Quote Type with Enhanced Animation */}
            {quotes[currentQuote].type === "quote" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 3.5, // Slower animation
                  delay: 1.5, // Longer delay
                  type: "spring",
                  stiffness: 80, // Reduced stiffness for smoother motion
                  damping: 25,
                }}
                className="text-5xl md:text-7xl lg:text-8xl text-white/20 font-serif leading-none select-none"
              >
                "
              </motion.div>
            )}

            {/* Main Quote Text with Staggered Word Animation */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.6 }} // Slower fade in
                className="overflow-hidden"
              >
                <motion.h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white leading-tight tracking-tight hero-text">
                  {quotes[currentQuote].text.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 60, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 1.0, // Slower word animation
                        delay: 0.5 + index * 0.12, // Longer delays between words
                        ease: [0.16, 1, 0.3, 1], // Smoother easing
                        type: "spring",
                        stiffness: 60, // Reduced stiffness
                        damping: 20,
                      }}
                      className="inline-block mr-2 transform-gpu"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {word}
                    </motion.span>
                  ))}

          
                </motion.h1>
              </motion.div>
              
            </div>
          </motion.div>
        </AnimatePresence>

     
      </div>
    </div>
  )
}
