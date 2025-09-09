"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const experiences = [
  {
    title: "Full-Stack Developer and Digital Content Strategist",
    company: "Club Atlético Boca Juniors",
    period: "April 2016 - November 2023",
    description: [
      "Directed multimedia content strategies for the biggest soccer club in Argentina, achieving a 400% growth in fan community size within the first year.",
      "Processed and aggregated engagement data from YouTube, X, Facebook and Instagram using Pandas and NumPy to analyze content performance trends, optimize content posting schedules, and enhance fan engagement by 500%.",
      "Performed A/B tests on content strategies using Pandas and SciPy, analyzing key engagement metrics such as CTR and watch time to identify high-performing content formats and boost audience retention by 60%.",
      "Implemented transformer-based models (BERT, GPT) using PyTorch to analyze fan sentiment and identify trending topics from social media comments, providing actionable insights for content optimization.",
      "Developed and deployed a media management platform, managing all aspects of the project, including requirements engineering, business analysis, product design, UX/UI prototyping, technical documentation, and full-stack development using PostgreSQL, Express, React, and Node.js.",
      "Designed and implemented cloud architecture on AWS, ensuring scalability, performance, and reliability.",
      "Produced and managed social media content across multiple platforms, optimizing audience engagement through strategic planning and data-driven insights.",
      "Hosted and presented livestreams and virtual fan events, building strong community engagement and loyalty among fans and media.",
    ],
  },
  {
    title: "Show Host and Content Creator",
    company: "MTV Legends of Gaming: Cup Latin America",
    period: "February 2017 - June 2017",
    description: [
      "Hosted and led a competitive gaming and reality show, delivering live presentations to an audience across Latin America.",
      "Developed and executed a multi-platform social media strategy, creating engaging videos, posts, and campaigns.",
      "Analyzed and reported on engagement metrics, using performance data to refine strategies and improve audience interaction, growth and retention.",
      "Engaged with the gaming community through livestreams and digital interactions, building relationships with fans.",
    ],
  },
  {
    title: "Social Media Content Creation",
    company: "YouTube",
    period: "July 2013 - Present",
    description: [
      "Manage a YouTube channel with over 6 million subscribers and 2 billion unique views, producing technical and engaging multimedia content.",
      "Deliver live presentations for Google at high-profile events in Los Angeles and Buenos Aires, showcasing solutions for creators.",
      "Design and implement social media strategies across platforms like YouTube, Instagram, X, Tiktok, and Discord, driving community engagement, retention, and growth through platform analytics, SEO and machine learning.",
      "Lead social media campaigns with global brands, including Google, Adidas, Meta, Disney, FIFA, Fox, Electronic Arts, MTV, PUMA, Konami, Gillette, and Nissan, producing content across multiple platforms.",
      "Commissioned by Google to promote new monetization features for creators, engaging the creator community and driving adoption.",
      "Sponsored by Meta to support an initiative aimed at increasing adoption of Facebook Gaming livestreams, leveraging social media strategies to expand platform reach.",
      "Produced social media content for Disney and performed as an actor in the Disney TV series Disney 11.",
      "Received multiple awards from YouTube, Nickelodeon and industry organizations for data-driven digital strategies and audience engagement.",
    ],
  },
]

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-red-500/20 transition-shadow"
        >
          <h3 className="text-2xl font-bold text-red-500">{exp.title}</h3>
          <p className="text-gray-400 mb-2">{exp.company}</p>
          <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
          <motion.ul
            initial={false}
            animate={{ height: expandedIndex === index ? "auto" : "80px" }}
            className="text-gray-300 space-y-2 overflow-hidden"
          >
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                {item}
              </li>
            ))}
          </motion.ul>
          {exp.description.length > 2 && (
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="mt-4 text-red-500 hover:text-red-400 transition-colors focus:outline-none"
            >
              {expandedIndex === index ? "Show less" : "Show more"}
            </button>
          )}
        </motion.div>
      ))}
    </div>
  )
}
