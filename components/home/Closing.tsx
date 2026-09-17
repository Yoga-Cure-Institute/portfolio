import Image from "next/image";

export default function Closing() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-[#161616] text-white sm:h-[460px] md:h-[500px]">
      <Image
        src="/images/home/closing.png"
        alt="Yoga practice in a peaceful traditional setting"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/30" />

      <div className="relative mx-auto flex flex-col md:flex-row h-full w-[calc(100%-24px)] max-w-[1400px] items-center justify-center gap-6 px-1 py-10 sm:w-[calc(100%-32px)] sm:px-2 md:items-center md:px-0 md:py-0">
        <div className="max-w-[560px] md:max-w-[760px]">
          <p className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal italic leading-[1.05] tracking-[-0.02em] text-white">
            “Health is a state of harmony within and around.”
          </p>
        </div>

        <div className="flex items-center gap-4 md:gap-7">
          <span className="h-[2px] w-8 bg-[var(--orange)] md:w-10" />

          <div>
            <p className="text-[11px] font-bold uppercase leading-[1.4] tracking-[0.14em] text-white sm:text-[12px] md:text-[14px]">
              Through Yoga A Kinder,<br/> Calmer World
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
