import { Linkedin } from "lucide-react";
import type { Trustee } from "@/data/site";

interface TrusteeCardProps {
  trustee: Trustee;
}

/** Single trustee profile card with portrait, details and profile link. */
export default function TrusteeCard({ trustee }: TrusteeCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none">
      <div className="aspect-[4/5] w-full overflow-hidden bg-surface-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={trustee.image}
          alt={trustee.imageAlt}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-navy">
          {trustee.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-dark">
          {trustee.designation}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80">
          {trustee.description}
        </p>

        <a
          href={trustee.profileUrl}
          aria-label={`View ${trustee.name}'s profile`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-navy transition-colors hover:text-gold-dark"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          <span>View profile</span>
        </a>
      </div>
    </article>
  );
}
