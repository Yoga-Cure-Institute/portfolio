import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Stages from "@/components/home/Stages";
import HeritagePreview from "@/components/home/HeritagePreview";
import Closing from "@/components/home/Closing";

export const metadata: Metadata = {
  title: "Therapeutic Yoga in Kolkata",
  description:
    "Discover authentic therapeutic yoga, personal guidance and a living yogic tradition at Yoga Cure Institute in New Alipore, Kolkata.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Stages />
      <HeritagePreview />
      <Closing />
    </>
  );
}
