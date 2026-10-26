"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function ProjectHandlingOOGPage() {
  const { scrollYProgress } = useScroll(); // track whole page
  const x = useTransform(scrollYProgress, [0, 1], [-100, 400]);
  return (
    <main id="main">
      <HeroSection
        backgroundImage="/hero/services.jpg"
        heading="Our Services"
        description="Explore our range of logistics solutions tailored to your needs."
      />
      <section className="text-white bg-gradient-to-r from-cyan-600 to-cyan-500 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:flex">
          <div>
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Project Handling & OOG Cargo</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Heavy lift and complex cargo solutions from survey to delivery, executed safely and efficiently.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="relative w-full mt-4 md:h-40 flex items-center justify-center">
            {/* Moving Ship */}
            <motion.img
              src="/pc.png"
              alt="Cargo Ship"
              className="w-auto h-70 md:h-80 z-10 scale-x-[-1]"
              style={{ x }}
            />
          </div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-6 prose prose-neutral max-w-none mx-4 md:text-justify">
              <h2 className="text-2xl text-cyan-700 font-bold">Project Handling & OOG Cargo</h2>

              <p>
                Handling project-related cargos requires a great deal of professionalism and dedication.
                At <strong>Parker Express Shipping LLC</strong>, we take utmost care when it comes to managing
                complex and specialized shipments. We work closely with some of the leading global charters,
                ensuring there is no compromise on service, safety, or reliability.
              </p>

              <p>
                For <em>out-of-gauge (OOG) cargo</em> and shipments that require special handling or
                specialized equipment, Parker Express provides tailored solutions at the right time and cost.
                Our skilled team also manages stuffing and lashing, using only high-quality materials to secure consignments effectively.
              </p>

              <ul className="list-disc ml-5">
                <li><strong className="text-cyan-600">Pre-loading Arrangements:</strong> Stowage planning and supervision to ensure cargo safety.</li>
                <li><strong className="text-cyan-600">Customs & Clearance:</strong> Efficient cargo clearance and customs formalities.</li>
                <li><strong className="text-cyan-600">Stevedoring Operations:</strong> Supervised arrangements for smooth port handling.</li>
                <li><strong className="text-cyan-600">Client Representation:</strong> Full correspondence and interaction with owners and shippers on your behalf.</li>
              </ul>

              <p>
                Parker Express places significant importance on building trust and long-term relationships with
                both customers and suppliers. With a dedicated project team and in-house expertise, we are
                fully equipped to handle any out-of-gauge or heavy-lift project cargo across the globe.
              </p>
            </div>
          </article>


          {/* Sidebar form */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://dimerco.com/wp-content/uploads/2024/08/OOG-Cargo-shipping-rev.jpg"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="/air-freight-loading-cargo.png"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
          </aside>
        </div>
      </section>
      <CTASection />
      <Sponsors />
    </main>
  )
}
