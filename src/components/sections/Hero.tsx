"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, Calendar } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for the background and elements
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
      
      {/* Photorealistic Background with Parallax */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen scale-110" />
        
        {/* Deep dark gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      {/* Abstract Glowing Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[140px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] bg-[#7C3AED]/20 rounded-full blur-[120px] mix-blend-screen" style={{ animation: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 max-w-2xl mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_2px_rgba(0,245,255,0.8)]" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">No extra hiring. Works 24/7.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground"
            >
              AI employees for <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all cursor-default">real estate</span> teams.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Reply instantly, qualify every lead, and book viewings automatically—across your website, social media DMs, email, and phone calls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,245,255,0.5)] hover:shadow-[0_0_35px_rgba(0,245,255,0.8)] hover:scale-105 group"
              >
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-background/50 backdrop-blur-sm border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 hover:border-primary/50"
              >
                Watch overview (90 sec)
              </button>
            </motion.div>
          </div>

          {/* Visual Simulation Context with Parallax / Wix Flow feel */}
          <motion.div
            style={{ y: cardsY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:h-[650px] flex items-center justify-center pointer-events-none"
          >
            {/* Split Screen Diagram representation */}
            <div className="relative w-full max-w-lg aspect-square">
              
              {/* Central Glowing Orb */}
              <div className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center glow-border bg-card/40 backdrop-blur-xl z-20 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <span className="font-display font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white to-primary">Oyik</span>
              </div>
              
              {/* Floating Element 1 - Chat */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-0 w-56 p-5 rounded-2xl glass-card z-10 shadow-2xl backdrop-blur-2xl border-primary/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block">Instagram DM</span>
                    <span className="text-xs text-primary animate-pulse block">Replying...</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-3/4 bg-border/80 rounded-full" />
                  <div className="h-3 w-1/2 bg-border/80 rounded-full" />
                </div>
              </motion.div>

              {/* Floating Element 2 - Call */}
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 lg:bottom-4 left-12 w-64 p-5 rounded-2xl glass-card z-30 shadow-2xl backdrop-blur-2xl border-accent/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                     <span className="text-sm font-semibold text-foreground block">Voice Agent</span>
                     <span className="text-xs text-accent animate-pulse block">Call in progress: 01:23</span>
                  </div>
                </div>
                <div className="w-full h-8 flex items-center justify-between gap-1 mt-4">
                   {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-1.5 bg-accent/60 rounded-full" 
                        animate={{ height: ["20%", "100%", "20%"] }} 
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                      />
                   ))}
                </div>
              </motion.div>

              {/* Floating Element 3 - Calendar */}
              <motion.div
                animate={{ y: [0, -25, 0], x: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 -right-8 w-60 p-5 rounded-2xl glass-card z-20 shadow-2xl backdrop-blur-2xl border-[#7C3AED]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block">Viewing Booked</span>
                    <span className="text-xs text-muted-foreground block">Added to CRM</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-background/60 border border-border backdrop-blur-md">
                  <p className="text-xs text-primary font-bold mb-1">Today, 4:00 PM</p>
                  <p className="text-sm font-medium text-foreground">123 Luxury Lane, Apt 4B</p>
                </div>
              </motion.div>
              
              {/* Complex SVG Rings */}
              <svg className="absolute inset[-20%] w-[140%] h-[140%] z-0 opacity-20 pointer-events-none drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-primary animate-[spin_30s_linear_infinite]" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" className="text-accent animate-[spin_20s_linear_infinite_reverse]" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-muted-foreground" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
