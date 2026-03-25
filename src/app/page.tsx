import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <Hero />
      <Logos />
      <Features />
      <Products />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
