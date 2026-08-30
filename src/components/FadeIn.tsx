import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Subtle entrance animation wrapper.
 *
 * Implemented as a pure CSS animation (no JavaScript, no IntersectionObserver),
 * so content is NEVER left hidden by a timing glitch, fast scroll, background
 * tab, or missing JS. The animation plays once when the element renders; under
 * `prefers-reduced-motion` the `motion-safe:` prefix skips it and the content
 * simply shows at full opacity.
 */
export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <div
      className={`motion-safe:animate-fade-in-up ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
