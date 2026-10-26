//components/cta-section.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Power Your Next Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact Parker Express Shipping LLC today and discover how our innovative solutions can drive your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact#contact-form">
              <Button size="lg" className="bg-white text-cyan-800 hover:bg-gray-100 px-8 py-4 text-lg font-medium group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/service">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-medium bg-transparent"
              >
                Browse Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <Link href="tel:+971523528777" className="hover:font-bold">
                <span>+971523528777 </span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href="mailto:info@parkershipping.com" className="hover:font-bold">
                <span>info@parkershipping.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}