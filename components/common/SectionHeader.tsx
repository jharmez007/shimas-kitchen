"use client";

import { ReactNode } from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <SectionTitle
        badge={badge}
        title={title}
        subtitle={subtitle}
        align="left"
      />

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}