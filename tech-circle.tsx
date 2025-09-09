"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TechCircle() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const icons = Array(isMobile ? 8 : 12).fill(null)
  const radius = isMobile ? 120 : 150

  return (
    <div className="absolute inset-0">
      {icons.map((_, index) => {
        const angle = (index / icons.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={index}
            className="absolute w-8 h-8 flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: isMobile ? 30 : 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-3 h-3 bg-red-500 rounded-full" />
          </motion.div>
        )
      })}
      <motion.div
        className="absolute inset-0 border-2 border-red-500 rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: isMobile ? 45 : 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
