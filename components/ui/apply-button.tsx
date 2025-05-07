"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "./button"
import { JobApplicationForm } from "./job-application-form"
import { SendHorizontal } from "lucide-react"

interface ApplyButtonProps extends ButtonProps {
  position: string
}

export function ApplyButton({ position, className, children, ...props }: ApplyButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsFormOpen(true)} className="group/button" {...props}>
        {children || "Apply"}
        <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
      </Button>
      <JobApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} position={position} />
    </>
  )
}

