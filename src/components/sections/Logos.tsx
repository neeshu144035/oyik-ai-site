"use client";

import { motion } from "framer-motion";
import { 
  Layout, 
  MessageSquare, 
  Phone, 
  Settings, 
  Zap,
  Cpu,
  Cloud,
  Bot,
  Building,
  Calendar,
  House
} from "lucide-react";

const logos = [
  { name: "Salesforce", icon: Cloud },
  { name: "HubSpot", icon: Zap },
  { name: "Zoho", icon: Settings },
  { name: "Zillow", icon: House },
  { name: "Realtor.com", icon: Building },
  { name: "Twilio", icon: Phone },
  { name: "Rightmove", icon: Layout },
  { name: "Zoopla", icon: Building },
  { name: "n8n", icon: Bot },
  { name: "OpenAI", icon: Cpu },
  { name: "Claude", icon: MessageSquare },
  { name: "Calendly", icon: Calendar },
];

export default function Logos() {
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 border-y border-border/60 bg-white/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 mb-10">
        <h2 className="text-center text-sm font-semibold tracking-[0.32em] text-muted-foreground uppercase">
          Runs on the providers behind modern AI real estate teams
        </h2>
      </div>

      <div className="relative flex flex-col gap-6 py-2">
        {/* Layer 1 - Fastest */}
        <div className="relative w-full flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: [0, -1320] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div 
                key={`layer1-${idx}`} 
                className="flex items-center justify-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-white/80 shadow-md">
                  <logo.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Layer 2 - Medium */}
        <div className="relative w-full flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: [-1320, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 65,
            }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div 
                key={`layer2-${idx}`} 
                className="flex items-center justify-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/40 bg-white/60">
                  <logo.icon className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Layer 3 - Slowest */}
        <div className="relative w-full flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: [0, -1320] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 85,
            }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div 
                key={`layer3-${idx}`} 
                className="flex items-center justify-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/30 bg-white/40">
                  <logo.icon className="h-5 w-5 text-indigo-400" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
