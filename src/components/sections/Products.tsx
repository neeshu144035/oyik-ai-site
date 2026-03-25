"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, BellRing, Mailbox, Video } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "AI Chat (Website + Social)",
    description: "Instant replies in your tone of voice. Answers questions, shares listing details, captures leads, and books viewings.",
    icon: MessageSquare,
    colSpan: "lg:col-span-2",
    color: "from-primary/20",
    href: "/services/chat"
  },
  {
    title: "Voice Agents",
    description: "Human-sounding AI that handles multiple calls at once—answers, qualifies, and books viewings.",
    icon: PhoneCall,
    colSpan: "lg:col-span-1",
    color: "from-accent/20",
    href: "/services/voice"
  },
  {
    title: "Reminders",
    description: "Automated reminders by SMS/email/call for rent due, deposits, and upcoming viewings.",
    icon: BellRing,
    colSpan: "lg:col-span-1",
    color: "from-[#7C3AED]/20",
    href: "/services/reminders"
  },
  {
    title: "Email Automation",
    description: "Intelligent, customizable replies that handle common enquiries and keep threads moving.",
    icon: Mailbox,
    colSpan: "lg:col-span-1",
    color: "from-primary/20",
    href: "/services/email"
  },
  {
    title: "AI Marketing",
    description: "We create AI avatar videos that present listings and your brand without filming.",
    icon: Video,
    colSpan: "lg:col-span-1",
    color: "from-accent/20",
    href: "/services/ai-marketing"
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-secondary relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6"
          >
            The Core <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Choose one service or combine them for a full "AI front desk" for real estate. Every channel, fully automated.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl glass-card border border-border/50 hover:border-primary/50 transition-colors p-8 flex flex-col ${product.colSpan}`}
            >
              {/* Card gradient bg */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${product.color} to-transparent opacity-50 blur-3xl group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex-grow flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <product.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-8 inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
