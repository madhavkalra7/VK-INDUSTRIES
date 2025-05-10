"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      dropdown: true,
      items: [
        { name: "DIN Rails", href: "/products/din-rails" },
        { name: "Terminal Blocks", href: "/products/terminal-blocks" },
        { name: "Fan Boxes", href: "/products/fan-boxes" },
        { name: "Modular Boxes", href: "/products/modular-boxes" },
        { name: "Concealed Boxes", href: "/products/concealed-boxes" },
        { name: "MCB Boxes", href: "/products/mcb-boxes" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Contact Bar */}
      <div
        className={cn(
          "transition-all duration-300 py-1",
          isScrolled ? "bg-blue-900 text-white" : "bg-white/90 text-blue-900 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:7814513555" className="flex items-center hover:text-purple-400">
                <Phone className="mr-1 h-3 w-3" /> 7814513555
              </a>
              <a href="tel:9996019520" className="flex items-center hover:text-purple-400">
                <Phone className="mr-1 h-3 w-3" /> 9996019520
              </a>
              <a href="mailto:vkind2022@gmail.com" className="flex items-center hover:text-purple-400">
                <Mail className="mr-1 h-3 w-3" /> vkind2022@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.instagram.com/vkindustries_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-purple-400"
              >
                <Instagram className="mr-1 h-3 w-3" /> Follow us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn("transition-all duration-500", isScrolled ? "bg-white shadow-md" : "bg-transparent")}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-14 w-14"
            >
              <Image src="/vk-industries-logo.jpg" alt="VK Industries Logo" fill className="object-contain" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn("ml-2 text-xl font-bold", isScrolled ? "text-blue-900" : "text-white")}
            >
              VK INDUSTRIES
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="relative"
                >
                  {link.dropdown ? (
                    <div className="group relative">
                      <button
                        className={cn(
                          "flex items-center space-x-1 font-medium transition-colors",
                          isScrolled ? "text-blue-900 hover:text-purple-600" : "text-white hover:text-purple-300",
                        )}
                      >
                        <span>{link.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 hidden w-56 rounded-md bg-white py-2 shadow-xl group-hover:block hover:block">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-900"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "font-medium transition-colors",
                        isScrolled ? "text-blue-900 hover:text-purple-600" : "text-white hover:text-purple-300",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-purple-700"
                >
                  Get a Quote
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-blue-900" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-blue-900" : "text-white")} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="container mx-auto bg-white px-4 pb-6 pt-2 shadow-lg">
              <div className="mb-4 border-b border-gray-100 pb-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <a href="tel:7814513555" className="flex items-center text-blue-900 hover:text-purple-600">
                    <Phone className="mr-2 h-4 w-4" /> 7814513555
                  </a>
                  <a href="tel:9996019520" className="flex items-center text-blue-900 hover:text-purple-600">
                    <Phone className="mr-2 h-4 w-4" /> 9996019520
                  </a>
                  <a
                    href="mailto:vkind2022@gmail.com"
                    className="flex items-center text-blue-900 hover:text-purple-600"
                  >
                    <Mail className="mr-2 h-4 w-4" /> vkind2022@gmail.com
                  </a>
                  <a
                    href="https://www.instagram.com/vkindustries_/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-900 hover:text-purple-600"
                  >
                    <Instagram className="mr-2 h-4 w-4" /> Follow us on Instagram
                  </a>
                </div>
              </div>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-gray-100 pb-2">
                    {link.dropdown ? (
                      <div>
                        <div className="flex items-center justify-between py-2">
                          <span className="font-medium text-blue-900">{link.name}</span>
                        </div>
                        <ul className="ml-4 mt-2 space-y-2">
                          {link.items?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block py-1 text-gray-700 transition-colors hover:text-blue-900"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-2 font-medium text-blue-900 transition-colors hover:text-purple-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="block rounded-full bg-purple-600 px-5 py-2 text-center font-medium text-white transition-all duration-300 hover:bg-purple-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
