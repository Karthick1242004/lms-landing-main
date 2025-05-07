"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "./theme-switcher"

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
          <svg
            width="24"
            height="16"
            viewBox="0 0 112 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M54.5649 63.5433C59.0876 63.5433 63.4929 62.978 67.7809 61.8473C72.0689 60.7167 76.1329 59.0633 79.9729 56.8873C80.6769 56.5247 81.2209 56.4287 81.6049 56.5993C81.9889 56.77 82.2982 57.0367 82.5329 57.3993L84.2289 60.1833C81.7756 61.7833 79.3329 63.1487 76.9009 64.2793C74.4902 65.3887 72.0689 66.2953 69.6369 66.9993C67.1836 67.682 64.7089 68.1833 62.2129 68.5033C59.7169 68.8233 57.1676 68.9833 54.5649 68.9833C51.9409 68.9833 49.3809 68.8233 46.8849 68.5033C44.3889 68.1833 41.9249 67.682 39.4929 66.9993C37.0396 66.2953 34.6076 65.3887 32.1969 64.2793C29.7649 63.1487 27.3222 61.7833 24.8689 60.1833L26.5649 57.3993C26.7996 57.0367 27.1089 56.77 27.4929 56.5993C27.8769 56.4287 28.4209 56.5247 29.1249 56.8873C32.9649 59.0633 37.0396 60.7167 41.3489 61.8473C45.6369 62.978 50.0422 63.5433 54.5649 63.5433Z"
              fill="currentColor"
            />
            <path
              d="M80.4733 27.1996C80.2493 27.4556 80.0413 27.6316 79.8493 27.7276C79.6573 27.8236 79.4173 27.8716 79.1293 27.8716C78.9053 27.8716 78.6813 27.8076 78.4573 27.6796C78.2333 27.5196 78.0253 27.3436 77.8333 27.1516C77.4813 26.8316 77.0173 26.4316 76.4413 25.9516C75.8653 25.4396 75.1773 24.9276 74.3773 24.4156C73.6093 23.9036 72.7453 23.4396 71.7853 23.0236C70.8573 22.5756 69.8653 22.2556 68.8093 22.0636C68.8413 22.1596 68.8573 22.2716 68.8573 22.3996C68.8573 22.4956 68.8573 22.5916 68.8573 22.6876C68.8573 24.3516 68.3133 25.7116 67.2253 26.7676C66.1053 27.7916 64.6813 28.3036 62.9533 28.3036C61.4493 28.3036 60.1693 27.7916 59.1133 26.7676C58.0573 25.7116 57.5293 24.3196 57.5293 22.5916C57.5293 21.6316 57.7053 20.7836 58.0573 20.0476C58.4093 19.3116 58.9053 18.7036 59.5453 18.2236C60.1533 17.7116 60.8733 17.3276 61.7053 17.0716C62.5053 16.8156 63.3853 16.6876 64.3453 16.6876C65.7853 16.6876 67.2893 16.8956 68.8573 17.3116C70.3933 17.6956 71.9133 18.2876 73.4173 19.0876C74.9533 19.8556 76.4413 20.7996 77.8813 21.9196C79.3213 23.0396 80.6493 24.3196 81.8653 25.7596L80.4733 27.1996Z"
              fill="currentColor"
            />
            <path
              d="M37.7117 29.4745C36.8797 29.4747 36.0957 29.3309 35.3597 29.0431C34.6237 28.7233 33.9837 28.3074 33.4397 27.7956C32.8957 27.2517 32.4637 26.6118 32.1437 25.8759C31.8237 25.1399 31.6637 24.356 31.6637 23.524C31.6637 22.692 31.8237 21.9079 32.1437 21.1719C32.4637 20.4358 32.8957 19.7957 33.4397 19.2516C33.9837 18.7074 34.6237 18.2753 35.3597 17.9551C36.0957 17.6349 36.8797 17.4747 37.7117 17.4745C38.5757 17.4743 39.3757 17.6341 40.1117 17.9539C40.8157 18.2737 41.4397 18.7056 41.9837 19.2495C42.5277 19.7933 42.9437 20.4332 43.2317 21.1692C43.5517 21.9051 43.7117 22.689 43.7117 23.521C43.7117 24.353 43.5517 25.1371 43.2317 25.8732C42.9437 26.6092 42.5277 27.2493 41.9837 27.7935C41.4397 28.3056 40.8157 28.7217 40.1117 29.0419C39.3757 29.3301 38.5757 29.4743 37.7117 29.4745Z"
              fill="currentColor"
            />
            <path
              d="M16.512 45.216V61.44C16.512 65.728 15.136 69.024 12.384 71.328C9.632 73.696 5.504 74.88 0 74.88V69.12C6.528 69.12 9.792 66.56 9.792 61.44V45.216C9.792 41.376 12.032 38.944 16.512 37.92V37.152C12.032 36.128 9.792 33.632 9.792 29.664V13.44C9.792 8.32 6.528 5.76 0 5.76V0C5.504 0 9.632 1.184 12.384 3.552C15.136 5.856 16.512 9.152 16.512 13.44V29.664C16.512 31.072 16.992 32.32 17.952 33.408C18.976 34.496 20.384 35.04 22.176 35.04V39.84C20.384 39.84 18.976 40.384 17.952 41.472C16.992 42.56 16.512 43.808 16.512 45.216Z"
              fill="#FF6700"
            />
            <path
              d="M94.7041 61.44V45.216C94.7041 43.808 94.1921 42.56 93.1681 41.472C92.2081 40.384 90.8321 39.84 89.0401 39.84V35.04C90.8321 35.04 92.2081 34.496 93.1681 33.408C94.1921 32.32 94.7041 31.072 94.7041 29.664V13.44C94.7041 9.152 96.0801 5.856 98.8321 3.552C101.584 1.184 105.712 0 111.216 0V5.76C104.688 5.76 101.424 8.32 101.424 13.44V29.664C101.424 33.632 99.1841 36.128 94.7041 37.152V37.92C99.1841 38.944 101.424 41.376 101.424 45.216V61.44C101.424 66.56 104.688 69.12 111.216 69.12V74.88C105.712 74.88 101.584 73.696 98.8321 71.328C96.0801 69.024 94.7041 65.728 94.7041 61.44Z"
              fill="#FF6700"
            />
          </svg>
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

