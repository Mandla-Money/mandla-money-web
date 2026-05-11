import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "gold";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:-translate-y-0.5 hover:bg-primary/90",
  secondary:
    "bg-accent text-primary hover:-translate-y-0.5 hover:brightness-105",
  ghost: "bg-transparent text-primary ring-1 ring-primary/20 hover:bg-primary/5",
  light:
    "bg-transparent text-white ring-1 ring-white/25 hover:bg-white/10 hover:-translate-y-0.5",
  gold: "bg-accent text-primary font-semibold hover:brightness-105",
};

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
