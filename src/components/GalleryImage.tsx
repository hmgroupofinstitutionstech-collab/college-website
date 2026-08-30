"use client";

import { useState } from "react";

interface GalleryImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  /** Shown if the primary image fails to load (e.g. missing Cloudinary photo). */
  fallbackSrc: string;
}

/**
 * Gallery <img> that degrades gracefully: if the Cloudinary photo can't load,
 * it swaps to a local placeholder instead of showing a broken image.
 */
export default function GalleryImage({
  src,
  srcSet,
  sizes,
  alt,
  fallbackSrc,
}: GalleryImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={failed ? fallbackSrc : src}
      srcSet={failed ? undefined : srcSet}
      sizes={failed ? undefined : sizes}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
    />
  );
}
