"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";

export function WhatsAppModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
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
        Scan to start chatting
        </h2>
        <p className="mt-2 text-primary/60">
          Send and receive money in seconds - no app required.
        </p>
        

        <div className="mx-auto mt-6 flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-primary/10 bg-white p-2">
          <Image
            src={`${basePath}/official_qr.png`}
            alt="QR code to open Mandla Money on WhatsApp"
            width={200}
            height={200}
            className="h-[200px] w-[200px]"
          />
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
        >
          Open WhatsApp
        </a>
      </div>
    </div>
  );
}
