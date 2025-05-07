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
    question: "What types of courses can I create on Quantum Path LMS?",
    answer:
      "You can create a wide variety of courses including video-based lectures, text content, interactive quizzes, assignments, discussion-based learning, and blended learning experiences. Our platform supports multiple content formats to accommodate different teaching styles and learning preferences.",
  },
  {
    question: "How does Quantum Path LMS handle student data and privacy?",
    answer:
      "We take data privacy seriously. Quantum Path LMS is compliant with major educational data privacy regulations. All student data is encrypted, stored securely, and only accessible to authorized instructors and administrators. We never sell user data to third parties.",
  },
  {
    question: "Can I integrate Quantum Path with other educational tools?",
    answer:
      "Yes, Quantum Path LMS offers robust integration capabilities with popular educational tools, video conferencing platforms, content libraries, and student information systems. Our API allows for custom integrations to fit your specific workflow needs.",
  },
  {
    question: "Is technical support available for both instructors and students?",
    answer:
      "Absolutely! We provide comprehensive support for all users. Instructors have access to our dedicated support team, extensive documentation, and training resources. Students can access our help center and receive support through their institution's administrators.",
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const navItems = [
    { name: "Home", url: "#home", icon: Cloud },
    { name: "About", url: "#about", icon: Info },
    { name: "Features", url: "#services", icon: Server },
    { name: "FAQ", url: "#faq", icon: MessageCircle },
    { name: "Plans", url: "#careers", icon: Briefcase },
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

