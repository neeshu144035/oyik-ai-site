"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#02050f] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-2xl"
        >
          <CheckCircle className="h-12 w-12 text-white" />
        </motion.div>

        <h1 className="text-4xl font-display font-bold text-white mb-4">
          Thank You!
        </h1>
        
        <p className="text-lg text-slate-300 mb-8">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>

        <div className="bg-white/5 rounded-3xl border border-white/10 p-6 mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 mb-4">
            What happens next?
          </h3>
          <div className="space-y-3 text-left">
            {[
              "We'll review your requirements",
              "Schedule a personalized demo call",
              "Create a custom automation plan for your business"
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 mb-4">
            Connect with us
          </h3>
          <div className="flex justify-center gap-4">
            <Link href="https://wa.me/447352328646" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@oyik.ai" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="tel:+447352328646" className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors">
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>
      </motion.div>
    </div>
  );
}
