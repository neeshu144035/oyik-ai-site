"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-white/80 backdrop-blur-2xl py-4 border-neutral-200 shadow-sm" : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="relative z-20 flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden relative">
             <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors duration-300 relative z-10" />
          </div>
          <span className="font-bold text-xl text-black tracking-tight">
            OYIK<span className="text-primary">.</span>AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 bg-white/60 border border-neutral-200 rounded-full px-8 py-2.5 backdrop-blur-md shadow-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-neutral-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(67,56,202,0.39)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Book a demo</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-20 text-neutral-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-10 bg-white/95 backdrop-blur-3xl pt-24 px-6 flex flex-col"
      >
        <ul className="flex flex-col gap-6 mb-12">
          {links.map((link, i) => (
            <motion.li 
              key={link.href}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.1 + (i * 0.05) }}
            >
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-black tracking-tight active:text-primary"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="w-full py-4 rounded-xl bg-primary text-white font-bold flex justify-center items-center gap-3 shadow-[0_10px_30px_rgba(67,56,202,0.3)]"
        >
          Book a demo <ArrowRight size={18} />
        </Link>
      </motion.div>
    </header>
  );
}
