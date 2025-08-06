"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn" | "slideInUp"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const animations = {
    fadeInUp: "translate-y-8 opacity-0",
    fadeInLeft: "-translate-x-8 opacity-0",
    fadeInRight: "translate-x-8 opacity-0",
    fadeIn: "opacity-0",
    scaleIn: "scale-95 opacity-0",
    slideInUp: "translate-y-12 opacity-0",
  }

  const visibleAnimations = {
    fadeInUp: "translate-y-0 opacity-100",
    fadeInLeft: "translate-x-0 opacity-100",
    fadeInRight: "translate-x-0 opacity-100",
    fadeIn: "opacity-100",
    scaleIn: "scale-100 opacity-100",
    slideInUp: "translate-y-0 opacity-100",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? visibleAnimations[animation] : animations[animation],
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
