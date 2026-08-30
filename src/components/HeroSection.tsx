import { ChevronDown } from "lucide-react";
import { college } from "@/data/site";
import Container from "./Container";
import Button from "./Button";

/** Full-width hero with campus background image, overlay and call-to-action. */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] items-center overflow-hidden md:min-h-[82vh]"
    >
      {/* Background image (placeholder). Replace campus-placeholder.svg later. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/campus-placeholder.svg"
        alt="ABC College of Excellence campus"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/65 to-navy-dark/80"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-in-up motion-reduce:animate-none">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {college.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-gold sm:text-xl lg:text-2xl">
            {college.motto}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {college.heroSupporting}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#courses" variant="primary" size="lg">
              Explore Courses
            </Button>
            <Button href="#about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll-down indicator */}
      <a
        href="#trustees"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown
          className="h-7 w-7 animate-bounce-subtle motion-reduce:animate-none"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
