"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MessageCircle,
  Phone,
  Send,
  Wallet,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/design-system";
import { WhatsAppModal } from "@/components/site/whatsapp-modal";

const features = [
  "Send money instantly",
  "Receive money without a bank account",
  "Pay airtime and electricity",
  "Send across borders",
  "Check your balance",
];

const featureCards = [
  {
    icon: Send,
    title: "Send and receive",
    description:
      "Transfer money to any phone number instantly via WhatsApp, SMS or USSD.",
  },
  {
    icon: Zap,
    title: "Pay bills",
    description:
      "Buy airtime and pay electricity directly from your wallet.",
  },
  {
    icon: Globe,
    title: "Cross-border",
    description:
      "Send money across countries as easily as sending a message.",
  },
];

const faqs = [
  { question: "Do I need a smartphone?", answer: "No. Mandla works via SMS and USSD on any phone." },
  { question: "Do I need a bank account?", answer: "No. Your phone number is your wallet." },
  { question: "What are the fees?", answer: "Near-zero fees on all transactions." },
  { question: "Is it safe?", answer: "Fully regulated. FSP #55523. FSCA supervised. FIC compliant." },
];

export default function PersonalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCTA = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(WHATSAPP_URL, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Send money the way you already message
            </h1>
            <p className="mt-6 text-lg text-white/60">
              WhatsApp or USSD. Any phone. Any network.
            </p>
            <button
              onClick={handleCTA}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition hover:brightness-105"
            >
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Scan to start
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-center">
              <div className="rounded-2xl border border-primary/10 bg-white p-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(WHATSAPP_URL)}`}
                  alt="QR code to open Mandla Money on WhatsApp"
                  width={220}
                  height={220}
                  className="h-[220px] w-[220px]"
                />
              </div>
              <p className="mt-4 text-sm text-primary/50">
                Or dial *xxx# on any phone
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                What you can do
              </h3>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-primary/70"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-primary/5 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-primary/5 bg-white p-6"
              >
                <h3 className="font-semibold text-primary">{faq.question}</h3>
                <p className="mt-2 text-sm text-primary/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-white/60">
            Your phone number is your wallet. No downloads needed.
          </p>
          <button
            onClick={handleCTA}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary transition hover:brightness-105"
          >
            Start on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
