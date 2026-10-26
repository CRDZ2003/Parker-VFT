"use client"

import { useEffect, useState } from "react"

function isDesktopOrTablet() {
  if (typeof window === "undefined") return false
  return window.innerWidth >= 768 // Tailwind's md breakpoint (tablet and up)
}

export function Loader() {
  const [showLoader, setShowLoader] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!isDesktopOrTablet()) return

    setShowLoader(true)

    // Trigger fade out after 9s + 1s fade
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true)
      const hideTimeout = setTimeout(() => {
        setShowLoader(false)
      }, 1000) // fade-out duration

      return () => clearTimeout(hideTimeout)
    }, 7000)

    return () => clearTimeout(fadeTimeout)
  }, [])

  if (!showLoader) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="auto"

      >
        <source src="https://blackpool-ltd.s3.us-east-1.amazonaws.com/Parker.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
