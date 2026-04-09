import { Shield, Globe, Users } from "lucide-react";

export const metadata = {
  title: "Mandla Money — About",
  description:
    "Learn about Mandla Money, the financial infrastructure built for how money actually moves.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              About Mandla Money
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Financial infrastructure designed for how money actually moves.
              Licensed, regulated, and built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-8 text-lg leading-relaxed text-primary/70">
            <p>
              Mandla Money is a licensed financial services provider (FSP
              #55523) building wallet infrastructure for SMS, USSD, and
              WhatsApp. We serve individuals and organisations across 11
              countries, enabling instant money transfers without requiring a
              bank account or a smartphone.
            </p>
            <p>
              Our mission is simple: make financial services accessible to
              everyone, regardless of the device they own or the connectivity
              they have. We believe your phone number should be your wallet.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/5 bg-white p-8 text-center">
              <Shield className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Regulated</h3>
              <p className="mt-2 text-sm text-primary/50">
                FSP #55523, FSCA supervised, FIC compliant
              </p>
            </div>
            <div className="rounded-2xl border border-primary/5 bg-white p-8 text-center">
              <Globe className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Global</h3>
              <p className="mt-2 text-sm text-primary/50">
                Live across 11 countries with 1,000+ users
              </p>
            </div>
            <div className="rounded-2xl border border-primary/5 bg-white p-8 text-center">
              <Users className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">Inclusive</h3>
              <p className="mt-2 text-sm text-primary/50">
                No app downloads. No bank account. Any phone.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm text-primary/40">
              Mandla Money (Pty) Ltd Registration Number 2019/470624/07 is an
              authorised Financial Services Provider (FSP 55523).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
