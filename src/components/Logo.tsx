import { college } from "@/data/site";

interface LogoProps {
  /** "dark" for light backgrounds (header), "light" for dark backgrounds (footer). */
  tone?: "dark" | "light";
}

/**
 * College crest placeholder + name lockup.
 * Replace /images/college-logo-placeholder.svg with the real crest later.
 */
export default function Logo({ tone = "dark" }: LogoProps) {
  const nameColor = tone === "light" ? "text-white" : "text-navy";

  return (
    <a
      href="#home"
      className="group flex items-center gap-3"
      aria-label={`${college.name} — go to top`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/college-logo-placeholder.svg"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
      />
      <span className={`font-heading text-lg font-bold leading-tight ${nameColor}`}>
        {college.shortName}
      </span>
    </a>
  );
}
