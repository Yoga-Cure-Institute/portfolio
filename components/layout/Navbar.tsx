"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/about" },
  { label: "Heritage", href: "/heritage" },
  { label: "Services", href: "/services" },
  { label: "Archives", href: "/archives" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const whatsappRef = useRef<HTMLAnchorElement>(null);

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLAnchorElement[]>([]);
  const mobileWhatsappRef = useRef<HTMLAnchorElement>(null);

  const addMobileLink = (element: HTMLAnchorElement | null) => {
    if (element && !mobileLinksRef.current.includes(element)) {
      mobileLinksRef.current.push(element);
    }
  };

  useGSAP(
    () => {
      const desktopLinks = navRef.current?.querySelectorAll("a");

      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTimeline
        .fromTo(
          logoRef.current,
          {
            opacity: 0,
            y: -12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
        )
        .fromTo(
          desktopLinks,
          {
            opacity: 0,
            y: -8,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
          },
          "-=0.35",
        )
        .fromTo(
          whatsappRef.current,
          {
            opacity: 0,
            x: 12,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },
          "-=0.25",
        );

      if (mobileNavRef.current) {
        gsap.set(mobileNavRef.current, {
          height: 0,
          opacity: 0,
        });
      }
    },
    {
      scope: headerRef,
    },
  );

  useGSAP(
    () => {
      if (!mobileNavRef.current) return;

      if (menuOpen) {
        gsap.killTweensOf([
          mobileNavRef.current,
          ...mobileLinksRef.current,
          mobileWhatsappRef.current,
        ]);

        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
          })
          .set(mobileNavRef.current, {
            display: "block",
          })
          .to(mobileNavRef.current, {
            height: "auto",
            opacity: 1,
            duration: 0.45,
          })
          .fromTo(
            mobileLinksRef.current,
            {
              opacity: 0,
              x: -18,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.055,
            },
            "-=0.2",
          )
          .fromTo(
            mobileWhatsappRef.current,
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
            },
            "-=0.15",
          );
      } else {
        gsap.killTweensOf([
          mobileNavRef.current,
          ...mobileLinksRef.current,
          mobileWhatsappRef.current,
        ]);

        gsap
          .timeline({
            defaults: {
              ease: "power2.inOut",
            },
          })
          .to([...mobileLinksRef.current, mobileWhatsappRef.current], {
            opacity: 0,
            x: -10,
            duration: 0.18,
            stagger: 0.025,
          })
          .to(
            mobileNavRef.current,
            {
              height: 0,
              opacity: 0,
              duration: 0.3,
            },
            "-=0.05",
          );
      }
    },
    {
      scope: headerRef,
      dependencies: [menuOpen],
    },
  );

  return (
    <header
      ref={headerRef}
      className="relative z-50 w-full bg-[#09090B] text-white"
    >
      <div className="mx-auto flex min-h-20 w-[calc(100%-48px)] max-w-350 items-center gap-10">
        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Yoga Cure Institute"
          className="shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="Yoga Cure Institute"
            width={174}
            height={48}
            priority
            className="w-43 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          aria-label="Main navigation"
          className="ml-auto hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-8 text-xs font-medium uppercase tracking-[0.07em] text-white/75 transition-colors duration-200 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-5 left-0 h-0.5 w-0 bg-[#FF6634] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* WhatsApp */}
        <a
          ref={whatsappRef}
          href="https://wa.me/919830966003"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-md bg-[#22C55E] px-4 py-3 text-xs font-bold uppercase tracking-[0.06em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16A34A] lg:flex"
        >
          <span className="flex h-4 w-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.16-3.46-8.42ZM12.08 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.9 9.9 0 1 1 8.38 4.63Zm5.43-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
            </svg>
          </span>
          Chat on WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto flex p-2 text-white lg:hidden"
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileNavRef}
        className="hidden overflow-hidden border-t border-white/10 lg:hidden"
      >
        <nav className="mx-auto w-[calc(100%-32px)] max-w-350 pb-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={addMobileLink}
              onClick={() => setMenuOpen(false)}
              className="grid grid-cols-[35px_1fr_auto] items-center gap-2 border-b border-white/8 py-5 text-[15px] text-white/85"
            >
              <span className="text-[10px] tracking-wider text-[#FF6634]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}

              <FiArrowUpRight size={18} className="text-white/40" />
            </Link>
          ))}

          <a
            ref={mobileWhatsappRef}
            href="https://wa.me/919830966003"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center rounded-md border border-white/10 bg-[#22C55E] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.06em] text-white"
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
