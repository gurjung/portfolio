import type { ReactNode } from "react";
import Link from "next/link";

interface SocialIconLinkProps {
  readonly href: string;
  readonly ariaLabel: string;
  readonly icon: ReactNode;
  readonly isExternal?: boolean;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
  readonly onClick?: () => void;
}

const sizeClasses = {
  sm: "w-9 h-9 text-sm",
  md: "w-11 h-11 text-base",
  lg: "w-12 h-12 text-lg",
};

export function SocialIconLink({
  href,
  ariaLabel,
  icon,
  isExternal = false,
  size = "lg",
  className = "",
  onClick,
}: SocialIconLinkProps) {
  const baseClasses = `rounded-full border border-border-subtle hover:border-primary/40 bg-surface hover:bg-surface-elevated text-text-secondary hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 ${sizeClasses[size]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={ariaLabel}
        className={baseClasses}
        onClick={onClick}
      >
        {icon}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={baseClasses}
      onClick={onClick}
    >
      {icon}
    </Link>
  );
}
