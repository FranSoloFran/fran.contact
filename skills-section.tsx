"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Cloud, Palette, Users, Video, Languages } from "lucide-react"
import { useState } from "react"

const skillCategories = [
  {
    name: "Full Stack Engineering",
    icon: <Code className="w-6 h-6" />,
    skills: ["React", "Node.js", "TypeScript", "Javascript", "Python"],
  },
  {
    name: "Database Management",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    name: "Machine Learning & AI",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "PyTorch",
      "TensorFlow",
      "BERT",
      "GPT",
      "RNN",
      "LSTM",
      "GRU",
      "ResNet",
      "U-Net",
      "OpenAI Gym",
      "PyTorch Geometric",
    ],
  },
  {
    name: "Data Processing & Analytics",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["NumPy", "SciPy", "Polars", "Pandas", "PySpark", "Tableau", "Looker", "Power BI", "Matplotlib", "Seaborn"],
  },
  {
    name: "Design & UX",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Adobe XD", "Figma", "Material Design", "Miro", "Maze"],
  },
  {
    name: "Project Management",
    icon: <Users className="w-6 h-6" />,
    skills: ["Scrum", "Kanban", "Jira", "Trello"],
  },
  {
    name: "Content Creation",
    icon: <Video className="w-6 h-6" />,
    skills: ["Adobe Creative Cloud", "Photoshop", "Premiere Pro", "Ableton Live", "OBS Studio"],
  },
  {
    name: "Languages",
    icon: <Languages className="w-6 h-6" />,
    skills: ["Native Spanish", "English (C2 Proficiency, Cambridge Certified)"],
  },
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <>
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <motion.button
                className={`w-full text-left p-4 rounded-lg flex items-center space-x-4 transition-colors ${
                  selectedCategory === index ? "bg-red-500 text-white" : "bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </motion.button>

              {/* Mobile: Show skills directly under each button */}
              <div className="md:hidden">
                {selectedCategory === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 bg-gray-900 rounded-lg p-6"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      {category.icon}
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                    <div className="grid gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="bg-gray-800 p-3 rounded"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Show skills in separate column */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block bg-gray-900 rounded-lg p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            {skillCategories[selectedCategory].icon}
            <h3 className="text-xl font-bold">{skillCategories[selectedCategory].name}</h3>
          </div>
          <div className="grid gap-3">
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-3 rounded"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
