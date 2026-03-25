"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, BellRing, Mailbox, Video, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    title: "AI Chat \n(Web & Social)",
    description: "Instant, brand-aligned replies. Qualifies leads & books viewings autonomously.",
    icon: MessageSquare,
    colSpan: "lg:col-span-8",
    color: "rgba(0, 245, 255, 0.15)", // Primary
    href: "/services/chat",
    imagePath: "/media/chat_hologram_ui.png"
  },
  {
    title: "Voice \nAgents",
    description: "Human-sounding AI handling 100s of concurrent inbound/outbound calls.",
    icon: PhoneCall,
    colSpan: "lg:col-span-4",
    color: "rgba(37, 99, 235, 0.15)", // Accent
    href: "/services/voice",
    imagePath: "/media/voice_agent_ui.png"
  },
  {
    title: "Smart \nReminders",
    description: "Automated chasing for rent, deposits, and viewing attendances.",
    icon: BellRing,
    colSpan: "lg:col-span-4",
    color: "rgba(124, 58, 237, 0.15)", // Purple
    href: "/services/reminders",
    imagePath: "/media/reminders_ui.png"
  },
  {
    title: "Inbox \nAutomation",
    description: "Detects intent and drafts contextual replies for sales & lettings.",
    icon: Mailbox,
    colSpan: "lg:col-span-4",
    color: "rgba(0, 245, 255, 0.1)",
    href: "/services/email",
    imagePath: "/media/email_automation.png"
  },
  {
    title: "AI Avatar \nMarketing",
    description: "Generate listing videos featuring your digital clone—zero filming required.",
    icon: Video,
    colSpan: "lg:col-span-4",
    color: "rgba(37, 99, 235, 0.1)",
    href: "/services/ai-marketing",
    imagePath: "/media/hero_bg.png"
  }
];

export default function Products() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-background">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">The Ecosystem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.05] tracking-tight"
            >
              Autonomous front desk for <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">agents.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
             <p className="text-lg text-muted-foreground max-w-sm">Mix and match AI capabilities to build your perfect automated workflow.</p>
          </motion.div>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5 auto-rows-[300px]">
          {products.map((product, idx) => (
            <BentoCard key={idx} product={product} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function BentoCard({ product, index }: { product: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-[2rem] bg-secondary/40 backdrop-blur-xl border border-border hover:border-border/80 transition-all duration-500 p-8 flex flex-col justify-between ${product.colSpan}`}
    >
      {/* Generated AI Image Background */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none bg-cover bg-center mix-blend-screen"
        style={{ backgroundImage: `url(${product.imagePath})` }}
      />
      
      {/* Animated noise texture specific to cards */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* Header section */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-background transition-all duration-500 shadow-xl">
          <product.icon className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-foreground'}`} />
        </div>
        
        <Link
          href={product.href}
          className="w-10 h-10 rounded-full bg-background/30 border border-border backdrop-blur-md flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500"
        >
           <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Content section */}
      <div className="relative z-10 w-full mt-auto">
        <h3 className="text-3xl font-display font-extrabold text-white mb-3 tracking-tight whitespace-pre-line leading-none">
          {product.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm group-hover:text-foreground/80 transition-colors duration-500">
          {product.description}
        </p>
      </div>

    </motion.div>
  );
}
