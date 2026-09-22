import type { ReactNode } from "react";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
  readonly children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
