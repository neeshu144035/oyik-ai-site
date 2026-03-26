"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#010308] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
            Built for busy teams.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-500" />
            <Quote className="w-12 h-12 text-cyan-400/40 mb-6" />
            
            <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-8 relative z-10 tracking-tight">
              "We went from missed enquiries to booked viewings automatically."
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-400/30 flex items-center justify-center font-bold text-cyan-400 text-lg">
                CN
              </div>
              <div>
                <p className="text-white font-bold">Client Name</p>
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mt-1">Agency</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500" />
            <Quote className="w-12 h-12 text-blue-400/40 mb-6" />
            
            <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-8 relative z-10 tracking-tight">
              "The voice agent qualifies better than our first call sometimes."
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-950 border border-blue-400/30 flex items-center justify-center font-bold text-blue-400 text-lg">
                CN
              </div>
              <div>
                <p className="text-white font-bold">Client Name</p>
                <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mt-1">Lettings</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
