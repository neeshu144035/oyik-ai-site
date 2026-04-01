"use client";

import { motion } from "framer-motion";
import type { SimpleIcon } from "simple-icons";
import {
  siAnthropic,
  siClaude,
  siDeepmind,
  siGoogle,
  siGooglegemini,
  siHuggingface,
  siLangchain,
  siMeta,
  siMistralai,
  siOllama,
  siOpenrouter,
  siPerplexity,
  siReplicate,
} from "simple-icons";

type LogoItem = {
  name: string;
  icon?: SimpleIcon;
  monogram?: string;
  bgClass: string;
  textClass?: string;
};

const aiLogos: LogoItem[] = [
  { name: "OpenAI", monogram: "OA", bgClass: "bg-[#101828]", textClass: "text-white" },
  { name: "Claude", icon: siClaude, bgClass: "bg-[#F4E2CE]" },
  { name: "Anthropic", icon: siAnthropic, bgClass: "bg-[#FFF4EB]" },
  { name: "Google Gemini", icon: siGooglegemini, bgClass: "bg-[#EEF2FF]" },
  { name: "Google", icon: siGoogle, bgClass: "bg-white" },
  { name: "DeepMind", icon: siDeepmind, bgClass: "bg-[#EEF7FF]" },
  { name: "Meta AI", icon: siMeta, bgClass: "bg-[#EEF4FF]" },
  { name: "Mistral AI", icon: siMistralai, bgClass: "bg-[#FFF4E8]" },
  { name: "Perplexity", icon: siPerplexity, bgClass: "bg-[#ECFEF6]" },
  { name: "xAI", monogram: "xAI", bgClass: "bg-[#111827]", textClass: "text-white" },
  { name: "Hugging Face", icon: siHuggingface, bgClass: "bg-[#FFF9E8]" },
  { name: "Ollama", icon: siOllama, bgClass: "bg-white" },
  { name: "LangChain", icon: siLangchain, bgClass: "bg-[#EFFCF8]" },
  { name: "Replicate", icon: siReplicate, bgClass: "bg-[#F8F7FF]" },
  { name: "OpenRouter", icon: siOpenrouter, bgClass: "bg-[#EEF2FF]" },
  { name: "DeepSeek", monogram: "DS", bgClass: "bg-[#EAF3FF]", textClass: "text-[#155EEF]" },
];

const marqueeRows = [
  aiLogos,
  [...aiLogos].reverse(),
  [...aiLogos.slice(4), ...aiLogos.slice(0, 4)],
];

function BrandMark({ item }: { item: LogoItem }) {
  return (
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-[1.9rem] border border-slate-200/80 ${item.bgClass} shadow-[0_20px_48px_-32px_rgba(15,23,42,0.25)] backdrop-blur-xl`}
      aria-label={item.name}
      title={item.name}
    >
      {item.icon ? (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-9 w-9">
          <path d={item.icon.path} fill={`#${item.icon.hex}`} />
        </svg>
      ) : (
        <span className={`text-sm font-black uppercase tracking-[0.24em] ${item.textClass ?? "text-slate-950"}`}>
          {item.monogram}
        </span>
      )}
    </div>
  );
}

export default function Logos() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-[linear-gradient(180deg,#fbfcff_0%,#f4f7ff_100%)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_28%)]" />
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8faff] via-[#f8faff]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f4f7ff] via-[#f4f7ff]/90 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">
            AI model stack
          </p>
          <h2 className="mt-5 text-3xl font-display font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            The model ecosystem behind premium automation workflows.
          </h2>
        </motion.div>

        <div className="relative mx-auto flex max-w-[34rem] flex-col gap-5 overflow-hidden py-2 sm:max-w-[38rem] lg:max-w-[42rem]">
          {marqueeRows.map((row, rowIndex) => {
            const repeated = [...row, ...row, ...row];
            const duration = rowIndex === 0 ? 40 : rowIndex === 1 ? 48 : 56;

            return (
              <div key={rowIndex} className="flex overflow-hidden">
                <motion.div
                  className="flex min-w-max items-center gap-5"
                  animate={{ x: rowIndex % 2 === 0 ? [0, -row.length * 100] : [-row.length * 100, 0] }}
                  transition={{ duration, ease: "linear", repeat: Infinity }}
                >
                  {repeated.map((logo, index) => (
                    <BrandMark key={`${rowIndex}-${logo.name}-${index}`} item={logo} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
