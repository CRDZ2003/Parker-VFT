"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function CustomsServicePage() {
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
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Customs Clearance & Security</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Expert brokerage and compliance to keep your imports and exports moving without friction. Our specialists handle
              documentation, security, and regulations end-to-end.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="relative w-full mt-8 md:h-40 flex items-center justify-center">
            {/* Moving Ship */}
            <motion.img
              src="https://gowarehouse.io/wp-content/uploads/2021/06/order-processing-animation-1.gif"
              alt="Cargo Ship"
              className="w-auto h-68 z-10"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-6 prose prose-neutral max-w-none mx-4 md:text-justify">
              <h2 className="text-2xl text-center md:text-left text-cyan-700 font-bold">Customs Clearance & Security</h2>

              <p>
                A well-designed and well-managed customs clearance program reduces phase times,
                improves shipment visibility, and lowers costs. Local experts from our Customs service
                facilitate the timely and reliable movement of your goods through the customs process.
              </p>

              <p>
                We offer clearance in a reliable, timely, and cost-effective manner by acting as a direct
                extension of your business. Each client is assigned a single point of contact trained
                to handle all clearance needs. Supported by licensed professionals and connected
                information systems, we provide document translation, classification, and compliance
                with customs authorities.
              </p>

              <ul className="list-inside space-y-2">
                <li><strong className="text-cyan-600">Multilingual Support:</strong> Translation services for all customs documents, eliminating language barriers.</li>
                <li><strong className="text-cyan-600">Comprehensive Cargo Management:</strong> Cargo availability checks, physical inspections, re-stuffing, and delivery arrangements.</li>
                <li><strong className="text-cyan-600">Expert Classification:</strong> Accurate goods classification under customs codes, ensuring proper duty calculations.</li>
                <li><strong className="text-cyan-600">Claim Protection:</strong> In case of damaged cargo, we arrange surveys and acquire loss reports to help secure compensation.</li>
              </ul>
            </div>
          </article>

          {/* Sidebar form */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://www.marineinsight.com/wp-content/uploads/2021/05/CSC-safety-approval-plate.png"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://www.bertling.com/media/iudcmubu/customs-clearance.png?format=webp"
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
