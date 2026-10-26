"use client"

import { motion } from "framer-motion"


export function HeroVideo() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Shipping operations video background"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      <div className="mx-auto flex h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          Parker Express Shipping LLC
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" italic  "
        >
          Transport Anything From Anywhere
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-4xl font-bold sm:text-5xl lg:text-6xl"
        ></motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-pretty text-base/7 "
        >
          Air Freight • Sea Freight • Customs Clearance & Security • Warehousing & Distribution • Land Transportation &
          Cross Border Trucking
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/service"
            className="rounded-md border border-purple-400/30 bg-purple-900/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-purple-800/20"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
