"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="pr-8 text-base font-medium text-white md:text-lg">
                {item.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20">
                {isOpen ? (
                  <X className="h-4 w-4 text-white/60" />
                ) : (
                  <Plus className="h-4 w-4 text-white/60" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-12 text-sm leading-relaxed text-white/60 md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
