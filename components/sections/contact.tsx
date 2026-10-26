// //components/ContactSection.tsx
"use client"
import { useState, useRef } from "react"
import type React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button" // Adjust the import based on your project
import emailjs from "@emailjs/browser"

const contactDetails = [
  {
    icon: Phone, title: "Phone", content: (
      <>
        +971 52 352 8777
      </>),
  },
  { icon: Mail, title: "Email", content: "info@parkershipping.com" },
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Office No:8F-11, 8th Floor, Tower 2,<br />
        Rakez Amenity Center Building,<br />
        Al Jazeerah Al Hamra, <br />
        Ras Al Khaimah - UAE
      </>
    ),
  },
]

export default function ContactSection() {
  const [date, setDate] = useState<Date>()
  const form = useRef<HTMLFormElement>(null)
  const [alertMessage, setAlertMessage] = useState("")
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const serviceID = "service_p7uk29z"
    const templateID = "template_76b9r1e"

    if (!form.current) return

    const formDataObj = new FormData(form.current)
    const formattedMessage = `Details:\nName: ${formDataObj.get("name")}\n Email Address: ${formDataObj.get("email")} \nMessage: ${formDataObj.get("message")}`

    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_name: "Parker Express Shipping LLC",
          from_name: `${formDataObj.get("name")}`,
          message: formattedMessage,
        },
        "L58xMleRPsfxyqJqT",
      )
      .then(() => {
        setFormStatus("success") // Set formStatus to "success"
        setAlertMessage("Form has been submitted successfully! We will get back to you soon.")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((err) => {
        console.error("Something went wrong: ", err)
        setFormStatus("error") // Set formStatus to "error"
        setAlertMessage("Couldn't submit the form. Please try again later.")
      })

    setTimeout(() => {
      setAlertMessage("")
    }, 5000)
      ; (event.target as HTMLFormElement).reset()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-6 z-0 sm:py-8 px-4 text-black relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/logo/smlogo.png?height=300&width=300"
          alt="Company Logo Watermark"
          className="opacity-50 w-auto h-auto sm:h-3/4"
        // style={{ width: "300px", height: "300px" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 0 bg-clip-text "
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <p className="text-lg sm:text-xl">
            Get in touch with our experts
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column – Contact Info */}
          <div className="transform hover:scale-[1.02] transition-all duration-700 perspective-1000">
            <div className="transform transition-all duration-700 hover:rotateY-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4 sm:space-y-6 justify-center flex flex-col items-center sm:justify-start sm:items-start">
                {contactDetails.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-900 to-purple-950 text-white flex items-center w-[300px] md:w-[400px] group hover:bg-white/10 p-3 rounded-lg transition-all duration-500 transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <contact.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-4 group-hover:scale-110 transition-transform duration-500" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {contact.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {contact.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column – Contact Form */}
          <div className="transform hover:scale-[1.02] transition-all duration-700 perspective-1000">
            <div className="transform transition-all duration-700 hover:rotateY-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Send Message
              </h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {alertMessage && (
                  <div
                    id="alertMessage"
                    className={`mb-4 text-center text-sm font-semibold ${formStatus === "error" ? "text-red-500" : "text-green-500"
                      }`}
                  >
                    {alertMessage}
                  </div>
                )}
                <label className="text-black font-bold">
                  Enter Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={`w-full p-3 rounded bg-white text-black placeholder-slate-300 border border-gray-600 focus:border-blue-400 focus:outline-none transition-all duration-500 focus:scale-[1.02] text-sm sm:text-base ${formData.name ? "bg-white" : "bg-transparent"
                    }`}
                />
                <label className="text-black font-bold">
                  Enter Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className={`w-full p-3 rounded bg-white text-black placeholder-slate-300 border border-gray-600 focus:border-blue-400 focus:outline-none transition-all duration-500 focus:scale-[1.02] text-sm sm:text-base ${formData.name ? "bg-white" : "bg-transparent"
                    }`} />
                <label className="text-black font-bold">
                  Enter Your Message:
                </label>
                <textarea
                  placeholder="Your Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full p-3 rounded bg-white text-black placeholder-slate-300 border border-gray-600 focus:border-blue-400 focus:outline-none transition-all duration-500 focus:scale-[1.02] text-sm sm:text-base ${formData.name ? "bg-white" : "bg-transparent"
                    }`}>
                </textarea>

                <Button className="bg-cyan-600 hover:bg-cyan-950 text-white px-6 sm:px-8 py-3 rounded font-semibold w-full transition-all duration-500 hover:scale-105 hover:shadow-xl transform-gpu">
                  Send Message
                </Button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
