import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "gold" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition duration-300";

  const variants = {
    primary: "bg-[#0B1F3A] text-white hover:bg-[#16345e]",
    secondary: "border border-[#0B1F3A] text-[#0B1F3A] hover:bg-gray-100",
    gold: "bg-[#D4AF37] text-white hover:bg-[#b8921f]",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}