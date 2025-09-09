"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reduce animations on mobile for better performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Static shapes on mobile for better performance */}
        <div
          className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
          style={{
            left: "20%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            right: "10%",
            bottom: "10%",
          }}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          left: "20%",
          top: "20%",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          right: "10%",
          bottom: "10%",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          right: "30%",
          top: "30%",
        }}
      />
    </div>
  )
}
