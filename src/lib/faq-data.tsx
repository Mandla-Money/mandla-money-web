import React from "react";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export const faqItems: FaqItem[] = [
  // Tier 1 — Trust and activation (first 5 shown on home page)
  {
    question: "How does Mandla Money work?",
    answer: (
      <>
        <p>You use Mandla Money through WhatsApp, SMS, or USSD. This means you can:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Send money like a message</li>
          <li>Receive funds instantly to your phone number</li>
          <li>Use financial services without downloading an app</li>
        </ul>
        <p className="mt-2">Your phone number becomes your wallet.</p>
      </>
    ),
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        <p>Simply send a message saying &quot;Hi&quot; on WhatsApp to:</p>
        <p className="mt-2 font-medium text-accent">+27 60 041 0476</p>
        <p className="mt-2">Follow the prompts to create your wallet in minutes.</p>
      </>
    ),
  },
  {
    question: "Is my money safe?",
    answer: (
      <>
        <p>Yes. Mandla Money is a fully licensed financial services provider (FSP 55523) and follows strict regulatory and security standards.</p>
        <p className="mt-2">Funds are held in secure systems, and stablecoins are backed by underlying reserves, ensuring transparency and reliability.</p>
      </>
    ),
  },
  {
    question: "What does it cost?",
    answer: (
      <>
        <ul className="list-disc space-y-1 pl-5">
          <li>Receiving money is free</li>
          <li>Sending money costs a small fee (typically just a few cents, depending on the transaction)</li>
        </ul>
        <p className="mt-2">There are no hidden charges or high remittance fees.</p>
      </>
    ),
  },
  {
    question: "How do I withdraw my money?",
    answer: (
      <>
        <p>You can cash out your money in multiple ways:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Bank transfer (EFT): Send money directly to your bank account</li>
          <li>Cash voucher: Withdraw cash through supported partners</li>
        </ul>
        <p className="mt-2">This gives you flexibility to move between digital and physical money easily.</p>
      </>
    ),
  },

  // Tier 2 — Next wave of doubt
  {
    question: "Do I need a smartphone or internet data?",
    answer: (
      <>
        <p>No.</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>WhatsApp works on low-cost social data bundles</li>
          <li>SMS and USSD work without internet</li>
        </ul>
        <p className="mt-2">Mandla Money is designed to work on any phone, in any environment.</p>
      </>
    ),
  },
  {
    question: "Do I need to verify my identity (KYC)?",
    answer: (
      <>
        <p>Yes, depending on how you use the service.</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>You can start with just your phone number for small amounts</li>
          <li>For larger transfers, a quick ID verification is required by law</li>
        </ul>
        <p className="mt-2">This keeps the platform safe while remaining easy to access.</p>
      </>
    ),
  },
  {
    question: "How fast are transactions?",
    answer: "Transactions are faster than a bank transfer — usually completed in under 15 seconds.",
  },
  {
    question: "Can I send money to someone without Mandla Money?",
    answer: (
      <>
        <p>Yes. You can send money to any phone number.</p>
        <p className="mt-2">The recipient will receive a message with simple instructions to access their funds. They don&apos;t need to download an app or sign up beforehand.</p>
      </>
    ),
  },
  {
    question: "Can I use Mandla Money for cross-border payments?",
    answer: "Yes. Mandla Money is built for cross-border transfers, allowing you to send money across Africa and globally, quickly and affordably.",
  },

  // Tier 3 — Contextual and educational
  {
    question: "What currencies does Mandla Money support?",
    answer: (
      <>
        <p>Mandla Money supports both global and local stable currencies:</p>
        <p className="mt-3 font-medium text-white/80">Global stablecoins:</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>USDC (US Dollar)</li>
          <li>USDT (US Dollar)</li>
          <li>RLUSD (US Dollar)</li>
          <li>EURC (Euro, issued by Circle)</li>
          <li>XSGD (Singapore Dollar, issued by StraitsX)</li>
        </ul>
        <p className="mt-3 font-medium text-white/80">Local stablecoins:</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>South African Rand (ZARP, ZARU)</li>
        </ul>
        <p className="mt-2">These currencies are designed to maintain stable value, making them reliable for payments and savings.</p>
      </>
    ),
  },
  {
    question: "What makes Mandla Money different from mobile money?",
    answer: (
      <>
        <p>Mandla Money:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Works on any network (Vodacom, MTN, Telkom, etc.)</li>
          <li>Does not require an app download</li>
          <li>Supports global currencies like USD, EUR, and SGD</li>
          <li>Works across borders by default</li>
        </ul>
      </>
    ),
  },
  {
    question: "What services does Mandla Money offer?",
    answer: (
      <>
        <p>Mandla Money is growing into a full financial platform, including:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Peer-to-peer payments</li>
          <li>Cross-border remittances</li>
          <li>Airtime and bill payments</li>
          <li>Savings in stable currencies</li>
          <li>Merchant payments</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are stablecoins?",
    answer: (
      <>
        <p>Stablecoins are digital currencies designed to maintain a stable value by being pegged to real-world currencies like the US Dollar, Euro, or South African Rand.</p>
        <p className="mt-2">For example, 1 USDC is designed to be equal to 1 US Dollar.</p>
      </>
    ),
  },
  {
    question: "How are stablecoins different from normal cryptocurrencies?",
    answer: (
      <>
        <p>Unlike cryptocurrencies like Bitcoin or Ethereum, which can go up and down in price, stablecoins are designed to stay stable.</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Crypto = price changes a lot</li>
          <li>Stablecoins = stays close to real-world currency</li>
        </ul>
        <p className="mt-2">That makes stablecoins better for everyday use.</p>
      </>
    ),
  },
  {
    question: "Why use stablecoins instead of local currency?",
    answer: (
      <>
        <p>Stablecoins allow you to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Send money across borders instantly</li>
          <li>Avoid high remittance fees</li>
          <li>Store value in stronger global currencies</li>
        </ul>
      </>
    ),
  },
  {
    question: "Are stablecoins safe?",
    answer: (
      <>
        <p>Stablecoins are built on proven financial and blockchain infrastructure and are typically backed 1:1 by real-world reserves like cash or government bonds.</p>
        <p className="mt-2">Mandla Money only supports stablecoins that prioritise transparency, strong reserves, and trusted issuers.</p>
      </>
    ),
  },
  {
    question: "Who issues stablecoins?",
    answer: (
      <>
        <p>Stablecoins are issued by financial institutions and fintech companies that manage reserves and ensure stability. Examples include:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Circle (USDC, EURC)</li>
          <li>Tether (USDT)</li>
          <li>Ripple (RLUSD)</li>
          <li>StraitsX (XSGD)</li>
        </ul>
        <p className="mt-3">In South Africa:</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>ZARP (issued by ZARP)</li>
          <li>ZARU (issued by Zar Labs)</li>
        </ul>
      </>
    ),
  },

  // Tier 4 — Utility
  {
    question: "How do I contact support?",
    answer: (
      <>
        <p>If you need help, you can reach us anytime:</p>
        <ul className="mt-2 space-y-1">
          <li>Support: <a href="mailto:support@mandla.money" className="text-accent hover:underline">support@mandla.money</a></li>
          <li>Compliance: <a href="mailto:compliance@mandla.money" className="text-accent hover:underline">compliance@mandla.money</a></li>
        </ul>
      </>
    ),
  },
];
