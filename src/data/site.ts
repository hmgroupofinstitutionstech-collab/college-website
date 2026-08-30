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
  Briefcase,
  HeartPulse,
  Stethoscope,
  Plus,
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
  { label: "Courses", href: "#courses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trustees", href: "#trustees" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

/* --- About ---------------------------------------------------------------- */

export const about = {
  heading: "About the College",
  intro:
    "H.M. College Pilani is founded on a simple but powerful belief — that education is the surest path out of poverty and the strongest foundation for a fair and compassionate society.",
  paragraphs: [
    "Our vision is to revolutionise access to quality education for the underprivileged. We are committed to opening the doors of higher learning to students who have long been left behind, so that talent and determination — not financial means — decide how far a student can go.",
    "Beyond the classroom, the institution is driven by a deep commitment to social service. Through affordable, career-focused programmes, community outreach and support for healthcare and welfare, H.M. College Pilani aims to uplift families and transform lives across the region.",
  ],
};

/* --- Courses -------------------------------------------------------------- */

export const coursesIntro =
  "Our academic programmes are launching soon. Here is a glimpse of what's on the way.";

export interface Course {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Show a "Coming Soon" badge and mark the programme as not yet open. */
  comingSoon: boolean;
}

export const courses: Course[] = [
  {
    title: "BMS",
    description: "Bachelor of Medical Sciences",
    icon: Briefcase,
    comingSoon: true,
  },
  {
    title: "B.Sc Nursing",
    description: "Bachelor of Science in Nursing",
    icon: HeartPulse,
    comingSoon: true,
  },
  {
    title: "GNM",
    description: "General Nursing & Midwifery",
    icon: Stethoscope,
    comingSoon: true,
  },
  {
    title: "Other Paramedical Courses",
    description: "A range of allied health and paramedical programmes",
    icon: Plus,
    comingSoon: true,
  },
];

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
  "Our institution is guided by a visionary leader committed to academic excellence, responsible governance and lasting social impact.";

export const trustees: Trustee[] = [
  {
    name: "Dr. Harish Kumar",
    designation: "Chairman & Managing Trustee",
    description:
      "Dr. Harish Kumar is one of Gurugram's foremost business leaders and a practising advocate. Alongside a distinguished career in enterprise and law, he is guided by a singular conviction — that quality healthcare and education must reach the poorest and most underserved in society. H.M. College Pilani is a reflection of that vision: an institution built to make meaningful education accessible to every deserving student, and to serve the wider community with compassion and integrity.",
    image: "/images/trustee-harish-kumar.jpg",
    imageAlt: "Portrait of Dr. Harish Kumar, Chairman & Managing Trustee",
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
  phone: "+91 99288 89308",
  email: "info@abccollege.edu",
  hours: "Monday–Saturday, 9:00 AM–5:00 PM",
};

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
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
