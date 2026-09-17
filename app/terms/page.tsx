import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for the use of the Yoga Cure Institute website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Yoga Cure Institute website, you agree to these Terms and Conditions. If you do not agree with these terms, please do not use the website.",
      "These terms apply to all visitors and users of the website.",
    ],
  },
  {
    title: "2. About the Website",
    content: [
      "This website provides information about Yoga Cure Institute, its heritage, services, programmes, activities, contact information and related materials.",
      "The information presented on the website is intended for general information purpose only and may be updated from time to time.",
    ],
  },
  {
    title: "3. Yoga and Wellness Information",
    content: [
      "Information about yoga, yoga therapy, wellness and related practices on this website is provided for general information purpose only.",
      "Website content should not be treated as a substitute for professional therapeutic advice, diagnosis or treatment. Individual health needs vary, and visitors should seek appropriate professional advice when required.",
      "Participation in any yoga or wellness programme should be based on an individual's health backgrounds and suitability for the particular practice.",
    ],
  },
  {
    title: "4. Enquiries and Communication",
    content: [
      "Visitors may contact Yoga Cure Institute through the contact information, enquiry forms or communication links provided on the website.",
      "Submitting an enquiry does not by itself create a teacher-student relationship, treatment relationship, contractual relationship or guarantee of enrolment in any programme.",
      "Any programme, consultation or service will be subject to the terms communicated by Yoga Cure Institute at the time of registration or enrolment.",
    ],
  },
  {
    title: "5. Website Content",
    content: [
      "We make reasonable efforts to keep the information on this website authentic, accurate and current. However, information may change without prior notice.",
      "Yoga Cure Institute does not guarantee that every part of the website will always be complete, or free from technical errors.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "Unless otherwise stated, the text, photographs, videos, graphics, logos, visual elements and other materials published on this website belong to Yoga Cure Institute only.",
      "You may view the website and its content for personal, non-commercial purposes. Website materials should not be reproduced, modified, distributed, published or commercially exploited under any circumstances what so ever.",
      "If found, the person or organization will be liable to such damages and strict legal proceedings will be carried forward under Intellectual Properties.",
    ],
  },
  {
    title: "7. Photographs and Historical Materials",
    content: [
      "The website may contain historical photographs, documents, recordings and other archival materials relating to Yoga Cure Institute and its lineage.",
      "Such materials are presented for historical, educational and information purpose only. Where appropriate, credits or contextual information may be provided alongside archival materials.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "The website may contain links to third-party websites or services, including communication and social media platforms.",
      "These websites are operated independently from Yoga Cure Institute. We are not responsible for their content, availability, policies or practices.",
    ],
  },
  {
    title: "9. Prohibited Use",
    content: [
      "You agree not to use this website for unlawful purposes or in a way that may damage, disable, overburden or interfere with the website or its availability to other visitors.",
      "You must not attempt to gain unauthorised access to the website, its systems or any information that is not intended for public access.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, Yoga Cure Institute shall not be responsible for losses or damages arising from reliance on general information provided on this website or from the temporary unavailability of the website.",
      "Nothing in these terms is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    content: [
      "Yoga Cure Institute may update these Terms and Conditions when necessary. Changes will be published on this page with an updated effective date.",
      "Your continued use of the website after an update indicates that you have reviewed the revised terms.",
    ],
  },
  {
    title: "12. Governing Law",
    content: [
      "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of India.",
      "Any disputes relating to the use of this website shall be subject to arbitration only.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[var(--cream)] text-[#292725]">
      {/* Hero */}
      <section className="border-b border-black/10 bg-[#F3EBDD]">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1100px] px-4 py-20 md:w-[calc(100%-48px)] md:py-28">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-5 w-1 bg-[var(--orange)]" />

            <span className="text-[14px] font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
              Legal
            </span>
          </div>

          <h1 className="max-w-[850px] font-display text-[clamp(3.5rem,7vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.035em]">
            Terms &
            <br />
            Conditions
          </h1>

          <p className="mt-7 max-w-[620px] text-sm leading-7 text-black/55 md:text-[15px]">
            These terms explain the conditions that apply when you access and
            use the Yoga Cure Institute website.
          </p>

          <p className="mt-5 text-[14px] font-semibold uppercase tracking-[0.12em] text-black/40">
            Effective date: September, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-[var(--cream)] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          {/* Side Label */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
                Terms
              </p>

              <div className="mt-4 h-px w-10 bg-[var(--orange)]" />
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-[720px]">
            <p className="mb-12 font-display text-2xl leading-[1.35] text-[#403B37] md:text-3xl">
              Please read these Terms and Conditions carefully before using the
              Yoga Cure Institute website.
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="border-t border-black/10 pt-8"
                >
                  <h2 className="font-display text-2xl leading-tight md:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-black/60"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-16 border-t border-black/10 pt-8">
              <h2 className="font-display text-2xl md:text-3xl">
                Questions about these terms?
              </h2>

              <p className="mt-4 text-sm leading-7 text-black/60">
                If you have questions about these Terms and Conditions, please
                contact to the Yoga Cure Institute email address below mentioned only. Any phone call related to privacy or terms will not be entertained under any circumstances.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <a
                  href="mailto:yogacureinstitute1937@gmail.com"
                  className="block text-[var(--orange)] transition-opacity hover:opacity-70"
                >
                  yogacureinstitute1937@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
