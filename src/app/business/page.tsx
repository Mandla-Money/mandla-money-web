"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Shield,
  Upload,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "@/components/site/whatsapp-modal";

const audiences = [
  { icon: Users, label: "NGOs", description: "Grants and aid distribution at scale" },
  { icon: Wallet, label: "Employers", description: "Pay workers without bank accounts" },
  { icon: Code2, label: "Fintech platforms", description: "Integrate disbursements via API" },
];

const payoutSteps = [
  { number: "01", title: "Upload recipient list", description: "CSV or API integration" },
  { number: "02", title: "Fund account", description: "Bank transfer or card payment" },
  { number: "03", title: "Disburse in one click", description: "Instant delivery to recipients" },
  { number: "04", title: "Track transactions", description: "Real-time reporting dashboard" },
];

const businessValues = [
  { icon: Zap, label: "Lower cost", description: "Near-zero transaction fees" },
  { icon: Shield, label: "Fully compliant", description: "FSP #55523, FSCA supervised" },
  { icon: Users, label: "No bank accounts required", description: "Phone number wallets" },
  { icon: Globe, label: "Multi-country", description: "Live across multiple countries" },
];

export default function BusinessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Disburse funds to any phone number, anywhere
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Bulk payouts, payroll, and social transfers
            </p>
            <Link
              href="mailto:sales@mandla.money"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition hover:brightness-105"
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
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/5 bg-white p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
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
                className="rounded-2xl border border-primary/5 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
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
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Integrate in hours, not months
              </h2>
              <p className="mt-4 text-primary/60">
                Simple REST APIs for disbursements, balance checks, and
                transaction orchestration.
              </p>
              <Link
                href="mailto:api@mandla.money"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                View API Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-primary/10 bg-[#0A0A0A]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
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

      {/* Business Value */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessValues.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/5 p-6"
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 font-semibold text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-primary/50">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Partnership */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/10 bg-white p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Trusted by organisations on the ground
            </p>
            <h3 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
              RLabs
            </h3>
            <p className="mt-1 text-sm text-primary/50">
              Global community organisation operating across 25+ countries
            </p>
            <p className="mt-4 text-primary/70">
              Mandla Money is actively supporting RLabs with fund
              disbursements. This is live infrastructure, not a pilot.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to move money at scale?
          </h2>
          <Link
            href="mailto:sales@mandla.money"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary transition hover:brightness-105"
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
