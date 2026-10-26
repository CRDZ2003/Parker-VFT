"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Plane, Ship, Truck, Warehouse, ShieldCheck, Boxes, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Air Transport",
    link: "/air-freight",
    copy: "Shipping your cargo by air with Parker Express will keep goods moving at ideal speed and efficiency.",
    image: "/home/air.jpg",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    link: "/sea-freight",
    copy: "Parker Express delivers reliable sea freight services for FCL and LCL shipments around the globe.",
    image: "/home/sea.jpg",
  },
  {
    icon: Truck,
    title: "Land Freight Forwarding",
    link: "/land-transportation-cross-border-trucking",
    copy: "A well-designed and well-managed customs clearance program reduces delays and ensures smooth movement.",
    image: "/home/land.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Customs Clearance & Security",
    link: "/customs",
    copy: "A well-designed and well-managed customs clearance program with security-focused solutions.",
    image: "/home/customs.jpg",
  },
  {
    icon: Warehouse,
    title: "Warehousing and Distribution",
    link: "/warehousing-and-distribution",
    copy: "Parker Express handles general cargo facility and manages storage with full efficiency.",
    image: "/home/warehousing.jpg",
  },
  {
    icon: Boxes,
    title: "Project Handling / OOG Cargo",
    link: "/project-cargo",
    copy: "Handling projects related cargo’s require a great deal of professionalism and experience.",
    image: "/home/project.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white text-center text-3xl font-bold sm:text-4xl"
      >
        Our Services
      </motion.h2>

      {/* Services grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-all"
          >
            {/* Image with overlay icon */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 right-4 bg-purple-900 p-3 rounded shadow-md text-white">
                <s.icon className="h-6 w-6" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-900 ">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{s.copy}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 transition-colors group-hover:text-purple-900"
                  aria-label={`View ${s.title}`}
                >
                  View service <ArrowRight className="h-4 w-4" />
                </Link>
                {/* <div className="pointer-events-none h-8 w-8 -translate-x-2 translate-y-2 rounded-full bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}
              </div>
            </div>


          </motion.div>


        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/service"
          className="inline-flex items-center rounded-lg bg-purple-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-700"
        >
          View All Services
        </Link>
      </div>
    </section>
  )
}
