"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/base-path";

const poster = `${basePath}/visuals/hero-poster.jpg`;

function shouldPlayHeroVideo(): boolean {
  if (window.matchMedia("(max-width: 767px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
      mozConnection?: { saveData?: boolean; effectiveType?: string };
      webkitConnection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection ??
    (navigator as Navigator & { mozConnection?: { saveData?: boolean; effectiveType?: string } })
      .mozConnection ??
    (navigator as Navigator & { webkitConnection?: { saveData?: boolean; effectiveType?: string } })
      .webkitConnection;

  if (conn?.saveData) return false;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") return false;

  return true;
}

export function HeroBackground() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(shouldPlayHeroVideo());
  }, []);

  if (showVideo) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={`${basePath}/visuals/hero.webm`} type="video/webm" />
        <source src={`${basePath}/visuals/hero.mp4`} type="video/mp4" />
      </video>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={poster}
      alt=""
      aria-hidden
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    />
  );
}
