"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

interface Service {
  title: string
  content: string
  image: string
}

const services = [
  {
    title: "Web/Native Application Development",
    content:
      "Take control of your data with our custom web apps. Built with the latest technologies, our web apps provide accessibility from any device with a web browser.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    title: "Data Analytics",
    content:
      "Unlock the full potential of your data with our advanced analytics techniques. From predictive modelling to data visualisation, our team works closely with your data analytics team to deliver custom solutions and help you make data-driven decisions.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    title: "Data Integration",
    content:
      "Get a unified view of your data with our integration services. We can connect data from various sources like databases, CRMs, ERPs and APIs.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    title: "Custom Solutions",
    content:
      "Our team works closely with you to understand your specific needs and goals. We deliver tailor-made solutions that might involve more than one of our offerings, to meet your unique use-cases and data analytics needs.",
    image: "/placeholder.svg?height=500&width=800",
  },
]

export function ScrollServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  // const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section ref={containerRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          description="From custom web apps to native mobile apps, we deliver cutting-edge solutions tailored to your specific needs. Explore our services now and turn your data into actionable insights and a competitive advantage."
        />

        <div className="space-y-40 md:space-y-64">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>

        {/* Plans Section */}
        <div className="mt-40 md:mt-64">
          <SectionHeading
            title="Engagement Models"
            description="Choose the perfect engagement model that aligns with your business requirements"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fixed Cost",
                price: "Predictable",
                description: "Agree on a fixed price for the project. We deliver within that budget.",
                features: [
                  "Clear project scope",
                  "Predictable budget",
                  "Defined timeline",
                  "No unexpected costs",
                  "Regular progress updates",
                ],
                popular: false,
              },
              {
                name: "Time & Material",
                price: "Flexible",
                description: "Charged based on time and materials used. Best for projects with volatile scope.",
                features: [
                  "Adaptable to changing requirements",
                  "Pay for actual work done",
                  "Transparent billing",
                  "Flexible development process",
                  "Continuous delivery",
                  "Regular progress reviews",
                  "Scalable resources",
                ],
                popular: true,
              },
              {
                name: "Loan Staff",
                price: "Specialized",
                description:
                  "Skilled professional for hire. Pay for time and expertise. Best for projects requiring specific skill set.",
                features: [
                  "Access to specialized talent",
                  "Seamless integration with your team",
                  "Flexible engagement duration",
                  "No recruitment overhead",
                  "Reduced management burden",
                  "Knowledge transfer",
                  "Scalable as needed",
                  "Cost-effective expertise",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-lg p-8 shadow-sm border relative",
                  plan.popular ? "bg-primary/5 border-primary" : "bg-background",
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceItemProps {
  service: Service
  index: number
}

function ServiceItem({ service, index }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 0 ? "" : "md:grid-flow-dense")}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={cn("space-y-4", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
        <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
        <p className="text-muted-foreground text-lg">{service.content}</p>
      </div>

      <div
        className={cn(
          "relative h-[300px] md:h-[400px] rounded-lg overflow-hidden",
          index % 2 === 0 ? "md:order-2" : "md:order-1",
        )}
      >
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover rounded-lg transition-transform duration-500"
          style={{
            transform: isInView ? "scale(1)" : "scale(1.1)",
          }}
        />
      </div>
    </motion.div>
  )
}

// Custom hook for detecting when an element is in view
function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isInView
}

