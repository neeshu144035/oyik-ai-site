"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

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
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4 md:top-6">
      <div className="pointer-events-auto flex w-full flex-col items-center lg:w-auto lg:max-w-[calc(100vw-2.5rem)]">
        <motion.div
          initial={false}
          animate={{
            y: scrolled ? -2 : 0,
            scale: scrolled ? 0.988 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[2rem] border px-4 py-3 shadow-[0_30px_90px_-46px_rgba(15,23,42,0.48)] backdrop-blur-2xl lg:w-auto lg:min-w-[980px] md:px-5 ${
            scrolled
              ? "border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(245,247,255,0.82))]"
              : "border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(244,246,255,0.72))]"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.1),transparent_26%)]" />
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/60" />

          <Link href="/" className="relative z-10 flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(229,234,255,0.9))] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_24px_-18px_rgba(67,56,202,0.5)] ring-1 ring-indigo-100">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_rgba(67,56,202,0.65)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="brand-signature text-[1.18rem] sm:text-[1.25rem]">
                oyik<span className="text-primary">.</span>
              </span>
              <span className="brand-meta">realestate.ai</span>
            </div>
          </Link>

          <nav className="relative z-10 hidden items-center gap-1.5 lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-[0.92rem] font-medium tracking-[0.01em] transition-all duration-300 ${
                    isActive
                      ? "bg-white/75 text-primary shadow-[0_10px_24px_-18px_rgba(67,56,202,0.5)]"
                      : "text-slate-600 hover:bg-white/55 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#3f37b8,#564cf0)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_-20px_rgba(67,56,202,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-20px_rgba(67,56,202,0.75)]"
            >
              Book a demo
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <button
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/65 bg-white/70 text-slate-700 shadow-[0_12px_22px_-18px_rgba(15,23,42,0.35)] lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden rounded-[1.8rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,246,255,0.88))] p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] backdrop-blur-2xl"
            >
              <div className="grid gap-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                        isActive ? "bg-white text-primary shadow-sm" : "text-slate-700 hover:bg-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#3f37b8,#564cf0)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_34px_-20px_rgba(67,56,202,0.7)]"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
