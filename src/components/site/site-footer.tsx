import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Shield } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";

const footerSections = [
  {
    title: "Personal",
    links: [
      { href: "/personal", label: "Send Money" },
      { href: "/personal", label: "Receive Money" },
      { href: "/personal", label: "Airtime & Electricity" },
      { href: "/personal", label: "Cross-Border Transfers" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business", label: "Bulk Payouts" },
      { href: "/business", label: "NGO Disbursements" },
      { href: "/business", label: "Payroll" },
      { href: "/business", label: "API Documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/#recognition", label: "Recognition" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white">
      {/* Top accent hairline */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={`${basePath}/logo.png`}
              alt="Mandla Money"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain"
            />
            <p className="font-display text-xl font-bold text-white">
              Mandla Money
            </p>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            Your phone number is your wallet. Send, receive, and store money
            instantly via WhatsApp, SMS or USSD.
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 w-fit">
            <Shield className="h-3.5 w-3.5 text-accent" />
            Authorised FSP&nbsp;<span className="text-white">55523</span>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href="mailto:info@mandla.money"
              aria-label="Email Mandla Money"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mandla Money on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/mandla-money"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mandla Money on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-4V9z" />
              </svg>
            </a>
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              {section.title}
            </p>
            <div className="mt-4 space-y-3">
              {section.links.map((link) => (
                <Link
                  key={`${section.title}-${link.label}`}
                  href={link.href}
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-5 text-white/40">
            © {year} Mandla Money (Pty) Ltd · Registration 2019/470624/07 · Authorised Financial Services Provider (FSP 55523).
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <Link href="#" className="transition hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-white/70">
              Terms of Use
            </Link>
            <Link href="#" className="transition hover:text-white/70">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
