"use client";

import { motion } from "framer-motion";
import { Plug, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Connect",
    description: "We connect your listings, calendar, website, social channels, phone, and inboxes into one coordinated operating layer.",
    icon: Plug,
  },
  {
    step: "Step 2",
    title: "Train",
    description: "We shape the tone, qualification logic, escalation rules, reminders, and handoff flows around how your real estate business already works.",
    icon: Settings,
  },
  {
    step: "Step 3",
    title: "Launch and refine",
    description: "Go live fast, then improve with real data on response speed, booked viewings, conversion quality, and operational bottlenecks.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-secondary py-32">
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-4xl font-display font-semibold leading-[0.98] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.9rem]">
            How it works
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary opacity-50 shadow-[0_0_20px_rgba(63,55,184,0.55)]" />
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 lg:gap-8">
          <div className="absolute left-[10%] right-[10%] top-[60px] -z-10 hidden h-[2px] bg-gradient-to-r from-primary/0 via-primary/30 to-accent/0 md:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-border bg-card shadow-xl shadow-primary/10 transition-transform duration-500 group-hover:-translate-y-3">
                <div className="absolute inset-0 rounded-[2rem] bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
                <step.icon className="h-12 w-12 text-primary" />
                <div className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground shadow-lg">
                  {idx + 1}
                </div>
              </div>

              <span className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">{step.step}</span>
              <h3 className="mb-4 text-2xl font-display font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
