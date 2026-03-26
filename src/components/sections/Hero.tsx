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

// Elegant, Futuristic Spinning Rings Component
function FuturisticRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.1; // Elegant slow float
    }
    // Sophisticated, decoupled rotation speeds for that "quantum computer" feel
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.15;
      ring1Ref.current.rotation.y = t * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * -0.1;
      ring2Ref.current.rotation.z = t * 0.05;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    // Positioned left (-2) but scaled up (2.2) so it spans under the text and partially under the image
    <group ref={groupRef} position={[-2, 0, -4]} scale={2.2}>
      
      {/* Outer orbital ring - Realistic Chrome/Metallic */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 32, 100]} />
        <meshStandardMaterial 
          color="#1e1e1e" 
          metalness={0.9} 
          roughness={0.1} 
          envMapIntensity={2} 
        />
      </mesh>

      {/* Inner fast ring - Glowing Indigo */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.6, 0.015, 32, 100]} />
        <meshStandardMaterial 
          color="#4338CA" 
          transparent 
          opacity={0.8} 
          emissive="#4338CA" 
          emissiveIntensity={2} 
        />
      </mesh>

      {/* Realistic Glass Abstract Core */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1, 0]} />
          {/* Stunning realistic refraction material */}
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1}
            roughness={0.1}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.06}
            backsideThickness={1}
            color="#ffffff"
            resolution={1024}
          />
        </mesh>
      </Float>
      
      {/* Central inner glow for the glass refraction to scatter beautifully */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#4338CA" emissive="#4338CA" emissiveIntensity={3} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SIMULATED_WORKFLOW.length);
    }, 4000); // 4 seconds per simulated step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-background pt-24 pb-16 overflow-hidden">
      
      {/* 3D Web Experience: R3F Spatial Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
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
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-[20%] -translate-y-[20%]" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[40vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-x-[20%] translate-y-[20%]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT: Hyper-Legible Exact Copy Block */}
          <div className="lg:col-span-6 flex flex-col items-start pt-10 lg:pt-0 z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-white/60 backdrop-blur-md mb-8 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">Advanced Automation Engine</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-black leading-[1.05] tracking-tight mb-8"
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
              className="text-xl sm:text-2xl text-neutral-600 font-medium leading-snug tracking-tight mb-10 max-w-xl"
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
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(67,56,202,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(67,56,202,0.6)] hover:-translate-y-1 group"
              >
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              
              <button
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-white border border-neutral-200 text-neutral-800 font-semibold text-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 flex items-center justify-center gap-4 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-100 transition-colors duration-300 text-primary">
                   <Play className="w-4 h-4" />
                </div>
                Watch overview (90 sec)
              </button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm text-neutral-500 font-medium pl-3 border-l-[3px] border-indigo-200"
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
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl bg-white border border-neutral-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transform-style-3d rotate-y-[-5deg] rotate-x-[2deg]">
              
              {/* Media Carousel */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-background"
                >
                  <img 
                    src={SIMULATED_WORKFLOW[activeStep].image} 
                    alt="AI Workflow Step" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                </motion.div>
              </AnimatePresence>

              {/* Internal Floating Tracking UI */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pt-4">
                <div className="flex bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-sm rounded-full px-4 py-2 gap-2">
                  <span className="text-xs text-primary font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
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
                        <motion.div layoutId="line" className="h-full bg-primary w-full shadow-[0_0_10px_rgba(67,56,202,0.6)]" />
                      )}
                    </div>
                  )}
                  
                  {/* Icon Node */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 relative z-10 ${
                    index === activeStep 
                      ? "bg-primary text-white shadow-[0_10px_20px_-5px_rgba(67,56,202,0.4)]" 
                      : index < activeStep 
                        ? "bg-indigo-50 border-indigo-100 border text-primary" 
                        : "bg-white border-neutral-200 border text-neutral-400"
                  }`}>
                    {index < activeStep ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase text-center max-w-[100px] transition-colors duration-500 ${
                    index === activeStep ? "text-primary" : "text-neutral-500"
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
          className="w-full mt-20 pt-8 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            "More viewings booked without chasing",
            "Fewer missed calls and missed messages",
            "Faster lead response across every channel",
            "Consistent qualification (every time)",
            "Seamless handover to your team when needed"
          ].map((bullet, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-neutral-600 leading-relaxed pr-4">
                {bullet}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
