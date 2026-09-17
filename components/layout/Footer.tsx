"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
  FiInstagram,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/about" },
  { label: "Heritage", href: "/heritage" },
  { label: "Services", href: "/services" },
  { label: "Archives", href: "/archives" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const columns = columnsRef.current?.children;

        if (!brandRef.current || !columns || !bottomRef.current) {
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 82%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .fromTo(
            brandRef.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
            },
          )
          .fromTo(
            columns,
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.1,
            },
            "-=0.4",
          )
          .fromTo(
            bottomRef.current,
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            "-=0.2",
          );
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: footerRef,
    },
  );

  return (
    <footer ref={footerRef} className="bg-[#161616] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid w-[calc(100%-24px)] max-w-[1400px] grid-cols-1 gap-12 py-14 sm:w-[calc(100%-32px)] sm:py-16 md:grid-cols-2 md:gap-14 lg:grid-cols-[1.35fr_1fr_1.35fr_1.2fr] lg:gap-16 lg:py-18">
        {/* Brand */}
        <div ref={brandRef} className="md:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Yoga Cure Institute"
              width={205}
              height={60}
              className="h-auto w-64 object-contain sm:w-72"
            />
          </Link>
        </div>

        {/* Footer Columns */}
        <div ref={columnsRef} className="contents">
          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Quick Links</h3>

            <nav className="flex flex-col items-start gap-3.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/55 transition-colors duration-200 hover:text-[#FF6634]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Get In Touch</h3>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919830966003"
                className="flex items-start gap-3 text-sm leading-relaxed text-white/55 transition-colors duration-200 hover:text-white"
              >
                <FiPhone size={17} className="mt-0.5 shrink-0 text-[#FF6634]" />

                <span>+91 98309 66003</span>
              </a>

              <a
                href="mailto:info@yogacureinstitute.com"
                className="flex items-start gap-3 text-sm leading-relaxed text-white/55 transition-colors duration-200 hover:text-white"
              >
                <FiMail size={17} className="mt-0.5 shrink-0 text-[#FF6634]" />

                <span>info@yogacureinstitute.com</span>
              </a>

              <a
                href="https://maps.google.com/?q=Yoga+Cure+Institute+New+Alipore+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-relaxed text-white/55 transition-colors duration-200 hover:text-white"
              >
                <FiMapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#FF6634]"
                />

                <span>
                  New Alipore, Kolkata
                  <br />
                  West Bengal, India
                </span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Follow Us</h3>

            <div className="mb-5 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-white/12 text-white/60 transition-all duration-200 hover:border-[#FF6634] hover:bg-[#FF6634]/10 hover:text-white"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-white/12 text-white/60 transition-all duration-200 hover:border-[#FF6634] hover:bg-[#FF6634]/10 hover:text-white"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center border border-white/12 text-white/60 transition-all duration-200 hover:border-[#FF6634] hover:bg-[#FF6634]/10 hover:text-white"
              >
                <FiYoutube size={18} />
              </a>
            </div>

            <p className="font-display text-lg italic leading-snug text-white/50">
              Yoga for a healthier,
              <br />
              more conscious world.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        ref={bottomRef}
        className="mx-auto grid w-[calc(100%-24px)] max-w-[1400px] grid-cols-1 items-center gap-4 border-t border-white/10 py-7 sm:w-[calc(100%-32px)] md:grid-cols-[1fr_auto_1fr] md:gap-6"
      >
        <p className="text-xs text-white/45">
          © 2014-{year} Yoga Cure Institute. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-xs text-white/45">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
        </div>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 justify-self-start text-xs text-[#FF6634] transition-all duration-200 hover:gap-3 md:justify-self-end"
        >
          Back to top
          <FiArrowUp size={17} />
        </button>
      </div>
    </footer>
  );
}
