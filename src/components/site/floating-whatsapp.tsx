"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/design-system";
import { WhatsAppModal } from "./whatsapp-modal";

export function FloatingWhatsApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  if (typeof window !== "undefined" && !isMobile) {
    const checkMobile = window.innerWidth < 768;
    if (checkMobile !== isMobile) {
      // Will run once on client
      setTimeout(() => setIsMobile(checkMobile), 0);
    }
  }

  const handleClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(WHATSAPP_URL, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-accent shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
        aria-label="Start on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
