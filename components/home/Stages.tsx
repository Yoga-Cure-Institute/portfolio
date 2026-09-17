import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const stages = [
  {
    number: "01",
    title: "Yoga Cure -- Gents",
    description:
      "Traditional system of yoga practice for specific health conditions, general fitness and core strength training.",
    image:
      "https://images.unsplash.com/photo-1640117227173-b6970c105b1e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "02",
    title: "Yoga Cure -- Ladies",
    description:
      "Customized system of yoga practice for hormonal, respiratory and other health conditions.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Stages() {
  return (
    <section className="relative overflow-hidden bg-(--paper)">
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] py-14 sm:w-[calc(100%-32px)] sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-5 w-[3px] bg-[var(--orange)]" />

              <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[var(--orange)]">
                Our Services
              </span>
            </div>

            <h2 className="max-w-[720px] font-display text-[clamp(2.5rem,6vw,4.4rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[#292725]">
              Support for every stage of your journey.
            </h2>
          </div>

          <Link
            href="/services"
            className="group flex shrink-0 items-center gap-3 self-start text-[14px] font-bold uppercase tracking-[0.12em] text-[var(--orange)] md:self-end md:pb-2"
          >
            <span>View All Services</span>

            <FiArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45"
            />
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-[910px] gap-7 sm:mt-12 md:grid-cols-2 md:gap-7">
          {stages.map((stage) => (
            <Link key={stage.number} href="/services" className="group block">
              <div className="relative aspect-[1.55/1] overflow-hidden bg-black">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 455px"
                  quality={85}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-4 grid grid-cols-[48px_1fr] gap-3 sm:grid-cols-[52px_1fr]">
                <span className="pt-1 font-display text-lg leading-none text-[var(--orange)]">
                  {stage.number}
                </span>

                <div>
                  <h3 className="font-display text-[22px] leading-none text-[#292725] sm:text-[24px]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-[340px] text-[12px] leading-[1.75] text-[#5D5954] sm:text-[13px]">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
