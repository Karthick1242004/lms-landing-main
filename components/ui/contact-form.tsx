"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "./button"
import { SectionHeading } from "@/components/ui/section-heading"

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      // Here you would typically send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      setFormStatus("success")
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-12 md:py-16 relative z-10" id="contact">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <SectionHeading
          title={`Let's work together${"."}`}
          description="Ready to start your next project? Get in touch and let's create something amazing."
          align="center"
          titleClassName="mb-4"
          descriptionClassName="text-base mb-8"
          className="mb-10"
        />
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border bg-background px-3 py-4 text-sm border-border focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border bg-background px-3 py-4 text-sm border-border focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-lg border bg-background px-3 py-4 text-sm border-border focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border bg-background px-3 py-4 text-sm border-border focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="web-app">Web/Native App Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="data-integration">Data Integration</option>
                  <option value="custom-solutions">Custom Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry"
                  required
                  rows={4}
                  className="w-full rounded-lg border bg-background px-3 py-4 text-sm border-border focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>

              {formStatus === "success" && (
                <div className="text-sm text-green-500">Your message has been sent successfully!</div>
              )}

              {formStatus === "error" && (
                <div className="text-sm text-red-500">There was an error sending your message. Please try again.</div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </motion.form>
          </div>

          <div className="space-y-5">
            {/* Jobs & Internships */}
            <div className="p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                For Jobs & Internships
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hr@thecloud.company"
                  className="flex items-center gap-3 text-base hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary/70 transition-colors" />
                  yourcompany@mail.com
                </a>
              </div>
            </div>

            {/* Sales Enquiries */}
            <div className="p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                For Sales Enquiries
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@thecloud.company"
                  className="flex items-center gap-3 text-base hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary/70 transition-colors" />
                  yourcompany@mail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Our Address</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary/70 transition-colors" />
                  <div className="space-y-2">
                    <p className="text-base">Street Addrress with city</p>
                    <a
                      href="https://folio-lynkr-main.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+918072558132"
                  className="flex items-center gap-3 text-base hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary/70 transition-colors" />
                  +91 1234567890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

