"use client"

import { motion } from "framer-motion"
import { Truck, Bus, Boxes, Package } from "lucide-react"

export function FleetSection() {
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance text-3xl font-bold sm:text-4xl"
          >
            Our Fleet & Transportation
          </motion.h2>
          <p className="mt-3 text-muted-foreground">
            Well-maintained trucks, trailers, vans, forklifts and a trusted partner network for extra capacity. Local,
            long-distance, and cross-border delivery with warehousing support.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Truck className="h-7 w-7 text-brand" /> Trucks
            </li>
            <li className="flex items-center gap-2">
              <Bus className="h-7 w-7 text-brand" /> Trailers
            </li>
            <li className="flex items-center gap-2">
              <Boxes className="h-7 w-7 text-brand" /> Warehousing
            </li>
            <li className="flex items-center gap-2">
              <Package className="h-7 w-7 text-brand" /> Cross-border
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video overflow-hidden rounded-xl border"
        >
          <img
            src="/home/fleet.jpeg"
            alt="Parker logistics fleet trucks in warehouse"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
