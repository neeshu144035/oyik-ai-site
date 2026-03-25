"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, Calendar, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth Parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleWords = ["AI", "employees", "for", "real", "estate", "teams."];

  return (
    <section 
      ref={ref} 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020818]"
    >
      {/* Dynamic Cursor Light */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.05), transparent 40%)`
        }}
      />

      {/* Cinematic Video Background Layer */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 z-0 w-full h-full scale-[1.1] pointer-events-none origin-top"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          <source src="https://cdn.pixabay.com/video/2023/10/22/185890-876615707_large.mp4" type="video/mp4" />
        </video>
        
        {/* Deep atmospheric gradients covering the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-[#020818]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020818] via-transparent to-[#020818] z-10 opacity-80" />
      </motion.div>

      {/* Abstract Glowing Mesh / Nebulas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[45rem] h-[45rem] bg-primary/10 rounded-full blur-[140px] mix-blend-screen animate-[pulse_6s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
        <div className="absolute top-[30%] right-[10%] w-[40rem] h-[40rem] bg-accent/15 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_cubic-bezier(0.22,1,0.36,1)_infinite_reverse]" />
      </div>

      {/* Main Content Container */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* Text Arsenal (Left Side) */}
          <div className="lg:col-span-6 flex flex-col gap-10 max-w-2xl mt-16 lg:mt-0 xl:pr-10">
            
            {/* Nano-Banner Micro-interaction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 w-fit backdrop-blur-xl relative group cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_3px_rgba(0,245,255,0.7)]" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase relative z-10">
                Next-Gen Real Estate Automation
              </span>
            </motion.div>

            {/* Orchestrated Staggered Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-display font-extrabold leading-[1.05] tracking-tighter text-foreground">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.9, 
                    delay: 0.1 + i * 0.08, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className={`inline-block mr-4 mb-2 ${
                    word === "real" || word === "estate" 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]" 
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtle fade-in paragraph */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light"
            >
              Qualify leads, book viewings, and respond in seconds. An autonomous AI workforce that never sleeps.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col sm:flex-row items-center gap-6 pt-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-foreground text-background font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,245,255,0.6)] hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10">Deploy Agent</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-transparent border border-border text-foreground font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-border group-hover:border-primary/50">
                   <Play className="w-4 h-4 text-primary ml-1" />
                </div>
                View Demo
              </button>
            </motion.div>
          </div>

          {/* 3D Isometric / Parallax Simulator (Right Side) */}
          <div className="lg:col-span-6 relative h-[600px] lg:h-[750px] w-full mt-10 lg:mt-0 flex items-center justify-center pointer-events-none perspective-[2000px]">
            <motion.div
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[500px] aspect-[4/5] transform-style-3d"
            >
              {/* Central Core Hologram */}
                <motion.div 
                animate={{ rotateZ: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20 bg-[radial-gradient(circle,rgba(0,245,255,0.05)_0%,transparent_70%)] flex items-center justify-center"
              >
                 <div className="w-[300px] h-[300px] rounded-full border border-dashed border-accent/30 animate-[spin_40s_linear_infinite_reverse]" />
              </motion.div>

              {/* Floating Glass Component 1 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: [0, -15, 0], opacity: 1 }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1, delay: 0.8 }
                }}
                className="absolute top-[10%] -left-4 sm:-left-12 w-64 p-5 rounded-2xl bg-card/60 backdrop-blur-2xl border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/media/chat_hologram_ui.png')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-foreground block">Client Match</span>
                      <span className="text-xs text-primary/80 block uppercase tracking-wider mt-0.5">Automated</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <div className="h-2 w-3/4 bg-border/50 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Component 2 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: [0, 20, 0], opacity: 1 }}
                transition={{ 
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  opacity: { duration: 1, delay: 1.1 }
                }}
                className="absolute bottom-[20%] -right-4 sm:-right-8 w-72 p-6 rounded-2xl bg-card/60 backdrop-blur-2xl border border-accent/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/media/reminders_ui.png')] bg-cover bg-center opacity-25 mix-blend-screen"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(37,99,235,0.4)] shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div className="w-full">
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-sm font-bold text-foreground">Viewing Set</span>
                         <span className="text-[10px] text-accent font-mono border border-accent/30 px-1.5 py-0.5 rounded">SYNC IN</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light mb-3">Penthouse 4B • Tomorrow, 2PM</p>
                       
                       {/* Audio Waveform Simulator */}
                       <div className="flex items-center gap-1 h-6 items-end mt-2">
                         {[...Array(15)].map((_, i) => (
                            <motion.div 
                              key={i} 
                              className="w-1.5 bg-accent/80 rounded-t-sm" 
                              animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }} 
                              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                            />
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Data Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-40">
                <motion.path 
                  d="M100 200 C 150 250, 300 200, 350 400"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F5FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00F5FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
