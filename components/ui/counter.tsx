"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface CounterProps {
  from: number
  to: number
  duration: number
}

const Counter = ({ from, to, duration }: CounterProps) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (count < to) {
          setCount(count + 1)
        } else {
          clearInterval(intervalId)
        }
      },
      (duration * 1000) / (to - from),
    )

    return () => clearInterval(intervalId)
  }, [count, duration, from, to])

  return (
    <motion.span
      className="font-bold text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  )
}

export default Counter

