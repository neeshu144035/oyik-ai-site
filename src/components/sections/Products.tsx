"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  Mailbox,
  MessageSquare,
  PhoneCall,
  Video as VideoIcon,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "chat",
    title: "AI Chat",
    badge: "Website + Social",
    subtitle: "Reply, qualify, show live listings, and move leads to a booked next step.",
    description: "Handles website and social enquiries, captures lead data, checks calendar availability, and confirms viewings without making prospects wait for a human.",
    icon: MessageSquare,
    href: "/services/chat",
    videoPath: "/media/videos/chat.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/ai_chat_ui_light_1774519717225.png",
  },
  {
    id: "voice",
    title: "Voice Agents",
    badge: "Inbound + Outbound",
    subtitle: "A trained AI front desk for every type of property call.",
    description: "Runs dedicated call flows, matches listings from your live database, books viewings, sends confirmations, and updates your CRM automatically.",
    icon: PhoneCall,
    href: "/services/voice",
    videoPath: "/media/videos/voice.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/voice_agent_ui_light_1774519815031.png",
  },
  {
    id: "reminders",
    title: "Reminders",
    badge: "Rent + Viewings",
    subtitle: "Reduce no-shows and missed payments across every channel.",
    description: "Automates rent, deposit, and viewing reminders across SMS, email, WhatsApp, and voice so your team spends less time chasing.",
    icon: BellRing,
    href: "/services/reminders",
    videoPath: "/media/videos/reminders.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/reminders_calendar_ui_light_1774519912843.png",
  },
  {
    id: "maintenance",
    title: "Maintenance Intake",
    badge: "Tenant + Support",
    subtitle: "Capture issues properly before they become admin backlogs.",
    description: "Collects tenant issues in detail, saves to CRM, sends follow-up links for photos, and routes urgent cases to the maintenance team.",
    icon: Wrench,
    href: "/services/maintenance",
    videoPath: "/media/videos/maintenance.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/maintenance_intake_ui_generated.svg",
  },
  {
    id: "email",
    title: "Email Automation",
    badge: "Intelligent Replies",
    subtitle: "Keep every enquiry moving with fast, accurate, useful replies.",
    description: "Drafts polished responses for enquiries, follow-ups, booking details and document requests while routing the right cases to the right people.",
    icon: Mailbox,
    href: "/services/email",
    videoPath: "/media/videos/email.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/email_automation_ui_light_1774519948355.png",
  },
  {
    id: "marketing",
    title: "AI Marketing",
    badge: "AI Avatars + Videos",
    subtitle: "Create premium listing content without blocking your agents.",
    description: "Builds AI avatar videos, listing explainers, and social-ready property content from your existing assets so you can market consistently without studio time.",
    icon: VideoIcon,
    href: "/services/ai-marketing",
    videoPath: "/media/videos/marketing.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/ai_marketing_ui_light_1774519968668.png",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(products.length - 1, Math.floor(v * products.length));
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  });

  // Play video from beginning when active, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.currentTime = 0; // Reset to start
        video.play().catch(e => console.log("Auto-play prevented", e));
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const active = products[activeIndex];

  return (
    <section className="relative bg-slate-50">
      
      {/* Background elegant pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(63,55,184,0.03),transparent_30%)]" />

      {/* Header */}
      <div className="relative z-10 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-display font-medium leading-[1] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[4rem] px-4"
        >
          Premium automation for every part of the modern real estate journey.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 px-4"
        >
          Six AI-powered services designed to feel high-end for your brand and simple for your team.
        </motion.p>
      </div>

      {/* Sticky Scroll Container */}
      <div ref={containerRef} style={{ height: `${products.length * 60}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          {/* Inner grid: 40% info card | 60% video frame */}
          <div className="container mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[40fr_60fr] lg:px-12 pb-16">

            {/* Left: animated info card */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
                  transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur-xl p-10 shadow-[0_20px_60px_-20px_rgba(63,55,184,0.06)]"
                >
                  {/* Number indicator */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-primary/60">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  {/* Badge */}
                  <div className={`mb-5 inline-flex items-center gap-2 rounded-full border ${active.gradient.split(' ')[0].replace('from-', 'border-')}/30 bg-white/80 px-4 py-1.5`}>
                    <div className={`p-1 rounded-full bg-gradient-to-br ${active.gradient}`}>
                      <active.icon className="h-3 w-3 text-white" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.24em] ${active.accent}`}>
                      {active.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-[2.6rem] font-display font-semibold leading-[0.93] tracking-[-0.04em] text-slate-900 sm:text-[3rem]">
                    {active.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mb-5 text-[1.05rem] font-medium leading-relaxed text-indigo-500">
                    {active.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mb-9 max-w-sm text-[1.05rem] leading-relaxed text-slate-500">
                    {active.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={active.href}
                    className={`group inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${active.gradient} px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
                  >
                    Explore {active.title}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots below card */}
              <div className="mt-8 ml-6 flex gap-2.5">
                {products.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: activeIndex === i ? 28 : 6,
                      opacity: activeIndex === i ? 1 : 0.6,
                      backgroundColor: activeIndex === i ? "#4f46e5" : "#cbd5e1",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* ── RIGHT: Original Videos ── */}
            <div className="hidden lg:flex items-center justify-center w-full">
              {/* Outer wrapper establishes the strict 16:9 box that clips everything outside it */}
              <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-[1.2rem] shadow-[0_20px_50px_rgba(63,55,184,0.08)] bg-white">

                {products.map((p, i) => (
                  <motion.div
                    key={p.id}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                      opacity: activeIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ zIndex: activeIndex === i ? 2 : 1 }}
                  >
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={p.videoPath}
                      muted
                      playsInline
                      loop
                      className="absolute left-0 top-0 h-full w-full origin-top scale-y-[1.12] object-cover"
                    />
                  </motion.div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
