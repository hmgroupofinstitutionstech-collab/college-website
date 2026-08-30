import { Linkedin } from "lucide-react";
import { trustees, trusteesIntro } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TrusteeCard from "./TrusteeCard";
import FadeIn from "./FadeIn";

/**
 * "Our Trustees" section.
 * A single trustee is shown as a prominent featured profile; multiple trustees
 * fall back to a responsive grid of cards.
 */
export default function TrusteesSection() {
  const single = trustees.length === 1 ? trustees[0] : null;

  return (
    <section id="trustees" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Our Trustees" intro={trusteesIntro} />
        </FadeIn>

        {single ? (
          <FadeIn delay={100}>
            <article className="mx-auto mt-12 grid max-w-4xl overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-card md:grid-cols-[300px_1fr]">
              <div className="bg-surface-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={single.image}
                  alt={single.imageAlt}
                  className="h-80 w-full object-cover object-top sm:h-96 md:h-full md:min-h-[440px]"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                  {single.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  {single.designation}
                </p>
                <p className="mt-5 text-base leading-relaxed text-charcoal/80">
                  {single.description}
                </p>

                <a
                  href={single.profileUrl}
                  aria-label={`View ${single.name}'s profile`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-navy transition-colors hover:text-gold-dark"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>View profile</span>
                </a>
              </div>
            </article>
          </FadeIn>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((trustee, index) => (
              <FadeIn key={trustee.name} delay={index * 100} className="h-full">
                <TrusteeCard trustee={trustee} />
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
