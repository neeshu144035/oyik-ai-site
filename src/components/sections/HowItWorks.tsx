"use client";

import { motion } from "framer-motion";
import { Plug, TrendingUp, Settings } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Connect",
    description: "We connect your listings (or data feed), your calendar, and your channels (web chat + socials + phone + email).",
    icon: Plug,
  },
  {
    step: "Step 2",
    title: "Train",
    description: "We configure your FAQs, qualification questions, tone of voice, routes to sales, and message templates.",
    icon: Settings,
  },
  {
    step: "Step 3",
    title: "Launch & improve",
    description: "Go live fast, then optimize with analytics: response times, booked viewings, and lead quality.",
    icon: TrendingUp,
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-[#02050f] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#00F5FF 1px, transparent 1px), linear-gradient(90deg, #00F5FF 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-black text-white tracking-tight mb-6">
            How it works
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(0,245,255,1)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connecting Line Vector */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-blue-500/0 -z-10" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Step Marker */}
              <div className="w-32 h-32 rounded-[2rem] bg-[#050B1B] border border-cyan-400/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center mb-8 relative group-hover:-translate-y-4 transition-transform duration-500">
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem]" />
                <step.icon className="w-12 h-12 text-cyan-400" />
                
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-cyan-500 text-black font-black flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
              </div>

              <span className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase mb-3">
                {step.step}
              </span>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
