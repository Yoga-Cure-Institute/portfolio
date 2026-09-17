import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Yoga Cure Institute.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you contact Yoga Cure Institute through this website, we may receive information that you voluntarily provide, such as your name, phone number, email address and the details included in your message.",
      "We only request information that is relevant to responding to your enquiry or providing information about our services and programmes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Information provided through the website may be used to respond to enquiries, provide information about our programmes and services, communicate with you regarding your enquiry, and maintain appropriate records of correspondence.",
      "We do not use information submitted through the website for purposes unrelated to the enquiry without an appropriate basis for doing so.",
    ],
  },
  {
    title: "3. Contact Through WhatsApp",
    content: [
      "Our website may provide a direct link to contact Yoga Cure Institute through WhatsApp. When you choose to use WhatsApp, your communication is handled through WhatsApp and is subject to WhatsApp's own terms and privacy practices.",
      "Please avoid sending sensitive personal information through WhatsApp unless it is necessary for your enquiry.",
    ],
  },
  {
    title: "4. Information Security",
    content: [
      "We take reasonable steps to protect information submitted through this website from unauthorised access, misuse or disclosure.",
    ],
  },
  {
    title: "5. Third-Party Services",
    content: [
      "The website may contain links to third-party websites or services. These services operate independently from Yoga Cure Institute and may have their own privacy policies.",
      "We encourage visitors to review the privacy policies of third-party services before providing them with personal information.",
    ],
  },
  {
    title: "6. Cookies",
    content: [
      "This website may use essential technologies required for the website to function correctly.",
      "If analytics, advertising or other non-essential tracking technologies are introduced in the future, this policy may be updated to explain their use.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain information only for as long as reasonably necessary for the purpose for which it was provided, to maintain correspondence, or to meet applicable legal or administrative requirements.",
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      "If you have provided personal information to us, you may contact us to ask about the information we hold about you or to request correction of inaccurate information.",
      "Requests will be considered in accordance with applicable law and our legitimate administrative requirements.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy when our website, services or data practices change. Any updated version will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPage() {
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

          <h1 className="max-w-[800px] font-display text-[clamp(3.5rem,7vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.035em]">
            Privacy
            <br />
            Policy
          </h1>

          <p className="mt-7 max-w-[600px] text-sm leading-7 text-black/55 md:text-[15px]">
            Your privacy matters to us. This policy explains how Yoga Cure
            Institute handles information provided through this website.
          </p>

          <p className="mt-5 text-[14px] font-semibold uppercase tracking-[0.12em] text-black/40">
            Effective date: September, 2026
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-[var(--cream)] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          {/* Side Label */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
                Privacy
              </p>

              <div className="mt-4 h-px w-10 bg-[var(--orange)]" />
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-[720px]">
            <p className="mb-12 font-display text-2xl leading-[1.35] text-[#403B37] md:text-3xl">
              Yoga Cure Institute respects the privacy of visitors and takes
              reasonable steps to handle personal information responsibly.
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
                Questions about privacy?
              </h2>

              <p className="mt-4 text-sm leading-7 text-black/60">
                If you have questions about this Privacy Policy or the way
                information is handled, please contact Yoga Cure Institute email
                address below mentioned only. Any phone call related to privacy
                or terms will not be entertained under any circumstances.
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
