"use client";

import { motion } from "framer-motion";
import {
  siAnthropic,
  siCalendly,
  siClaude,
  siCloudflare,
  siGooglecloud,
  siHostinger,
  siHubspot,
  siLivekit,
  siMeta,
  siWhatsapp,
  siZapier,
  siZoho,
} from "simple-icons";

const logos = [
  siHostinger,
  siGooglecloud,
  siLivekit,
  siCloudflare,
  siClaude,
  siAnthropic,
  siHubspot,
  siMeta,
  siWhatsapp,
  siCalendly,
  siZapier,
  siZoho,
];

export default function Logos() {
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-14 border-y border-border/60 bg-white/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 mb-8">
        <h2 className="text-center text-sm font-semibold tracking-[0.32em] text-muted-foreground uppercase">
          Runs on the providers behind modern AI real estate teams
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-6 pr-6"
            animate={{ x: [0, -1320] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 24,
            }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                aria-label={logo.title}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-white/85 shadow-[0_18px_35px_-24px_rgba(67,56,202,0.55)] backdrop-blur-xl"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill={`#${logo.hex}`}
                >
                  <path d={logo.path} />
                </svg>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
