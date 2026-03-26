"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, PhoneCall, BellRing, Mailbox, Video, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    title: "AI Chat",
    badge: "Website + Social",
    description: "Instant replies in your tone of voice. Answers questions, shares listing details and photos in-chat, captures leads, and books viewings.",
    icon: MessageSquare,
    href: "/services/chat",
    imagePath: "/media/ai_chat_ui_light_1774519717225.png"
  },
  {
    title: "Voice Agents",
    badge: "Inbound + Outbound",
    description: "Human-sounding AI that handles multiple calls at once—answers property questions, qualifies, books viewings, and transfers to sales when requested.",
    icon: PhoneCall,
    href: "/services/voice",
    imagePath: "/media/voice_agent_ui_light_1774519815031.png"
  },
  {
    title: "Reminders",
    badge: "Rent + Viewings",
    description: "Automated reminders by SMS/email/WhatsApp/call for rent due, deposits, and upcoming viewings—reducing no-shows and missed payments.",
    icon: BellRing,
    href: "/services/reminders",
    imagePath: "/media/reminders_calendar_ui_light_1774519912843.png"
  },
  {
    title: "Email Automation",
    badge: "Intelligent Replies",
    description: "Intelligent, customizable replies that handle common enquiries and keep threads moving—instantly and consistently.",
    icon: Mailbox,
    href: "/services/email",
    imagePath: "/media/email_automation_ui_light_1774519948355.png"
  },
  {
    title: "AI Marketing",
    badge: "AI Avatars + Property Videos",
    description: "Camera-shy or too busy? We create AI avatar videos that present listings and your brand without filming.",
    icon: Video,
    href: "/services/ai-marketing",
    imagePath: "/media/ai_marketing_ui_light_1774519968668.png"
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-background py-32 px-6 lg:px-10 z-20">
      
      {/* Proof Point Banner */}
      <div className="container mx-auto mb-20">
        <div className="max-w-4xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-400/30 to-blue-500/0">
          <div className="bg-white/90 backdrop-blur-xl px-8 py-6 rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-50 flex items-center justify-center">
               <Zap className="text-primary w-6 h-6" />
            </div>
            <p className="text-neutral-600 font-medium text-sm sm:text-base leading-relaxed">
              <span className="text-black font-bold">Speed-to-lead matters:</span> the odds of contacting an inbound lead drop by ~100× when response slips from 5 minutes to 30 minutes, and qualification odds drop ~21×.
            </p>
          </div>
        </div>
      </div>

      {/* Section Header: What we do */}
      <div className="container mx-auto max-w-5xl text-center mb-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-tight mb-8">
          Everything a high-performing real estate team does—<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">automated.</span>
        </h2>
        <p className="text-xl sm:text-2xl text-neutral-600 font-medium leading-snug max-w-3xl mx-auto">
          Oyik Real Estate builds AI chat and voice systems that answer property questions, capture lead details, qualify buyers/tenants, and book viewings automatically. When a customer wants a human, we route the conversation or call to your sales team.
        </p>
      </div>

      {/* Sticky Stacking Cards Ecosystem */}
      <div className="container mx-auto max-w-6xl relative">
        {products.map((product, idx) => {
          // Dynamic scale and opacity calculations to create the "stacking" effect
          const targetScale = 1 - (products.length - idx) * 0.05;
          
          return (
            <div 
              key={idx}
              className="sticky top-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-[70vh] w-full rounded-[40px] bg-white border border-neutral-200 p-8 sm:p-16 mb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden"
              style={{
                top: `calc(10vh + ${idx * 40}px)`,
              }}
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none translate-x-[20%] -translate-y-[20%]" />

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-primary text-sm font-semibold tracking-wider">
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-6">
                  {product.title}
                </h3>
                
                <p className="text-xl text-neutral-600 font-medium leading-[1.6] mb-10">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-white rounded-full w-fit hover:bg-indigo-700 transition-colors shadow-[0_10px_30px_-10px_rgba(67,56,202,0.5)] hover:shadow-[0_10px_30px_-10px_rgba(67,56,202,0.7)] font-semibold"
                >
                  See how it works
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </Link>
              </div>

              {/* Image Side - Ultra Realistic Simulated Window */}
              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-[30px] bg-background overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform-style-3d group perspective-[2000px]">
                {/* Simulated Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent z-20 pointer-events-none rounded-[30px]" />
                
                <img 
                  src={product.imagePath} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center gap-3 backdrop-blur-md bg-white/90 border border-neutral-200 shadow-sm rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-neutral-800 uppercase tracking-widest font-mono font-bold">System Online</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
