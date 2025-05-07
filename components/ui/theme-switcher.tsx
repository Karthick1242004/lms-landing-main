"use client"

import { cn } from "@/lib/utils"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Monitor, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
]

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system"
  onChange?: (theme: "light" | "dark" | "system") => void
  defaultValue?: "light" | "dark" | "system"
  className?: string
}

export const ThemeSwitcher = ({ value, onChange, defaultValue = "system", className }: ThemeSwitcherProps) => {
  const { setTheme: setNextTheme, theme: nextTheme } = useTheme()
  const [theme, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value || (nextTheme as "light" | "dark" | "system"),
    onChange: (newTheme) => {
      onChange?.(newTheme)
      setNextTheme(newTheme)
    },
  })
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync with next-themes when theme changes externally
  useEffect(() => {
    if (mounted && nextTheme && nextTheme !== theme) {
      setTheme(nextTheme as "light" | "dark" | "system")
    }
  }, [nextTheme, mounted, setTheme, theme])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cycleTheme = () => {
    const themeKeys = themes.map((t) => t.key) as Array<"light" | "dark" | "system">
    const currentIndex = themeKeys.indexOf(theme as "light" | "dark" | "system")
    const nextIndex = (currentIndex + 1) % themeKeys.length
    setTheme(themeKeys[nextIndex])
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={cn("relative flex h-8 rounded-full bg-background p-1 ring-1 ring-border", className)}>
      {isMobile
        ? // Mobile view - single button that cycles through themes
          (() => {
            const activeTheme = themes.find((t) => t.key === theme) || themes[0]
            const Icon = activeTheme.icon

            return (
              <button
                type="button"
                className="relative h-6 w-6 rounded-full flex items-center justify-center"
                onClick={cycleTheme}
                aria-label={`Change theme (currently ${activeTheme.label})`}
              >
                <div className="absolute inset-0 rounded-full bg-secondary" />
                <Icon className="relative m-auto h-4 w-4 text-foreground" />
              </button>
            )
          })()
        : // Desktop view - show all theme options
          themes.map(({ key, icon: Icon, label }) => {
            const isActive = theme === key

            return (
              <button
                type="button"
                key={key}
                className="relative h-6 w-6 rounded-full"
                onClick={() => setTheme(key as "light" | "dark" | "system")}
                aria-label={label}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTheme"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <Icon
                  className={cn("relative m-auto h-4 w-4", isActive ? "text-foreground" : "text-muted-foreground")}
                />
              </button>
            )
          })}
    </div>
  )
}

