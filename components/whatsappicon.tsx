//components/whatsappicon.tsx
"use client"

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"
import { IoLogoWhatsapp } from "react-icons/io5";

export function WhatsappIcon() {
  return (
    <div className="fixed bottom-8 right-8 z-50 space-y-2">
   
    <a
      href="https://wa.me/+971523528777"
      target="_blank"
      rel="noopener noreferrer"
      className="flex z-99 h-12 w-12 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#25D366] text-white shadow-lg overflow-hidden hover:animate-bounce"
      style={{ scrollBehavior: "unset" }}
    >
      <IoLogoWhatsapp size={32} />
    </a>
    </div>
  )
}