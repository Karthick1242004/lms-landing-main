"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { Connect } from "@/components/ui/connect"

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  items: {
    question: string
    answer: string
  }[]
  contactInfo?: {
    title: string
    description: string
    buttonText: string
    onContact?: () => void
  }
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 mb-0 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent relative z-10",
          className,
        )}
        {...props}
      >
        <div className="container">
          {/* Header */}
          <SectionHeading
            title={title}
            description={description}
            titleClassName="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent"
            descriptionClassName="text-sm"
            className="max-w-2xl mb-12"
          />

          {/* FAQ Items */}
          <div className="max-w-6xl mx-auto space-y-2">
            {items.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <div className="mt-8 mb-0">
              <Connect />
            </div>
          )}
        </div>
      </section>
    )
  },
)
FaqSection.displayName = "FaqSection"

// Internal FaqItem component
function FaqItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-border/50",
        isOpen ? "bg-gradient-to-br from-background via-muted/50 to-background" : "hover:bg-muted/50",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-transparent text-left"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200",
            "text-foreground/70",
            isOpen && "text-foreground",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { FaqSection }

