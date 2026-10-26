"use client"
import { HeroVideo } from "@/components/hero-video"
import { ServicesSection } from "@/components/sections/services"
import { FleetSection } from "@/components/sections/fleet"
import { ProjectsSection } from "@/components/sections/projects"
import { LocationsSection } from "@/components/sections/locations"
import { CalculatorSection } from "@/components/sections/calculator"
import ContactSection from "@/components/sections/contact"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sponsors } from "@/components/sponsors"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <main id="main" className="bg-transparent">
        <HeroVideo />

        {/* who we are */}
        <section className="relative bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0 order-2 lg:order-1"
            >
              <h3 className="text-2xl sm:text-md font-bold uppercase tracking-wide text-cyan-600">
                About Us
              </h3>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Parker Express Shipping LLC
              </h2>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                We are one of leading integrated supply chain and logistics solutions provider and a pioneer in the sphere
                of cargo transportation based in Dubai
              </p>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                Leveraging on its extensive infrastructure, strong foundation and skilled
                manpower, Parker Shipping offers seamless multi modal transportation
                solutions. The company progressed becoming one of leading Logistics &
                Supply Chain Solutions provider with exceeding Customer’s Expectation at all times.
              </p>

              <motion.a
                href="/about-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block rounded-full bg-cyan-600 px-5 py-2.5 sm:px-6 sm:py-3 text-white text-sm sm:text-base font-semibold shadow-lg hover:bg-teal-700 transition"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Right - Image with overlay stats */}
            <div className="relative order-1 lg:order-2">
              {/* Ship Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/home/about.jpg"
                  alt="Cargo Ship"
                  width={600}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-[60vh] object-cover"
                />
              </motion.div>

              {/* Stats Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-4 sm:-bottom-10 sm:-left-10 bg-cyan-600 text-white p-4 sm:p-6 rounded-xl shadow-xl w-36 sm:w-auto"
              >
                <div className="text-2xl sm:text-3xl font-bold">9.612m</div>
                <p className="text-xs sm:text-sm mt-1">Delivered Goods</p>
              </motion.div>

              {/* Founder Card */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-10 right-4 sm:-top-12 sm:right-0 bg-cyan-600 shadow-xl rounded-2xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 text-white border border-white/20 backdrop-blur-md"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md">
                  <Image
                    src="/logo/fav.png"
                    alt="Founder Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">Ummer Sharief</p>
                  <p className="text-xs sm:text-sm opacity-90">Founder</p>
                </div>
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* alternate subtle tinted background using muted */}
        <section className="bg-cyan-600" id="services">
          <div className="mx-auto max-w-7xl px-4 ">
            <ServicesSection />
          </div>
        </section>






        <section className="bg-background" id="fleet">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <FleetSection />
          </div>
        </section>
        <section className="bg-cyan-600 text-white" id="projects">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <ProjectsSection />
          </div>
        </section>
        <section className="bg-background" id="locations">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <LocationsSection />
          </div>
        </section>
        <section className="bg-cyan-600 text-white" id="calculator">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <CalculatorSection />
          </div>
        </section>
        <section className="bg-background" id="locations">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <ContactSection />
          </div>
        </section>
        <section className="" id="sponsors">
          <div className="">
            <CTASection />
          </div>
        </section>
        <section className="bg-background text-white" id="sponsors">
          <div className="">
            <Sponsors />
          </div>
        </section>
      </main>
    </>
  )
}
