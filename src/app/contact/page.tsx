"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Building2, Calendar } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"form" | "demo">("demo");

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left info content */}
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Let's scale your <span className="text-gradient">real estate</span> business.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you want to automate viewings or deploy a full omnichannel AI front desk, we're here to help map your exact flow.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex gap-4 items-start p-6 rounded-2xl glass-card border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Book a quick demo</h3>
                    <p className="text-muted-foreground">Select a time on our calendar to see the AI in action, tailored to your listings.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start p-6 rounded-2xl glass-card border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">General enquiry</h3>
                    <p className="text-muted-foreground">Have specific questions about API integration or pricing? Send us a message.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right interactive area */}
          <div className="relative">
            <div className="glass-card rounded-[2rem] glow-border p-2">
              {/* Tab toggles */}
              <div className="flex p-2 gap-2 bg-secondary rounded-t-[1.5rem] border-b border-border">
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "demo" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Book Demo
                </button>
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "form" ? "bg-card text-foreground shadow-lg border border-border" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Message Us
                </button>
              </div>

              {/* Dynamic Content */}
              <div className="p-8 sm:p-10 min-h-[500px] relative">
                  <AnimatePresence mode="wait">
                    {activeTab === "demo" && (
                      <motion.div
                        key="demo"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col h-full"
                      >
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">Select a time</h3>
                        <p className="text-muted-foreground mb-8">
                          Choose a slot that works for you. We'll send a calendar invite with a Google Meet or Zoom link.
                        </p>
                        
                        {/* Calendly Placeholder Embed */}
                        <div className="flex-grow rounded-xl overflow-hidden bg-background border border-border relative flex items-center justify-center">
                           <div className="text-center p-6">
                              <Calendar className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                              <p className="text-sm font-medium text-foreground mb-2">Calendly Embed Placeholder</p>
                              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="text-xs text-primary underline">calendly.com/oyik</a>
                           </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "form" && (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-display font-bold text-foreground mb-8">Send a message</h3>
                        
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">First Name</label>
                              <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Last Name</label>
                              <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Doe" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Work Email</label>
                            <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="john@agency.com" />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Company Name</label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                              <input type="text" className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Apex Real Estate" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">How can we help?</label>
                            <textarea rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="Tell us about your volume of inquiries..." />
                          </div>

                          <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                            Submit Request
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
