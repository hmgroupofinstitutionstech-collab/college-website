import { gallery, galleryIntro, galleryPlaceholders } from "@/data/site";
import { cloudinaryEnabled, fetchGalleryPublicIds } from "@/lib/cloudinary";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import GalleryGrid, { type GalleryGridItem } from "./GalleryGrid";

/**
 * "Gallery" section (server component). Pulls the photo list from Cloudinary
 * (every image tagged GALLERY_TAG) and renders a responsive grid. Falls back to
 * the local placeholder set when Cloudinary is not configured or unreachable.
 */
export default async function GallerySection() {
  const publicIds = await fetchGalleryPublicIds();
  const usingCloud = cloudinaryEnabled && publicIds.length > 0;

  const items: GalleryGridItem[] = usingCloud
    ? publicIds.map((publicId, i) => ({
        publicId,
        alt: `Campus photograph ${i + 1} of ${publicIds.length}`,
      }))
    : gallery; // static placeholder entries defined in site.ts

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title="Campus Gallery" intro={galleryIntro} />
        </FadeIn>

        <GalleryGrid
          items={items}
          usingCloud={usingCloud}
          placeholders={galleryPlaceholders}
          initialCount={12}
        />
      </Container>
    </section>
  );
}
