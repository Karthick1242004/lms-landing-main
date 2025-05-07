"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Target } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { LottieAnimation } from "@/components/ui/lottie-animation"
import Counter from "@/components/ui/counter"

const IconOrAnimation = ({
  icon: Icon,
  animationPath,
  iconSize = "h-7 w-7",
  animationSize = "h-10 w-10",
}: {
  icon: any
  animationPath?: string
  iconSize?: string
  animationSize?: string
}) => {
  return animationPath ? (
    <LottieAnimation animationData={animationPath} className={`text-primary ${animationSize}`} />
  ) : (
    <Icon className={`text-primary ${iconSize}`} />
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 relative z-10 bg-gradient-to-b from-background to-background/50">
      {/* About Us */}
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading title="About Quantum Path" className="mb-10" titleClassName="text-2xl md:text-3xl" />

        <div className="grid md:grid-cols-1 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-center mx-auto max-w-4xl"
          >
            <h2 className="text-xl md:text-xl font-normal tracking-tight">
              Transforming education through technology and innovation
            </h2>
            <p className="text-muted-foreground text-sm">
              Quantum Path is a comprehensive Learning Management System designed to empower educators, trainers, and organizations. Our platform combines intuitive design with powerful features to create engaging learning experiences for students and professionals alike.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pt-6 justify-center max-w-6xl mx-auto">
              <motion.div
                className="flex flex-col items-center gap-1 md:gap-2 transition-all hover:translate-y-[-4px] hover:shadow-md group bg-background/80 p-2 md:p-4 rounded-lg shadow-sm border border-muted min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={500} duration={2} />+
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground text-center">Active Courses</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 md:gap-2 transition-all hover:translate-y-[-4px] hover:shadow-md group bg-background/80 p-2 md:p-4 rounded-lg shadow-sm border border-muted min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={50000} duration={2} />+
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground text-center">Students Enrolled</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 md:gap-2 transition-all hover:translate-y-[-4px] hover:shadow-md group bg-background/80 p-2 md:p-4 rounded-lg shadow-sm border border-muted min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={200} duration={2} />+
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground text-center">Educational Partners</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 md:gap-2 transition-all hover:translate-y-[-4px] hover:shadow-md group bg-background/80 p-2 md:p-4 rounded-lg shadow-sm border border-muted min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={15} duration={2} />+
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground text-center">Countries Served</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-12 mt-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Our Educational Philosophy" titleClassName="text-2xl md:text-3xl" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <IconOrAnimation icon={Target} animationPath="/animations/target.json" />
              </div>
              <h3 className="text-lg font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm mb-3">
                To democratize education by providing accessible, engaging, and effective learning experiences for everyone, regardless of location or background.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Make quality education accessible to all</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Empower educators with powerful, easy-to-use tools</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Foster a global community of lifelong learners</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <IconOrAnimation icon={Lightbulb} animationPath="/animations/lightbulb.json" />
              </div>
              <h3 className="text-lg font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm mb-3">
                To create a world where continuous learning is accessible, enjoyable, and leads to personal and professional growth for individuals and organizations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Revolutionize how knowledge is shared and acquired</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Personalize learning experiences through technology</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Build a platform that grows and adapts with educational needs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

