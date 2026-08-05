import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "coral" | "green" | "slate";
}

const variantStyles = {
  navy: "bg-brand-navy-light text-brand-navy",
  coral: "bg-brand-coral-light text-brand-coral-dark",
  green: "bg-green-50 text-green-700",
  slate: "bg-slate-100 text-slate-700",
};

export function Badge({
  variant = "navy",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}