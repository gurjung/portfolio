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
  sm: "p-3 text-base",
  md: "p-4 text-lg",
  lg: "p-6 text-xl",
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
  const baseClasses = `rounded-full shadow-lg shadow-gray-400 cursor-pointer text-tertiary hover:text-secondary hover:scale-110 active:scale-95 duration-300 ease-in flex items-center justify-center ${sizeClasses[size]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
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
      className={baseClasses}
      onClick={onClick}
    >
      {icon}
    </Link>
  );
}
