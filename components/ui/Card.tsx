import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}