import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import HeroSection from "@/components/hero"
import { Sponsors } from "@/components/sponsors"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {CTASection} from "@/components/cta-section"

export default function CareersPage() {
  return (
    <main id="main">
      {/* Hero */}
      <HeroSection
        backgroundImage="/hero/careers.jpg"
        heading="Careers at Parker Express Shipping LLC"
        description="Join a fast-growing logistics team shaping end-to-end freight solutions across air, sea, land, and warehousing."
      />

      {/* Intro */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold">Your Future with Parker Express</h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            At Parker Express Shipping LLC, our people are the driving force behind our success.
            Headquartered in Dubai, UAE, we have been providing supply chain and logistics services
            for over five years across global markets. We are committed to developing careers,
            recognizing talent, and building a workplace where innovation, integrity, and teamwork thrive.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <h3 className="text-2xl font-semibold text-center">Why Work With Us?</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-purple-900 text-white p-6 shadow-sm">
              <h4 className="font-semibold">Global Exposure</h4>
              <p className="mt-2 text-sm text-white">
                Work on international logistics projects connecting businesses across continents.
              </p>
            </div>
            <div className="rounded-lg bg-purple-900 text-white p-6 shadow-sm">
              <h4 className="font-semibold">Career Growth</h4>
              <p className="mt-2 text-sm text-white">
                Training, mentorship, and clear career paths to help you achieve your goals.
              </p>
            </div>
            <div className="rounded-lg bg-purple-900 text-white p-6 shadow-sm">
              <h4 className="font-semibold">Collaborative Culture</h4>
              <p className="mt-2 text-sm text-white">
                Work with talented colleagues in a supportive, inclusive environment.
              </p>
            </div>
            <div className="rounded-lg bg-purple-900 text-white p-6 shadow-sm">
              <h4 className="font-semibold">Rewards & Benefits</h4>
              <p className="mt-2 text-sm text-white">
                Competitive pay, health & wellness initiatives, and performance incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h3 className="text-2xl font-bold">Current Opportunities</h3>
          <p className="mt-4 text-gray-200">
            We’re always looking for great people in operations, sales, customs, and project logistics.
            If you don’t see a role listed yet, send us your resume and we’ll reach out when there’s a fit.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-purple-900 rounded-lg  p-6 text-left">
              <h4 className="text-xl font-bold">Operations Coordinator</h4>
              <p className="mt-2 text-sm text-gray-200">Manage day-to-day logistics and ensure smooth cargo handling.</p>
              <Link
                href="contact#contact-form"
                className="mt-4 inline-flex items-center text-cyan-600 font-medium"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-purple-900 rounded-lg  p-6 text-left">
              <h4 className="font-bold text-xl">Sales Executive</h4>
              <p className="mt-2 text-sm text-gray-200">Build client relationships and drive business growth in logistics solutions.</p>
              <Link
                href="contact#contact-form"
                className="mt-4 inline-flex items-center text-cyan-600 font-medium"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-purple-900 rounded-lg  p-6 text-left">
              <h4 className="font-bold text-xl">Customs Clearance Specialist</h4>
              <p className="mt-2 text-sm text-gray-200">Handle documentation and ensure compliance with global trade regulations.</p>
              <Link
                href="contact#contact-form"
                className="mt-4 inline-flex items-center text-cyan-600 font-medium"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Resume */}
      {/* <section id="resume-form" className="bg-cyan-600">
        <h3 className="text-3xl text-center text-white py-10 font-bold">
          Submit your Resume
        </h3>

        <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        
          <div className="rounded-lg border bg-background p-6 shadow-lg">
            <form
              action="/api/submit"
              method="post"
              encType="multipart/form-data"
              className="mt-4 grid gap-4 sm:grid-cols-2"
            >
              <input type="hidden" name="form" value="careers" />

              <div className="sm:col-span-1">
                <Label className="p-1" htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="sm:col-span-1">
                <Label className="p-1" htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="sm:col-span-1">
                <Label className="p-1" htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" />
              </div>

              <div className="sm:col-span-1">
                <Label className="p-1" htmlFor="role">Desired Role</Label>
                <Input id="role" name="role" placeholder="Operations, Sales, Customs..." />
              </div>

              <div className="sm:col-span-2">
                <Label className="p-1" htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a bit about your experience…"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="p-1" htmlFor="resume">Resume (PDF)</Label>
                <Input id="resume" name="resume" type="file" accept=".pdf" />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800 text-white py-3">
                  Send Application
                </Button>
              </div>
            </form>
          </div>

    
          <div className="flex justify-center items-center">
            <img
              src="/placeholder.svg"
              alt="Career Opportunities"
              className="rounded-lg shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section> */}
      <CTASection/>
      <Sponsors />
    </main>
  )
}
