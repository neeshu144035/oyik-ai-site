import { Metadata } from "next";
import Link from "next/link";
import { Zap, ShieldCheck, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Oyik.AI",
  description: "Oyik Real Estate is built to automate enquiries, qualification, and bookings across chat, voice, and email.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            About <span className="text-gradient">Oyik Real Estate</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oyik Real Estate is the real estate-focused division of Oyik.ai—built to automate enquiries, qualification, and bookings across chat, voice, and email.
          </p>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">What we believe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl glass-card flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Speed wins</h3>
              <p className="text-muted-foreground">
                leads expect fast replies, and delays cost instructions and bookings.
              </p>
            </div>
            <div className="p-8 rounded-3xl glass-card flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Consistency wins</h3>
              <p className="text-muted-foreground">
                every lead gets the same professional experience.
              </p>
            </div>
            <div className="p-8 rounded-3xl glass-card flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Focus wins</h3>
              <p className="text-muted-foreground">
                your team should spend time on viewings and negotiations—not admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-12 text-center">What makes us different</h2>
          
          <div className="space-y-6">
            {[
              { title: "Real estate-first flows", desc: "(viewings, qualification, confirmations, reminders)" },
              { title: "Omnichannel coverage", desc: "(web + social + phone + email)" },
              { title: "Human handover built-in", desc: "(transfer to sales anytime)" },
              { title: "Customizable tone", desc: "questions, and workflows" },
            ].map((diff, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-2">{diff.title}</h4>
                  <p className="text-muted-foreground">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Book a demo and we'll map your enquiry-to-viewing flow.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 group">
            Book a demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
