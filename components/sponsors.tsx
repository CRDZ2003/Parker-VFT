//components/sponsors.tsx
"use client"
import Image from "next/image"

const company = [
  {
    id: 1,
    name: "ABB Ltd",
    logo: "https://global.abb/content/dam/abb-etc/commons/abb-logo.svg"
  },
  {
    id: 2,
    name: "Saudi Arabia Airlines",
    logo: "https://www.gramansgroup.com/wp-content/uploads/2022/04/Saudi-Arabian-Airlines-Logo.png"
  },
  {
    id: 3,
    name: "Toyota",
    logo: "https://static3.toyotabharat.com/images/toyota-logo-main-136x24.svg"
  },
  {
    id: 4,
    name: "SABIC",
    logo: "https://www.sabic.com/en/Images/SABIC-LOGO_tcm1010-14323.svg"
  },
]

export function Sponsors() {
  return (
    <section className="py-16 bg-gray-100 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients & Partners</h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-20"> {/* increased spacing */}
            {/* First set of company */}
            {company.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20" // fixed container
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {company.map((company) => (
              <div
                key={`${company.id}-duplicate`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* default (desktop) */
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        /* faster on tablets */
        @media (max-width: 1024px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }

        /* fastest on mobile */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}