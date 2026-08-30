import { courses, coursesIntro } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

/** "Courses" section — a responsive grid of programme categories. */
export default function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-20 bg-surface-muted py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Our Courses" intro={coursesIntro} />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <FadeIn key={course.title} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-charcoal/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/80">
                    {course.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
