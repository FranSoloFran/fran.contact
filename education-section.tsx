"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Software Engineering",
      institution: "Universidad Argentina de la Empresa",
      year: "2023",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Universidad Argentina de la Empresa",
      year: "2019",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:bg-red-500/20 transition-colors" />
              <GraduationCap className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-sm text-red-500 mt-2">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
