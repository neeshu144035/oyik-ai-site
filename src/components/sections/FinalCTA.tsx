"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#02050f] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundAttachment: "fixed"}} />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-cyan-950/40 to-[#02050f] border border-cyan-500/30 p-12 sm:p-20 text-center shadow-[0_0_80px_rgba(0,245,255,0.15)] relative overflow-hidden"
        >
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight mb-8 relative z-10 leading-none">
            Want viewings booked while you're showing properties?
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 font-light leading-snug max-w-2xl mx-auto mb-12 relative z-10">
            Book a demo and we'll map your exact flow—from enquiry to confirmed viewing—in one call.
          </p>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="group flex items-center gap-4 px-12 py-6 bg-cyan-400 text-black rounded-full font-extrabold text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,245,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
            >
              Book a demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <div className="flex items-center gap-3 text-slate-400">
              <Calendar className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium tracking-wide">
                Typical setup: 7–14 days <span className="opacity-60">(depending on integrations)</span>.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
