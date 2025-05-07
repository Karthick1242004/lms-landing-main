"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Medal, Users, Building, Infinity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { LottieAnimation } from "./lottie-animation"

const planCategories = ["All", "Individual", "Institution", "Enterprise"]

const features = {
  basic: [
    "Unlimited courses",
    "Basic assessment tools",
    "Student management",
    "Standard reporting",
    "Email support",
  ],
  professional: [
    "Everything in Basic",
    "Advanced quizzes & assessments",
    "Custom certificates",
    "Learning paths",
    "Priority support",
    "API access",
  ],
  enterprise: [
    "Everything in Professional",
    "Custom branding",
    "Advanced analytics",
    "Dedicated account manager",
    "SSO integration",
    "LMS migration assistance",
    "Custom development",
  ]
}

export function CareerSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section id="careers" className="py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Flexible Plans for Every Learning Need</h3>
            <p className="text-muted-foreground text-sm">
              Choose the perfect plan for your educational goals. Whether you're an individual instructor, an educational institution, or a large enterprise, Quantum Path has a solution for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  <LottieAnimation animationData="/animations/heart.json" className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Accessible Pricing</h4>
                <p className="text-muted-foreground text-sm">
                  Plans designed to be affordable for educators at all levels, from independent instructors to large institutions.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  <LottieAnimation animationData="/animations/compass.json" className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Scalable Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Start small and scale up as your learning community grows, with plans that evolve with your needs.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  <LottieAnimation animationData="/animations/layout-grid.json" className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-2">No Hidden Fees</h4>
                <p className="text-muted-foreground text-sm">
                  Transparent pricing with all features clearly outlined, so you always know exactly what you're getting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Pricing Plans" align="center" className="mb-8" titleClassName="text-xl md:text-2xl" />

          {/* Pricing plans */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                  <Medal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-muted-foreground text-sm mb-4">For individual instructors and small courses</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground text-sm ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                {features.basic.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto">Get Started</Button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col relative"
            >
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-primary text-xs text-white px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-muted-foreground text-sm mb-4">For growing educational programs</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-muted-foreground text-sm ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                {features.professional.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto">Get Started</Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground text-sm mb-4">For institutions and large organizations</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground text-sm ml-1"></span>
                </div>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                {features.enterprise.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto">Contact Sales</Button>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">Need a custom solution? We can help with that too.</p>
            <Button variant="outline" size="sm">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

