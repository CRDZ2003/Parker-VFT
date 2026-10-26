"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCluster() {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"], // start when enters viewport, end when center hits
  });

  // Move only 1/4 of the way (e.g., max 50px to the left)
  const x = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ x }}>
        <img src="/truck.png" alt="Truck" className="w-full" />
      </motion.div>
    </div>
  );
}
