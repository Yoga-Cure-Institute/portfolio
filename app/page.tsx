import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Stages from "@/components/home/Stages";
import HeritagePreview from "@/components/home/HeritagePreview";
import Closing from "@/components/home/Closing";

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
