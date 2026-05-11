import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Globe,
  Heart,
  Lock,
  MessageCircle,
  Phone,
  PhoneOff,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";

export const metadata = {
  title: "Mandla Money — About",
  description:
    "Learn about Mandla Money, the financial infrastructure built for how money actually moves.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with logo */}
      <section className="bg-primary pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              About
            </p>
            <Image
              src={`${basePath}/logo.png`}
              alt="Mandla Money"
              width={380}
              height={120}
              className="mx-auto mt-4 h-16 w-auto object-contain"
              priority
            />
            <p className="mt-6 text-lg text-white/60">
              Financial infrastructure designed for how money actually moves.
              Regulated, Licensed, and Built for the Lastmile.
            </p>
          </div>
        </div>
      </section>

      {/* What Mandla is */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                No apps. No bank account. No barriers.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary/60">
                Mandla Money makes it possible to send and receive money using
                just a phone number. We work through WhatsApp, SMS, and USSD so
                anyone can access financial services - whether they have a
                smartphone or not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <AlertTriangle className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                For millions of people, accessing money is still harder than it
                should be.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Smartphone className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-white/60">Apps require data.</p>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-white/60">
                Banks require complex documentation and physical branches.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <PhoneOff className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-white/60">Mobile money is fragmented.</p>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-white/60">
                Sending money across borders is slow and expensive.
              </p>
            </div>
          </div>

          <p className="mt-10 text-lg font-medium text-accent">
            In sub-Saharan Africa alone, over 400 million people have a mobile
            phone but no bank account.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                What we do differently
              </h2>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <p className="text-lg text-primary/60">
              Mandla Money removes the need for:
            </p>
            <ul className="space-y-3">
              {[
                "App downloads",
                "Complex onboarding",
                "Traditional banking infrastructure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary/70">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 space-y-4 text-lg leading-relaxed text-primary/60">
            <p>
              By turning phone numbers into wallets, we make it possible to
              send, receive, and store money as easily as sending a message.
            </p>
            <p>
              Users can hold value in stable digital currencies, helping protect
              their purchasing power while moving money instantly across borders.
            </p>
            <p>
              Whether you&apos;re on WhatsApp in a city or using USSD in a rural
              area, the experience stays simple and consistent.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">How it works</h2>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:grid-cols-3">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-2 text-xs font-semibold text-accent">Step 01</p>
              <h3 className="mt-3 text-xl font-semibold text-primary">
                Say Hi
              </h3>
              <p className="mt-2 text-sm text-primary/60">
                Start a conversation on WhatsApp or dial our USSD code.
              </p>
            </div>

            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Wallet className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-2 text-xs font-semibold text-accent">Step 02</p>
              <h3 className="mt-3 text-xl font-semibold text-primary">
                Enter details
              </h3>
              <p className="mt-2 text-sm text-primary/60">
                Add a phone number and the amount.
              </p>
            </div>

            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-2 text-xs font-semibold text-accent">Step 03</p>
              <h3 className="mt-3 text-xl font-semibold text-primary">
                Done instantly
              </h3>
              <p className="mt-2 text-sm text-primary/60">
                The money is delivered immediately with confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-white">What we believe</h2>
          </div>

          <ul className="mt-10 space-y-4">
            {[
              "Every phone number should be a wallet",
              "Financial access should not depend on infrastructure",
              "Sending money should be as simple as sending a message",
            ].map((belief) => (
              <li key={belief} className="flex items-center gap-3 text-lg text-white/70">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {belief}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-lg leading-relaxed text-white/50">
            Mandla Money is building invisible fintech - where the technology
            disappears and only the experience remains.
          </p>
        </div>
      </section>

      {/* Trust & credibility */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Trust & credibility
            </h2>
          </div>

          <div className="mt-10 grid items-stretch gap-8 md:grid-cols-3">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <Shield className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Regulated</h3>
              <p className="mt-2 text-sm text-primary/50">
                FSP55523<br />
                FIC Compliant<br />
              </p>
            </div>
            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <Globe className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Global</h3>
              <p className="mt-2 text-sm text-primary/50">
              Global reach, local trust-built for everyone, everywhere.
              </p>
            </div>
            <div className="card-hover flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-soft">
              <Users className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Inclusive</h3>
              <p className="mt-2 text-sm text-primary/50">
                No app downloads. No bank account. Any phone.
              </p>
            </div>
          </div>

          <p className="mt-10 text-lg leading-relaxed text-primary/60">
            Mandla Money (Pty) Ltd (2019/470624/07) is an authorised Financial
            Services Provider (FSP 55523). We operate across multiple countries
            and are built with compliance, security, and accessibility at our
            core.
          </p>
        </div>
      </section>
    </>
  );
}
