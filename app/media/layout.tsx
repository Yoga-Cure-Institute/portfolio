import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Media",
  description:
    "Watch and explore Yoga Cure Institute videos and photographs about yoga therapy, practice and its living heritage.",
};

export default function MediaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
