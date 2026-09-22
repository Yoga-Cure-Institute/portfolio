import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Address",
    content: (
      <>
        Yoga Cure Institute
        <br />
        P-43B, Block H,
        <br />
        New Alipore,
        <br />
        Kolkata 700053
        <br />
        West Bengal, India.
      </>
    ),
  },
  {
    icon: FiPhone,
    label: "Phone",
    content: (
      <>
        033-40034859
        <br />
        +91 9830966003
      </>
    ),
  },
  {
    icon: FiMail,
    label: "Email",
    content: <>yogacureinstitute1937@gmail.com</>,
  },
  {
    icon: FiClock,
    label: "Visiting Hours",
    content: (
      <>
        Mon - Sat: 6:00 AM - 8:00 AM
        <br/>
        Mon - Sat: 4:30 PM - 7:30 PM
        <br />
        (Sunday is our weekly closure)
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F3EBDD] text-[#292725]">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#161616] text-white sm:h-[360px] lg:h-[390px]">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=85"
          alt="Peaceful meditation setting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[520px] pt-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#FF6634]" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Get In Touch
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.9] tracking-[-0.025em]">
              Let&apos;s Begin a
              <br />
              Conversation
            </h1>

            <p className="mt-5 max-w-[450px] leading-[1.7] text-white/70">
              Have a question about our work, yoga therapy, or our programs?
              Reach out to us. We&apos;re here to listen, guide you,
              and help you find the right path for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="mx-auto max-w-[1400px] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[500px_1fr] lg:gap-20">
          {/* DETAILS */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Our Details
              </span>
            </div>

            <p className="max-w-[300px] text-[14px] leading-[1.75] text-[#605A54]">
              Visit us, call us, or drop a message. We welcome your inquiries
              and look forward to being a part of your wellness journey.
            </p>

            <div className="mt-7 flex flex-col gap-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6B3020] text-white">
                      <Icon size={14} strokeWidth={1.7} />
                    </div>

                    <div>
                      <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#6B3020]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-[14px] leading-[1.55] text-[#605A54]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FORM */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Send A Message
              </span>
            </div>

            <p className="mb-7 text-[14px] leading-relaxed text-[#605A54]">
              Fill out the form below and we will get back to you shortly.
            </p>

            <form className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="border-b border-[#292725]/20">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full bg-transparent pb-3 text-[14px] text-[#292725] outline-none placeholder:text-[#999188] focus:border-[#6B3020]"
                  />
                </div>

                <div className="border-b border-[#292725]/20">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full bg-transparent pb-3 text-[14px] text-[#292725] outline-none placeholder:text-[#999188]"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div className="border-b border-[#292725]/20">
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent pb-3 text-[14px] text-[#292725] outline-none placeholder:text-[#999188]"
                  />
                </div>

                <div className="border-b border-[#292725]/20">
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-transparent pb-3 text-[14px] text-[#292725] outline-none placeholder:text-[#999188]"
                  />
                </div>
              </div>

              <div className="border-b border-[#292725]/20">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Your Message *"
                  required
                  className="w-full resize-none bg-transparent pb-3 text-[14px] text-[#292725] outline-none placeholder:text-[#999188]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  className="h-3 w-3 accent-[#6B3020]"
                />

                <label htmlFor="consent" className="text-[14px] text-[#716A62]">
                  I agree to be contacted by Yoga Cure Institute.
                </label>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#6B3020] px-5 py-3 text-[14px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#FF6634]"
              >
                Send Message
                <FiArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP + QUOTE */}
      <section className="bg-[#E9E0CF] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14">
        <div className="mx-auto grid max-w-[1250px] items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* MAP */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#FF6634]">
                Find Us
              </span>
            </div>

            <p className="mb-4 text-[#6B655E]">
              Locate us on the map and plan your visit.
            </p>

            <div className="relative h-[270px] overflow-hidden bg-[#D6D0C4] sm:h-[300px]">
              <iframe
                title="Yoga Cure Institute location"
                src="https://www.google.com/maps?q=Yoga+Cure+Institute,+P-43B,+Block+H,+New+Alipore,+Kolkata+700053&output=embed"
                className="h-full w-full border-0 grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://www.google.com/maps/search/?api=1&query=Yoga+Cure+Institute+New+Alipore+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white px-3 py-2 text-[14px] font-semibold text-[#292725] shadow-sm transition-colors hover:bg-[#FF6634] hover:text-white"
              >
                Open in Maps
                <FiExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* QUOTE */}
          <div className="flex min-h-[270px] items-center justify-center bg-[#F5F0E6] px-8 py-12 sm:min-h-[300px]">
            <div className="max-w-[220px] text-center">
              <p className="font-display text-[22px] italic leading-[1.35] text-[#6B3020]">
                &quot;A simple conversation today can be the first step towards
                a healthier, happier you.&quot;
              </p>

              <div className="mx-auto mt-5 h-[1px] w-8 bg-[#FF6634]" />

              <p className="mt-5 text-[14px] font-bold uppercase leading-[1.5] tracking-[0.2em] text-[#8A6A58]">
                Yoga Cure
                <br />
                Institute
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
