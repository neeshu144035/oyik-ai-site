"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl glass-card border border-primary/20 p-12 lg:p-20 text-center relative overflow-hidden glow-border-intense"
        >
          {/* inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Want viewings booked while you're <span className="text-gradient">showing properties?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-center">
              Book a demo and we'll map your exact flow—from enquiry to confirmed viewing—in one call.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(0,245,255,0.5)] hover:shadow-[0_0_40px_rgba(0,245,255,0.7)] hover:scale-105"
              >
                Book a demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
              <CalendarClock size={16} className="text-accent" />
              Typical setup: 7–14 days (depending on integrations).
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
