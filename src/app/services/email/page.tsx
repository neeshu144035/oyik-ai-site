import { Metadata } from "next";
import Link from "next/link";
import { Mailbox, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Automation | Oyik.AI",
  description: "Intelligent replies that keep enquiries moving and never let a hot lead go cold in your inbox.",
};

export default function EmailServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-primary">
              Email Automation
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              Intelligent replies that keep enquiries <span className="text-gradient">moving.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Detect intent, draft responses, and send customizable replies instantly. Route complex cases to your agents with full context.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
                Setup Email AI
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Email split-screen UI */}
          <div className="relative h-[450px] rounded-[2rem] glass-card border flex flex-col p-6 shadow-2xl bg-card gap-4">
            
            <div className="bg-background rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Incoming Enquiry • Rightmove</p>
              <h4 className="font-semibold text-sm mb-2">Subject: Viewing request for 10 Downing St</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "Hi, I saw this property on Rightmove and would love to view it this weekend. Do you allow pets?"
              </p>
            </div>

            <div className="flex justify-center -my-2 z-10 opacity-50">
               <div className="w-px h-8 bg-primary" />
            </div>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 relative">
              <div className="absolute top-2 right-4 text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full backdrop-blur-md">
                AI Draft
              </div>
              <p className="text-xs text-muted-foreground mb-1">To: Prospect</p>
              <h4 className="font-semibold text-sm mb-2">Subject: Re: Viewing request for 10 Downing St</h4>
              <p className="text-xs text-foreground leading-relaxed">
                "Hi there, thanks for your interest! The property is still available and pet-friendly (subject to landlord approval).<br/><br/>You can book a viewing this weekend directly here: [Booking Link]"
              </p>
              <div className="mt-4 flex gap-2">
                <div className="w-full text-center py-1.5 bg-primary/20 text-primary text-xs font-semibold rounded-md">Sent Automatically</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">How it works behind the scenes</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Detects enquiry intent (availability, viewing request, documents, pet policy, etc.)",
              "Drafts or sends customizable replies in your brand tone",
              "Routes complex cases to your team with a full summary",
              "Captures key details and triggers next steps (e.g., booking link, document checklist)",
              "Integrates seamlessly with info@, lettings@, or specific agent inboxes."
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 glass-card rounded-2xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
