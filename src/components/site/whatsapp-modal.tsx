"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/design-system";

export function WhatsAppModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    if (open) {
      setQrUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(WHATSAPP_URL)}`
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-primary/50 transition hover:bg-primary/5 hover:text-primary"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-semibold text-primary">
          Start using Mandla Money
        </h2>
        <p className="mt-2 text-primary/60">
          Scan with your phone to open your wallet
        </p>

        <div className="mx-auto mt-6 flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-primary/10 bg-white p-2">
          {qrUrl ? (
            <img
              src={qrUrl}
              alt="QR code to open Mandla Money on WhatsApp"
              width={200}
              height={200}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <div className="h-[200px] w-[200px] animate-pulse rounded-lg bg-primary/5" />
          )}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
        >
          Open WhatsApp
        </a>

        <p className="mt-3 text-sm text-primary/50">{WHATSAPP_NUMBER}</p>
      </div>
    </div>
  );
}
