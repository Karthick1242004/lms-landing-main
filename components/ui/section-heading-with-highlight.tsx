"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Highlight } from "./hero-highlight"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  animated?: boolean
}

export function SectionHeadingWithHighlight({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  animated = true,
}: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const content = (
    <div
      ref={ref}
      className={cn("max-w-3xl mb-16", align === "center" ? "mx-auto text-center" : "text-left", className)}
    >
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", titleClassName)}>{title}</h2>
      {description && (
        <div className={cn("text-lg text-muted-foreground", descriptionClassName)}>
          {isInView ? (
            <Highlight className="text-foreground dark:text-foreground">{description}</Highlight>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

