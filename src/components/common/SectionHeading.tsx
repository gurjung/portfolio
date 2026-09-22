import type { ReactNode } from "react";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly className?: string;
  readonly children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, className = "", children }: SectionHeadingProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <p className="text-xl font-medium tracking-widest uppercase text-secondary">
        {eyebrow}
      </p>
      <h2 className="py-4 text-3xl font-bold tracking-tight text-tertiary sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  );
}
