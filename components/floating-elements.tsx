"use client"

import { useParallax } from "@/hooks/use-scroll-animation"

export function FloatingElements() {
  const offsetY = useParallax()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elementos flotantes con parallax */}
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <div
        className="absolute top-1/3 left-16 w-24 h-24 bg-green-300/15 rounded-full blur-xl animate-bounce"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-purple-300/20 rounded-full blur-lg"
        style={{ transform: `translateY(${offsetY * 0.08}px) rotate(${offsetY * 0.1}deg)` }}
      />
      <div
        className="absolute top-2/3 left-1/4 w-16 h-16 bg-yellow-300/25 rounded-full blur-md animate-pulse"
        style={{ transform: `translateY(${offsetY * 0.12}px)` }}
      />

      {/* Partículas flotantes */}
      <div className="absolute top-1/4 right-1/4">
        <div
          className="w-2 h-2 bg-white/40 rounded-full animate-ping"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        />
      </div>
      <div className="absolute bottom-1/3 left-1/3">
        <div
          className="w-1 h-1 bg-blue-300/60 rounded-full animate-pulse"
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
      </div>
    </div>
  )
}
