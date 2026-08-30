import { about } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

/** "About" section with an institutional summary. */
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
      </Container>
    </section>
  );
}
