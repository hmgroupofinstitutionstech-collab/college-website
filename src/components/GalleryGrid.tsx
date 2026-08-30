"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cloudImage, cloudSrcSet } from "@/lib/cloudinary";
import GalleryImage from "./GalleryImage";
import FadeIn from "./FadeIn";

export interface GalleryGridItem {
  /** Cloudinary public ID, or a local placeholder path when cloud is disabled. */
  publicId: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryGridItem[];
  /** When true, items are Cloudinary IDs; otherwise treated as direct image paths. */
  usingCloud: boolean;
  /** Local placeholder paths cycled through when cloud is disabled. */
  placeholders: string[];
  /** How many photos to show before the "Show all" button. */
  initialCount?: number;
}

const GALLERY_RATIO = "4:3";

/**
 * Responsive gallery grid with a "Show all" toggle so a large photo set doesn't
 * overwhelm the homepage. Images are lazy-loaded and fall back gracefully.
 */
export default function GalleryGrid({
  items,
  usingCloud,
  placeholders,
  initialCount = 12,
}: GalleryGridProps) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? items : items.slice(0, initialCount);
  const remaining = items.length - initialCount;

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {visible.map((item, index) => {
          const placeholder = placeholders[index % placeholders.length];
          const src = usingCloud
            ? cloudImage(item.publicId, { width: 800, aspectRatio: GALLERY_RATIO })
            : placeholder;

          return (
            <FadeIn key={`${item.publicId}-${index}`} delay={(index % initialCount) * 40}>
              <div className="group overflow-hidden rounded-xl bg-surface-muted shadow-card">
                <GalleryImage
                  src={src}
                  srcSet={
                    usingCloud
                      ? cloudSrcSet(item.publicId, [400, 800, 1200], GALLERY_RATIO)
                      : undefined
                  }
                  sizes="(min-width: 768px) 33vw, 50vw"
                  alt={item.alt}
                  fallbackSrc={placeholder}
                />
              </div>
            </FadeIn>
          );
        })}
      </div>

      {!expanded && remaining > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Show all {items.length} photos
          </button>
        </div>
      )}
    </>
  );
}
