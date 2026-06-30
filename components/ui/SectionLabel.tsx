import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]",
        className
      )}
    >
      <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
      {children}
    </span>
  );
}
