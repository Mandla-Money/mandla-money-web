"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/lib/faq-data";

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white/60"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Frequently Asked Questions
          </h1>
         
        </div>
      </section>

      {/* Full FAQ list */}
      <section className="bg-primary pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
