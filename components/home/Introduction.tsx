import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-(--cream)">
      <div className="mx-auto grid w-[calc(100%-24px)] max-w-[1400px] grid-cols-1 gap-10 px-1 py-14 sm:w-[calc(100%-32px)] sm:gap-12 sm:py-16 md:px-2 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-4 lg:py-24">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-5 w-1 bg-[#FF6634]" />

            <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#FF6634]">
              About Us
            </span>
          </div>

          <h2 className="max-w-[560px] font-display text-[clamp(2.6rem,7vw,4.7rem)] font-normal leading-[0.98] tracking-tight text-[#2B2927]">
            A practice rooted in
            <br className="hidden sm:block" />
            tradition.
          </h2>

          <p className="mt-7 max-w-[560px] text-[13px] leading-[1.75] text-[#55504B] sm:text-[15px] md:text-[16px]">
            Yoga Cure Institute is a space for sincere seekers - where the
            ancient wisdom of yoga stays with its truest authenticity. We work
            to make yoga accessible and authentic, transforming, empowering
            individuals to live a more conscious and healthy life.
          </p>

          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6634]"
          >
            <span className="h-0.5 w-7 bg-[#FF6634] transition-all duration-300 group-hover:w-10" />

            <span className="text-[14px]">Our Work</span>

            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <blockquote className="max-w-150">
            <p className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal italic leading-[1.08] tracking-[-0.02em] text-[#5B5651]">
              “Yoga is not just what you
              do on the mat, but how you
              breathe in the world.”
            </p>

            <div className="mt-7 h-0.5 w-10 bg-[#FF6634]" />

            <footer className="mt-5 text-[14px] font-bold uppercase tracking-[0.14em] text-[#514C47]">
              A healthier humanity through yoga
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
