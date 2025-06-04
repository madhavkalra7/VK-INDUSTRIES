"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { id: 1, value: 7, label: "Years Experience", suffix: "+" },
  { id: 2, value: 100, label: "Happy Clients", suffix: "+" },
  { id: 3, value: 500, label: "Products Delivered", suffix: "+" },
  { id: 4, value: 30, label: "Team Members", suffix: "+" },
]

export function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000 // 2 seconds for the animation
        const steps = 30 // Number of steps to reach the target
        const increment = Math.ceil(stat.value / steps)
        let count = 0

        return setInterval(() => {
          count = Math.min(count + increment, stat.value)
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = count
            return newCounts
          })

          if (count >= stat.value) {
            clearInterval(intervals[index])
          }
        }, duration / steps)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isInView])

  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-900 to-purple-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">
                {counts[index]}
                <span className="text-purple-300">{stat.suffix}</span>
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
