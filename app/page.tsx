"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingShapes } from "../floating-shapes"
import { TechCircle } from "../tech-circle"
import { SocialLinks } from "../social-links"
import { ExperienceTimeline } from "../experience-timeline"
import { useRef } from "react"
import { EducationSection } from "../education-section"
import { SkillsSection } from "../skills-section"
import { ContactForm } from "../contact-form"
import { CustomButton } from "@/components/custom-button"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const navHeight = 80
      const yOffset = -navHeight - 10
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            FG
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={scrollToTop} className="hover:text-red-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection(experienceRef)} className="hover:text-red-500 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection(skillsRef)} className="hover:text-red-500 transition-colors">
              Skills
            </button>
            <CustomButton variant="outline" onClick={() => scrollToSection(contactRef)}>
              Contact Me
            </CustomButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative px-6 pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 animate-gradient" />
          <FloatingShapes />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] mx-auto lg:mx-0 mt-4 md:mt-0">
              <TechCircle />
              <div className="absolute inset-2 bg-black rounded-full" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulVjv7nNvWdythZDagqaSOVVUWBdGQ.png"
                alt="Francisco Gallardo"
                fill
                className="rounded-full object-cover p-2"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Francisco Gallardo
              </h1>
              <p className="text-xl text-red-500">Software Engineer & Digital Strategist</p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Software Engineer with over 10 years of experience in AI, deep learning, and software development,
              delivering data-driven solutions for Google, Meta, Disney, Adidas, and Boca Juniors. Founder and
              multimedia strategist of a football community with 6 million global fans.
            </p>
            <div className="flex gap-4">
              <CustomButton variant="outline" onClick={() => scrollToSection(experienceRef)} className="group">
                Experience
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.span>
              </CustomButton>
              <CustomButton variant="default" onClick={() => scrollToSection(contactRef)}>
                Contact Me
              </CustomButton>
            </div>
            <div className="pb-8 md:pb-0">
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" ref={experienceRef} className="pt-24 pb-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="pt-24 pb-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SkillsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="pt-24 pb-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SocialLinks />

          {/* Resume Downloads */}
          <div className="mt-6 flex gap-4 items-center">
            <Link
              href="/resume-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">PDF Version</span>
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/resume-es.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">Spanish</span>
            </Link>
          </div>

          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Francisco Gallardo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
