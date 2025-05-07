"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { BookOpen, Calendar, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { LottieAnimation } from "@/components/ui/lottie-animation"

interface ServicesProps {
  onInView?: (sectionId: string) => void
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  animation?: string
}

function ServiceCard({ icon, title, description, animation }: ServiceCardProps) {
  return (
    <motion.div className="min-h-[14rem] list-none group">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant="blue"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-2">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-primary/10 p-3 text-primary/70 group-hover:text-blue-500 transition-colors">
              {animation ? (
                <div className="h-8 w-8 text-blue-500">
                  <LottieAnimation animationData={animation} className="h-8 w-8" />
                </div>
              ) : (
                <div className="h-8 w-8 flex items-center justify-center">{icon}</div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="pt-0.5 text-lg leading-[1.25rem] font-medium font-sans tracking-[-0.02em] md:text-xl md:leading-[1.5rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="font-sans font-normal text-xs leading-[1rem] md:text-sm md:leading-[1.25rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection({ onInView }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onInView) {
          onInView("services")
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [onInView])

  const services = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Course Management",
      description:
        "Easily create, organize, and deliver engaging course content. Our intuitive interface makes managing your educational materials simple and efficient.",
      animation: "/animations/typescript.json",
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: "Learning Schedules",
      description:
        "Schedule classes, set deadlines, and manage learning paths. Help your students stay on track with automated reminders and progress tracking.",
      animation: "/animations/data-usage.json",
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Assessments & Certifications",
      description:
        "Create quizzes, assignments, and issue certifications. Track student progress with comprehensive analytics and reporting tools.",
      animation: "/animations/server.json",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Collaborative Learning",
      description:
        "Foster engagement with discussion forums, group projects, and interactive learning experiences. Build a community around your educational content.",
      animation: "/animations/solution.json",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="relative z-10 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          title="Key Features"
          description="Quantum Path LMS provides a comprehensive suite of tools designed to enhance the learning experience. From course creation to student engagement, our platform offers everything you need to deliver exceptional educational content."
          className="mb-12"
          titleClassName="text-2xl md:text-3xl"
          descriptionClassName="text-base text-sm font-normal"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

