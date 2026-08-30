import { trustees, trusteesIntro } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TrusteeCard from "./TrusteeCard";
import FadeIn from "./FadeIn";

/** "Our Trustees" section — a responsive grid of trustee cards. */
export default function TrusteesSection() {
  return (
    <section id="trustees" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Our Trustees" intro={trusteesIntro} />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((trustee, index) => (
            <FadeIn key={trustee.name} delay={index * 100} className="h-full">
              <TrusteeCard trustee={trustee} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
