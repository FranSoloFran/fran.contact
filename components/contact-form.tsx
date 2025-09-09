"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions"
import { CustomButton } from "@/components/custom-button"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    try {
      await sendEmail({ name, email, message })
      setIsSent(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Failed to send email:", error)
    } finally {
      setIsSending(false)
    }
  }

  if (isSent) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-green-500 mb-4">Thank you for your message!</h3>
        <p className="text-gray-300">I'll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-gray-800 text-white border-gray-700"
          rows={4}
        />
      </div>
      <CustomButton type="submit" disabled={isSending} className="w-full">
        {isSending ? "Sending..." : "Send Message"}
      </CustomButton>
    </form>
  )
}
