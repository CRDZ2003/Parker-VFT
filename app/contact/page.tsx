"use client";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/hero";
import { Sponsors } from "@/components/sponsors"
import {ContactForm} from "@/components/contactform";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Building2, MessageSquareMore, ShieldAlert, DollarSign, Truck, FileText } from "lucide-react";
import { Ship, Plane, Upload, Download,  } from "lucide-react";
import { LocationsSection } from "@/components/sections/locations";

const channels = [
  {
    title: "Sales & Quotes",
    desc: "New shipments, pricing, and tenders.",
    email: "sales@parkershipping.com",
    phone: "+971 52 352 8777",
    icon: DollarSign, // sales icon
  },
  {
    title: "Operations",
    desc: "Schedules, tracking, and documentation.",
    email: "ops@parkershipping.com",
    phone: "+971 52 352 8777",
    icon: Truck, // operations icon
  },
]


export default function ContactPage() {
  const offices = [
    {
      city: "Ras Al Khaimah, UAE",
      address: [
        "Office No: 8F-11, 8th Floor, Tower 2,",
        "Rakez Amenity Center Building,",
        "Al Jazeerah Al Hamra, Ras Al Khaimah - UAE",
      ],
      phone: "+971 52 352 8777",
      phoneHref: "tel:+971523528777",
      email: "info@parkershipping.com",
      map: "https://www.google.com/maps?q=Rakez+Amenity+Center+Building+Al+Jazeerah+Al+Hamra+Ras+Al+Khaimah&output=embed",
    },
    // Add more offices here if needed
  ];

const channels = [
  {
    title: "Sea Freight Sales & Quotes",
    desc: "Inquiries, bookings, and quotations for sea freight.",
    email: "seafreight@parkershipping.com",
    phone: "+971 50 276 6247",
    icon: Ship, // Sea freight
  },
  {
    title: "Air Freight Sales & Quotes",
    desc: "Inquiries, bookings, and quotations for air freight.",
    email: "airfreight@parkershipping.com",
    phone: "+971 50 276 7941",
    icon: Plane, // Air freight
  },
  {
    title: "Finance",
    desc: "Invoices, payments, and billing inquiries.",
    email: "accounts@parkershipping.com",
    phone: "+971 52 152 4640",
    icon: DollarSign, // Finance
  },
  {
    title: "Land Freight Sales & Quotes",
    desc: "Inquiries, bookings, and quotations for land transport.",
    email: "landfreight@parkershipping.com",
    phone: "+971 50 276 6771",
    icon: Truck, // Land freight
  },
  {
    title: "Export Operations",
    desc: "Documentation, customs clearance, and shipment tracking for exports.",
    email: "export@parkershipping.com",
    phone: "+971 50 276 6457",
    icon: Upload, // Export icon
  },
  {
    title: "Import Operations",
    desc: "Documentation, customs clearance, and shipment tracking for imports.",
    email: "import@parkershipping.com",
    phone: "+971 50 276 9647",
    icon: Download, // Import icon
  },
];

  return (
    <main id="main" className="min-h-screen">
      {/* Hero */}
      <HeroSection
        backgroundImage="/hero/contact.jpg"
        heading="Contact Us"
        description="We’re here to help with quotes, schedules, and shipment updates."
      />

      {/* Branches section */}
      <LocationsSection />

      {/* Offices */}
      {/* <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6" />
            <h2 className="text-2xl md:text-3xl font-semibold">Offices</h2>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.city} className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">{o.city}</h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
                  {o.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </address>
                <p className="mt-3 text-sm">
                  <a href={o.phoneHref} className="hover:text-primary inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {o.phone}
                  </a>
                  <br />
                  <a href={`mailto:${o.email}`} className="hover:text-primary inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {o.email}
                  </a>
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border">
                  <iframe
                    title={`Map for ${o.city}`}
                    src={o.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-48 w-full"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Contact form */}
      <section id="contact-form" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactForm />

            {/* Sidebar: hours & emergency */}
            <aside className="space-y-6">
              <div className="bg-purple-900 text-white rounded-2xl border p-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Business Hours (UAE)</h3>
                </div>
                <ul className="mt-3 text-sm text-gray-200 space-y-1">
                  <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                  <li>Sat: 10:00 AM – 2:00 PM</li>
                  <li>Sun: Closed</li>
                </ul>
              </div>

              <div className="bg-purple-900 text-white rounded-2xl border p-6">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">After-hours / Emergency</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">
                  For urgent shipment issues outside business hours, please call our emergency line.
                </p>
                <a href="tel:+971523528777" className="mt-3 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition">
                  <Phone className="h-4 w-4" /> +971 52 352 8777
                </a>
              </div>

              <div className="bg-purple-900 text-white rounded-2xl border p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Find us</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">
                  Rakez Amenity Center Building, Al Jazeerah Al Hamra, Ras Al Khaimah, UAE
                </p>
                <div className="mt-3 overflow-hidden rounded-xl border">
                  <iframe
                    title="Map to Parker Shipping UAE"
                    src="https://www.google.com/maps?q=Rakez+Amenity+Center+Building+Al+Jazeerah+Al+Hamra+Ras+Al+Khaimah&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-60 w-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl text-center md:text-3xl font-semibold">How can we help?</h2>
          <div className="mt-6  grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-gray-100 text-black border p-6"
              >
                <div className="flex items-center gap-2">
                  <c.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" /> {c.email}
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a
                      href={`tel:${c.phone.replace(/\s+/g, "")}`}
                      className="hover:text-primary"
                    >
                      {c.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Sponsors />


    </main>
  );
}
