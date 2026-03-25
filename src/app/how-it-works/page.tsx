import { Metadata } from "next";
import HowItWorksSection from "@/components/sections/HowItWorks";
import Logos from "@/components/sections/Logos";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works | Oyik.AI",
  description: "Process, integrations, and rollout for your real estate AI agents.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full pt-20">
      <div className="container mx-auto px-4 text-center mt-12 mb-8">
        <h1 className="text-5xl font-display font-bold text-foreground">Launch Process & <span className="text-gradient">Integrations</span></h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          We handle the technical heavy lifting so your agency can focus on closing deals. Typical setup takes between 7 to 14 days.
        </p>
      </div>
      <HowItWorksSection />
      <div className="bg-card/30">
        <Logos />
      </div>
      <FinalCTA />
    </div>
  );
}
