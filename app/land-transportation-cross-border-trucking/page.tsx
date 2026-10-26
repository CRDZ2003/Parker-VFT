"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function LandServicePage() {
  const { scrollYProgress } = useScroll(); // track whole page
  const x = useTransform(scrollYProgress, [0, 1], [-160, 400]);
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
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Land Transportation & Cross-Border Trucking</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Full loads and LTL across UAE and GCC with diverse equipment for in-gauge and out-of-gauge cargo. Experienced
              transport teams ensure professional movement to all destinations.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>

          </div>
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Moving Train */}
            <motion.img
              src="https://www.pngplay.com/wp-content/uploads/8/Train-Transparent-Background.png"
              alt="Cargo Train"
              className="w-auto h-30 md:h-60 z-10 transform scale-x-[-1]"
              style={{ x }}
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-6 prose prose-neutral max-w-none mx-4 md:text-justify">
              <h2 className="text-2xl text-cyan-700 font-bold">Land Transportation & Cross-Border</h2>

              <p>
                The traditional mode of using road has grown significantly in this part of the world.
                <strong> Parker Express Shipping LLC </strong> provides expertise in forwarding your shipment
                by road both within and outside the UAE. Whether it is Full Truck Load (FTL) or Less Truck Load (LTL),
                Parker Express offers a variety of fleet types and sizes to move all kinds of cargo—
                from in-gauge to out-of-gauge.
              </p>

              <p>
                Backed by a highly experienced transport team, we ensure professional handling of
                cargo across the country and to all GCC destinations. Our land transport services
                combine flexibility, reliability, and cost-effectiveness, helping you maintain a
                seamless supply chain.
              </p>

              <ul className="list-inside space-y-2 ">
                <li><strong className="text-cyan-600">Flexible Solutions:</strong> Non-asset based options tailored to your needs.</li>
                <li><strong className="text-cyan-600">Diverse Fleet:</strong> Dry van LTL, refrigerated trucks, flatbeds, and TOFC.</li>
                <li><strong className="text-cyan-600">Regional Capacity:</strong> Reliable short-haul and cross-border trucking.</li>
                <li><strong className="text-cyan-600">Drop Trailer Pools:</strong> Enhanced efficiency with pre-positioned equipment.</li>
                <li><strong className="text-cyan-600">Versatility:</strong> Specialized equipment for any shipment type.</li>
                <li><strong className="text-cyan-600">Branch Network:</strong> Local access with global capacity reach.</li>
              </ul>
            </div>

          </article>


          {/* Sidebar form */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://www.infinity.com.my/wp-content/uploads/2015/10/130713-24-truck-1024x576.jpg"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6 ">
              <Image
                src="https://dhl-freight-connections.com/wp-content/uploads/2023/03/DHL_Blog_RailFreight_Vorteile.jpg"
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
