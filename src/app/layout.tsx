import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Professional serif for headings, highly readable sans for body text.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H.M. College Pilani | Knowledge, Character and Service",
  description:
    "Discover academic programmes, institutional leadership and the mission of H.M. College Pilani.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "H.M. College Pilani | Knowledge, Character and Service",
    description:
      "Discover academic programmes, institutional leadership and the mission of H.M. College Pilani.",
    type: "website",
    siteName: "H.M. College Pilani",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
