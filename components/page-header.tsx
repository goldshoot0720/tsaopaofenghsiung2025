import type { ReactNode } from "react";

export function PageHeader({
  index,
  eyebrow,
  title,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-10 border-b rule pb-8 sm:mb-14">
      <p className="label flex items-center gap-3">
        {index && <span className="text-accent">{index}</span>}
        {eyebrow}
      </p>
      <h1 className="font-display mt-3 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
      {children && <div className="mt-4 max-w-2xl text-lg leading-relaxed text-soft">{children}</div>}
    </header>
  );
}

export function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <span className="label">{label}</span>
    </div>
  );
}
