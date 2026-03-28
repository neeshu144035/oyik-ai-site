import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents | oyik.realestate.ai",
  description: "Human-sounding voice agents for property calls, lead qualification, and viewing coordination.",
};

export default function VoiceServicePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-accent">
              Voice Agents • Inbound + Outbound
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-display font-semibold text-foreground leading-[1.04]">
              A human-sounding agent that <span className="text-gradient">never misses a call.</span>
            </h1>
            <p className="text-lg text-primary font-medium">
              Answer, qualify, and route serious prospects without phone bottlenecks.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for inbound call handling and speed-to-lead outbound follow-up when your team wants instant response without adding headcount.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-accent-foreground font-semibold shadow-[0_16px_34px_-18px_rgba(67,56,202,0.45)] hover:bg-accent/90 transition-all">
                Request Voice Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

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
            <div className="px-8 w-full max-w-sm">
              <p className="text-center text-sm text-muted-foreground font-medium p-4 bg-background/50 border border-border rounded-xl backdrop-blur-md">
                "Thanks for calling Apex Properties. I can see you're asking about the 3-bed in Chelsea. Would you like to book a viewing?"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Inbound call handling</h2>
            <div className="space-y-4">
              {[
                "Answers property and availability questions naturally",
                "Qualifies with your own scripted questions",
                "Suggests suitable listings based on preferences",
                "Captures contact details cleanly",
                "Books viewings into your calendar",
                "Transfers to sales when a human is needed",
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 glass-card rounded-xl border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-foreground text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Outbound speed-to-lead</h2>
            <div className="space-y-4">
              {[
                "Calls new leads right after form submission",
                "Qualifies quickly and politely",
                "Books viewings on the spot",
                "Updates your CRM and alerts the team",
                "Runs follow-up sequences to improve contact rates",
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
