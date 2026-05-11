"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export function FaqAccordion({
  items,
  variant = "dark",
}: {
  items: FaqItem[];
  variant?: "dark" | "light";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLight = variant === "light";

  return (
    <div className={isLight ? "divide-y divide-primary/10" : "divide-y divide-white/10"}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
            >
              <span
                className={`pr-2 text-base font-medium transition-colors md:text-lg ${
                  isLight
                    ? isOpen
                      ? "text-primary"
                      : "text-primary/80 group-hover:text-primary"
                    : isOpen
                      ? "text-white"
                      : "text-white/85 group-hover:text-white"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isLight
                    ? isOpen
                      ? "border-accent/60 bg-accent/10 text-accent"
                      : "border-primary/20 text-primary/50 group-hover:border-primary/40 group-hover:text-primary"
                    : isOpen
                      ? "border-accent/50 bg-accent/10 text-accent"
                      : "border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white"
                }`}
              >
                <Plus
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div
                  className={`pb-6 pr-12 text-sm leading-relaxed md:text-base ${
                    isLight ? "text-primary/60" : "text-white/60"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
