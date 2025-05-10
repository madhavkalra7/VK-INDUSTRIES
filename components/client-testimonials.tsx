"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Electro Solutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "VK Industries has been our trusted supplier for electrical components for over 5 years. Their products are of exceptional quality and their service is outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Power Systems Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We've been using VK Industries' MCB channels and terminal blocks in our projects, and they have consistently delivered reliable performance. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Bright Electricals",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The quality of VK Industries' products is unmatched. Their modular boxes have become an essential part of our electrical installations due to their durability and design.",
    rating: 4,
  },
]

export function ClientTestimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [current, autoplay])

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl bg-blue-800 p-8 shadow-xl"
        >
          <div className="mb-6 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${
                  i < testimonials[current].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <p className="mb-8 text-center text-xl italic text-white">"{testimonials[current].quote}"</p>
          <div className="flex items-center justify-center">
            <div>
              <h4 className="font-semibold text-white">{testimonials[current].name}</h4>
              <p className="text-sm text-blue-200">{testimonials[current].company}</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-purple-600 opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-purple-600 opacity-20"></div>
          <div className="absolute -left-2 -top-2 text-4xl text-white opacity-20">"</div>
          <div className="absolute -bottom-8 -right-2 rotate-180 text-4xl text-white opacity-20">"</div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-blue-900 shadow-lg transition-all duration-300 hover:bg-blue-50"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-blue-900 shadow-lg transition-all duration-300 hover:bg-blue-50"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
    </div>
  )
}
