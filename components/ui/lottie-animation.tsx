"use client"

import { useEffect, useRef, useState } from "react"
import type { AnimationItem } from "lottie-web"

interface LottieAnimationProps {
  animationData: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export function LottieAnimation({ animationData, className = "", loop = true, autoplay = true }: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null)
  const anim = useRef<AnimationItem | null>(null)
  const [lottie, setLottie] = useState<any>(null)

  // Only import lottie-web on the client side
  useEffect(() => {
    import("lottie-web").then((lottieModule) => {
      setLottie(lottieModule.default)
    })
  }, [])

  // Only run animation setup after lottie is loaded
  useEffect(() => {
    if (!lottie || !animationContainer.current) return

    let isMounted = true

    // Destroy any existing animation
    if (anim.current) {
      anim.current.destroy()
    }

    // Fetch the animation data
    fetch(animationData)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        if (!isMounted || !animationContainer.current) return

        // Initialize the animation
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: data,
        })

        // Apply blue color to all shapes
        setTimeout(() => {
          if (!isMounted || !animationContainer.current) return

          const svgElement = animationContainer.current.querySelector("svg")
          if (svgElement) {
            const paths = svgElement.querySelectorAll("path, circle, ellipse, rect, polygon")
            paths.forEach((path) => {
              // Only change black colors to blue
              if (
                path.getAttribute("fill") === "#000" ||
                path.getAttribute("fill") === "#000000" ||
                path.getAttribute("stroke") === "#000" ||
                path.getAttribute("stroke") === "#000000"
              ) {
                // Use a blue that works in both light and dark themes
                path.setAttribute("fill", "currentColor")
                path.setAttribute("stroke", "currentColor")
              }
            })
          }
        }, 0)
      })
      .catch((error) => {
        console.error("Error loading animation:", error)
      })

    // Cleanup function
    return () => {
      isMounted = false
      if (anim.current) {
        anim.current.destroy()
      }
    }
  }, [lottie, animationData, loop, autoplay])

  return <div ref={animationContainer} className={className} />
}

