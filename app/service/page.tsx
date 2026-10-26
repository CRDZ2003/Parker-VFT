"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Sponsors } from "@/components/sponsors"
import { CTASection } from "@/components/cta-section"
import { Plane, Sailboat, BriefcaseBusiness, ShieldCheck, Warehouse, Truck, ArrowRight } from "lucide-react"
import AnimatedCluster from "@/components/animated-cluster"
import { Ship, FileCheck, Package, Boxes, Globe } from "lucide-react";

const services = [
  {
    name: "Air Freight",
    description: "Value, speed, and competitive rates with strong airline partnerships and charter options.",
    icon: Plane,
    link: "/air-freight",
    image: "/home/air.jpg",
  },
  {
    name: "Project Handling, OOG Cargo",
    description: "Heavy lift and complex cargo solutions from planning to execution, safely and cost‑effectively.",
    icon: BriefcaseBusiness,
    link: "/project-handling-oog-cargo",
    image: "/home/project.jpg",
  },
  {
    name: "Sea Freight",
    description: "Reliable FCL/LCL with priority loading and congestion mitigation.",
    icon: Sailboat,
    link: "/sea-freight",
    image: "/home/sea.jpg",
  },
  {
    name: "Customs Clearance & Security",
    description: "End-to-end brokerage support to move goods compliantly and on time.",
    icon: ShieldCheck,
    link: "/customs",
    image: "/home/customs.jpg",
  },
  {
    name: "Land Freight",
    description: "Comprehensive solutions for all your land transportation needs.",
    icon: Truck,
    link: "/land-transportation-cross-border-trucking",
    image: "/home/land.jpg",
  },
  {
    name: "Warehousing & Distribution",
    description: "Secure storage, inventory management, and last‑mile delivery.",
    icon: Warehouse,
    link: "/warehousing-and-distribution",
    image: "/home/warehousing.jpg",
  },
]

const marquee = [
  { name: "Air Freight", icon: Plane },
  { name: "Sea Freight (FCL/LCL)", icon: Ship },
  { name: "Land Transportation", icon: Truck },
  { name: "Customs Clearance", icon: FileCheck },
  { name: "Warehousing", icon: Package },
  { name: "Project Cargo", icon: Boxes },
  { name: "Cross Border Trucking", icon: Globe },
  { name: "Security", icon: ShieldCheck },
];


// Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesPage() {
  const reduce = useReducedMotion()

  return (
    <main id="main" className="text-foreground overflow-x-hidden">
      {/* HERO – tinted brand background, animated icons */}
      <section className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="font-semibold">OUR SERVICES</span>
              <h1 className="text-pretty text-3xl font-semibold md:text-5xl">
                Transport anything from anywhere — fast, safe, and efficient
              </h1>
              <p className="max-w-prose text-gray-100">
                End‑to‑end logistics across air, sea, land and warehousing — backed by trusted partners, real‑time
                tracking, and experienced operators.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-purple-900 px-4 py-2 text-primary-foreground transition-transform hover:bg-purple-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Jump to all services"
                >
                  Get a quote  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Animated icon cluster */}
            <AnimatedCluster />
          </div>

          {/* Marquee */}
          <div className="relative mt-10 overflow-hidden rounded-lg bg-cyan-600">
            <motion.div
              className="flex gap-6 py-4"
              aria-hidden="true"
              initial={{ x: 0 }}
              animate={{ x: reduce ? 0 : ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...marquee, ...marquee].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 whitespace-nowrap bg-purple-900 rounded-full px-4 py-2 text-sm text-white"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES – alternating section background */}
      <section id="all-services" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-center text-4xl mb-7">Explore Our Range Of Services</h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => {
              const Icon = s.icon
              return (
                <motion.article
                  key={s.name}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-transform will-change-transform hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={s.image || "/placeholder.svg"}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/10" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-primary/10 p-2 text-primary group-hover:text-purple-900 transition-colors">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-lg font-semibold transition-colors group-hover:text-purple-900">
                        {s.name}
                      </h2>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>

                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        href={s.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline transition-colors group-hover:text-purple-900"
                        aria-label={`View ${s.name}`}
                      >
                        View service <ArrowRight className="h-4 w-4" />
                      </Link>
                      {/* <div className="pointer-events-none h-8 w-8 -translate-x-2 translate-y-2 rounded-full bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}
                    </div>
                  </div>

                  <motion.span
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-purple-700/70 dark:bg-purple-400/70"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>


      {/* Accent section for CTA + Sponsors alternating background */}
      <CTASection />


      <Sponsors />

    </main>
  )
}
