"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Code2,
  DollarSign,
  Globe,
  Shield,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WhatsAppModal } from "@/components/site/whatsapp-modal";

const partners = [
  { name: "Ripple", logo: "/visuals/ripple.png", url: "https://ripple.com" },
  { name: "Algorand", logo: "/visuals/algorand.png", url: "https://algorand.co" },
  { name: "Tenity", logo: "/visuals/tenity.png", url: "https://tenity.com" },
  { name: "CSIR", logo: "/visuals/csir.jpg", url: "https://www.csir.co.za" },
  { name: "RLabs", logo: "/visuals/rlabs.png", url: "https://rlabs.org" },
];

const audiences = [
  { icon: Users, label: "NGOs", description: "Grants and aid distribution at scale" },
  { icon: Wallet, label: "Employers", description: "Pay workers without bank accounts" },
  { icon: Code2, label: "Fintech platforms", description: "Integrate disbursements via API" },
];

const payoutSteps = [
  {
    number: "01",
    title: "Upload recipients",
    description: "Add phone numbers via CSV or connect your system via API.",
  },
  {
    number: "02",
    title: "Fund your Mandla Money account",
    description: "Fund your account via EFT or stablecoin deposit.",
  },
  {
    number: "03",
    title: "Disburse instantly",
    description: "Send payouts to any phone number in one click - across networks and borders.",
  },
  {
    number: "04",
    title: "Track and report",
    description: "Monitor transactions in real time, with delivery confirmations and downloadable PDF reports for each payout.",
  },
];

const businessValues = [
  { icon: Zap, label: "Lower cost", description: "Near-zero transaction fees" },
  { icon: Shield, label: "Fully compliant", description: "FSP55523, FSCA supervised" },
  { icon: Users, label: "No bank accounts required", description: "Phone number wallets" },
  { icon: Globe, label: "Multi-country", description: "Live across multiple countries" },
];

export default function BusinessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Business
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
              Disburse funds to any phone number, anywhere, instantly.
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Bulk payouts, payroll, and social transfers — at near-zero cost.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] transition hover:brightness-105"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Who it&apos;s for
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-hover rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-primary/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why businesses choose Mandla Money */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Why businesses choose Mandla Money
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Speed & Reach
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Send to thousands of recipients in seconds
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                No banking infrastructure required. If they have a phone number,
                you can pay them - instantly, across networks and borders.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Cost
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Near-zero fees at any scale
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Traditional payroll and remittance services charge per
                transaction and per corridor. Mandla Money costs a fraction of a
                cent - whether you&apos;re paying 10 people or 10,000.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Compliance
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Built-in regulatory coverage
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Mandla Money is a licensed Financial Services Provider (FSP
                55523). Disbursements are handled within a compliant framework,
                including KYC, reporting, and audit trails.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Inclusion
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Reach the unbanked by default
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                No bank account. No smartphone. No data required. Recipients get
                paid to their phone number and access funds via WhatsApp, SMS,
                or USSD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Payout Flow */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Bulk payout flow
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {payoutSteps.map((step) => (
              <div
                key={step.number}
                className="card-hover rounded-2xl border border-primary/10 bg-off-white p-6 shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20 text-sm font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-primary/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Developer
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                Integrate in hours, not months
              </h2>
              <p className="mt-4 text-primary/60">
                Simple REST APIs for disbursements, balance checks, and
                transaction orchestration.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Coming soon
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-primary/10 bg-[#0A0A0A] shadow-soft-lg">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 text-[11px] font-medium text-white/40">
                  POST /v1/disbursements/bulk
                </span>
              </div>
              <pre className="overflow-x-auto p-5 text-xs leading-6 text-slate-300">
                <code>{`POST /v1/disbursements/bulk
{
  "recipients": [
    { "phone": "+27812345678", "amount": 150 },
    { "phone": "+27823456789", "amount": 200 }
  ],
  "currency": "ZAR",
  "reference": "payroll_jan_2026"
}

// Response 201 Created
{
  "batch_id": "batch_7823",
  "status": "processing",
  "total_recipients": 2
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-accent">
            Trusted by organisations on the ground
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold text-primary md:text-4xl">
            Our partners
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-12">
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center justify-center grayscale opacity-60 transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={`${basePath}${p.logo}`}
                  alt={p.name}
                  width={160}
                  height={64}
                  className="h-14 w-auto object-contain"
                />
              </a>
            ))}
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
            Ready to move money at scale?
          </h2>
          <p className="mt-4 text-white/60">
            Get started with a tailored disbursement plan for your organisation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] transition hover:brightness-105"
          >
            Talk to Sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
