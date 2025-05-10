"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "mcb-channel.jpg",
    title: "DIN Rails",
    subtitle: "Premium Quality Electrical Components",
    description: "Industry-standard DIN Rails for mounting circuit breakers and control equipment",
    cta: "Explore Products",
    link: "/products/din-rails",
  },
  {
    id: 2,
    image: "ttb.jpg",
    title: "Terminal Blocks",
    subtitle: "Reliable Connection Solutions",
    description: "High-performance terminal blocks for secure electrical connections",
    cta: "View Details",
    link: "/products/terminal-blocks",
  },
  {
    id: 3,
    image: "moduler.jpg",
    title: "Modular Boxes",
    subtitle: "Versatile Electrical Housing",
    description: "Durable modular boxes designed for various electrical applications",
    cta: "Learn More",
    link: "/products/modular-boxes",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [current, autoplay])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-full w-full"
        >
          <Image
            src={slides[current].image || "/placeholder.svg?height=600&width=1200"}
            alt={slides[current].title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-2xl text-white"
              >
                <span className="mb-2 inline-block rounded-full bg-purple-600 px-4 py-1 text-sm font-medium">
                  {slides[current].subtitle}
                </span>
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{slides[current].title}</h1>
                <p className="mb-6 text-lg md:text-xl">{slides[current].description}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
    </section>
  )
}
