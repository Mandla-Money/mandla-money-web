"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  CreditCard,
  Globe,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "./whatsapp-modal";

const personalLinks = [
  {
    icon: MessageCircle,
    label: "Get Started",
    description: "Overview and quick start",
    href: "/personal#get-started",
  },
  {
    icon: Phone,
    label: "Scan to Start",
    description: "Open Mandla Money from your phone",
    href: "/personal#scan-to-start",
  },
  {
    icon: Wallet,
    label: "What You Can Do",
    description: "Core personal wallet actions",
    href: "/personal#what-you-can-do",
  },
  {
    icon: Send,
    label: "Why People Choose Mandla Money",
    description: "Benefits for everyday users",
    href: "/personal#why-people-choose",
  },
];

const businessLinks = [
  {
    icon: Users,
    label: "Who it's for",
    description: "NGOs, employers, and fintech platforms",
    href: "/business#who-its-for",
  },
  {
    icon: Zap,
    label: "Why businesses choose Mandla Money",
    description: "Speed, cost, compliance, and inclusion",
    href: "/business#why-businesses-choose",
  },
  {
    icon: CreditCard,
    label: "Bulk payout flow",
    description: "How disbursements work end-to-end",
    href: "/business#bulk-payout-flow",
  },
  {
    icon: Code2,
    label: "API section",
    description: "Developer integration and endpoints",
    href: "/business#api",
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCTA = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(WHATSAPP_URL, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-primary">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src={`${basePath}/logo.png`}
              alt="Mandla Money"
              width={180}
              height={48}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {/* Personal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("personal")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
                onClick={() => toggleDropdown("personal")}
              >
                Personal
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {activeDropdown === "personal" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="grid w-[560px] grid-cols-[1fr_200px] gap-0 rounded-xl border border-primary/10 bg-white p-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                    <div className="p-4 space-y-1">
                      {personalLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-start gap-3 rounded-lg p-3 transition hover:bg-primary/5"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Icon className="mt-0.5 h-5 w-5 text-accent" />
                            <div>
                              <p className="text-sm font-medium text-primary">
                                {item.label}
                              </p>
                              <p className="text-xs text-primary/50">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex flex-col justify-center gap-3 border-l border-primary/10 bg-primary/[0.02] p-5">
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          handleCTA();
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-primary transition hover:brightness-105"
                      >
                        Start on WhatsApp
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("business")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
                onClick={() => toggleDropdown("business")}
              >
                Business
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {activeDropdown === "business" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="grid w-[560px] grid-cols-[1fr_200px] gap-0 rounded-xl border border-primary/10 bg-white p-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                    <div className="p-4 space-y-1">
                      {businessLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-start gap-3 rounded-lg p-3 transition hover:bg-primary/5"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Icon className="mt-0.5 h-5 w-5 text-accent" />
                            <div>
                              <p className="text-sm font-medium text-primary">
                                {item.label}
                              </p>
                              <p className="text-xs text-primary/50">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex flex-col justify-center gap-3 border-l border-primary/10 bg-primary/[0.02] p-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Talk to Sales
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/business#api"
                        className="inline-flex items-center gap-2 text-sm text-primary/60 transition hover:text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View API Docs
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="nav-link rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/faq"
              className="nav-link rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="nav-link rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCTA}
              className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_4px_14px_-4px_rgba(201,168,76,0.45)] transition hover:brightness-105 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Start on WhatsApp
            </button>

            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-primary px-6 pb-6 pt-4 md:hidden">
            <div className="space-y-1">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                Personal
              </p>
              {personalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-3 border-t border-white/10" />

              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                Business
              </p>
              {businessLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-3 border-t border-white/10" />

              <Link
                href="/about"
                className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <Link
                href="/faq"
                className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                window.open(WHATSAPP_URL, "_blank");
              }}
              className="mt-4 w-full rounded-lg bg-accent py-3 text-center text-sm font-semibold text-primary transition hover:brightness-105"
            >
              Start on WhatsApp
            </button>
          </div>
        )}
      </header>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
