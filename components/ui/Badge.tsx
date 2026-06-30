interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">{children}</span>;
}
