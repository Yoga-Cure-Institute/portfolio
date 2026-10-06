import type { Metadata } from "next";
import Image from "next/image";
import {
  FiArrowDown,
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiSun,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Yoga Heritage and Lineage",
  description:
    "Explore the people and teachings behind Yoga Cure Institute, from its founding in 1937 to its continuing therapeutic yoga tradition.",
};

const lineage = [
  {
    number: "01",
    name: "SRI BHAGABATI CHARAN GHOSH",
    image: "/images/heritage/bhagabati-charan-ghosh.jpg",
    description:
      "The great liberation perfecter, his sacred yogic life stimulated the new technique of yoga therapy involving latent hastayoga.",
  },
  {
    number: "02",
    name: "SRI BISHNU CHARAN GHOSH",
    image: "/images/heritage/bishnu-charan-ghosh.jpg",
    description:
      "Under the tutelage of Yogavatar, was the disciple of Mahamuni Babaji Maharaj who himself was the author of a large number of yogik text books and was said to give a large number of yogis and brahmacharis.",
  },
  {
    number: "03",
    name: "BUDDHA BOSE",
    image: "/images/heritage/buddha-bose.jpg",
    description:
      "At the age of sixteen he learnt Hatha yoga under Swami Kuvalananda. Within a short while young Buddha Bose made such rapid progress that Bishnu Charan Ghosh took him under his tutelage and within six months was asked to give a demonstration of Yoga postures in front of a large audience in Calcutta. Thereafter he was invited to give exhibitions of Yoga postures in India, Burma and America at the Columbia University, New York accompanying his Hatha Yoga Guru.",
  },
  {
    number: "04",
    name: "ROOMA DE",
    image: "/images/heritage/rooma-de.jpg",
    description:
      "Rooma De, was the Chief Yoga Therapist of the Institute and renowned contributor to leading dailies and periodicals on Yoga. She was trained in Hatha Yoga by her mother's father Yogindra Bishnu Charan Ghosh personally. Under his guidance she attained perfection in postures, simple and advance, to give many spellbounding demonstrations of Yoga Postures and Yoga feasts in India and Japan.",
  },
  {
    number: "05",
    name: "AVRAKESH DE",
    image: "/images/heritage/avrakesh-de.jpg",
    description:
      "Avrakesh De has continued the work of the Institute with dedication to authentic Yoga practice and the preservation of its therapeutic tradition. His work remains connected to the lineage, discipline and teachings passed through generations.",
  },
];

const principles = [
  {
    icon: FiUsers,
    title: "People",
  },
  {
    icon: FiHeart,
    title: "Practice",
  },
  {
    icon: FiSun,
    title: "Purpose",
  },
  {
    icon: FiBookOpen,
    title: "Legacy",
  },
];

export default function HeritagePage() {
  return (
    <div className="bg-[#F3EBDD] text-[#292725]">
      {/* HERO */}
      <section className="relative h-[400px] overflow-hidden bg-[#241A15] text-white sm:h-[440px] lg:h-[500px]">
        <Image
          src="/images/heritage/heritage-hero.png"
          alt="Historic Indian temple corridor representing the heritage of Yoga"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[590px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Our Heritage
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,6vw,5.7rem)] font-normal leading-[0.87] tracking-[-0.035em]">
              A Timeless
              <br />
              Lineage
            </h1>

            <p className="mt-7 max-w-[500px] text-16px] leading-[1.75] text-white/75 sm:text-[16px]">
              Guided by realized souls. Rooted in tradition. Living for a
              healthier humanity.
            </p>
          </div>
        </div>
      </section>

      {/* LINEAGE INTRO */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                The Lineage
              </span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.15fr_150px] lg:items-center lg:gap-16">
            <h2 className="font-display text-[clamp(2.8rem,4.5vw,4.5rem)] font-normal leading-[0.93] tracking-[-0.025em] text-[#5B2C22]">
              The Guiding
              <br />
              Lights
              <br />
              of Yoga Cure
              <br />
              Institute
            </h2>

            <p className="max-w-[560px] text-16px] leading-[1.75] text-[#5D5954] sm:text-[16px]">
              Yoga Cure Institute is built on the vision, practice and blessings
              of an extraordinary lineage of teachers. Their lives and work
              continue to inspire our mission to use Yoga as a means for
              healing, self-realization and a healthier, more conscious world.
            </p>

            <div className="hidden border-l border-[#FF6634] py-5 pl-8 lg:block">
              {/* <div className="mb-5 text-[#C9831D]">
                <svg
                  width="62"
                  height="50"
                  viewBox="0 0 100 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M50 67C40 53 41 37 50 21C59 37 60 53 50 67Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 67C28 62 18 50 16 34C31 36 43 47 50 67Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 67C72 62 82 50 84 34C69 36 57 47 50 67Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M50 67V18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div> */}

              <Image
                src="/lotus-yci.svg"
                alt="Heritage Principles"
                width={150}
                height={150}
              />

              <div className="flex flex-col gap-4 text-[12px] items-center font-medium uppercase tracking-[0.22em] text-[#6B3020]">
                {principles.map((item) => (
                  <div key={item.title}>{item.title}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINEAGE TIMELINE */}
      <section className="px-5 pb-20 sm:px-8 md:px-10 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-[1250px]">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-[25px] top-0 hidden w-px bg-[#8A4530]/35 md:block" />

            <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
              {lineage.map((person) => (
                <article
                  key={person.number}
                  className="relative grid gap-7 md:grid-cols-[100px_240px_1fr] md:items-center md:gap-8 lg:grid-cols-[100px_245px_1fr] lg:gap-8"
                >
                  {/* Number */}
                  <div className="relative hidden h-full md:block">
                    <div className="absolute left-[3px] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#6B3020] text-[12px] text-white">
                      {person.number}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="border-[9px] border-[#B47B25] bg-[#B47B25]">
                      <div className="relative aspect-square overflow-hidden bg-[#CFC2AE]">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          sizes="245px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute left-[-6px] top-[-6px] flex h-9 w-9 items-center justify-center rounded-full bg-[#6B3020] text-[12px] text-white md:hidden">
                      {person.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:pl-1">
                    <h3 className="font-display text-[19px] font-semibold leading-tight text-[#6B3020] sm:text-[21px]">
                      {person.name}
                    </h3>

                    <div className="mt-3 h-[2px] w-8 bg-[#FF6634]" />

                    <p className="mt-4 max-w-[760px] text-16px] leading-[1.75] text-[#5D5954] sm:text-[16px]">
                      {person.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#EBC4A8] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="relative mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <div className="mb-5 text-[#C77D17]">
            <Image
              src="/lotus-yci.svg"
              alt="Heritage Principles"
              width={150}
              height={150}
            />
          </div>

          <p className="font-display text-[clamp(1.8rem,3vw,2.7rem)] italic leading-tight text-[#6B3020]">
            “A living tradition, guiding a healthier tomorrow.”
          </p>

          <div className="mt-5 h-px w-9 bg-[#FF6634]" />

          <p className="mt-5 text-16px] font-medium uppercase tracking-[0.22em] text-[#6B3020]">
            Yoga Cure Institute
          </p>
        </div>
      </section>
    </div>
  );
}
