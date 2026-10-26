//components/slide-over.tsx
"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function SlideOver({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-80 sm:w-96 bg-gray-900 text-white shadow-xl p-6 flex flex-col">
            {/* Close */}
            <button
              className="self-end text-gray-400 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="/logo/parker.png"
                  alt="Parker Express Shipping LLC"
                  className="h-10"
                />
              </div>

              <p className="text-sm leading-relaxed text-gray-300">
                Create shipment from quotation. Create consolidation shipment.
                Direct booking to major shipping lines. Co-load shipments to
                other freight forwarders.
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
                <p className="text-sm text-gray-300">
                  Office No: 8F-11, 8th Floor, Tower 2, Rakez Amenity Center
                  Building, Al Jazeerah Al Hamra, Ras Al Khaimah – UAE
                </p>
                <p className="mt-2">📞 +971 52 352 8777</p>
                <p>✉ info@parkershipping.com</p>
              </div>

              <div className="flex gap-3 mt-4">
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
