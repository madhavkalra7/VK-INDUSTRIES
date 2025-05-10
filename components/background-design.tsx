"use client"

import { motion } from "framer-motion"

interface BackgroundDesignProps {
  variant?: "default" | "alt"
}

export function BackgroundDesign({ variant = "default" }: BackgroundDesignProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === "default" ? (
        <>
          <motion.div
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-100/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-10 h-32 w-32 rounded-full bg-purple-100/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-yellow-100/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-100/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-10 h-40 w-40 rounded-full bg-blue-100/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 h-36 w-36 rounded-full bg-green-100/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </>
      )}
    </div>
  )
}
