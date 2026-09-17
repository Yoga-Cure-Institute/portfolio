import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#161616] text-white">
      {/* Background Image */}
      <Image
        src="/images/home/yci-hero.png"
        alt="Meditation beside a peaceful riverside temple"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[560px] w-[calc(100%-24px)] max-w-[1400px] items-end px-1 py-12 sm:w-[calc(100%-32px)] sm:px-2 md:py-16 lg:min-h-[660px] lg:py-20">
        <div className="max-w-[680px]">
          <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.88] tracking-[-0.035em]">
            <span className="text-(--orange)">Yoga</span> is a practice
            <br />
            of returning to
            <br />
            <span className="italic text-(--orange)">yourself.</span>
          </h1>

          <p className="mt-5 max-w-[540px] text-sm leading-[1.8] text-white/90 sm:text-base md:text-lg">
            Rooted in tradition. Relevant for today. A healthier,
            <br className="hidden sm:block" />
            calmer, more conscious you is possible.
          </p>

          <div className="mt-5 h-0.5 w-11 bg-(--orange)" />

          <div className="mt-5">
            <Link
              href="/services"
              className="group inline-flex items-center rounded-md gap-3 bg-(--orange) px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-(--orange)/90 hover:text-[#161616] sm:px-5 sm:text-[12px] md:text-[13px]"
            >
              Explore Our Work
              <FiArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45"
              />
            </Link>
          </div>

          <div className="mt-6 sm:mt-7">
            <p className="font-display italic text-[20px] leading-none tracking-wide text-white sm:text-[24px] md:text-2xl">
              ॥ योगश्चित्तवृत्तिनिरोधः ॥
            </p>

            <p className="mt-4 font-display text-[14px] italic text-white/85 sm:text-[15px] md:text-[20px]">
              Yoga is the base for Meditation.
            </p>

            <p className="mt-1 text-[14px] italic tracking-wide text-white/75 sm:text-[16px] md:text-[18px]">
              — Paramhansa Yogananda
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-white/55 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.18em]">
          Scroll to explore
        </span>

        <span className="h-10 w-px bg-white/30" />
      </div>
    </section>
  );
}
