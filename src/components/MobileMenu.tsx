"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navLinks, college } from "@/data/site";
import Button from "./Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Slide-in mobile navigation. Handles:
 *  - background scroll lock while open
 *  - close on Escape
 *  - basic focus management (focus first link on open)
 *  - closing after a link is selected
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape; move focus to the first link when opened.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 lg:hidden ${
        open ? "" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-navy-dark/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <span className="font-heading text-base font-bold text-navy">
            {college.shortName}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-navy transition-colors hover:bg-surface-muted"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-md px-4 py-3 text-base font-medium text-charcoal transition-colors hover:bg-surface-muted hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-charcoal/10 p-4">
          <Button href="#" onClick={onClose} size="md" className="w-full">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
