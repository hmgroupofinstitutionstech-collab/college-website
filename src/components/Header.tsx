"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/site";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

/** Sticky top navigation with a scroll-triggered shadow and mobile menu. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-header" : "border-b border-charcoal/10"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo tone="dark" />

          {/* Right-aligned desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-surface-muted hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="rounded-md p-2 text-navy transition-colors hover:bg-surface-muted lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
