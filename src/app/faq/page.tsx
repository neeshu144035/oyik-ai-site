import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Oyik.AI",
  description: "Common questions about Oyik's real estate AI chat and voice systems.",
};

const faqs = [
  {
    q: "Does it work on Instagram/Facebook/WhatsApp?",
    a: "Yes—your AI can respond where your leads already message, and keep the same qualification + booking flow.",
  },
  {
    q: "Can it show property photos and details in chat?",
    a: "Yes—your chatbot can share photos and listing details directly in the conversation.",
  },
  {
    q: "Can it book viewings automatically?",
    a: "Yes—when connected to your calendar, it can check availability and schedule viewings, then send confirmations.",
  },
  {
    q: "What if someone wants a human?",
    a: "The agent can transfer chats/calls to your sales team instantly.",
  },
  {
    q: "How do you qualify leads?",
    a: "You choose the questions (budget, move-in date, smoking/pets, employment, household size, etc.) and we configure them.",
  },
  {
    q: "Is it customizable to our brand voice?",
    a: "Yes—tone, scripts, FAQs, and templates are configured to match your agency.",
  },
  {
    q: "How long does setup take?",
    a: "Typical setup is days—not months—depending on channels, calendar, and data sources.",
  },
  {
    q: "Do you support SMS/email/WhatsApp reminders?",
    a: "Yes—reminders can be sent via the channels you choose, including voice calls if needed.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 bg-background relative border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about setting up and running Oyik's AI agents.
          </p>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="grid gap-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl glass-card transition-all hover:bg-card/80 border border-border hover:border-primary/50"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-primary mt-1 text-2xl">•</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
