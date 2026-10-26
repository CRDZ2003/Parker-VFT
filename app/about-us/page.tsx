"use client";
import React from "react"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero"
import { ValueCard } from "@/components/value-card"
import { SectionHeading } from "@/components/section-heading"
import { Building2, ShieldCheck, Gauge, BadgeCheck, Recycle } from "lucide-react"
import { Truck, Globe, CheckCircle, Package, DollarSign, Shield, Target, Eye } from "lucide-react";
import { cn } from "@/lib/utils"
import { motion } from "framer-motion";
import { Sponsors } from "@/components/sponsors";
import { CTASection } from "@/components/cta-section";
import { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutPage() {
  const features = [
    {
      icon: <Truck className="text-cyan-600 w-12 h-12" />,
      title: "Tailored & Flexible Solutions",
      desc: "From single containers to oversized industrial cargo, we design logistics models around your needs.",
    },
    {
      icon: <Globe className="text-cyan-600 w-12 h-12" />,
      title: "Global Coverage, Local Strength",
      desc: "Strong international networks paired with on‑ground local expertise.",
    },
    {
      icon: <CheckCircle className="text-cyan-600 w-12 h-12" />,
      title: "Proven Expertise",
      desc: "Over 2,000 successful projects across diverse industries.",
    },
    {
      icon: <Package className="text-cyan-600 w-12 h-12" />,
      title: "End-to-End Logistics",
      desc: "We manage the entire process—from customs clearance to warehousing and final delivery.",
    },
    {
      icon: <DollarSign className="text-cyan-600 w-12 h-12" />,
      title: "Cost-Efficient with Quality",
      desc: "Competitive rates while maintaining safety, reliability, and timely execution.",
    },
    {
      icon: <Shield className="text-cyan-600 w-12 h-12" />,
      title: "Safety & Compliance",
      desc: "Proactive risk management and customs expertise from end to end.",
    },
  ];
  return (
    <main id="main">
      {/* Hero */}
      <HeroSection
        backgroundImage="/hero/about.jpg"
        heading="About Parker Express Shipping LLC"
        description="Delivering end-to-end logistics solutions with a process-oriented approach, strong partner network, and dedicated team."
      />

      {/* About Us */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Who we are" title="About Us" align="left" />
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-3">
              <p className="leading-relaxed text-foreground/80">
                Parker Express Shipping LLC is a leading logistics operator offering a complete range of services in
                customs clearance and transportation for all types of cargo worldwide. Established by <strong>Ummer Sharief</strong> and
                headquartered in <strong>Ras Al Khaimah, UAE</strong>, Parker has become a trusted partner for businesses engaged in
                global trade.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                What makes Parker different is not just the ability to move cargo—it’s the promise of confidence,
                reliability, and efficiency. Our team consists of highly skilled professionals who combine extensive
                experience with modern communication systems and tracking technologies. This allows us to manage the
                movement of goods at the right speed and precision, while ensuring complete visibility throughout the
                supply chain.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                At Parker, our goal is not only to deliver shipments but also to create value by building bridges
                between markets, opening new opportunities, and strengthening businesses across the world.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-lg border bg-muted/30">
                <Image
                  src="/home/whoweare.jpg"
                  alt="Parker logistics operations in warehouse"
                  width={960}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatItem value="2000" label="Projects Delivered" type="count" />
              <StatItem value="Global" label="Coverage" type="fade-left" />
              <StatItem value="End-to-End" label="Logistics Scope" type="fade-right" />
              <StatItem value="24/7" label="Visibility & Tracking" type="fade-right" />
            </div>
          </div>
        </section>

      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 bg-cyan-600 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-extrabold">Our Mission & Vision</h2>
          <p className="text-center text-lg italic mb-8">Purpose & direction</p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-white p-6 shadow-lg text-black"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-8 w-8 text-cyan-600" />
                <h3 className="text-xl font-bold">Mission</h3>
              </div>
              <p className="mt-2 text-gray-700">
                To build a culture of mutual respect while inspiring progress in the logistics
                industry by providing competitive, high-quality, and customized services that
                meet each client’s unique needs.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-white p-6 shadow-lg text-black"
            >
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-8 w-8 text-cyan-600" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="mt-2 text-gray-700">
                To become the most reliable logistics backbone for businesses worldwide by
                creating trusted infrastructure that allows clients to confidently outsource
                all their logistics requirements—both domestically and globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* <SectionHeading eyebrow="How we operate" title="Our Values" align="left" /> */}
          <h2 className="text-center text-4xl text-cyan-600 font-extrabold">Our Values</h2>
          <p className="text-center text-lg italic mb-8">How we operate</p>
          {/* <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex">
              <ValueCard
                icon={BadgeCheck}
                title="Excellence Through Process"
                description="Every activity follows the PDCA (Plan–Do–Check–Act) cycle, ensuring consistency, improvement, and error-free execution."
              />
            </div>

            <div className="flex">
              <ValueCard
                icon={Gauge}
                title="Innovation & Technology"
                description="We invest in digital tracking systems, logistics software, and employee training so clients always stay ahead."
              />
            </div>

            <div className="flex">
              <ValueCard
                icon={ShieldCheck}
                title="Trust & Integrity"
                description="Partnerships built on honesty, transparency, and delivering on promises."
              />
            </div>

            <div className="flex">
              <ValueCard
                icon={Building2}
                title="Customer-Centric Service"
                description="Tailored, scalable, and flexible solutions that recognize no two businesses have the same needs."
              />
            </div>

            <div className="flex">
              <ValueCard
                icon={Recycle}
                title="Sustainability"
                description="Eco-friendly warehousing and efficient transport planning to reduce environmental impact."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Parker */}
      <section className="bg-cyan-600 text-white px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold mb-2">Why Choose Parker Express Shipping</h2>
          <p className="text-lg italic mb-12">What sets us apart</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-white p-6 text-black hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <CTASection />
      <Sponsors />
    </main>
  )
}


interface StatItemProps {
  value: string;
  label: string;
  type?: "count" | "fade-left" | "fade-right";
}

export function StatItem({ value, label, type }: { value: string; label: string; type?: string }) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.3 }) // 👈 replay every time
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (inView && type === "count") {
      let start = 1600
      const end = 2000
      const duration = 100 // 2s
      const stepTime = Math.max(Math.floor(duration / end), 1) // ~2ms
      timer = setInterval(() => {
        start++
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(start)
        }
      }, stepTime)
    } else if (!inView && type === "count") {
      setCount(1600) // reset when out of view
    }

    if (inView) controls.start("visible")
    else controls.start("hidden")

    return () => clearInterval(timer)
  }, [inView, type, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: type === "fadeLeft" ? -50 : type === "fadeRight" ? 50 : 0 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
      }}
      className="rounded-lg border bg-purple-900 text-white p-6 text-center"
    >
      <div className="text-2xl font-semibold">
        {type === "count" ? `${count}${count === 2000 ? "+" : ""}` : value}
      </div>
      <div className="mt-1 text-sm">{label}</div>
    </motion.div>
  )
}