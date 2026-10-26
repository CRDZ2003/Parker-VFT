"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function AirFreightPage() {
  const { scrollYProgress } = useScroll(); // track whole page
  const x = useTransform(scrollYProgress, [0, 1], [-100, 400]);

  return (
    <main id="main ">
      {/* Hero */}
      <HeroSection
        backgroundImage="/hero/services.jpg"
        heading="Our Services"
        description="Explore our range of logistics solutions tailored to your needs."
      />
      <section className="text-white bg-gradient-to-r from-cyan-600 to-cyan-500 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:flex">
          <div>
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Air Freight</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Speed, reliability, and value with global carrier partnerships and charter options.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>

          </div>
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Moving Plane */}
            <motion.img
              src="/air.png"
              alt="Cargo Plane"
              className="w-auto h-40 z-10"
              style={{ x }}
            />

            {/* Cloud on the far left */}
            <img
              src="https://pngimg.com/d/cloud_PNG16.png"
              alt="Cloud Left"
              className="absolute top-30 md:top-1/2 left-0  md:left-30 -translate-y-1/2 w-48 "
            />

            {/* Cloud on the far right */}
            <img
              src="https://pngimg.com/d/cloud_PNG16.png"
              alt="Cloud Right"
              className="absolute top-10 md:top-1/2 right-0 -translate-y-1/2 w-48"
            />
          </div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-10 prose prose-neutral max-w-none mx-4 md:text-justify">
            <div>
              <h2 className="text-2xl text-center md:text-left text-cyan-700 font-bold">Fast & Reliable Air Freight</h2>
              <p>
                Shipping your cargo by air with <strong>Parker Express Shipping LLC</strong> will keep goods moving at
                ideal <strong>speed</strong> and <strong>efficiency</strong> across the supply chain.
                As one of the leading international air freight forwarders, our services deliver three key advantages
                for your shipments: <strong>Value</strong>, <strong>Speed</strong>, and <strong>Low Cost</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Hands-On Professional Support</h3>
              <p>
                Our dedicated team of professionals is ready to provide <em>hands-on support</em> with every shipment.
                Whether you’re transporting <strong>urgent documents</strong>, <strong>high-value goods</strong>,
                or <strong>bulk consignments</strong>, we ensure that each delivery receives the same level of care
                and precision. With experience in handling both <em>imports and exports worldwide</em>, we adapt to your
                needs and provide dependable solutions that keep your business moving.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Global Carrier Partnerships</h3>
              <p>
                To meet the demand for space and cost-efficiency, <strong>Parker Express Shipping LLC</strong> has built
                long-term partnerships with leading <strong>global airlines</strong> and <strong>trusted agents</strong>.
                This allows us to secure space on <em>hundreds of scheduled flights every week</em>, while also offering
                <strong> flexible charter options</strong> for oversized or time-critical cargo.
                Our global network of preferred carriers is carefully selected for their
                <strong> professionalism</strong>, <strong>reliability</strong>, and <strong>capacity</strong> — ensuring
                that your goods are in safe hands at every stage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Customized Supply Chain Solutions</h3>
              <p>
                Beyond transport, we provide <strong>end-to-end visibility</strong>, proactive communication, and
                <strong> customized routing</strong> to optimize your supply chain. Whether it’s <em>peak season</em> or
                <em>off-peak</em>, our strong carrier relationships and local expertise help maintain consistent
                <strong> transit times</strong> and <strong>service quality</strong>, giving you confidence that your
                shipments will arrive on schedule.
              </p>
            </div>

          </article>

          {/* Sidebar with images */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border md:mt-18  mb-6 shadow-lg">
              <Image
                src="https://www.agi.global/wp-content/uploads/2025/06/Airplane-on-airport-runway-against-sky_-1.webp"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6 shadow-lg">
              <Image
                src="https://d1mgbt20s30k9q.cloudfront.net/CMS/s3/dvvacn-library-wv/web/n/t/p/air_cargo_standard_lic_shutterstock_2377477671_supakitswn_2_9_25_452208.jpg?w=1000"
                alt="Airplane for Air Freight"
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
