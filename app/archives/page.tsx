import Image from "next/image";
import { FiSearch, FiArrowRight, FiPlay, FiFileText } from "react-icons/fi";

export const metadata = {
  title: "Yoga Archives",
  description:
    "Browse the Yoga Cure Institute archive of historic teachers, publications, photographs and records of therapeutic yoga.",
};

const archiveItems = [
  {
    type: "IMAGE",
    title: "Sri Bhagabati Charan Ghosh",
    meta: "Image, c. 1920s",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "DOCUMENT",
    title: "Founding Note (1937)",
    meta: "Document",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "IMAGE",
    title: "Sri Buddha Bose",
    meta: "Image, practicing Hatha Yoga",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "DOCUMENT",
    title: "Notes on Yoga Therapy",
    meta: "Document",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "IMAGE",
    title: "Teachers at the Institute",
    meta: "Image, c. 1970s",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "PUBLICATION",
    title: "Yoga Therapy for Healthier Life",
    meta: "Publication",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "VIDEO",
    title: "Message by Shri Shib Nath De",
    meta: "Video",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=700&q=85",
  },
  {
    type: "ARTICLE",
    title: "Continuing the Legacy",
    meta: "Article",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=700&q=85",
  },
];

const filters = [
  "All",
  "Images",
  "Documents",
  "Videos",
  "Publications",
  "Articles",
];

export default function ArchivesPage() {
  return (
    <div className="bg-[#F3EBDD] text-[#292725]">
      {/* HERO */}
      <section className="relative h-[330px] overflow-hidden bg-[#241A15] text-white sm:h-[360px] lg:h-[390px]">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=85"
          alt="Historical books and archival materials"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FF6634]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Archives
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,5vw,4.7rem)] font-normal leading-[0.9] tracking-[-0.03em]">
              Stories from
              <br />
              our journey
            </h1>

            <p className="mt-5 max-w-[450px] text-[11px] leading-[1.7] text-white/70 sm:text-[12px]">
              Preserving the people, teachings, writings and moments that shaped
              the Yoga Cure Institute.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1100px]">
          {/* TOP BAR */}
          <div className="flex flex-col gap-6 border-b border-[#292725]/10 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-[8px] font-bold uppercase tracking-[0.24em] text-[#FF6634]">
                Archive
              </div>

              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-none text-[#5B2C22]">
                Stories from our journey
              </h2>
            </div>

            {/* SEARCH */}
            <div className="flex w-full items-center gap-2 border-b border-[#292725]/20 pb-2 md:w-[180px]">
              <FiSearch size={11} className="shrink-0 text-[#6B3020]" />

              <input
                type="search"
                placeholder="Search archive"
                className="w-full bg-transparent text-[9px] text-[#292725] outline-none placeholder:text-[#9B9388]"
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`text-[8px] transition-colors ${
                  index === 0
                    ? "font-semibold text-[#6B3020]"
                    : "text-[#756E66] hover:text-[#FF6634]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
            {archiveItems.map((item) => (
              <article key={item.title} className="group cursor-pointer">
                {/* IMAGE */}
                <div className="relative aspect-[1.12/1] overflow-hidden bg-[#DED4C3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* TYPE */}
                  <span className="absolute left-2 top-2 bg-[#6B3020] px-2 py-1 text-[6px] font-medium uppercase tracking-[0.12em] text-white">
                    {item.type}
                  </span>

                  {/* VIDEO ICON */}
                  {item.type === "VIDEO" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#6B3020] shadow-sm">
                        <FiPlay
                          size={13}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* CARD INFO */}
                <div className="bg-[#EAE0CD] px-3 py-3.5">
                  <h3 className="font-display text-[12px] leading-[1.15] text-[#4D3027] sm:text-[13px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[7px] leading-[1.4] text-[#756E66] sm:text-[8px]">
                    {item.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              className="text-[8px] font-medium text-[#6B3020]"
            >
              1
            </button>

            <button
              type="button"
              className="text-[8px] text-[#8B837A] transition-colors hover:text-[#6B3020]"
            >
              2
            </button>

            <button
              type="button"
              className="text-[8px] text-[#8B837A] transition-colors hover:text-[#6B3020]"
            >
              3
            </button>

            <button
              type="button"
              aria-label="Next page"
              className="text-[#6B3020] transition-transform hover:translate-x-1"
            >
              <FiArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
