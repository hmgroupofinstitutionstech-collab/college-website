import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-dark hover:bg-gold-dark hover:text-white shadow-sm",
  secondary:
    "bg-white text-navy hover:bg-surface-muted border border-white/0",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Anchor-based button. Rendered as <a> so it works for in-page navigation and
 * placeholder ("#") links today, and real hrefs later — with no JS required.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
