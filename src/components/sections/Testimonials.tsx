"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We went from missed enquiries to booked viewings automatically. The agent qualification is flawless.",
    name: "Sarah Jenkins",
    role: "Director of Sales, Apex Real Estate",
    initials: "SJ",
    color: "bg-primary text-primary-foreground"
  },
  {
    quote: "The voice agent qualifies better than our first call sometimes. It's handling 30% of our inbound load.",
    name: "David Chen",
    role: "Head of Lettings, Metro Properties",
    initials: "DC",
    color: "bg-accent text-accent-foreground"
  },
  {
    quote: "Our speed-to-lead is now instant. We've seen a 40% increase in matched viewings since integrating Oyik.AI.",
    name: "Emma Roberts",
    role: "Managing Partner, Prime Living",
    initials: "ER",
    color: "bg-[#7C3AED] text-white"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6"
          >
            Built for <span className="text-gradient">busy teams.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            See how top agencies are using Oyik.AI to scale their operations and close more deals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl glass-card flex flex-col gap-6"
            >
              <div className="flex gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg text-foreground leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
