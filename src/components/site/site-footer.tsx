import Image from "next/image";
import Link from "next/link";
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
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-3">
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
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            Your phone number is your wallet. Send, receive, and store money
            instantly via WhatsApp, SMS or USSD.
          </p>
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
        <p className="text-xs leading-5 text-white/40">
          Mandla Money (Pty) Ltd Registration Number 2019/470624/07 is an
          authorised Financial Services Provider (FSP 55523).
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/40">
          <Link href="#" className="transition hover:text-white/60">
            Privacy Policy
          </Link>
          <Link href="#" className="transition hover:text-white/60">
            Terms of Use
          </Link>
          <Link href="#" className="transition hover:text-white/60">
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
