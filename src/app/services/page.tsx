import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services for Real Estate | Oyik.AI",
  description: "Choose one service or combine them for a full 'AI front desk' for real estate. AI Chatbots, Voice Agents, Reminders, and more.",
};

const services = [
  {
    id: "chat",
    title: "AI Chatbots (Website + All Social Media)",
    headline: "Turn every message into a qualified viewing—automatically.",
    bestFor: "website chat, Instagram, Facebook, WhatsApp (and other channels you support).",
    bullets: [
      "Answers property questions instantly (price, location, amenities, availability, viewing process)",
      "Shows listing details and property photos inside the chat",
      "Captures lead details (name, email, phone, requirements, move-in timeline)",
      "Qualifies with custom questions (budget, employment, smoking/pets, household size—whatever you need)",
      "Books viewings: checks calendar availability and schedules automatically",
      "Sends confirmations by email + SMS with viewing time, property details, and Google Maps location"
    ],
    benefit: "Your team focuses on closings—while the chatbot handles the repetitive back-and-forth.",
    image: "/media/chat_hologram_ui.png"
  },
  {
    id: "voice",
    title: "Voice Agents (Inbound + Outbound)",
    headline: "A human-sounding agent that never misses a call.",
    bestFor: "Inbound calls and speed-to-lead outbound calling.",
    bullets: [
      "Answers property and availability questions naturally",
      "Qualifies with your scripted questions (customizable)",
      "Suggests suitable properties based on preferences",
      "Captures details (name, email, phone) and books viewings directly into your calendar",
      "Sends confirmation email + SMS with details + Google Maps link",
      "Transfers to your sales team instantly when requested",
      "Calls new leads automatically after they submit a form or ad lead"
    ],
    benefit: "Handle multiple calls at once and reach inquiries instantly.",
    image: "/media/voice_agent_ui.png"
  },
  {
    id: "reminders",
    title: "Reminders (Rent, Deposits, Viewings)",
    headline: "Reduce no-shows and late payments with polite automation.",
    bestFor: "Property management, letting agents, and sales teams.",
    bullets: [
      "Rent due reminders (email/SMS/WhatsApp/call)",
      "Deposit due reminders",
      "Upcoming viewing reminders (e.g., 24 hours + 2 hours before)",
      "Reschedule flows when a customer can't attend",
      "Optional outbound voice reminders for higher response rates"
    ],
    benefit: "Eliminate manual chase-ups and prioritize confirmed appointments.",
    image: "/media/reminders_ui.png"
  },
  {
    id: "email",
    title: "Email Automation",
    headline: "Intelligent replies that keep enquiries moving.",
    bestFor: "Managing high-volume info@, lettings@, or sales@ inboxes.",
    bullets: [
      "Detects enquiry intent (availability, viewing request, documents, pet policy, etc.)",
      "Drafts or sends customizable replies in your brand tone",
      "Routes complex cases to your team with a full summary",
      "Captures key details and triggers next steps (e.g., booking link, document checklist)"
    ],
    benefit: "Never let a hot lead go cold in your inbox.",
    image: "/media/email_automation.png"
  },
  {
    id: "ai-marketing",
    title: "AI Marketing (AI Avatars + Property Videos)",
    headline: "Property videos without filming.",
    bestFor: "Busy agents, camera-shy teams, consistent social posting.",
    bullets: [
      "Create an AI avatar that looks/sounds like you (or a presenter)",
      "Turn property photos + details into short listing videos",
      "Produce explainers: 'How to rent with us', 'What to bring to a viewing', 'Neighbourhood highlights'",
      "Output formats for Reels/TikTok/YouTube Shorts + ads"
    ],
    benefit: "Scale your video marketing without studio time.",
    image: "/media/hero_bg.png"
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-24 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[url('/media/hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-md">
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose one service or combine them for a full “AI front desk” for real estate.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 lg:gap-32">
          {services.map((service, idx) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:[&>div:first-child]:order-last' : ''}`}>
              
              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit px-5 py-2 rounded-full bg-secondary border border-border text-sm font-semibold text-primary mb-2 shadow-lg">
                  {service.title}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  {service.headline}
                </h2>
                <p className="text-muted-foreground text-lg">
                  <strong className="text-foreground">Best for:</strong> {service.bestFor}
                </p>

                <ul className="space-y-4 mt-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-6 rounded-2xl bg-secondary/80 backdrop-blur-md border border-primary/20 shadow-[0_0_20px_rgba(0,245,255,0.05)]">
                  <p className="text-primary font-medium text-lg leading-relaxed">
                    "{service.benefit}"
                  </p>
                </div>

                <Link href={`/services/${service.id}`} className="mt-4 text-foreground font-semibold flex items-center gap-2 hover:text-primary transition-colors group w-fit text-lg">
                  See full details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Photorealistic Visual Presentation */}
              <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl glass-card glow-border overflow-hidden flex items-center justify-center bg-card group">
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-[0.80]"
                  style={{ backgroundImage: `url(${service.image})` }} 
                />
                
                {/* Tech overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 p-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-border shadow-2xl">
                   <div className="flex items-center gap-4 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <div className="text-xs font-mono text-primary font-bold tracking-widest uppercase">Live Demo</div>
                   </div>
                   <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-2/3 animate-[pulse_2s_ease-in-out_infinite]" />
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 mt-16">
        <div className="rounded-3xl bg-secondary p-12 lg:p-20 text-center border border-primary/20 relative overflow-hidden shadow-[0_0_40px_rgba(0,245,255,0.1)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 relative z-10">Ready to automate your front desk?</h2>
          <p className="text-muted-foreground mb-10 text-xl max-w-2xl mx-auto relative z-10">
            Book a demo and we'll show you exactly how our AI can handle your specific real estate workflows.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)] hover:scale-105 relative z-10">
            Book a personalized demo
          </Link>
        </div>
      </section>
    </div>
  );
}
