import { ChevronDown } from "lucide-react";
import { college } from "@/data/site";

/** Full-width hero: the campus entrance photo, with no overlaid text. */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] overflow-hidden md:min-h-[86vh]"
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/landing-college.jpg"
        alt="Students walking through the main entrance gate of H.M. College Pilani at dusk"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Visually hidden heading keeps the heading hierarchy and SEO intact. */}
      <h1 className="sr-only">{college.name}</h1>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-navy/70 transition-colors hover:text-navy"
      >
        <ChevronDown
          className="h-7 w-7 animate-bounce-subtle motion-reduce:animate-none"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
