"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Database,
  House,
  Mail,
  MessageSquareMore,
  PhoneCall,
  Send,
  Wrench,
} from "lucide-react";

const voiceSequence = [
  {
    eyebrow: "Call routing",
    title: "Dedicated inbound and outbound flows",
    description:
      "Different AI call journeys handle sales, lettings, buyer qualification, rental enquiries, maintenance calls, and landlord follow-up without sounding generic.",
  },
  {
    eyebrow: "Live search",
    title: "Property matching from your live database",
    description:
      "The agent checks location, budget, bedroom count, timing, and intent to surface relevant listings while the conversation is still active.",
  },
  {
    eyebrow: "Booking",
    title: "Calendar-aware viewing coordination",
    description:
      "Available slots are checked live, the viewing is booked, and confirmation details are sent before the call ends.",
  },
  {
    eyebrow: "CRM sync",
    title: "Every detail saved and handed forward",
    description:
      "Lead data, booking status, and conversation context are pushed into the CRM so the team receives a clean handoff instead of scattered notes.",
  },
];

const chatbotFeatures = [
  {
    icon: House,
    title: "Live listing display",
    description: "Show real property cards, pricing, and images inside the chat instead of plain text replies.",
  },
  {
    icon: CalendarCheck2,
    title: "Viewings booked in-chat",
    description: "Offer time slots, confirm appointments, and move qualified leads to the next step without delay.",
  },
  {
    icon: Database,
    title: "CRM-ready lead context",
    description: "Save property interest, contact data, and qualification answers so the team joins with context.",
  },
  {
    icon: Send,
    title: "Mail and reminder automation",
    description: "Trigger confirmations, reminder emails, and follow-up actions once the visitor commits.",
  },
];

const operationsItems = [
  {
    icon: MessageSquareMore,
    title: "Smarter lead capture",
    description:
      "Answers listing questions, shares live property details, and keeps every website or social conversation moving toward a real next step.",
  },
  {
    icon: PhoneCall,
    title: "24/7 call coverage",
    description:
      "Handles inbound calls, qualifies prospects, and hands urgent or high-value leads to the right team member without delay.",
  },
  {
    icon: CalendarCheck2,
    title: "Viewing automation",
    description:
      "Books viewings, sends confirmations, checks calendars, and reduces no-shows before the appointment ever becomes a problem.",
  },
  {
    icon: Send,
    title: "Inbox acceleration",
    description:
      "Drafts fast, polished replies for enquiries, follow-ups, booking details, and document requests across busy shared inboxes.",
  },
  {
    icon: Wrench,
    title: "Maintenance triage built in",
    description:
      "Captures maintenance issues, logs the details, and routes urgent or non-urgent requests into the right workflow without messy back-and-forth.",
  },
  {
    icon: Database,
    title: "One unified AI desk",
    description:
      "Connects chat, voice, reminders, maintenance, booking, and handoff logic into one operating layer built for property teams.",
  },
];

export default function Features() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0d2358] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%),linear-gradient(180deg,#0f2e72_0%,#0b2253_52%,#08193d_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200">Flagship model</p>
              <h2 className="max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.3rem]">
                Voice agents that handle the first conversation like a trained property desk.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/82 sm:text-xl">
                Built for real estate sales, lettings, rentals, buying, landlord updates, and maintenance triage, with live property matching, booking logic, reminders, and CRM logging folded into one smooth voice layer.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Inbound + outbound", "Sales + rentals", "Calendar aware", "CRM connected"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-[2.2rem] border border-white/12 bg-white/[0.07] p-6 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                  Conversation orchestration
                </p>
                <div className="mt-6 space-y-4">
                  {voiceSequence.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[1.7rem] border border-white/10 bg-[#0a1b45]/46 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200/80">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-2 text-[1.35rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-blue-100/72">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 h-44 w-44 rounded-full bg-indigo-400/18 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sky-400/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.8rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[0_40px_120px_-56px_rgba(7,11,23,0.65)] backdrop-blur-xl sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                <div className="relative z-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[2.2rem] border border-white/12 bg-[#091735]/78 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                          Live call desk
                        </p>
                        <p className="mt-2 text-sm text-blue-100/72">Premium front-line voice automation for property teams.</p>
                      </div>
                      <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]" />
                    </div>

                    <h3 className="mt-7 max-w-sm text-[2rem] font-display font-medium leading-[0.98] tracking-[-0.03em] text-white">
                      Every property enquiry stays qualified and moving.
                    </h3>

                    <div className="mt-6 grid gap-3">
                      {[
                        {
                          icon: House,
                          title: "Live listing suggestions",
                          copy: "Matches budget, area, beds, and timing while the call is active.",
                        },
                        {
                          icon: Mail,
                          title: "Follow-up already prepared",
                          copy: "Confirmation emails and reminder flows are triggered automatically.",
                        },
                      ].map((item) => (
                        <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-base font-medium text-white">{item.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-blue-100/70">{item.copy}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">Auto actions</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Calendar sync",
                          "CRM log",
                          "Email confirmation",
                          "Reminder flow",
                          "Urgent handoff",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">Coverage</p>
                      <div className="mt-4 flex items-end gap-3">
                        <span className="font-display text-6xl leading-none tracking-[-0.05em] text-white">24/7</span>
                        <span className="max-w-[10rem] pb-1 text-sm leading-relaxed text-blue-100/72">
                          Response window for inbound and outbound property conversations.
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">Booking speed</p>
                      <div className="mt-4 flex items-end gap-3">
                        <span className="font-display text-6xl leading-none tracking-[-0.05em] text-white">Live</span>
                        <span className="max-w-[10rem] pb-1 text-sm leading-relaxed text-blue-100/72">
                          Calendar checks and viewing confirmation without waiting for a callback.
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">Handled scenarios</p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Sales enquiries and callbacks",
                          "Rentals, lettings, and buying",
                          "Maintenance requests with urgency checks",
                          "Landlord and tenant updates",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3 text-sm text-white/78">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-200" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfcff_0%,#f7f8fd_46%,#f4f6fb_100%)] py-24 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)]" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(63,55,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(63,55,184,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-300/18 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.8rem] border border-white/80 bg-white/84 p-6 shadow-[0_34px_90px_-46px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,248,255,0.9))]" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
                      Website chatbot showcase
                    </div>
                    <div className="rounded-full border border-indigo-100 bg-indigo-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                      Live property sync
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                    <div className="rounded-[2.1rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.8)]">
                      <div className="mb-5 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-300" />
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-emerald-300" />
                      </div>

                      <div className="space-y-4">
                        <div className="max-w-[86%] rounded-[1.45rem] rounded-bl-sm bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/92">
                          I need a 3-bed rental in London under 2,800 with parking.
                        </div>
                        <div className="justify-self-end rounded-[1.45rem] rounded-br-sm bg-[linear-gradient(135deg,#eef1ff,#ffffff)] px-4 py-3 text-sm leading-relaxed text-slate-700">
                          I found two live matches, both with parking, fresh photos, and viewing slots this week.
                        </div>
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/6 p-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                            Instant next step
                          </p>
                          <div className="mt-3 flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3">
                            <div>
                              <p className="text-sm font-medium text-white">Viewing slot offered</p>
                              <p className="mt-1 text-xs text-white/60">Thu 11:30 AM or Fri 4:00 PM</p>
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                              Booked
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Dockside Residence",
                          copy: "3 bed - parking - Canary Wharf",
                          gradient:
                            "bg-[linear-gradient(140deg,rgba(63,55,184,0.16),rgba(147,197,253,0.22))]",
                        },
                        {
                          title: "Park Lane Court",
                          copy: "3 bed - parking - Westminster",
                          gradient:
                            "bg-[linear-gradient(140deg,rgba(63,55,184,0.14),rgba(196,181,253,0.22))]",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[1.7rem] border border-slate-200 bg-white p-4 shadow-[0_16px_34px_-28px_rgba(15,23,42,0.3)]"
                        >
                          <div className={`mb-3 h-32 rounded-[1.2rem] ${item.gradient}`} />
                          <p className="text-sm font-medium text-slate-900">{item.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{item.copy}</p>
                        </div>
                      ))}

                      <div className="rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(238,241,255,0.95),rgba(255,255,255,0.95))] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">After chat</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          Booking details, lead answers, and follow-up actions are sent to CRM and email automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">Flagship model</p>
              <h2 className="max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[4.2rem]">
                A website chatbot that feels like a concierge, not a widget.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Designed for premium real estate websites that need instant replies, live property previews, booking logic, CRM capture, and smooth follow-up without making the brand feel robotic or crowded.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {chatbotFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.8rem] border border-white/80 bg-white/76 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.2)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.45rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.9rem] border border-white/85 bg-white/80 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.18)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Smooth handoff</p>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  When the visitor becomes high intent, the chatbot hands over the full story: selected property, preferred slot, qualification notes, and follow-up status, so the team enters the conversation already briefed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d2358] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%),linear-gradient(180deg,#0f2e72_0%,#0b2253_52%,#08193d_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200">
                Real estate AI operations
              </p>
              <h2 className="mx-auto max-w-4xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.25rem]">
                Add an AI assistant layer to your agency workflow.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-100/85 sm:text-xl">
                Cover enquiries, phone calls, email follow-up, reminders, and listing content with one unified AI setup built for property teams.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 md:grid-cols-3">
            {operationsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white/4 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/8"
              >
                <div className="mb-8 w-full border-t border-white/16 pt-6" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100 ring-1 ring-white/15">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[1.65rem] font-display font-medium leading-none tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-blue-100/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
