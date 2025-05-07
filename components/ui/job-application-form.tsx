"use client"

import type React from "react"

import { useState, useRef } from "react"
import { createPortal } from "react-dom"
import { Button } from "./button"
import { X, Upload } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface JobApplicationFormProps {
  isOpen: boolean
  onClose: () => void
  position?: string
}

export function JobApplicationForm({ isOpen, onClose, position = "Not specified" }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position,
    experience: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API call
      console.log("Application submitted:", formData)
      onClose()
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
      })
      setFileName("")
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-lg bg-background p-6 shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold">Job Application</h2>
              <p className="text-muted-foreground">Position: {position}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="position" className="mb-1 block text-sm font-medium">
                  Position
                </label>
                <input
                  id="position"
                  name="position"
                  type="text"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="experience" className="mb-1 block text-sm font-medium">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="mb-1 block text-sm font-medium">
                  Resume
                </label>
                <input
                  ref={fileInputRef}
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Resume
                  </Button>
                  {fileName && (
                    <span className="truncate text-sm text-muted-foreground" title={fileName}>
                      {fileName}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}

