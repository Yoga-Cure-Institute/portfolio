import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeritagePreview() {
  return (
    <section className="relative overflow-hidden bg-(--brown)">
      <div className="mx-auto grid min-h-[450px] w-[calc(100%-24px)] max-w-[1400px] items-center gap-10 px-1 py-14 sm:w-[calc(100%-32px)] sm:gap-12 sm:px-2 sm:py-16 md:px-4 lg:grid-cols-[1fr_auto] lg:gap-0 lg:px-4 lg:py-20">
        <div className="max-w-[620px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-5 w-[3px] bg-[var(--orange)]" />

            <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[var(--orange)]">
              Our Heritage
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.7rem,6vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.025em] text-white">
            Carrying forward a
            <br className="hidden sm:block" />
            living tradition.
          </h2>

          <p className="mt-7 max-w-[560px] text-[13px] leading-[1.75] text-white/75 sm:text-[14px]">
            Our work is inspired by one of the oldest and rich lineage of yoga
            in India - its teachers, scriptures and timeless wisdom. We honor
            this heritage by keeping the practice authentic, traditional and
            relevant for contemporary lives.
          </p>

          <Link
            href="/heritage"
            className="group mt-6 inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[var(--orange)]"
          >
            <span>Explore Our Heritage</span>

            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45"
            />
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:flex-row sm:items-stretch">
            <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] sm:w-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"
                alt="Portrait representing the heritage of yoga"
                fill
                sizes="(max-width: 640px) 100vw, 200px"
                quality={100}
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex h-[220px] w-full flex-col justify-center bg-[#F3EBDD] px-6 text-[#3C2926] sm:h-[240px] sm:w-[200px] sm:px-7">
              <p className="font-display text-[24px] italic leading-[1.05] tracking-[-0.015em] sm:text-[26px]">
                “Tradition is a fire, not an ash.”
              </p>

              <div className="mt-6 h-[2px] w-9 bg-[var(--orange)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
