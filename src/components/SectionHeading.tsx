import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  intro?: ReactNode;
  /** Aligns content to the centre (default) or the start of the line. */
  align?: "center" | "left";
  /** Renders the eyebrow/accent rule in a light tone for dark backgrounds. */
  tone?: "dark" | "light";
}

/** Consistent section title with an accent rule and optional introduction. */
export default function SectionHeading({
  title,
  intro,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <span
        className={`block h-1 w-12 rounded-full bg-gold ${
          isCenter ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-white/80" : "text-charcoal/80"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
