"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  animated?: boolean
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  animated = true,
}: SectionHeadingProps) {
  const content = (
    <div className={cn("max-w-3xl mb-10", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClassName)}>{title}</h2>
      {description && <p className={cn("text-lg text-muted-foreground", descriptionClassName)}>{description}</p>}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

