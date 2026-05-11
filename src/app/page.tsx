"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MessageCircle,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "@/components/site/whatsapp-modal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/lib/faq-data";
import { newsArticles } from "@/lib/news-data";

const partners = [
  { name: "Ripple", logo: "/visuals/ripple.png", url: "https://ripple.com" },
  { name: "Algorand", logo: "/visuals/algorand.png", url: "https://algorand.co" },
  { name: "Tenity", logo: "/visuals/tenity.png", url: "https://tenity.com" },
  { name: "CSIR", logo: "/visuals/csir.jpg", url: "https://www.csir.co.za" },
  { name: "RLabs", logo: "/visuals/rlabs.png", url: "https://rlabs.org" },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Message Mandla",
    description: 'Send "Hi" on WhatsApp or dial USSD',
    supportingText: "No app needed. No downloads.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Your number becomes your wallet",
    description: "Get set up in seconds using just your phone number",
    supportingText: "No forms. No complexity.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Send and receive instantly",
    description: "Move money locally or across borders in seconds",
    supportingText: "Fast, simple, available 24/7.",
    icon: Zap,
  },
];

const coreValues = [
  {
    title: "Built for people, not banks",
    description: "No app downloads. No data required. Works on any phone.",
    icon: Users,
  },
  {
    title: "Built for scale",
    description: "Instant settlement and near-zero fees.",
    icon: Zap,
  },
  {
    title: "Borderless by default",
    description: "Send money across countries as easily as a message.",
    icon: Globe,
  },
];

const individualFeatures = [
  "Peer-to-peer transfers",
  "Cross-border remittances",
  "Airtime & electricity",
  "Receive wages",
];

const orgFeatures = [
  "Bulk payouts",
  "NGO disbursements",
  "Payroll",
  "API integrations",
];

const recognitionCards = [
  {
    org: "Schmidt Futures",
    title: "Reimagine Award",
    description: "Innovation in financial systems",
  },
  {
    org: "Ripple / XRPL",
    title: "Hackathon Winner",
    description: "Creating Real World Impact Hackathon",
  },
  {
    org: "Tenity",
    title: "Accelerator Participant",
    description: "$50,000 grant",
  },
  {
    org: "Algorand",
    title: "Ecosystem Grant",
    description: "Grant recipient",
  },
];

export default function Home() {
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
      {/* 3.1 Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-primary">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={`${basePath}/visuals/video_hero_2.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
                Your phone number is your wallet.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
                Send, receive, and store money instantly via WhatsApp, SMS or
                USSD.
                <br />
                No bank account. No smartphone required. No friction.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition hover:brightness-105"
                >
                  Start on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/business"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
                >
                  Bulk Payouts & Disbursements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Instant settlement
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Works on any phone
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  Near-zero fees
                </span>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-center">
              <div className="relative">
                <Image
                  src={`${basePath}/mobile_view.png`}
                  alt="Mandla Money mobile wallet view"
                  width={564}
                  height={1024}
                  className="h-[560px] w-auto object-contain drop-shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
                  priority
                />
                <div className="pulse-glow absolute -right-8 top-20 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-primary/60">
              Your phone number is your wallet.
            </p>
            <p className="mt-2 text-lg text-primary/60">
              Send money instantly. Any phone. Any network.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting dotted line (desktop) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[16%] right-[16%] top-[56px] hidden border-t border-dashed border-accent/30 md:block"
            />

            <div className="grid gap-8 md:grid-cols-3">
              {howItWorksSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="card-hover relative rounded-2xl border border-primary/5 bg-white p-8 text-center shadow-soft"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary/60">
                      {step.description}
                    </p>
                    <p className="mt-1 text-sm text-primary/50">
                      {step.supportingText}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-primary/60">
              Powered by digital dollars (stablecoins)
            </p>
            <button
              onClick={handleCTA}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition hover:brightness-105"
            >
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.4 Core Value Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Why Mandla Money
            </h2>
            <p className="mt-4 text-lg text-primary/60">
              Financial infrastructure designed for how money actually moves
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-hover rounded-2xl border border-primary/10 bg-white p-8 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5 Use Case Split Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* For individuals - dark */}
            <div className="card-hover relative overflow-hidden rounded-2xl border border-white/5 bg-primary p-10 text-white shadow-soft-lg">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Personal
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                For individuals
              </h3>
              <p className="mt-3 text-white/60">
                Send money home. Pay bills. Get paid.
              </p>
              <ul className="mt-6 space-y-3">
                {individualFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCTA}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
              >
                Start on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* For organisations - light */}
            <div className="card-hover rounded-2xl border border-primary/10 bg-white p-10 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Business
              </p>
              <h3 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
                For organisations
              </h3>
              <p className="mt-3 text-primary/60">
                Disburse funds at scale.
              </p>
              <ul className="mt-6 space-y-3">
                {orgFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-primary/70"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/business"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Explore Business Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6 Regulatory Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Trust & compliance
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
              Regulated, licensed, and built to last
            </h2>
            <p className="mt-4 text-primary/60">
              Operating within a fully authorised framework across the markets we serve.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card-hover rounded-xl border border-primary/10 bg-off-white px-8 py-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <Shield className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/40">
                      Authorised FSP
                    </p>
                    <p className="text-lg font-semibold text-primary">FSP 55523</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary/55">
                  FSCA supervised Financial Services Provider.
                </p>
              </div>
              <div className="card-hover rounded-xl border border-primary/10 bg-off-white px-8 py-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <Shield className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/40">
                      Regulatory
                    </p>
                    <p className="text-lg font-semibold text-primary">FIC compliant</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary/55">
                  KYC, AML and reporting built into every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
            <div>
              <FaqAccordion items={faqItems.slice(0, 5)} />
              <div className="mt-8 border-t border-white/10 pt-8">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
                >
                  View all FAQs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.7 Recognition Section */}
      <section id="recognition" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-5xl">
            Recognition
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recognitionCards.map((card) => (
              <div
                key={card.org}
                className="card-hover group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-soft"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {card.org}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-primary/50">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the news */}
      <section className="bg-off-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              In the News
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
              Highlights from Mandla Money
            </h2>
          </div>

          <div className="mt-12 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {newsArticles.map((article) => (
              <article
                key={article.title}
                className="card-hover h-fit overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft"
              >
                <div className="bg-off-white p-2 rounded-t-2xl">
                  <Image
                    src={`${basePath}${article.image}`}
                    alt={article.title}
                    width={article.imageWidth}
                    height={article.imageHeight}
                    className="h-auto w-full rounded-t-xl"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {article.date}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-base font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-primary/60">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.sourceUrl ?? `/news/${article.slug}`}
                    target={article.sourceUrl ? "_blank" : undefined}
                    rel={article.sourceUrl ? "noopener noreferrer" : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-accent"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3.8 Final CTA Section */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Start using Mandla Money today
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Join thousands of people sending money instantly.
          </p>
          <button
            onClick={handleCTA}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] transition hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Start on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-white/40">
            No app. No bank account. Works on any phone.
          </p>
        </div>
      </section>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
