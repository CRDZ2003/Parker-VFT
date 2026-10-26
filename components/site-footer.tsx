"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className=" bg-purple-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo/parker.png"
                alt="Parker Express logo"
                width={220}
                height={80}
                className="invert brightness-0"
              />
              <span className="sr-only">Parker Express Shipping LLC</span>
            </Link>
            <p className="mt-4 text-sm max-w-xs">
              Transport Anything From Anywhere. Reliable logistics across Air, Sea, Land, Warehousing & Projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold tracking-wide text-cyan-600">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-cyan-600">About</Link></li>
              <li><Link href="/service" className="hover:text-cyan-600">Services</Link></li>
              {/* <li><Link href="/careers" className="hover:text-cyan-600">Careers</Link></li> */}
              <li><Link href="/contact" className="hover:text-cyan-600">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold tracking-wide text-cyan-600">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/air-freight" className="hover:text-cyan-600">Air Freight</Link></li>
              <li><Link href="/project-cargo" className="hover:text-cyan-600">Project Handling, OOG Cargo</Link></li>
              <li><Link href="/sea-freight" className="hover:text-cyan-600">Sea Freight</Link></li>
              <li><Link href="/warehousing-and-distribution" className="hover:text-cyan-600">Warehousing & Distribution</Link></li>
              <li><Link href="/land-transportation-cross-border-trucking" className="hover:text-cyan-600">Land Freight</Link></li>
              <li><Link href="/customs" className="hover:text-cyan-600">Customs Clearance & Security</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-wide text-cyan-600 items-center text-center">Contact</h3>
            <div className="ml-18 md:ml-8 mt-3 space-y-3 text-sm">
              <p className="flex gap-2">
                <MapPin className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                Office No: 8F-11, 8th Floor,<br />
                Tower 2, Rakez Amenity Center Building,
                Al Jazeerah Al Hamra, <br />Ras Al Khaimah - UAE
              </p>
              <p className="flex gap-2">
                <Phone className="h-5 w-5 text-cyan-600" />
                <a href="tel:+971523528777" className="hover:text-cyan-600">+971 52 352 8777</a>
              </p>
              <p className="flex gap-2">
                <Mail className="h-5 w-5 text-cyan-600" />
                <a href="mailto:info@parkershipping.com" className="hover:text-cyan-600">info@parkershipping.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t pt-6 text-sm text-white">
          <p className="text-center">© {new Date().getFullYear()} Parker Express Shipping LLC. All rights reserved. | Designed by <Link className="hover:text-cyan-600" href="https://www.visionflowtech.com/">VisionFlow Technologies</Link> </p>
        </div>

      </div>
    </footer>
  )
}
