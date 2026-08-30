import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  college,
  contact,
  footerQuickLinks,
  socialLinks,
  legalLinks,
  copyright,
} from "@/data/site";
import Container from "./Container";

/** Multi-column site footer with contact, links and social profiles. */
export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-navy-dark text-white">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* College information */}
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/college-logo-placeholder.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-heading text-lg font-bold">
                {college.shortName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {college.description}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="font-heading text-base font-bold text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact information */}
          <div>
            <h2 className="font-heading text-base font-bold text-white">
              Contact
            </h2>
            <address className="mt-4 space-y-3 not-italic">
              <p className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{contact.address}</span>
              </p>
              <p className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-gold">
                  {contact.phone}
                </a>
              </p>
              <p className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-gold">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{contact.hours}</span>
              </p>
            </address>
          </div>

          {/* Social media */}
          <div>
            <h2 className="font-heading text-base font-bold text-white">
              Follow Us
            </h2>
            <ul className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy-dark"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">{copyright}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
