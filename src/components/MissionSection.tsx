import { mission, missionPillars } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import MissionPillar from "./MissionPillar";
import Button from "./Button";
import FadeIn from "./FadeIn";

/** "Our Mission" — two-column layout with image, statement and pillars. */
export default function MissionSection() {
  return (
    <section id="mission" className="scroll-mt-20 bg-surface-muted py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: image */}
          <FadeIn className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mission.image}
                alt={mission.imageAlt}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Right: content */}
          <FadeIn delay={100} className="order-1 lg:order-2">
            <SectionHeading title={mission.heading} align="left" />
            <p className="mt-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              {mission.paragraph}
            </p>

            <ul className="mt-8 space-y-6">
              {missionPillars.map((pillar) => (
                <MissionPillar key={pillar.title} pillar={pillar} />
              ))}
            </ul>

            <Button href="#about" variant="primary" size="md" className="mt-8">
              Discover Our Vision
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
