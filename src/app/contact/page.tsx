"use client";

import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const type = data.get("type") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `${type} enquiry from ${name}${company ? ` (${company})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nEnquiry type: ${type}\n\n${message}`
    );

    window.location.href = `mailto:info@mandla.money?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Whether you&apos;re exploring Mandla Money for your organisation
              or have a question, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-primary">
                    Your email client should open shortly
                  </h2>
                  <p className="mt-2 text-primary/60">
                    If it doesn&apos;t, you can email us directly at{" "}
                    <a
                      href="mailto:info@mandla.money"
                      className="font-medium text-accent hover:underline"
                    >
                      info@mandla.money
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary"
                      >
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-primary"
                    >
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-2 w-full rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-primary"
                    >
                      Enquiry type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      className="mt-2 w-full rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select an option</option>
                      <option value="Sales">Sales / Business enquiry</option>
                      <option value="Bulk Payouts">Bulk Payouts & Disbursements</option>
                      <option value="API Integration">API Integration</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General">General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full resize-none rounded-lg border border-primary/10 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition hover:brightness-105"
                  >
                    Send message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-4">
              <div className="card-hover rounded-2xl border border-primary/10 bg-white p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">Email</h3>
                <a
                  href="mailto:info@mandla.money"
                  className="mt-1 block text-sm text-accent hover:underline"
                >
                  info@mandla.money
                </a>
              </div>

              {/* <div className="card-hover rounded-2xl border border-primary/10 bg-white p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">Phone number</h3>
                <a
                  href="https://wa.me/27600410476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-accent hover:underline"
                >
                  +27 60 041 0476
                </a>
              </div> */}

              <div className="rounded-2xl border border-white/10 bg-primary p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Mandla Money Notice
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                Mandla Money (Pty) Ltd (2019/470624/07) is an authorised Financial Services Provider (FSP 55523).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
