/**
 * -----------------------------------------------------------------------------
 * SITE CONTENT
 * -----------------------------------------------------------------------------
 * This is the single place to edit the site's text content and structured data.
 * Change the college name, motto, trustees, mission text, contact details and
 * links here — the components read everything from this file.
 * -----------------------------------------------------------------------------
 */

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
  Lightbulb,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/* --- College identity ----------------------------------------------------- */

export const college = {
  name: "H.M. College Pilani",
  shortName: "H.M. College Pilani",
  motto: "Knowledge, Character and Service", // TODO: confirm the college's real motto
  heroSupporting:
    "Empowering students through academic excellence, innovation and meaningful learning.",
  description:
    "H.M. College Pilani is a forward-looking institution dedicated to rigorous scholarship, inclusive learning and the development of principled, capable graduates.",
};

/* --- Navigation ----------------------------------------------------------- */

export interface NavLink {
  label: string;
  /** In-page anchor id (with leading #) or future route. */
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trustees", href: "#trustees" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

/* --- About ---------------------------------------------------------------- */

export const about = {
  heading: "About the College",
  intro:
    "For nearly three decades, H.M. College Pilani has combined academic rigour with a nurturing, values-driven community.",
  paragraphs: [
    "H.M. College Pilani has grown into a recognised centre of learning spanning the sciences, humanities, engineering and professional studies. Our academic programmes are designed to be both intellectually demanding and deeply practical.",
    "We believe education is more than examinations. Through mentorship, research opportunities and community engagement, our students graduate as thoughtful, capable and responsible citizens ready to make a difference.",
  ],
};

/* --- Gallery -------------------------------------------------------------- */

export const galleryIntro =
  "A glimpse of campus life, facilities and community events.";

/**
 * Each gallery photo is one line: a Cloudinary `publicId` and an `alt` caption.
 * To add a photo, upload it to Cloudinary and add a new entry here — that's it.
 * Until a Cloudinary account is configured (see src/lib/cloudinary.ts), each
 * entry is shown as a placeholder, so the gallery always renders.
 */
export interface GalleryItem {
  /** Cloudinary public ID, e.g. "abc-college/gallery/campus-front". */
  publicId: string;
  /** Descriptive alt text (also acts as the caption if enabled). */
  alt: string;
}

export const gallery: GalleryItem[] = [
  { publicId: "abc-college/gallery/campus-front", alt: "College main building and entrance" },
  { publicId: "abc-college/gallery/library", alt: "Central library and study spaces" },
  { publicId: "abc-college/gallery/sports-ground", alt: "Sports and recreation grounds" },
  { publicId: "abc-college/gallery/laboratory", alt: "Modern science laboratory" },
  { publicId: "abc-college/gallery/student-event", alt: "Students at a community event" },
  { publicId: "abc-college/gallery/lecture-hall", alt: "Lecture hall during a class" },
];

/**
 * Local placeholder images used only while Cloudinary is not yet configured.
 * The gallery cycles through these so the layout looks complete during demos.
 */
export const galleryPlaceholders: string[] = [
  "/images/campus-placeholder.svg",
  "/images/mission-placeholder.svg",
];

/* --- Trustees ------------------------------------------------------------- */

export interface Trustee {
  name: string;
  designation: string;
  description: string;
  image: string;
  imageAlt: string;
  profileUrl: string;
}

export const trusteesIntro =
  "Our institution is guided by experienced leaders committed to academic excellence, responsible governance and student development.";

export const trustees: Trustee[] = [
  {
    name: "Dr. Ananya Sharma",
    designation: "Chairperson",
    description:
      "A respected educationist with three decades of experience shaping curricula and championing equitable access to higher education.",
    image: "/images/trustee-1-placeholder.svg",
    imageAlt: "Portrait placeholder of Dr. Ananya Sharma, Chairperson",
    profileUrl: "#",
  },
  {
    name: "Mr. Rajiv Mehta",
    designation: "Managing Trustee",
    description:
      "An administrator focused on sustainable institutional growth, transparent governance and strong industry partnerships.",
    image: "/images/trustee-2-placeholder.svg",
    imageAlt: "Portrait placeholder of Mr. Rajiv Mehta, Managing Trustee",
    profileUrl: "#",
  },
  {
    name: "Dr. Kavita Rao",
    designation: "Academic Trustee",
    description:
      "A scholar and mentor devoted to research excellence, faculty development and a student-centred learning culture.",
    image: "/images/trustee-3-placeholder.svg",
    imageAlt: "Portrait placeholder of Dr. Kavita Rao, Academic Trustee",
    profileUrl: "#",
  },
];

/* --- Mission -------------------------------------------------------------- */

export const mission = {
  heading: "Our Mission",
  image: "/images/mission-placeholder.svg",
  imageAlt:
    "Illustration placeholder of students learning in a library setting",
  paragraph:
    "Our mission is to provide an inclusive and intellectually stimulating environment where students develop knowledge, confidence, creativity and a strong sense of social responsibility.",
};

export interface MissionPillarItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const missionPillars: MissionPillarItem[] = [
  {
    title: "Academic Excellence",
    description:
      "Rigorous, future-ready programmes taught by dedicated and accomplished faculty.",
    icon: GraduationCap,
  },
  {
    title: "Innovation and Research",
    description:
      "A culture of curiosity, discovery and applied research across every discipline.",
    icon: Lightbulb,
  },
  {
    title: "Responsible Citizenship",
    description:
      "Graduates who lead with integrity and contribute meaningfully to society.",
    icon: HeartHandshake,
  },
];

/* --- Footer & contact ----------------------------------------------------- */

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export const contact: ContactDetails = {
  address: "College Road, New Delhi, India",
  phone: "+91 98765 43210",
  email: "info@abccollege.edu",
  hours: "Monday–Saturday, 9:00 AM–5:00 PM",
};

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trustees", href: "#trustees" },
  { label: "Contact", href: "#contact" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Accessibility", href: "#" },
];

export const copyright = `© ${new Date().getFullYear()} H.M. College Pilani. All rights reserved.`;
