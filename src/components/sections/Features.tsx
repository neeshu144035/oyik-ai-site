"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "More viewings booked without chasing",
  "Fewer missed calls and missed messages",
  "Faster lead response across every channel",
  "Consistent qualification (every time)",
  "Seamless handover to your team when needed",
];

export default function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight text-foreground">
              Everything a high-performing real estate team does—<span className="text-gradient">automated.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oyik Real Estate builds AI chat and voice systems that answer property questions, capture lead details, qualify buyers/tenants, and book viewings automatically. When a customer wants a human, we route the conversation or call to your sales team.
            </p>
          </motion.div>

          {/* Right Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 rounded-3xl glow-border"
          >
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8">Outcomes you can expect</h3>
            <ul className="space-y-6">
              {outcomes.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 p-4 border border-border/50 bg-secondary/30 rounded-xl">
              <p className="text-sm text-muted-foreground italic">
                "Speed-to-lead matters: the odds of contacting an inbound lead drop by ~100× when response slips from 5 minutes to 30 minutes."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
