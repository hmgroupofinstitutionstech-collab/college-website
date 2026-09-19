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
  Leaf,
  Flower2,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Syringe,
  Pill,
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
    "H.M. College Pilani is part of the H.M. Group of Institutions, run by the Maa Sheetla Education Society. Established in 2022, the college is built on a simple but powerful belief — that quality education should reach everyone, especially the underprivileged.",
  paragraphs: [
    "The Maa Sheetla Education Society was founded with a clear vision: to open the doors of quality education to the underprivileged, and to give every deserving student — regardless of background or means — a genuine path to a better future.",
    "As part of the H.M. Group of Institutions, H.M. College Pilani carries that vision forward. We combine affordable, career-focused programmes with a deep commitment to social service, working to uplift families and transform lives across the region.",
    "With a growing range of programmes in ayurvedic medicine, nursing and allied health sciences, the college is dedicated to nurturing skilled and compassionate professionals who go on to strengthen healthcare in their own communities. Supported by modern facilities, dedicated faculty and a values-driven environment, our students gain not only knowledge, but the confidence and character to lead.",
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
    title: "BAMS",
    description: "Bachelor of Ayurvedic Medicine & Surgery",
    icon: Leaf,
    comingSoon: true,
  },
  {
    title: "BANYS",
    description: "Bachelor of Naturopathy & Yogic Sciences",
    icon: Flower2,
    comingSoon: true,
  },
  {
    title: "DANP",
    description: "Diploma in Ayurvedic Nursing & Pharmacy",
    icon: Pill,
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
    title: "DMLT",
    description: "Diploma in Medical Laboratory Technology",
    icon: FlaskConical,
    comingSoon: true,
  },
  {
    title: "DRT",
    description: "Diploma in Radiography Technology",
    icon: ScanLine,
    comingSoon: true,
  },
  {
    title: "DOT",
    description: "Diploma in Operation Theatre Technology",
    icon: Syringe,
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
 * The gallery is organised into sections by Cloudinary tag.
 *
 * Every photo carries the main tag (`hmcollege`). A photo that ALSO carries one
 * of the category tags below appears in that named section; a photo with only
 * the main tag falls into the general "Campus" section (see `galleryCampus`).
 *
 * To add a new section: create a tag in Cloudinary, tag the relevant photos,
 * and add one entry here — no other code change needed.
 */
export interface GalleryCategory {
  /** Cloudinary tag applied to this category's photos (alongside `hmcollege`). */
  tag: string;
  title: string;
  description: string;
}

export const galleryCategories: GalleryCategory[] = [
  {
    tag: "library",
    title: "Library",
    description:
      "A calm, well-stocked space for study and research. Our library gives students access to a growing collection of books, journals and digital resources in a focused, welcoming environment.",
  },
  {
    tag: "anatomylab",
    title: "Anatomy Lab",
    description:
      "Our anatomy laboratory offers students hands-on exposure to human anatomy through specimens, models and guided study — a vital foundation for our medical, nursing and paramedical programmes.",
  },
  {
    tag: "Panchakarma",
    title: "Panchakarma Department",
    description:
      "Our Panchakarma department provides authentic Ayurvedic detoxification and rejuvenation therapies. Here students gain practical, supervised training in traditional healing practices, learning time-honoured techniques that sit at the heart of Ayurvedic care.",
  },
];

/** Photos with only the main tag (no category tag) are shown here. */
export const galleryCampus = {
  title: "Campus",
  description:
    "A walk around H.M. College Pilani — our grounds, buildings, facilities and the everyday life that makes up our community.",
};

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
  "Our institution is guided by dedicated leaders committed to academic excellence, responsible governance and lasting social impact.";

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
  {
    name: "Sh. Mange Ram",
    designation: "Director",
    description:
      "Sh. Mange Ram is a dedicated social worker from Haryana with a lifelong commitment to community welfare. He has organised numerous blood donation camps and grassroots initiatives, rallying people around the cause of saving lives. Guided by the spirit of seva — selfless service to society — his vision is to see education and healthcare reach every family in need. As Director of the institution, he brings that same compassion and drive to H.M. College Pilani, championing the college's role as a force for social good.",
    image: "/images/trustee-mange-ram.jpg",
    imageAlt: "Portrait of Sh. Mange Ram, Director",
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
