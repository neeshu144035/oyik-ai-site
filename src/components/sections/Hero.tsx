"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, MessageSquare, CalendarCheck, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense } from "react";

// Cinematic split-screen automated workflow simulation with UI Generative Assets
const SIMULATED_WORKFLOW = [
  { id: 1, text: "DM conversation", icon: MessageSquare, image: "/media/ai_chat_ui_light_1774519717225.png" },
  { id: 2, text: "Viewing booked", icon: CalendarCheck, image: "/media/reminders_calendar_ui_light_1774519912843.png" },
  { id: 3, text: "Confirmation sent", icon: Send, image: "/media/email_automation_ui_light_1774519948355.png" }
];

// Elegant, Futuristic Spinning Rings Component - Centered & Faster
function FuturisticRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  // Pumping up speed slightly for that attractive Gen-Z tech energy
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.15; // Floating
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * -0.2;
      ring2Ref.current.rotation.z = t * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.15;
      coreRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    // Centered and massive, completely filling the Hero background
    <group ref={groupRef} position={[0, 0, -4]} scale={3.5}>
      
      {/* Outer orbital ring - Polished White Silver */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 64, 128]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={1} 
          roughness={0.05} 
          envMapIntensity={3} 
        />
      </mesh>

      {/* Inner fast ring - Vibrant Glowing Indigo */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.01, 64, 128]} />
        <meshStandardMaterial 
          color="#4338CA" 
          transparent 
          opacity={0.9} 
          emissive="#6366f1" 
          emissiveIntensity={2} 
        />
      </mesh>

      {/* Realistic Iridescent Prism Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.1, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={6}
            thickness={2.5}
            roughness={0.05}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.8}
            backsideThickness={1.5}
            color="#ffffff"
            resolution={1024}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>
      
      {/* Core Energy Source - Indigo & Sky Blue */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial 
          color="#38bdf8" 
          emissive="#4338CA" 
          emissiveIntensity={4} 
          transparent 
          opacity={0.7} 
        />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SIMULATED_WORKFLOW.length);
    }, 3000); // Increased step speed for higher energy flow
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-background pt-32 pb-24 overflow-hidden flex flex-col items-center">
      
      {/* FULL SCREEN CENTRIC 3D BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 h-[100vh]">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#4338CA" />
          <Suspense fallback={null}>
            <FuturisticRings />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Immersive Background Glows */}
      <div className="absolute top-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-[20%] -translate-y-[20%]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10 flex flex-col items-center justify-center text-center">
        
        {/* TOP: Hyper-Legible Copy Block */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl min-h-[70vh] z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-200 bg-white/80 backdrop-blur-md mb-8 shadow-md"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Advanced Automation Engine</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-black leading-[1.02] tracking-tighter mb-10 drop-shadow-sm"
          >
            AI employees for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
              real estate teams.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-3xl text-neutral-600 font-semibold leading-tight tracking-tight mb-12 max-w-3xl drop-shadow-sm"
          >
            Reply instantly, qualify every lead, and book viewings automatically—across your website, social media DMs, email, and phone calls.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-8"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-12 py-5 rounded-full bg-primary text-white font-extrabold text-xl flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(67,56,202,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(67,56,202,0.6)] hover:-translate-y-1 group"
            >
              Book a demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            
            <button
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/90 backdrop-blur-sm border-2 border-neutral-200 text-neutral-900 font-bold text-xl hover:bg-white hover:border-neutral-300 transition-all duration-300 flex items-center justify-center gap-4 shadow-md group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-100 transition-colors duration-300 text-primary">
                 <Play className="w-5 h-5" />
              </div>
              Watch overview (90 sec)
            </button>
          </motion.div>
        </div>

        {/* BOTTOM: Ultra-Realistic Video Simulator */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl z-30 perspective-[1000px] mt-10"
        >
          {/* The primary screen/canvas - High Visibility Wrapper */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] bg-white border-2 border-neutral-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] overflow-hidden transform-style-3d group">
            
            {/* Media Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-background"
              >
                <img 
                  src={SIMULATED_WORKFLOW[activeStep].image} 
                  alt="AI Workflow Step" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10" />
              </motion.div>
            </AnimatePresence>

            {/* Internal Floating Tracking UI */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pt-4">
              <div className="flex bg-white/95 backdrop-blur-xl border-2 border-neutral-100 shadow-md rounded-full px-5 py-2.5 gap-2">
                <span className="text-xs text-primary font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                  </span>
                  Live Interaction
                </span>
              </div>
            </div>
          </div>

          {/* Stepper Logic */}
          <div className="flex justify-between items-center mt-12 px-4 max-w-3xl mx-auto hidden sm:flex">
            {SIMULATED_WORKFLOW.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1 relative">
                {/* Connecting Line */}
                {index !== SIMULATED_WORKFLOW.length - 1 && (
                  <div className="absolute top-7 left-[50%] w-full h-[3px] bg-neutral-200 rounded-full">
                    {index < activeStep && (
                      <motion.div layoutId="stepline" className="h-full bg-primary w-full shadow-[0_0_10px_rgba(67,56,202,0.5)] rounded-full" />
                    )}
                  </div>
                )}
                
                {/* Icon Node */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 relative z-10 ${
                  index === activeStep 
                    ? "bg-primary text-white shadow-[0_10px_20px_-5px_rgba(67,56,202,0.4)] scale-110" 
                    : index < activeStep 
                      ? "bg-indigo-50 border-2 border-indigo-100 text-primary" 
                      : "bg-white border-2 border-neutral-200 text-neutral-400 opacity-60"
                }`}>
                  {index < activeStep ? <CheckCircle2 size={24} /> : <step.icon size={24} />}
                </div>
                <span className={`text-[12px] sm:text-sm font-bold tracking-wider uppercase text-center max-w-[120px] transition-colors duration-300 ${
                  index === activeStep ? "text-primary drop-shadow-sm" : "text-neutral-500"
                }`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
          
        </motion.div>

        {/* TRUST STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-6xl mt-24 pt-10 border-t-2 border-neutral-200 grid grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {[
            "More viewings booked without chasing",
            "Fewer missed calls and missed messages",
            "Faster lead response across every channel",
            "Consistent qualification (every time)",
            "Seamless handover to your team when needed"
          ].map((bullet, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-primary" />
              </div>
              <p className="text-base font-bold text-neutral-700 leading-snug">
                {bullet}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
