"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function WarehousingServicePage() {
  const { scrollYProgress } = useScroll(); // track whole page
  const x = useTransform(scrollYProgress, [0, 1], [-200, 500]);
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
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Warehousing & Distribution</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Secure storage with 24/7 surveillance, climate-controlled options, cross-docking, and real-time inventory visibility. End-to-end order fulfillment and last-mile delivery.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="relative w-full md:h-40 flex items-center justify-center">
            {/* Moving Ship */}
            <motion.img
              src="https://skl-group.in/assets/img/services/warehouse2.gif"
              alt="Cargo Ship"
              className="w-auto h-60 md:h-88 z-10 mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-6 prose prose-neutral max-w-none mx-4 md:text-justify">
              <h2 className="text-2xl text-cyan-700 font-bold">Warehousing & Distribution</h2>

              <p>
                <strong>Parker Express Shipping LLC</strong> offers comprehensive warehousing and distribution
                solutions tailored to the needs of leading companies across the UAE and the wider Middle East.
                From general cargo facilities to advanced storage and distribution services, we provide end-to-end
                solutions that keep your supply chain agile, reliable, and cost-effective.
              </p>

              <p>
                Our expertise extends to bulk cargo importation, storage, and last-mile delivery.
                We consolidate and manage the movement of stock to distribution centers and retail outlets
                across the UAE and GCC. Through intelligent consolidation services, we maximize truck space
                utilization, optimize truck loading based on the nature of goods, and design efficient direct
                and transshipment routes that meet the unique requirements of every customer.
              </p>

              <h3 className="text-xl text-cyan-600 font-semibold">Warehouse Efficiency & Distribution Power</h3>
              <p>
                Our strategically located warehouses act as central hubs for streamlined order fulfillment.
                Store-ready orders are consolidated, picked, packed, and palletized with precision. We also
                provide stretch-wrapping, container loading, and tailored unloading solutions at your
                distribution centers, ensuring a seamless transition to the final destination.
              </p>

              <ul>
                <li><strong className="text-cyan-600">Centralized Hubs:</strong> Strategically located warehouses for faster fulfillment.</li>
                <li><strong className="text-cyan-600">Custom Handling:</strong> Orders picked, packed, and palletized to your requirements.</li>
                <li><strong className="text-cyan-600">Seamless Transit:</strong> Stretch-wrapping, container loading, and optimized unloading options.</li>
                <li><strong className="text-cyan-600">Cost Reduction:</strong> Improved efficiency lowers overall distribution and supply chain costs.</li>
              </ul>

              <p>
                With Parker Express, warehousing and distribution become powerful extensions of your business —
                enabling reliability, scalability, and market responsiveness at every step of the journey.
              </p>
            </div>
          </article>


          {/* Sidebar form */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden md:mt-18  rounded-lg border mb-6">
              <Image
                src="https://hublinksindia.com/assets/images/warehousing-Detail.png"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://www.wisys.com/wp-content/uploads/2021/10/Warehouse-vs.-Distribution-Center-Explained.jpeg"
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
