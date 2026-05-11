"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MessageCircle,
  PiggyBank,
  Send,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "@/components/site/whatsapp-modal";

const features = [
  "Send money instantly",
  "Receive money without a bank account",
  "Pay airtime and electricity",
  "Send across borders",
  "Check your balance",
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
      <section id="get-started" className="scroll-mt-24 bg-primary pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Personal
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
              Send money like you send a message
            </h1>
            <p className="mt-6 text-lg text-white/60">
              WhatsApp, SMS, USSD. Any phone. Any network.
            </p>
            <button
              onClick={handleCTA}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] transition hover:brightness-105"
            >
              <MessageCircle className="h-4 w-4" />
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section id="scan-to-start" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Scan to start
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-center">
              <div className="rounded-2xl border border-primary/10 bg-white p-4 shadow-soft">
                <Image
                  src={`${basePath}/official_qr.png`}
                  alt="QR code to open Mandla Money on WhatsApp"
                  width={220}
                  height={220}
                  className="h-[220px] w-[220px]"
                />
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary/50">
                <MessageCircle className="h-4 w-4 text-accent" />
                Or WhatsApp +27 60 041 0476 on any phone
              </p>
            </div>

            <div id="what-you-can-do" className="scroll-mt-24">
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

      {/* Why people choose Mandla Money */}
      <section id="why-people-choose" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Why people choose Mandla Money
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-hover rounded-2xl border border-primary/10 bg-off-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Send className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                Send & receive
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Your phone number is your wallet
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary/50">
                Transfer money instantly via WhatsApp, SMS, or USSD - no bank
                account or app required.
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-primary/10 bg-off-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                Pay bills
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Airtime, electricity, and more
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary/50">
                Pay for everyday essentials directly from your wallet.
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-primary/10 bg-off-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                Cross-border
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                As easy as sending a message
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary/50">
                Move money across borders as easily as sending a message - at a
                fraction of the cost.
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-primary/10 bg-off-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <PiggyBank className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                Save
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Your money, stable
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary/50">
                Hold value in digital currencies backed by USD or Rand - and
                stop worrying about what your money is worth tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-white/60">
            Your phone number is your wallet. No downloads needed.
          </p>
          <button
            onClick={handleCTA}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] transition hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Start on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
