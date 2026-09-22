import Image from "next/image";
import Link from "next/link";
import {
  FiUser,
  FiEdit3,
  FiHeart,
  FiSun,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: "♂",
    title: "Yoga Cure - Gents",
    description:
      "We at Yoga Cure Institute offer Yoga therapy to gents in a very polite and calm atmosphere. We have various gents individuals who are undergoing Yoga Therapy on a regular basis and have gained, and are still gaining, in all respects ranging from health to the curing of several health-related problems. We at our institute maintain a very warm, disciplined and cordial atmosphere which enables our gents to focus and concentrate on their Yoga.",
  },
  {
    icon: "♀",
    title: "Yoga Cure - Ladies",
    description:
      "We at Yoga Cure Institute offer Yoga therapy to Ladies/Women in a very polite and calm atmosphere. We have various Ladies/Women individuals who are undergoing Yoga Therapy on a regular basis and have gained, and are still gaining, in all respects ranging from health to the curing of several health-related problems. We at our institute maintain a very warm, disciplined and cordial atmosphere which enables our Ladies/Women to focus and concentrate on their Yoga.",
  },
];

const approach = [
  {
    icon: FiUser,
    title: "Understand",
    description: "We listen to your needs and assess your goals.",
  },
  {
    icon: FiEdit3,
    title: "Customize",
    description: "A tailored yoga plan for your body and mind.",
  },
  {
    icon: FiHeart,
    title: "Guide",
    description: "Learn from experienced and authentic teachers.",
  },
  {
    icon: FiSun,
    title: "Transform",
    description: "Experience a healthier, happier and more conscious life.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-(--cream) text-(--ink)">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#241913] text-white sm:h-[360px] lg:h-[390px]">
        <Image
          src="/images/services/services-hero.png"
          alt="Yoga practice in a peaceful traditional setting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[520px] pt-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-4 bg-(--orange)" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Our Services
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.9] tracking-[-0.025em]">
              Yoga Therapy for
              Every Individual
            </h1>

            <p className="mt-5 max-w-[330px] leading-relaxed text-white/65">
              Traditional wisdom. Personal Care.
              <br />
              Lasting well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="mx-auto max-w-[1400px] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-5 w-[2px] bg-(--orange)" />

            <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-(--orange)">
              What We Offer
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
            Our Services
          </h2>

          <p className="mt-7 max-w-[780px] text-[14px] leading-[1.75] text-[#69625A] sm:text-[16px]">
            At Yoga Cure Institute, we offer two dedicated therapeutic programs,
            one for gents and one for ladies, each conducted in a warm,
            disciplined and cordial atmosphere that helps every individual focus
            and progress in their practice.
          </p>

          {/* SERVICE CARDS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#FCF9F2] px-7 py-8 sm:px-9 sm:py-9"
              >
                <div className="mb-5 flex h-7 items-center text-[24px] font-normal text-(--orange)">
                  {service.icon}
                </div>

                <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none tracking-[-0.02em]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[14px] leading-[1.75] text-[#69625A] sm:text-[16px]">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.15em] text-[#6B3020]"
                >
                  Enquire Now
                  <FiArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-(--paper) py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <div className="mb-4 text-[14px] font-bold uppercase tracking-[0.22em] text-(--orange)">
              Our Approach
            </div>

            <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              A Path Tailored to You
            </h2>

            <p className="mt-4 text-[14px] leading-[1.75] text-[#696D5A] sm:text-[16px]">
              Every individual is unique. Our programs are designed with careful
              guidance, compassion and deep understanding.
            </p>
          </div>

          {/* APPROACH STEPS */}
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {index < approach.length - 1 && (
                    <span className="absolute right-[-18px] top-5 hidden text-(--orange) lg:block">
                      <FiArrowRight size={24} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F7EE] text-(--brown)">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-normal leading-none tracking-[-0.02em] text-(--brown)">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[200px] text-[14px] leading-[1.45] text-[#696D5A]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE + CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1000px] items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* QUOTE */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Lotus */}
            <div className="mb-5 text-[#FF6634]">
              <Image src="/lotus-yci.svg" alt="Lotus" width={150} height={55} />
            </div>

            <blockquote className="max-w-[300px] font-display text-3xl italic leading-[1.25] text-[#4D3025]">
              “Yoga is not just a practice, it is a way of living.”
            </blockquote>

            <div className="mt-5 h-[1px] w-7 bg-[#FF6634]" />

            <p className="mt-4 text-xl font-bold uppercase tracking-[0.22em] text-[#8A6A58]">
              Yoga Cure Institute
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#5C2D1B] px-8 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-md font-bold uppercase tracking-[0.25em] text-white/65">
              Begin Your Journey
            </p>

            <h2 className="mt-4 max-w-[280px] font-display text-3xl leading-[1.05]">
              Take the First
              <br />
              Step Towards a
              <br />
              Better You
            </h2>

            <p className="mt-5 text-lg leading-[1.7] text-white/65">
              Connect with us to learn more about our Gents and Ladies Yoga
              Therapy programs and find the right fit for you.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-3 border border-white/20 px-4 py-2.5 text-md font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#FF6634] hover:bg-[#FF6634]"
            >
              Enquire Now
              <FiArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
