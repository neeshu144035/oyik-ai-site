import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots for Real Estate | Oyik.AI",
  description: "Turn every message into a qualified viewing automatically.",
};

export default function ChatServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-primary">
              AI Chat (Website + Social)
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              Turn every message into a <span className="text-gradient">qualified viewing</span>—automatically.
            </h1>
            <p className="text-lg text-muted-foreground">
              Instant replies in your tone of voice. Answers questions, shares listing details, captures leads, and books viewings. Best for website chat, Instagram, Facebook, and WhatsApp.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Chat simulation UI */}
          <div className="relative h-[500px] rounded-[2rem] glass-card border flex flex-col p-4 shadow-2xl bg-card">
            <div className="flex items-center gap-3 p-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Oyik Assistant</p>
                <p className="text-xs text-primary animate-pulse">Online</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
               {/* Messages */}
               <div className="self-end bg-secondary text-foreground p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm border border-border">
                 Hi! Is the 2-bed flat on Queen St still available?
               </div>
               <div className="self-start bg-primary/10 text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm border border-primary/20">
                 Hello! Yes, the 2-bed on Queen St is currently available. The rent is £1,800/pcm. Would you like to see some photos or book a viewing?
               </div>
               <div className="self-end bg-secondary text-foreground p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm border border-border">
                 Book a viewing please! Tomorrow afternoon?
               </div>
               <div className="self-start bg-primary/10 text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm border border-primary/20">
                 Great! I can see availability tomorrow at 2:00 PM or 4:30 PM. Before we confirm, could you provide your email address to send the calendar invite?
               </div>
            </div>
            <div className="p-4 border-t border-border/50">
               <div className="w-full bg-secondary border border-border rounded-full p-3 text-sm text-muted-foreground flex items-center justify-between">
                 <span>Type a message...</span>
                 <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                   <ArrowRight size={14} className="text-primary" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">What the Chatbot handles</h2>
          <div className="space-y-6">
            {[
              "Answers property questions instantly (price, location, amenities, availability)",
              "Shows listing details and property photos directly inside the chat",
              "Captures lead details (name, email, phone, requirements, move-in timeline)",
              "Qualifies leads with custom questions (budget, employment, smoking/pets)",
              "Books viewings: checks calendar availability and schedules automatically",
              "Sends confirmations by email + SMS with viewing time and Google Maps location"
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 glass-card rounded-2xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <p className="text-foreground text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
