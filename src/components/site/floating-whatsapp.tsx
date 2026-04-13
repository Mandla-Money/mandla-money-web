"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "./whatsapp-modal";

export function FloatingWhatsApp() {
  const [qrUrl, setQrUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setQrUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(WHATSAPP_URL)}`
    );
  }, []);

  if (isMobile) {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-primary shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
      >
        Start on WhatsApp
      </a>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-[200px] cursor-pointer rounded-2xl bg-primary p-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02]"
      >
        <div className="flex items-center justify-center rounded-lg bg-white p-2">
          {qrUrl ? (
            <img
              src={qrUrl}
              alt="Scan to open Mandla Money on WhatsApp"
              width={160}
              height={160}
              className="h-[160px] w-[160px]"
            />
          ) : (
            <div className="h-[160px] w-[160px] animate-pulse rounded bg-primary/5" />
          )}
        </div>

        <p className="mt-2 text-center text-xs font-semibold text-accent">
          Start on WhatsApp
        </p>
      </button>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
