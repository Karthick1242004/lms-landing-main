"use client"

import { useState, useEffect } from "react"
import { CombinedHero } from "@/components/ui/combined-hero"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { FaqSection } from "@/components/blocks/faq"
import { ContactForm } from "@/components/ui/contact-form"
import { Footerdemo } from "@/components/ui/footer-section"
import { AboutSection } from "@/components/ui/about-section"
import { ServicesSection } from "@/components/ui/services-section"
import { Cloud, Server, MessageCircle, Phone, Info, Briefcase } from "lucide-react"
import { CareerSection } from "@/components/ui/career-section"
import { Loader } from "@/components/ui/loader"
import { AnimatePresence } from "framer-motion"

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of cloud solutions including web application development, data analytics, cloud infrastructure management, and custom software solutions tailored to your business needs.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security protocols, regular security audits, encrypted data transmission, and follow best practices for secure cloud computing to protect your valuable data.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process follows an agile methodology with regular client communication, iterative development cycles, and continuous integration/deployment practices to ensure high-quality deliverables.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance services to ensure your applications run smoothly. Our team is available to address any issues and implement updates as needed.",
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const navItems = [
    { name: "Home", url: "#home", icon: Cloud },
    { name: "About", url: "#about", icon: Info },
    { name: "Services", url: "#services", icon: Server },
    { name: "FAQ", url: "#faq", icon: MessageCircle },
    { name: "Careers", url: "#careers", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  const handleSectionInView = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  // Set up intersection observers for all sections
  useEffect(() => {
    const sections = ["home", "about", "services", "careers", "faq", "contact"]

    const observers = sections
      .map((sectionId) => {
        const element = document.getElementById(sectionId)
        if (!element) return null

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId)
              }
            })
          },
          { threshold: 0.3 },
        )

        observer.observe(element)
        return { observer, element }
      })
      .filter(Boolean)

    return () => {
      observers.forEach((item) => {
        if (item) {
          item.observer.unobserve(item.element)
        }
      })
    }
  }, [])

  // Show loader for 2 seconds when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <main className="relative z-10">
        <div id="home" className="relative">
          <CombinedHero />
        </div>
        <AboutSection />
        <ServicesSection onInView={handleSectionInView} />
        <div id="faq">
          <FaqSection
            title="Frequently Asked Questions"
            description="Everything you need to know about our platform"
            items={FAQS}
            contactInfo={{
              title: "Still have questions?",
              description: "We're here to help you",
              buttonText: "Contact Support",
              onContact: scrollToContact,
            }}
          />
        </div>
        <ContactForm />
        <Footerdemo />
        <NavBar items={navItems} activeSection={activeSection} />
      </main>
    </>
  )
}

