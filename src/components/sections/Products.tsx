"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, BellRing, Mailbox, Video, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, RoundedBox } from "@react-three/drei";

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
    badge: "AI Avatars + Property Videos",
    description: "Camera-shy or too busy? We create AI avatar videos that present listings and your brand without filming.",
    icon: Video,
    href: "/services/ai-marketing",
  }
];

// --- 3D SCENES FOR EACH SERVICE (Smooth, Fast, High Contrast Gen Z Apple-Vibe) ---

// 0: Chat Bubbles
function Chat3D() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });
  return (
    <group ref={ref} scale={1.2}>
      <Float speed={2} rotationIntensity={0.5}>
        <RoundedBox args={[2, 1.2, 0.4]} radius={0.2} position={[-0.5, 0.5, 0]}>
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} />
        </RoundedBox>
        <RoundedBox args={[1.8, 1, 0.3]} radius={0.2} position={[0.8, -0.6, 0.5]}>
          <meshStandardMaterial color="#4338CA" emissive="#4338CA" emissiveIntensity={0.5} />
        </RoundedBox>
      </Float>
    </group>
  );
}

// 1: Phone / iPhone Related
function Phone3D() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.5;
      ref.current.rotation.x = 0.1;
    }
  });
  return (
    <group ref={ref} scale={1.4}>
      <Float speed={1.5} rotationIntensity={0.2}>
        {/* iPhone Body */}
        <RoundedBox args={[1.6, 3.2, 0.2]} radius={0.2} position={[0, 0, 0]}>
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.05} />
        </RoundedBox>
        {/* Screen */}
        <RoundedBox args={[1.4, 3, 0.21]} radius={0.1} position={[0, 0, 0.01]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </RoundedBox>
        {/* Audio Wave Bars */}
        <mesh position={[-0.3, 0, 0.2]}>
           <cylinderGeometry args={[0.05, 0.05, 0.6]} />
           <meshStandardMaterial color="#4338CA" />
        </mesh>
        <mesh position={[0, 0, 0.2]}>
           <cylinderGeometry args={[0.05, 0.05, 1]} />
           <meshStandardMaterial color="#4338CA" />
        </mesh>
        <mesh position={[0.3, 0, 0.2]}>
           <cylinderGeometry args={[0.05, 0.05, 0.4]} />
           <meshStandardMaterial color="#4338CA" />
        </mesh>
      </Float>
    </group>
  );
}

// 2: Reminders / Clock
function Clock3D() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = -state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <group scale={1.3}>
      <Float speed={2} rotationIntensity={0.5}>
        <mesh>
          <torusGeometry args={[1.5, 0.1, 16, 100]} />
          <meshStandardMaterial color="#4338CA" metalness={0.5} roughness={0.2} emissive="#4338CA" emissiveIntensity={0.5} />
        </mesh>
        <group ref={ref}>
          {/* Hands */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1]} />
            <meshStandardMaterial color="#111111" metalness={1} roughness={0.1} />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6]} />
            <meshStandardMaterial color="#111111" metalness={1} roughness={0.1} />
          </mesh>
        </group>
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
        </mesh>
      </Float>
    </group>
  );
}

// 3: Email Envelope
function Mail3D() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2 + 0.2;
    }
  });
  return (
    <group ref={ref} scale={1.5}>
      <Float speed={2} rotationIntensity={0.2}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 1.5, 0.1]} />
          <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.8} />
        </mesh>
        {/* Envelope Flap folded down */}
        <mesh position={[0, 0.3, 0.06]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1.5, 1.5, 0.1]} />
          <meshStandardMaterial color="#E5E5E5" />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
           <sphereGeometry args={[0.2, 16, 16]} />
           <meshStandardMaterial color="#4338CA" emissive="#4338CA" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
}

// 4: AI Human Avatar Representation
function Avatar3D() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.5;
      // Procedural floating parts (head bobbing, nodes shifting like neural net)
      ref.current.children[0].position.y = 1 + Math.sin(t * 2) * 0.05;
      ref.current.children[1].rotation.z = Math.sin(t) * 0.1;
      ref.current.children[2].rotation.z = -Math.sin(t * 1.5) * 0.1;
    }
  });
  return (
    <group ref={ref} scale={1.2}>
      {/* Head Node */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} />
      </mesh>
      {/* Left Node (Arm) */}
      <mesh position={[-1, 0, 0]}>
        <capsuleGeometry args={[0.2, 1.2, 16, 16]} />
        <meshStandardMaterial color="#4338CA" emissive="#4338CA" emissiveIntensity={0.5} />
      </mesh>
      {/* Right Node (Arm) Explaining/Moving */}
      <mesh position={[1, 0, 0.5]} rotation={[0.4, 0, -0.2]}>
        <capsuleGeometry args={[0.2, 1.2, 16, 16]} />
        <meshStandardMaterial color="#4338CA" emissive="#4338CA" emissiveIntensity={0.5} />
      </mesh>
      {/* Torso Core Data Array */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#E5E5E5" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

// Main Component
export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth Intersection Observer to detect which card is centered on screen without causing main thread jank
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
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background py-24 z-20 overflow-hidden">
      
      {/* Proof Point Banner & Header */}
      <div className="container mx-auto px-6 lg:px-10 mb-20 relative z-30">
        <div className="max-w-4xl mx-auto p-[1px] rounded-2xl bg-neutral-200 mb-20 shadow-sm">
          <div className="bg-white px-8 py-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center">
               <Zap className="text-primary w-6 h-6" />
            </div>
            <p className="text-neutral-700 font-bold text-base sm:text-lg leading-relaxed">
              <span className="text-black font-black">Speed-to-lead matters:</span> the odds of contacting an inbound lead drop by ~100× when response slips from 5 minutes to 30 minutes.
            </p>
          </div>
        </div>

        <div className="max-w-5xl text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight leading-[1.05] mb-8">
            Everything a high-performing team does—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
              automated.
            </span>
          </h2>
        </div>
      </div>

      {/* 
        High Performance Split Tracking Layout:
        Left: Scrollable Cards Container (w-1/2) 
        Right: Fixed Sticky Canvas (w-1/2)
      */}
      <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row relative">
        
        {/* LEFT: Scrollable Text Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[30vh] pb-[50vh] pt-10 relative z-20">
          {products.map((product, idx) => (
            <div 
              key={idx}
              ref={(el) => { itemRefs.current[idx] = el; }}
              data-index={idx}
              className={`transition-all duration-700 ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-30 scale-95'} flex flex-col bg-white border-2 border-neutral-100 rounded-[2rem] p-10 shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="px-5 py-2 rounded-full bg-neutral-100 text-neutral-800 text-sm font-bold tracking-wider uppercase border border-neutral-200">
                  {product.badge}
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
                {product.title}
              </h3>
              
              <p className="text-xl text-neutral-600 font-bold leading-relaxed mb-10">
                {product.description}
              </p>

              <Link
                href={product.href}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-white rounded-full w-fit hover:bg-indigo-700 transition-colors shadow-md font-bold"
              >
                See how it works
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT: Dynamic 3D Scene Viewer - Smooth & Extremely Fast */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 right-0 flex items-center justify-center p-10 pointer-events-none mt-10 lg:mt-0">
          <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square relative rounded-[3rem] bg-neutral-50 border border-neutral-200 shadow-inner overflow-hidden flex items-center justify-center">
            
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
              <directionalLight position={[-5, 5, -5]} intensity={1} color="#4338CA" />
              <Suspense fallback={null}>
                {activeIndex === 0 && <Chat3D />}
                {activeIndex === 1 && <Phone3D />}
                {activeIndex === 2 && <Clock3D />}
                {activeIndex === 3 && <Mail3D />}
                {activeIndex === 4 && <Avatar3D />}
                <Environment preset="city" />
              </Suspense>
            </Canvas>

            {/* Backdrop glow based on active state */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
