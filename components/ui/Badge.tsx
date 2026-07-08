import { HTMLAttributes } from "react";

type BadgeVariant = "primary" | "gold" | "success" | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export default function Badge({
  variant = "primary",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variants = {
    primary: "bg-[#0B1F3A] text-white",
    gold: "bg-[#D4AF37] text-white",
    success: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}