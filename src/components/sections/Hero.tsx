"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, MessageSquare, CalendarCheck, Send } from "lucide-react";
import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

// Cinematic split-screen automated workflow simulation with UI Generative Assets
const SIMULATED_WORKFLOW = [
  { id: 1, text: "DM conversation", icon: MessageSquare, image: "/media/ai_chat_interface_ui_1774500140177.png" },
  { id: 2, text: "Viewing booked", icon: CalendarCheck, image: "/media/reminders_calendar_ui_1774500199777.png" },
  { id: 3, text: "Confirmation sent", icon: Send, image: "/media/email_automation_ui_1774500221902.png" }
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SIMULATED_WORKFLOW.length);
    }, 4000); // 4 seconds per simulated step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-[#02050f] pt-24 pb-16 overflow-hidden">
      
      {/* 3D Web Experience: R3F Spatial Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00F5FF" />
          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
              <mesh position={[2, 0, -2]} scale={1.8}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial 
                  color="#ffffff" 
                  envMapIntensity={2} 
                  clearcoat={1} 
                  clearcoatRoughness={0.1} 
                  metalness={0.9}
                  roughness={0.1}
                  distort={0.4}
                  speed={2}
                />
              </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
              <mesh position={[-3, -1, -4]} scale={1.2}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <MeshDistortMaterial 
                  color="#00F5FF" 
                  envMapIntensity={1} 
                  clearcoat={1} 
                  clearcoatRoughness={0.2} 
                  metalness={0.8}
                  roughness={0.2}
                  distort={0.2}
                  speed={3}
                />
              </mesh>
            </Float>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Immersive Background Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-700/10 rounded-full blur-[150px] pointer-events-none translate-x-[20%] -translate-y-[20%]" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[40vw] bg-blue-800/10 rounded-full blur-[150px] pointer-events-none -translate-x-[20%] translate-y-[20%]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT: Hyper-Legible Exact Copy Block */}
          <div className="lg:col-span-6 flex flex-col items-start pt-10 lg:pt-0 z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-950/20 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
              <span className="text-xs font-semibold text-cyan-50 tracking-wider uppercase">Advanced Automation Engine</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-extrabold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-lg"
            >
              AI employees for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                real estate teams.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-slate-300 font-light leading-snug tracking-tight mb-10 max-w-xl"
            >
              Reply instantly, qualify every lead, and book viewings automatically—across your website, social media DMs, email, and phone calls.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-6"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] hover:scale-[1.02] group"
              >
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              
              <button
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-md group"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-transparent group-hover:border-cyan-400/50 transition-colors duration-300 text-cyan-400">
                   <Play className="w-4 h-4" />
                </div>
                Watch overview (90 sec)
              </button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm text-slate-400 font-medium pl-3 border-l-[3px] border-cyan-500/50"
            >
              No extra hiring. Works 24/7. Connects to your calendar and listings.
            </motion.p>

          </div>

          {/* RIGHT: Ultra-Realistic Split-Screen Video Simulator */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col w-full z-10 perspective-[1000px]"
          >
            {/* The primary screen/canvas */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden transform-style-3d rotate-y-[-5deg] rotate-x-[2deg]">
              
              {/* Media Carousel */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050f]/60 via-transparent to-transparent z-10" />
                  <img 
                    src={SIMULATED_WORKFLOW[activeStep].image} 
                    alt="AI Workflow Step" 
                    className="w-full h-full object-cover mix-blend-screen opacity-80"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Internal Floating Tracking UI */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 gap-2">
                  <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Live Link
                  </span>
                </div>
              </div>
            </div>

            {/* Stepper Logic directly synchronized to user flow request */}
            <div className="flex justify-between items-center mt-8 px-2">
              {SIMULATED_WORKFLOW.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center flex-1 relative">
                  {/* Connecting Line */}
                  {index !== SIMULATED_WORKFLOW.length - 1 && (
                    <div className="absolute top-6 left-[50%] w-full h-[2px] bg-white/5">
                      {index < activeStep && (
                        <motion.div layoutId="line" className="h-full bg-cyan-400 w-full shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
                      )}
                    </div>
                  )}
                  
                  {/* Icon Node */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 relative z-10 ${
                    index === activeStep 
                      ? "bg-cyan-500/20 border-cyan-400/50 border text-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.4)]" 
                      : index < activeStep 
                        ? "bg-white/10 border-white/20 border text-white" 
                        : "bg-white/5 border-transparent border text-slate-500"
                  }`}>
                    {index < activeStep ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-center max-w-[100px] transition-colors duration-500 ${
                    index === activeStep ? "text-cyan-400" : "text-slate-400"
                  }`}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>

        {/* TRUST STRIP (Exactly as requested) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full mt-20 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            "More viewings booked without chasing",
            "Fewer missed calls and missed messages",
            "Faster lead response across every channel",
            "Consistent qualification (every time)",
            "Seamless handover to your team when needed"
          ].map((bullet, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-cyan-400" />
              </div>
              <p className="text-sm font-medium text-slate-300 leading-relaxed pr-4">
                {bullet}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
