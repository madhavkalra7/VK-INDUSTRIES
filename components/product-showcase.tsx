"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tab } from "@headlessui/react"
import { ChevronRight } from "lucide-react"

const products = [
  {
    id: "din-rails",
    name: "DIN Rails",
    description:
      "High-quality DIN rails designed for durability and reliable performance in various electrical applications.",
    features: [
      "Corrosion-resistant material",
      "Precision engineered for perfect fit",
      "Available in multiple sizes",
      "Compliant with industry standards",
      "Heat and impact resistant",
    ],
    images: ["mcb-channel.jpg", "mcb-channel2.jpg", "mcb-channel3.jpg"],
    link: "/products/din-rails",
  },
  {
    id: "terminal-blocks",
    name: "Terminal Blocks",
    description:
      "Premium test terminal blocks that ensure secure connections and efficient electrical testing capabilities.",
    features: [
      "Superior insulation properties",
      "Easy installation and maintenance",
      "High temperature resistance",
      "Excellent electrical conductivity",
      "Compact design for space efficiency",
    ],
    images: ["ttb.jpg", "ttb2.jpg", "ttb3.jpg"],
    link: "/products/terminal-blocks",
  },
  {
    id: "fan-boxes",
    name: "Fan Boxes",
    description: "Sturdy and reliable fan boxes designed to provide secure mounting for ceiling fans and fixtures.",
    features: [
      "Heavy-duty construction",
      "Reinforced mounting points",
      "Pre-galvanized steel material",
      "Compatible with standard fan sizes",
      "Easy access for wiring",
    ],
    images: ["fan-box.jpg", "fan-box2.jpg", "fan-box3.jpg"],
    link: "/products/fan-boxes",
  },
  {
    id: "modular-boxes",
    name: "Modular Boxes",
    description: "Versatile modular boxes that offer flexibility and convenience for various electrical installations.",
    features: [
      "Modular design for customization",
      "Flame-retardant material",
      "Smooth finish for safety",
      "Multiple configuration options",
      "Durable and long-lasting",
    ],
    images: ["moduler.jpg", "moduler2.jpg", "moduler3.jpg"],
    link: "/products/modular-boxes",
  },
  {
    id: "concealed-boxes",
    name: "Concealed Boxes",
    description: "High-quality concealed boxes designed for clean installations and optimal space utilization.",
    features: [
      "Seamless integration with walls",
      "Durable construction for long-term use",
      "Multiple size options available",
      "Easy installation and access",
      "Fire-resistant materials",
    ],
    images: ["concealed-box.jpg", "concealed-box2.jpg", "concealed-box3.jpg"],
    link: "/products/concealed-boxes",
  },
  {
    id: "mcb-boxes",
    name: "MCB Boxes",
    description: "Durable MCB boxes designed for safety and efficient circuit management in electrical systems.",
    features: [
      "High-grade insulation material",
      "Secure mounting mechanism",
      "Excellent heat resistance",
      "Multiple circuit capacity",
      "Compliant with safety standards",
    ],
    images: ["mcb-box.jpg", "mcb-box2.jpg", "mcb-box3.jpg"],
    link: "/products/mcb-boxes",
  },
]

export function ProductShowcase() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="mx-auto max-w-6xl">
      <Tab.Group>
        <Tab.List className="mb-8 flex space-x-1 rounded-xl bg-blue-900/10 p-1">
          {products.map((product) => (
            <Tab
              key={product.id}
              className={({ selected }) =>
                `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-300 sm:text-base
                 ${
                   selected ? "bg-blue-900 text-white shadow" : "text-blue-900 hover:bg-blue-900/10 hover:text-blue-800"
                 }`
              }
              onClick={() => setSelectedImageIndex(0)}
            >
              {product.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {products.map((product) => (
            <Tab.Panel key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2"
              >
                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={product.images[selectedImageIndex] || "/placeholder.svg?height=400&width=600"}
                          alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex space-x-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative h-20 w-20 overflow-hidden rounded-md transition-all duration-300 ${
                          selectedImageIndex === index
                            ? "ring-2 ring-purple-600 ring-offset-2"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg?height=80&width=80"}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">{product.name}</h3>
                  <p className="mb-6 text-gray-700">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="mb-3 text-lg font-semibold text-blue-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <ChevronRight className="mr-2 h-5 w-5 text-purple-600" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
