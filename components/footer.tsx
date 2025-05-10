"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      {/* Top Wave */}
      <div className="h-16 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-full translate-y-1">
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pb-12 pt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center">
              <div className="relative mr-2 h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image src="vk-industries-logo.jpg" alt="VK Industries Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-xl font-bold">VK Industries</span>
            </div>
            <p className="mb-6 text-blue-100">
              Leading manufacturer of electrical components in Kurukshetra, delivering quality and innovation since
              2022.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/vkindustries_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-purple-600"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="inline-block text-blue-100 transition-colors hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block text-blue-100 transition-colors hover:text-purple-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-semibold">Products</h3>
            <ul className="space-y-3">
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">DIN Rails</span>
              </li>
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">
                  Terminal Blocks
                </span>
              </li>
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">Fan Boxes</span>
              </li>
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">
                  Modular Boxes
                </span>
              </li>
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">
                  Concealed Boxes
                </span>
              </li>
              <li>
                <span className="inline-block text-blue-100 transition-colors hover:text-purple-300">MCB Boxes</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-purple-300" />
                <span className="text-blue-100">
                  Gandhi Nagar, Bishan Garh Road,
                  <br />
                  Kurukshetra, Haryana - 136118
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-purple-300" />
                <span className="text-blue-100">7814513555, 9996019520</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-purple-300" />
                <span className="text-blue-100">vkind2022@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-blue-800 pt-8 text-center">
          <p className="text-sm text-blue-200">&copy; {currentYear} VK Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
