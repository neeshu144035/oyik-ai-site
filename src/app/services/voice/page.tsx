import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents | Oyik.AI",
  description: "A human-sounding agent that never misses an inbound or outbound call.",
};

export default function VoiceServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-accent">
              Voice Agents (Inbound + Outbound)
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              A human-sounding agent that <span className="text-gradient">never misses a call.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Handle hundreds of calls simultaneously. Answers property questions, qualifies leads, books viewings, and transfers to sales instantly when requested.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30">
                Request Voice Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Call simulation UI */}
          <div className="relative h-[400px] rounded-[2rem] glass-card border flex flex-col justify-center items-center shadow-2xl bg-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
            
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 relative">
              <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-50" />
              <Phone size={40} />
            </div>
            
            <h3 className="text-2xl font-display font-semibold text-foreground mb-2">Oyik Assistant</h3>
            <p className="text-accent animate-pulse flex items-center gap-2 font-mono mb-8">
              <Activity size={16} /> Listening...
            </p>

            {/* Transcription snippet */}
            <div className="px-8 w-full max-w-sm">
              <p className="text-center text-sm text-muted-foreground font-medium p-4 bg-background/50 border border-border rounded-xl backdrop-blur-md">
                "Hello! Thanks for calling Apex Properties. I see you're interested in the 3-bed semi-detached in Chelsea. Are you looking to view it?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Inbound (When customers call you)</h2>
            <div className="space-y-4">
              {[
                "Answers property and availability questions naturally",
                "Qualifies with your scripted questions (customizable)",
                "Suggests suitable properties based on preferences",
                "Captures details (name, email, phone)",
                "Books viewings directly into your calendar",
                "Sends confirmation email + SMS with details + Google Maps link",
                "Transfers to your sales team instantly when requested"
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 glass-card rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-foreground text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Outbound (Speed-to-lead)</h2>
            <div className="space-y-4">
              {[
                "Calls new leads automatically after they submit a form or ad lead",
                "Qualifies quickly and politely",
                "Books viewings on the spot (same workflow as inbound)",
                "Updates your CRM and alerts the team when a hot lead is ready",
                "Follows up multiple times with varied messaging to increase contact rates"
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 glass-card rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-foreground text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
