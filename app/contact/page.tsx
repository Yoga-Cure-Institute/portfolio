import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiExternalLink,
  FiMessageCircle,
} from "react-icons/fi";

import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Yoga Cure Institute",
  description:
    "Contact Yoga Cure Institute in New Alipore, Kolkata to ask about therapeutic yoga, visiting hours and personalized guidance.",
};

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
        <a
          href="tel:+913340034859"
          className="transition-colors hover:text-[#FF6634]"
        >
          033-40034859
        </a>
        <br />
        <a
          href="tel:+919830966003"
          className="transition-colors hover:text-[#FF6634]"
        >
          +91 9830966003
        </a>
      </>
    ),
  },
  {
    icon: FiMail,
    label: "Email",
    content: (
      <a
        href="mailto:yogacureinstitute1937@gmail.com"
        className="transition-colors hover:text-[#FF6634]"
      >
        yogacureinstitute1937@gmail.com
      </a>
    ),
  },
  {
    icon: FiClock,
    label: "Visiting Hours",
    content: (
      <>
        Mon - Sat: 6:00 AM - 8:00 AM
        <br />
        Mon - Sat: 4:30 PM - 7:30 PM
        <br />
        Sunday is our weekly closure
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
          src="/images/contact/contact-hero.png"
          alt="Peaceful traditional setting at Yoga Cure Institute"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="relative mx-auto flex min-h-[500px] w-[calc(100%-32px)] max-w-[1400px] items-center sm:min-h-[430px] sm:w-[calc(100%-48px)] lg:min-h-[460px] lg:w-[calc(100%-72px)]">
          <div className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-4 bg-(--orange)" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Get in touch
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.9] tracking-[-0.025em]">
              Let&apos;s Begin a
              <br />
              Conversation
            </h1>

            <p className="mt-5 leading-relaxed text-white/65">
              Have a question about our work, Yoga therapy, or our programs?
              Reach out to us. We&apos;re here to listen, guide you, and help
              you find the right path for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1250px] gap-16 lg:grid-cols-[360px_1fr] lg:gap-24">
          {/* DETAILS */}
          <aside>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Our Details
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              We&apos;re here
              <br />
              to listen.
            </h2>

            <p className="mt-7 max-w-[650px] space-y-5 text-16px] leading-[1.75] text-(--ink) sm:text-[16px]">
              Visit us, call us, or send us a message. We welcome your enquiries
              and look forward to being part of your wellness journey.
            </p>

            <div className="mt-9 flex flex-col gap-7">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6B3020] text-white">
                      <Icon size={15} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="max-w-[650px] space-y-5 text-16px] leading-[1.75] text-(--ink) sm:text-[16px]">
                        {item.label}
                      </p>

                      <p className="mt-1.5 text-sm leading-[1.65] text-[#605A54]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WHATSAPP */}
            {/* <Link
              href="https://wa.me/919830966003"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 border border-[#6B3020]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#6B3020] transition-all duration-300 hover:border-[#FF6634] hover:bg-[#FF6634] hover:text-white"
            >
              <FiMessageCircle size={14} />
              WhatsApp Us
            </Link> */}
          </aside>

          {/* FORM */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Send A Message
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              Start a conversation.
            </h2>

            <p className="mt-7 max-w-[650px] space-y-5 text-16px] leading-[1.75] text-(--ink) sm:text-[16px]">
              Fill out the form below and we will get back to you shortly.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="bg-[#E9E0CF] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1250px] items-stretch gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* MAP */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-5 w-[2px] bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Find Us
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.3rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              Visit the Institute
            </h2>

            <p className="mt-3 mb-5 text-16px] leading-relaxed text-[#6B655E]">
              Locate us in New Alipore, Kolkata and plan your visit.
            </p>

            <div className="relative h-[300px] overflow-hidden bg-[#D6D0C4] sm:h-[350px]">
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
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-white px-4 py-2.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#292725] shadow-sm transition-colors hover:bg-[#FF6634] hover:text-white"
              >
                Open in Maps
                <FiExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* QUOTE */}
          <div className="flex min-h-[300px] items-center justify-center bg-[#F5F0E6] px-8 py-12 sm:min-h-[350px]">
            <div className="max-w-[240px] text-center">
              <div className="mx-auto mb-6 h-px w-8 bg-[#FF6634]" />

              <p className="font-display text-[23px] italic leading-[1.35] text-[#6B3020]">
                &quot;A simple conversation today can be the first step towards
                a healthier, happier you.&quot;
              </p>

              <div className="mx-auto mt-6 h-px w-8 bg-[#FF6634]" />

              <p className="mt-5 text-16px] font-bold uppercase leading-[1.6] text-[#8A6A58]">
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
