/**
 * -----------------------------------------------------------------------------
 * CLOUDINARY IMAGE HELPER
 * -----------------------------------------------------------------------------
 * Gallery photos are hosted on Cloudinary (a free image CDN) instead of being
 * committed into this repo. This keeps the codebase small and lets photos be
 * added/updated without a code change.
 *
 * ONE-TIME SETUP (when the real account is ready):
 *   1. Create a free account at https://cloudinary.com
 *   2. Copy your "cloud name" from the dashboard.
 *   3. Paste it into CLOUDINARY_CLOUD_NAME below.
 *
 * While CLOUDINARY_CLOUD_NAME is empty, the site automatically falls back to the
 * local placeholder images, so it always renders correctly.
 *
 * ImageKit (or any similar CDN) can be used instead by changing only the URL
 * built in `cloudImage()` — nothing else in the app needs to know.
 * -----------------------------------------------------------------------------
 */

export const CLOUDINARY_CLOUD_NAME = "ij1euuf5";

/**
 * Every photo tagged with this value in Cloudinary appears in the campus gallery
 * automatically. To add photos later: upload them and apply this tag — no code
 * change needed. (Requires "Resource list" to be allowed in Cloudinary security
 * settings.)
 */
export const GALLERY_TAG = "hmcollege";

/** True once a Cloudinary account has been configured above. */
export const cloudinaryEnabled = CLOUDINARY_CLOUD_NAME.trim().length > 0;

interface CloudImageOptions {
  /** Target width in pixels (Cloudinary resizes/crops to this). */
  width?: number;
  /** Crop aspect ratio, e.g. "4:3". Omit to keep the original ratio. */
  aspectRatio?: string;
}

/**
 * Builds an optimized Cloudinary delivery URL for a given public ID.
 * `f_auto` + `q_auto` let Cloudinary pick the best format (WebP/AVIF) and
 * quality automatically, so a large phone photo is served tiny and sharp.
 */
export function cloudImage(publicId: string, options: CloudImageOptions = {}): string {
  const { width = 800, aspectRatio } = options;

  const transforms = ["f_auto", "q_auto", "c_fill", `w_${width}`];
  if (aspectRatio) transforms.push(`ar_${aspectRatio}`);

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms.join(
    ",",
  )}/${publicId}`;
}

/**
 * Builds a responsive `srcSet` (multiple widths) so browsers download the
 * smallest image that fits the layout on each device.
 */
export function cloudSrcSet(
  publicId: string,
  widths: number[] = [400, 800, 1200],
  aspectRatio?: string,
): string {
  return widths
    .map((w) => `${cloudImage(publicId, { width: w, aspectRatio })} ${w}w`)
    .join(", ");
}

interface CloudResource {
  public_id: string;
  format?: string;
  width?: number;
  height?: number;
}

/**
 * Fetches the public IDs of every photo tagged `GALLERY_TAG` from Cloudinary.
 * Runs on the server; results are cached and refreshed hourly (ISR), so newly
 * tagged photos appear automatically without a redeploy. On any failure it
 * returns an empty array and the caller falls back to placeholders — the build
 * never breaks because Cloudinary is briefly unreachable.
 */
export async function fetchGalleryPublicIds(): Promise<string[]> {
  if (!cloudinaryEnabled) return [];

  const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${GALLERY_TAG}.json`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data: { resources?: CloudResource[] } = await res.json();
    return (data.resources ?? []).map((r) => r.public_id).filter(Boolean);
  } catch {
    return [];
  }
}
