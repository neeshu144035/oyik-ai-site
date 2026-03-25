"use client";

import { motion } from "framer-motion";
import { Plug, BrainCircuit, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "We connect your listings (or data feed), your calendar, and your channels (web chat + socials + phone + email).",
    icon: Plug,
  },
  {
    number: "02",
    title: "Train",
    description: "We configure your FAQs, qualification questions, tone of voice, routes to sales, and message templates.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Launch & Improve",
    description: "Go live fast, then optimize with analytics: response times, booked viewings, and lead quality.",
    icon: Rocket,
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6"
          >
            How it <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A simple, done-for-you rollout process. We handle the technical setup so you can focus on selling properties.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-8 glow-card relative">
                  <span className="font-mono font-bold text-xl text-primary">{step.number}</span>
                  {/* Icon floating */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground shadow-lg">
                    <step.icon size={14} />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
