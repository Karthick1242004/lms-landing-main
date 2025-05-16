"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "./theme-switcher"
import Image from "next/image"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeSection?: string
}

export function NavBar({ items, className, activeSection }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab when activeSection changes
  useEffect(() => {
    if (activeSection) {
      const matchingItem = items.find((item) => item.url === `#${activeSection}`)
      if (matchingItem) {
        setActiveTab(matchingItem.name)
      }
    }
  }, [activeSection, items])

  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()

    // Only process if it's a hash link
    if (url.startsWith("#")) {
      const targetId = url.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Get the navbar height to offset the scroll position
        const navbarHeight = isMobile ? 80 : 100 // Approximate navbar heights

        // Scroll to the element with offset
        window.scrollTo({
          top: targetElement.offsetTop - 40,
          behavior: "smooth",
        })

        // Update active tab
        const clickedItem = items.find((item) => item.url === url)
        if (clickedItem) {
          setActiveTab(clickedItem.name)
        }
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-40 mb-8 sm:mb-6 sm:pt-6 w-full max-w-4xl px-4 h-4",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 sm:py-2 px-3 rounded-full shadow-lg">
        {/* Company Logo & Name - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 mr-2">
          <Image
            src="/file.svg"
            alt="Quantum Path Logo"
            width={24}
            height={16}
            className="text-primary"
          />
          <span className="font-semibold text-sm whitespace-nowrap">Quantum Path</span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 flex-1 justify-center">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleNavClick(e, item.url)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>

        {/* Theme Switcher */}
        <div className="flex items-center h-full">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

