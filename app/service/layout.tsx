import type React from "react"
import HeroSection from "@/components/hero"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <HeroSection
        backgroundImage="/hero/services.jpg"
        heading="Our Services"
        description="Explore our range of logistics solutions tailored to your needs."
      />
      <div className="">{children}</div>
    </div>
  )
}
