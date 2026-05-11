"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "./whatsapp-modal";

export function FloatingWhatsApp() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(201,168,76,0.55)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-4 w-4" />
        Start on WhatsApp
      </a>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        <button
          onClick={() => setModalOpen(true)}
          aria-label="Scan QR to open Mandla Money on WhatsApp"
          className="w-[220px] cursor-pointer rounded-2xl bg-primary p-4 text-left shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center rounded-lg bg-white p-3">
            <Image
              src={`${basePath}/official_qr.png`}
              alt="Scan to open Mandla Money on WhatsApp"
              width={160}
              height={160}
              className="h-[160px] w-[160px]"
            />
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-accent">
            <MessageCircle className="h-3.5 w-3.5" />
            Scan to start on WhatsApp
          </p>
        </button>
      </div>

      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
