"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  primaryCTA: string
  secondaryCTA: string
  backgroundImage?: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Empowering Political Change",
    subtitle: "with Strategy, Data & Design",
    description:
      "We help leaders win hearts, minds, and elections through innovative campaigns and grassroots mobilization",
    primaryCTA: "Book a Strategy Session",
    secondaryCTA: "Explore Services",
    backgroundImage: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Digital Campaign Excellence",
    subtitle: "Reach Voters Where They Are",
    description:
      "Transform your political presence with cutting-edge digital strategies that engage voters across all platforms",
    primaryCTA: "Start Digital Campaign",
    secondaryCTA: "View Case Studies",
    backgroundImage: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Data-Driven Victory",
    subtitle: "Analytics That Win Elections",
    description: "Leverage the power of voter analytics and predictive modeling to make informed campaign decisions",
    primaryCTA: "Get Analytics Report",
    secondaryCTA: "Learn More",
    backgroundImage: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Ground Game Mastery",
    subtitle: "Booth Management & Volunteers",
    description: "Master the ground game with comprehensive booth management and volunteer coordination services",
    primaryCTA: "Plan Ground Operations",
    secondaryCTA: "Training Programs",
    backgroundImage: "/placeholder.svg?height=600&width=800",
  },
]

interface HeroCarouselProps {
  onBookConsultation: () => void
}

export function HeroCarousel({ onBookConsultation }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center px-4 max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/90 via-aqua/85 to-teal/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8 border border-white/30 shadow-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold text-white/95 mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-button-gradient hover:bg-reverse-gradient text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
                onClick={onBookConsultation}
              >
                {slides[currentSlide].primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                {slides[currentSlide].secondaryCTA}
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-button-gradient"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
