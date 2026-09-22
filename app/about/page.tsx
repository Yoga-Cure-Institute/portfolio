import Image from "next/image";
import { FiCompass, FiUsers, FiActivity, FiSun } from "react-icons/fi";

const principles = [
  {
    icon: FiCompass,
    title: "ANCIENT WISDOM",
    text: "Rooted in India's timeless yogic tradition",
  },
  {
    icon: FiUsers,
    title: "AUTHENTIC TEACHERS",
    text: "Guided by realized souls and their lineage",
  },
  {
    icon: FiActivity,
    title: "INDIVIDUAL CARE",
    text: "Tailor-made Yoga therapy for every individual",
  },
  {
    icon: FiSun,
    title: "LASTING IMPACT",
    text: "A healthier, more conscious world",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-(--paper) text-(--ink)">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#161616] text-white sm:h-[360px] lg:h-[390px]">
        <Image
          src="/images/about/about-hero.png"
          alt="Yoga practice in a traditional setting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[520px] pt-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-4 bg-(--orange)" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Our Work
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.9] tracking-[-0.025em]">
              Healing Through
              <br />
              an Eternal Science
            </h1>

            <p className="mt-5 leading-relaxed text-white/65">
              A legacy of Yoga. A commitment to humanity.
            </p>
          </div>

          {/* Right vertical statement */}
          <div className="absolute right-0 bottom-15 hidden lg:block">
            <div className="flex items-start gap-3">
              <p className="text-[14px] font-medium uppercase leading-[1.8] tracking-[0.22em] text-white/65">
                Tradition
                <br />
                Practice
                <br />
                Compassion
                <br />
                Continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-[1400px] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Section label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-5 w-[2px] bg-(--orange)" />

            <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-(--orange)">
              About Us
            </span>
          </div>

          {/* Editorial content */}
          <div className="grid gap-10 lg:grid-cols-[1fr_410px] lg:gap-20 xl:grid-cols-[1fr_430px]">
            {/* Text */}
            <div className="max-w-[700px]">
              <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
                A Vision for a Healthier
                <br className="hidden sm:block" />
                Humanity
              </h2>

              <div className="mt-7 max-w-[650px] space-y-5 text-[14px] leading-[1.75] text-(--ink) sm:text-[16px]">
                <p>
                  From ancient times India has enunciated that All life is Yoga.
                  Over generations saints from this great land have imparted the
                  knowledge of Yoga in various forms. The idea of developing a
                  methodology for cure using Yoga was moulded by Sri Bhagabati
                  Charan Ghosh to Sri Buddha Bose. Bhagabati Charan Ghosh, a
                  disciple of Yogavatar Sri Sri Shyamacharan Lahiri and father
                  of Sri Bishnu Charan Ghosh and Paramhansa Yogananda, was
                  himself an advanced Kriya Yogi. Taught the tenets of Hathayoga
                  by Sri Bishnu Charan Ghosh and initiated into the realm of
                  self-realization through Kriya Yoga by Paramhansa Yogananda,
                  Buddha Bose developed and refined this technique of therapy to
                  a methodology that had far reaching effects.
                </p>

                <p>
                  He formed the Yoga Cure Institute in 1937 and it runs today
                  based on his ideals and methods by Shri Satya Nath De. A
                  branch of the house been under his guidance for several years.
                  Only those persons who have mastered the techniques of Hatha
                  Yoga and have advanced to a certain stage in self-realization
                  are capable of properly imparting this training, which needs
                  to be tailor-made to each and every individual. Both Rooma De
                  and Shibnath De have been blessed by Saint Maa Sharbani and
                  initiated by her in the ancient science of Kriya Yoga. They
                  are among the very few authentic teachers capable of imparting
                  this therapeutic form of yoga training in the world today.
                </p>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex items-center">
              <div className="bg-[#C3A77F] p-2 sm:p-2.5 lg:p-3">
                <div className="relative aspect-[0.82/1] w-[260px] overflow-hidden sm:w-[300px] lg:w-[350px]">
                  <Image
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=85"
                    alt="Portrait representing the heritage of Yoga"
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 350px"
                    className="object-cover grayscale"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--gold)/20 text-(--brown)">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#292725]">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-[200px] text-[14px] leading-[1.45] text-[#6A655F]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
