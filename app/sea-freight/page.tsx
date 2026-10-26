"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Sponsors } from "@/components/sponsors";
import HeroSection from "@/components/hero"

export default function SeaServicePage() {
  const { scrollYProgress } = useScroll(); // track whole page
  const x = useTransform(scrollYProgress, [0, 1], [-50, 200]);
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
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Sea Freight</h1>
            <p className="text-center md:text-left mt-4 max-w-4xl ">
              Time-definite, innovative FCL and LCL service with priority loading and consistent schedules. Alternate routing
              minimizes congestion and delays, ensuring cargo arrives when needed.
            </p>
            <Link href="/contact#contact-form">
              <Button className="hidden md:block mt-4 bg-purple-900 text-white hover:bg-purple-800 w-1/2 font-medium">
                Get Started
              </Button>
            </Link>

          </div>
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Moving Ship */}
            <motion.img
              src="https://static.vecteezy.com/system/resources/thumbnails/045/158/443/small_2x/large-cargo-ship-transporting-containers-png.png"
              alt="Cargo Ship"
              className="w-auto h-80 z-10 transform scale-x-[-1]"
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
              <p>
                <strong className="text-cyan-700 text-center md:text-left text-2xl">Sea Freight</strong>
              </p>

              <p>
                Parker Express Shipping LLC delivers time-definite and innovative sea freight
                services for both Full Container Loads (FCL) and Less Than Container Loads (LCL)
                shipments across the globe. As one of the prominent sea freight forwarders,
                we are capable of handling large volumes on a global scale or tailoring solutions
                to meet your specific requirements, anytime and anywhere.
              </p>

              <p>
                Whether you need your shipments managed on an individual basis or integrated
                seamlessly into a larger supply chain solution, our expertise ensures a smooth
                and efficient process. To guarantee safe and accurate movement of your cargo,
                our strong carrier relationships provide loading priority for your shipments.
                When congestion arises, our local experts step in to secure capacity and arrange
                the most effective alternative routes, minimizing delays and ensuring your goods
                arrive on time.
              </p>

              <p>
                Beyond the shipment itself, Parker Express offers a wide range of value-added
                freight management services — including carrier contract management — designed
                to simplify your operations and optimize costs.
              </p>

              <h3 className="text-cyan-600">FCL (Full Container Loads)</h3>
              <p>
                Through close partnerships with premier sea carriers, we provide highly
                competitive rates, reliable transit times, and top-tier security for your
                shipments worldwide. Our value-added FCL service is designed to maximize
                efficiency while ensuring that your time-sensitive schedules are consistently met.
                With Parker Express Shipping LLC, your full container shipments are delivered
                securely and on time, anywhere around the world.
              </p>

              <h3 className="text-cyan-600">LCL (Less Than Container Loads)</h3>
              <p>
                For smaller shipments, our proven LCL services - trusted by leading companies -
                offer flexibility, consistency, and cost-effectiveness. We operate fast and
                reliable weekly sailings with dependable port-to-port and door-to-door transit
                times year-round. With fixed schedules under our control at both origin and
                destination, Parker Express Shipping LLC ensures the most reliable LCL service
                available in the market, giving your business confidence and predictability
                with every shipment.
              </p>
            </div>


          </article>

          {/* Sidebar form */}
          <aside className="lg:col-span-1">
            <div className="relative aspect-[16/9] overflow-hidden md:mt-18 rounded-lg border mb-6">
              <Image
                src="https://vstrans.in/wp-content/uploads/2022/05/sea-shipment-2.jpg"
                alt="Loading cargo for Air Freight"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border mb-6">
              <Image
                src="https://transmodal.net/wp-content/uploads/ocean-freight-less-than-container-load.jpg"
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
