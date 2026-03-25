"use client";

import { motion } from "framer-motion";

const logos = [
  "Salesforce",
  "HubSpot",
  "Zoho",
  "Zillow",
  "Realtor.com",
  "Twilio",
  "Rightmove",
  "Zoopla"
];

export default function Logos() {
  // Duplicate logos for smooth infinite marquee
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-border bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Integrates seamlessly with your existing stack
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Gradients for fading effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 pr-16"
            animate={{ x: [0, -1035] }} // Approximated width to loop
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="text-2xl font-display font-bold text-muted-foreground/40 whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
