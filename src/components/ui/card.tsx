import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-primary/10 bg-surface p-6 shadow-[0_18px_45px_rgba(10,25,47,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
