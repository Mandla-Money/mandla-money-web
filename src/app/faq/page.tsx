"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/lib/faq-data";

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/95 pt-20 pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white/60"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Support
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Everything you need to know about using Mandla Money - from setup to cross-border transfers.
          </p>
        </div>
      </section>

      {/* Full FAQ list */}
      <section className="bg-off-white pb-24 pt-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-primary/10 bg-white px-6 py-4 shadow-soft md:px-8">
            <FaqAccordion items={faqItems} variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
