"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
    backgroundImage: string;
    heading: string;
    description?: string;
}

export default function HeroSection({
    backgroundImage,
    heading,
    description,
}: HeroSectionProps) {
    return (
        <section
            className="relative isolate flex items-center justify-center text-center text-white min-h-[70vh] md:min-h-[80vh]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-3xl px-4"
            >
                <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>
                {description && (
                    <p className="mt-4 text-base md:text-lg text-gray-200">{description}</p>
                )}
            </motion.div>
        </section>

    );
}
