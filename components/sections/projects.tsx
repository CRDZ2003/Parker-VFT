"use client"

import { motion } from "framer-motion"
import { Cake as Crane, ShieldCheck } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className=" mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video overflow-hidden rounded-xl border"
        >
          <img
            src="/home/home.png"
            alt="Heavy lift project cargo operations"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Heavy Lift & Project Cargo
          </h2>
          <p className="mt-3 text-gray-300">
            From route surveys and feasibility to cargo handling, customs, and insurance—our team delivers complex
            projects safely and efficiently.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Crane className="h-7 w-7 text-brand" /> Project planning & management
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-7 w-7 text-brand" /> Compliance, customs & coverage
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
