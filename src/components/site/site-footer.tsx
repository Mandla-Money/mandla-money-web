import Image from "next/image";
import Link from "next/link";
import { Shield } from "lucide-react";
import { basePath } from "@/lib/base-path";

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

const footerDocuments = [
  { href: "/documents/Terms%20of%20Use.pdf", label: "Terms of Use" },
  { href: "/documents/Privacy%20Policy.pdf", label: "Privacy Policy" },
  { href: "/documents/Risk%20Disclosure.pdf", label: "Risk Disclosure" },
  { href: "/documents/Complaints%20Policy.pdf", label: "Complaints Policy" },
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
            Authorised FSP55523
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href="https://za.linkedin.com/company/mandla-money"
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
            <a
              href="https://www.youtube.com/@MandlaMoney"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mandla Money on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </a>
            <a
              href="https://x.com/MandlaMoney"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mandla Money on X"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M18.9 2H22l-6.76 7.73L23 22h-6.1l-4.77-6.25L6.68 22H3.56l7.23-8.27L1 2h6.26l4.31 5.69L18.9 2Zm-1.07 18h1.69L6.35 3.9H4.53L17.83 20Z" />
              </svg>
            </a>
            <a
              href="https://t.me/+HtoNr3A2-oQwYzJk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mandla Money on Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M9.04 15.46 8.7 20.2c.49 0 .7-.21.96-.46l2.3-2.2 4.76 3.48c.87.49 1.49.23 1.73-.8l3.13-14.66h.01c.28-1.29-.47-1.79-1.32-1.47L1.89 11.2c-1.25.49-1.23 1.18-.21 1.5l4.7 1.47L17.3 7.3c.51-.34.98-.15.59.19" />
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
            {footerDocuments.map((document) => (
              <Link
                key={document.label}
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white/70"
              >
                {document.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
