"use client";

import Link from "next/link";
import { Download, QrCode } from "lucide-react";
import { useEffect, useState } from "react";
import { basePath } from "@/lib/base-path";

export function FloatingQr() {
  const [targetUrl, setTargetUrl] = useState("");

  useEffect(() => {
    const origin = window.location.origin;
    setTargetUrl(`${origin}${basePath}/contact/`);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      <div className="group pointer-events-auto relative flex items-end justify-end">
        <div className="absolute bottom-0 right-[calc(100%+1rem)] hidden w-64 translate-x-3 rounded-[24px] border border-primary/10 bg-white/95 p-5 text-primary opacity-0 shadow-[0_24px_70px_rgba(10,25,47,0.14)] backdrop-blur transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/45">
            Scan to open
          </p>
          <h3 className="mt-2 text-xl font-semibold">Mandla Wallet access</h3>
          <p className="mt-3 text-sm leading-6 text-primary/68">
            Scan this code to open the Mandla contact and onboarding page on your
            phone and continue from there.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary/78">
            <Download className="h-4 w-4 text-accent" />
            Fast handoff from desktop to mobile
          </div>
        </div>

        <Link
          href={targetUrl || "/contact"}
          className="overflow-hidden rounded-[26px] border border-primary/10 bg-white/96 p-3 shadow-[0_26px_80px_rgba(10,25,47,0.16)] backdrop-blur transition-transform duration-200 group-hover:-translate-y-1"
          aria-label="Open Mandla QR code"
        >
          <div className="rounded-[20px] bg-white p-2">
            <img
              src={`${basePath}/official_qr.png`}
              alt="Official Mandla Money QR code"
              width={168}
              height={168}
              className="h-28 w-28 rounded-[16px] object-cover sm:h-36 sm:w-36"
            />
          </div>

          <p className="pb-1 pt-3 text-center text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl">
            Get the App
          </p>
        </Link>
      </div>
    </div>
  );
}
