"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/ui/sparkles"
import Link from "next/link"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["Learn", "Grow", "Succeed"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              QUANTUM PATH 
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-primary w-full">Learn as if you were to</span>
              <span
                className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1"
                style={{ minHeight: "80px" }}
              >
                {/* Sparkles background */}
                <div className="absolute inset-0 z-0 w-full h-full" style={{ minHeight: "80px" }}>
                  <SparklesCore
                    id="heroSparkles"
                    background="transparent"
                    minSize={1}
                    maxSize={2}
                    particleDensity={120}
                    className="w-full h-full"
                    particleColor="#3b82f6"
                    speed={1}
                  />
                </div>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold z-10"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Your complete Learning Management System for modern education and professional development
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="https://lms-front-app.vercel.app/">
            <Button size="lg" className="gap-4">
              Get Started <BookOpen className="w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }

