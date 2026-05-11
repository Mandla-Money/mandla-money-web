import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandla Money — Your phone number is your wallet",
  description:
    "Send, receive, and store money instantly via WhatsApp, SMS or USSD. No bank account. No smartphone required.",
  openGraph: {
    title: "Mandla Money — Your phone number is your wallet",
    description:
      "Send, receive, and store money instantly via WhatsApp, SMS or USSD. No bank account. No smartphone required.",
    images: [{ url: "/logo.png", width: 765, height: 255, alt: "Mandla Money" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandla Money — Your phone number is your wallet",
    description:
      "Send, receive, and store money instantly via WhatsApp, SMS or USSD. No bank account. No smartphone required.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
