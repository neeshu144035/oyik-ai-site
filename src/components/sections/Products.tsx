"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, BellRing, Mailbox, Video, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState, Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";

const products = [
  {
    title: "AI Chat",
    badge: "Website + Social",
    description: "Instant replies in your tone of voice. Answers questions, shares listing details and photos in-chat, captures leads, and books viewings.",
    icon: MessageSquare,
    href: "/services/chat",
  },
  {
    title: "Voice Agents",
    badge: "Inbound + Outbound",
    description: "Human-sounding AI that handles multiple calls at once—answers property questions, qualifies, books viewings, and transfers to sales.",
    icon: PhoneCall,
    href: "/services/voice",
  },
  {
    title: "Reminders",
    badge: "Rent + Viewings",
    description: "Automated reminders by SMS/email/WhatsApp/call for rent due, deposits, and upcoming viewings—reducing no-shows.",
    icon: BellRing,
    href: "/services/reminders",
  },
  {
    title: "Email Automation",
    badge: "Intelligent Replies",
    description: "Intelligent, customizable replies that handle common enquiries and keep threads moving—instantly and consistently.",
    icon: Mailbox,
    href: "/services/email",
  },
  {
    title: "AI Marketing",
    badge: "AI Avatars + Videos",
    description: "Camera-shy or too busy? We create AI avatar videos that present listings and your brand without filming.",
    icon: Video,
    href: "/services/ai-marketing",
  }
];

// --- ULTRA PREMIUM ABSTRACT 3D MODELS ---

// The universally acclaimed "AI Core Brain" model using MeshTransmissionMaterial
function SentimentBrain3D() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.3;
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <group scale={1.1}>
        <mesh ref={ref}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshTransmissionMaterial backside samples={4} thickness={1.5} roughness={0.1} transmission={1} ior={1.5} chromaticAberration={0.4} color="#4338CA" />
        </mesh>
        <mesh>
           <sphereGeometry args={[0.5, 32, 32]} />
           <meshStandardMaterial color="#38bdf8" emissive="#6366f1" emissiveIntensity={3} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth robust Observer strictly mapping active stack layer to 3D Canvas
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => {
      currentRefs.forEach((ref) => { if (ref) observer.unobserve(ref); });
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#FAFAFC] pt-32 pb-[40vh] z-20">
      
      {/* Proof Point Banner & Header */}
      <div className="container mx-auto px-6 lg:px-10 mb-20 relative z-30">
        <div className="max-w-4xl mx-auto p-[1px] rounded-[2rem] bg-indigo-100 mb-20 shadow-sm">
          <div className="bg-white/80 backdrop-blur-xl px-10 py-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-center text-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center">
               <Zap className="text-primary w-6 h-6" />
            </div>
            <p className="text-neutral-700 font-bold text-base sm:text-lg max-w-2xl leading-relaxed">
              <span className="text-black font-black">Speed-to-lead matters:</span> the odds of contacting an inbound lead drop by ~100× when response slips from 5 minutes to 30 minutes.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight leading-[1.05] mb-8">
            Everything a high-performing team does—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
              automated.
            </span>
          </h2>
        </div>
      </div>

      {/* 
        The Merged Layout: 
        LEFT: Actual Sticking ("Pasting Over Another") Text Cards.
        RIGHT: A universally Fixed Canvas that morphs 3D models seamlessly.
      */}
      <div className="container mx-auto px-4 lg:px-10 max-w-[1400px] flex flex-col lg:flex-row relative">
        
        {/* LEFT: Physical Stacking Text Cards Layering Over Each Other */}
        <div className="w-full lg:w-1/2 flex flex-col relative z-20 pb-[30vh]">
          {products.map((product, idx) => (
            <div 
              key={idx}
              ref={(el) => { itemRefs.current[idx] = el; }}
              data-index={idx}
              className={`sticky flex flex-col justify-center w-full rounded-[2.5rem] p-8 lg:p-10 mb-[15vh] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-neutral-200/60 bg-white/95 backdrop-blur-md transition-all duration-700
                ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.98]'}
              `}
              style={{
                top: `calc(10vh + ${idx * 15}px)`, // Tighter stack to prevent bottom of card pushing below screen
                transformOrigin: "top left",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-[1.2rem] bg-indigo-50/80 border border-indigo-100 flex items-center justify-center shadow-inner">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="px-5 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-bold tracking-wider uppercase border border-slate-200">
                  {product.badge}
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight mb-6">
                {product.title}
              </h3>
              
              <p className="text-xl lg:text-2xl text-neutral-600 font-semibold leading-relaxed mb-8 max-w-sm">
                {product.description}
              </p>

              <Link
                href={product.href}
                className="group inline-flex items-center gap-4 px-8 py-5 bg-black text-white rounded-full w-fit hover:bg-neutral-800 transition-all duration-300 shadow-xl font-bold"
              >
                Explore {product.title}
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT (Underlayer / Sticky Area): 3D Model Swapper */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 flex items-center justify-center p-6 lg:p-12 pointer-events-none z-10 perspective-[1000px]">
          <div className="w-full aspect-square relative rounded-[3rem] bg-white border-4 border-white shadow-[0_30px_80px_-20px_rgba(67,56,202,0.15)] overflow-hidden flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 via-transparent to-transparent pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
              <directionalLight position={[-5, 5, -5]} intensity={1} color="#4338CA" />
              <Suspense fallback={null}>
                <SentimentBrain3D />
                <Environment preset="city" />
              </Suspense>
            </Canvas>

            {/* Status Pulse */}
            <div className="absolute bottom-8 left-8 z-30 flex items-center gap-3 backdrop-blur-xl bg-white/90 border border-neutral-100 shadow-xl rounded-2xl px-5 py-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-neutral-800 uppercase tracking-widest font-mono font-bold">Live Model: {products[activeIndex].title}</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
