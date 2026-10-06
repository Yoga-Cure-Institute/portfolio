import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.yogacureinstitute.com",
);

const siteName = "Yoga Cure Institute";
const defaultImage = "/images/home/home-hero.jpg";

export function createPageMetadata(
  title: string,
  description: string,
  image = defaultImage,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: "./",
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: "./",
      siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
  };
}
