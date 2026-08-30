import { about, stats } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

/** "About" section with an institutional summary and key statistics. */
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title={about.heading} intro={about.intro} />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-charcoal/80 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-surface-muted p-6 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-bold text-navy sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-charcoal/70">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </section>
  );
}
