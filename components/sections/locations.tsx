"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

type Branch = {
  name: string
  company: string
  address: string[]
}

const branches: Branch[] = [
  {
    name: "OMAN",
    company: "PARKER EXPRESS SHIPPING AND DEVELOPMENT SPC",
    address: [
      "Al Khuwairiyah 4, Plot No. 98, Shop No. 1",
      "Sohar, Oman",
    ],
  },
  {
    name: "INDIA",
    company: "PAREX INDIA PRIVATE LIMITED",
    address: ["Thokottu, Mangalore, India"],
  },
  {
    name: "UAE – RAS AL KHAIMAH",
    company: "",
    address: [
      "Office No: 8F-11, 8th Floor, Tower 2,",
      "RAKEZ Amenity Center Building,",
      "Al Jazeerah Al Hamra, Ras Al Khaimah, UAE",
    ],
  },
  {
    name: "UAE – HEAD OFFICE",
    company: "",
    address: [
      "Julphar Towers, Avenue Tower,",
      "Office No: 2208, Floor: 22,",
      "Ras Al Khaimah, United Arab Emirates",
    ],
  },
  {
    name: "UAE – SHARJAH",
    company: "Hamriyah Free Zone Authority (HFZE)",
    address: [
      "P1-ELOB Office No. E-23F-37",
      "Hamriyah Free Zone, Sharjah,",
      "United Arab Emirates",
    ],
  },
  {
    name: "UAE – AL HAMRA FREE ZONE",
    company: "Al Hamra - Free Zone Customs Building",
    address: [
      "Office No. CT01-17, Customs Building 01",
      "Al Hamra Industrial Free Zone,",
      "Ras Al Khaimah, United Arab Emirates",
    ],
  },
]

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group h-full rounded-[20px] bg-[#F5F6F8] p-5 shadow-[0_10px_25px_rgba(3,26,31,0.08)] transition-all duration-300 ease-out md:hover:shadow-[0_16px_30px_rgba(3,26,31,0.14)] sm:p-6"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <MapPin className="h-7 w-7" strokeWidth={2.5} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[22px] font-bold leading-tight tracking-[-0.02em] text-[#111111] sm:text-[24px]">
            {branch.name}
          </h3>

          {branch.company ? (
            <p className="mt-3 text-[17px] font-semibold leading-relaxed text-[#111111] sm:text-[18px]">
              {branch.company}
            </p>
          ) : null}

          <div className="mt-3 space-y-1 text-[16px] leading-relaxed text-[#444444] sm:text-[17px]">
            {branch.address.map((line, lineIndex) => (
              <p key={`${branch.name}-${lineIndex}`}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function LocationsSection() {
  return (
    <section id="locations" className="relative w-full overflow-hidden bg-[#0798B5] py-12 sm:py-14 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#9BD6E5]" />

      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            className="text-[30px] font-bold tracking-[-0.04em] text-white sm:text-[36px] lg:text-[46px]"
            style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
          >
            Our Branches
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
