"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Heart, Compass, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { ApplyButton } from "./apply-button"
import { LottieAnimation } from "./lottie-animation"

const departments = ["All", "Developer", "Business Analyst", "Designer"]

const allJobs = [
  {
    title: "Product Designer",
    description: "We're looking for a mid-level product designer to join our team.",
    type: "Full-time",
    location: "100% On-site",
    department: "Designer",
  },
  {
    title: "Engineering Manager",
    description: "We're looking for an experienced engineering manager to join our team.",
    type: "Full-time",
    location: "100% On-site",
    department: "Developer",
  },
  {
    title: "Customer Success Manager",
    description: "We're looking for a customer success manager to join our team.",
    type: "Full-time",
    location: "100% On-site",
    department: "Customer Service",
  },
  {
    title: "Business Analyst",
    description: "We're looking for a business analyst to help optimize our operations.",
    type: "Full-time",
    location: "100% On-site",
    department: "Business Analyst",
  },
  {
    title: "UX/UI Designer",
    description: "We're looking for a creative designer to craft exceptional user experiences.",
    type: "Full-time",
    location: "100% On-site",
    department: "Designer",
  },
  {
    title: "Frontend Developer",
    description: "We're looking for a frontend developer with React expertise.",
    type: "Full-time",
    location: "100% On-site",
    department: "Developer",
  },
]

export function CareerSection() {
  const [activeDepartment, setActiveDepartment] = useState("All")

  const filteredJobs =
    activeDepartment === "All" ? allJobs : allJobs.filter((job) => job.department === activeDepartment)

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
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Build your career with your company name</h3>
            <p className="text-muted-foreground text-sm">
              Join our team and be part of something extraordinary. We offer competitive benefits, a collaborative work
              environment, and opportunities for professional growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  {/* Conditionally render animation or fallback icon */}
                  <LottieAnimation animationData="/animations/heart.json" className="h-8 w-8 text-primary" />
                  <Heart className="h-7 w-7 text-primary absolute opacity-0" />
                </div>
                <h4 className="font-medium mb-2">Inclusive Culture</h4>
                <p className="text-muted-foreground text-sm">
                  We foster a diverse and inclusive environment where everyone feels valued and respected.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  {/* Conditionally render animation or fallback icon */}
                  <LottieAnimation animationData="/animations/compass.json" className="h-8 w-8 text-primary" />
                  <Compass className="h-7 w-7 text-primary absolute opacity-0" />
                </div>
                <h4 className="font-medium mb-2">Future Potential</h4>
                <p className="text-muted-foreground text-sm">
                  We provide continuous learning and development opportunities to help you grow professionally.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto mb-2">
                  {/* Conditionally render animation or fallback icon */}
                  <LottieAnimation animationData="/animations/layout-grid.json" className="h-8 w-8 text-primary" />
                  <LayoutGrid className="h-7 w-7 text-primary absolute opacity-0" />
                </div>
                <h4 className="font-medium mb-2">Work-Life Balance</h4>
                <p className="text-muted-foreground text-sm">
                  We believe in maintaining a healthy balance between work and personal life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Open Positions" align="left" className="mb-4" titleClassName="text-xl md:text-2xl" />

          {/* Department filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={activeDepartment === dept ? "default" : "outline"}
                className={cn(
                  "rounded-full text-xs",
                  activeDepartment === dept ? "bg-primary text-background hover:bg-primary/90" : "hover:bg-muted",
                )}
                onClick={() => setActiveDepartment(dept)}
                size="sm"
              >
                {dept}
              </Button>
            ))}
          </div>

          {/* Job listings */}
          <div className="space-y-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={`${job.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-b border-border pb-4 relative hover:bg-muted/20 p-3 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-1.5 text-xs border rounded-full px-2 py-0.5">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs border rounded-full px-2 py-0.5">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <ApplyButton
                      position={job.title}
                      variant="outline"
                      size="sm"
                      className="shrink-0 text-xs hover:border-primary"
                    />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground text-sm">No open positions in this department at the moment.</p>
                <Button variant="outline" className="mt-3 text-xs" size="sm" onClick={() => setActiveDepartment("All")}>
                  View all positions
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

