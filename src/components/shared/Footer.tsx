import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary pb-8 pt-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_18px_35px_-18px_rgba(67,56,202,0.55)]">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="brand-signature text-[1.75rem] transition-colors group-hover:text-primary">
                  oyik<span className="text-primary">.</span>
                </span>
                <span className="brand-meta">realestate.ai</span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The intelligence layer for modern real estate teams. Reply instantly, qualify leads, and book viewings across chat, voice, email, and social.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Services</h4>
            {[
              { name: "AI Chatbots", href: "/services/chat" },
              { name: "Voice Agents", href: "/services/voice" },
              { name: "Automated Reminders", href: "/services/reminders" },
              { name: "Maintenance Intake", href: "/services/maintenance" },
              { name: "Email Automation", href: "/services/email" },
              { name: "AI Marketing", href: "/services/ai-marketing" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Company</h4>
            {[
              { name: "About Us", href: "/about" },
              { name: "How it works", href: "/how-it-works" },
              { name: "FAQ", href: "/faq" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Legal</h4>
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Cookie Policy", href: "/cookies" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">(c) {new Date().getFullYear()} oyik.realestate.ai. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <span className="font-medium text-primary">AI</span>. Powered by <span className="font-medium text-primary">Intelligence</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
