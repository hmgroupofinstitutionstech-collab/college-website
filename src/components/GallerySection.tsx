import {
  gallery,
  galleryIntro,
  galleryPlaceholders,
  galleryCategories,
  galleryCampus,
} from "@/data/site";
import {
  cloudinaryEnabled,
  GALLERY_TAG,
  fetchTaggedPublicIds,
} from "@/lib/cloudinary";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import GalleryGrid, { type GalleryGridItem } from "./GalleryGrid";

interface GallerySectionData {
  title: string;
  description: string;
  ids: string[];
}

/**
 * "Gallery" section (server component). Pulls photos from Cloudinary and groups
 * them into labelled sections by tag:
 *  - each category in `galleryCategories` becomes its own section, and
 *  - photos carrying only the main tag fall into the general "Campus" section.
 * Falls back to local placeholders when Cloudinary is unconfigured/unreachable.
 */
export default async function GallerySection() {
  const allIds = await fetchTaggedPublicIds(GALLERY_TAG);
  const usingCloud = cloudinaryEnabled && allIds.length > 0;

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Campus Gallery" intro={galleryIntro} />
        </FadeIn>

        {usingCloud ? (
          <CloudGallery allIds={allIds} />
        ) : (
          // Fallback: a single placeholder grid (Cloudinary unavailable).
          <GalleryGrid
            items={gallery}
            usingCloud={false}
            placeholders={galleryPlaceholders}
            initialCount={12}
          />
        )}
      </Container>
    </section>
  );
}

/** Fetches each category tag, derives "Campus" (the remainder), and renders. */
async function CloudGallery({ allIds }: { allIds: string[] }) {
  const categories = await Promise.all(
    galleryCategories.map(async (category) => ({
      ...category,
      ids: await fetchTaggedPublicIds(category.tag),
    })),
  );

  // Any photo that belongs to a named category is excluded from "Campus".
  const categorized = new Set(categories.flatMap((category) => category.ids));
  const campusIds = allIds.filter((id) => !categorized.has(id));

  const sections: GallerySectionData[] = [
    { title: galleryCampus.title, description: galleryCampus.description, ids: campusIds },
    ...categories.map(({ title, description, ids }) => ({ title, description, ids })),
  ].filter((section) => section.ids.length > 0);

  return (
    <div className="mt-6 space-y-16 md:space-y-20">
      {sections.map((section, index) => {
        const items: GalleryGridItem[] = section.ids.map((publicId, i) => ({
          publicId,
          alt: `${section.title} photograph ${i + 1}`,
        }));

        return (
          <FadeIn key={section.title} delay={index * 60}>
            <div>
              <span className="block h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy sm:text-3xl">
                {section.title}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-charcoal/80">
                {section.description}
              </p>

              <GalleryGrid
                items={items}
                usingCloud
                placeholders={galleryPlaceholders}
                initialCount={8}
              />
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
