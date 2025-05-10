"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "DIN Rails",
    image: "mcb-channel.jpg",
    description: "Standard mounting rails for circuit breakers and industrial control equipment",
    link: "/products/din-rails",
  },
  {
    id: 2,
    name: "Terminal Blocks",
    image: "ttb.jpg",
    description: "Secure connection points for electrical circuits with excellent conductivity",
    link: "/products/terminal-blocks",
  },
  {
    id: 3,
    name: "Fan Boxes",
    image: "fan-box.jpg",
    description: "Sturdy mounting solutions for ceiling fans and electrical fixtures",
    link: "/products/fan-boxes",
  },
  {
    id: 4,
    name: "Modular Boxes",
    image: "moduler.jpg",
    description: "Versatile electrical enclosures for various installation requirements",
    link: "/products/modular-boxes",
  },
  {
    id: 5,
    name: "Concealed Boxes",
    image: "concealed-box.jpg",
    description: "High-quality concealed boxes for clean and seamless electrical installations",
    link: "/products/concealed-boxes",
  },
  {
    id: 6,
    name: "MCB Boxes",
    image: "mcb-box.jpg",
    description: "Durable MCB boxes designed for safety and efficient circuit management",
    link: "/products/mcb-boxes",
  },
]

export function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-700 ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-blue-900">{product.name}</h3>
            <p className="mb-4 text-gray-600">{product.description}</p>
          </div>
          <div
            className={`absolute bottom-0 left-0 h-1 bg-purple-600 transition-all duration-300 ${
              hoveredIndex === index ? "w-full" : "w-0"
            }`}
          ></div>
        </motion.div>
      ))}
    </div>
  )
}
