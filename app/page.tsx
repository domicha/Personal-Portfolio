"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Featured image — full width above the grid
const featured = {
  src: "/scotiabank-online-banking.png",
  alt: "Scotia Online Banking — Good just got better",
  label: "Online Banking Platform",
  href: "/work",
};

// Bento grid: 3 columns, spacious rows
// Row 1-2: Wealth asset mix (2-wide, 2-tall) | Mobile feat 1 | Mobile feat 2
// Row 3:   Wellness booking | Wealth account  | Wealth secure
const collage: {
  src: string;
  alt: string;
  label: string;
  href: string;
  col: string;
  row: string;
}[] = [
  {
    src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---asset-mix---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1727804299664.png",
    alt: "Scotia Wealth — asset mix",
    label: "Wealth Management App",
    href: "/work",
    col: "col-span-2",
    row: "row-span-2",
  },
  {
    src: "https://www.scotiabank.com/content/scotiabank/ca/en/personal/bank-your-way/app-and-online/scotia-app/_jcr_content/main-par/section_container_co/section-container-par/row/row-par-1/image.img.png/1693341055066.png",
    alt: "Scotia Mobile App — feature 1",
    label: "Scotia Mobile App",
    href: "/work",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "https://www.scotiabank.com/content/scotiabank/ca/en/personal/bank-your-way/app-and-online/scotia-app/_jcr_content/main-par/section_container_co/section-container-par/row/row-par-2/image_copy.img.png/1693341080253.png",
    alt: "Scotia Mobile App — feature 2",
    label: "Scotia Mobile App",
    href: "/work",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2021/09/booking-online-1@2x.webp?x69407",
    alt: "WellnessLiving — booking",
    label: "WellnessLiving Marketplace",
    href: "/work",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---account-details---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1727804325423.png",
    alt: "Scotia Wealth — account details",
    label: "Wealth Management App",
    href: "/work",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---secure---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1704485888728.png",
    alt: "Scotia Wealth — secure sign-in",
    label: "Wealth Management App",
    href: "/work",
    col: "col-span-1",
    row: "row-span-1",
  },
];

const navLinks = [
  { label: "Work Projects", href: "/work", index: "01" },
  { label: "AI Projects", href: "/ai", index: "02" },
  { label: "Experience", href: "/experience", index: "03" },
  { label: "About & Contact", href: "/contact", index: "04" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => heroRef.current?.classList.add("visible"), 60);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    collageRef.current?.querySelectorAll(".reveal-scale, .reveal").forEach((el) =>
      observer.observe(el)
    );
    navRef.current?.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="px-6 pt-16 pb-16 max-w-6xl mx-auto">
        <div ref={heroRef} className="reveal">

          {/* Label row */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-[0.18em] uppercase text-[#999]">
              Product Manager
            </span>
            <span className="w-8 h-px bg-[#ddd]" />
            <span className="text-xs tracking-[0.18em] uppercase text-[#999]">
              Toronto
            </span>
          </div>

          {/* Display headline */}
          <h1 className="font-extrabold tracking-tight leading-[0.92] mb-10">
            <span className="block text-[clamp(56px,10vw,130px)] text-[#111]">
              Michael Do
            </span>
            <span className="block text-[clamp(44px,7.5vw,96px)] text-[#ccc]">
              building digital
            </span>
            <span className="block text-[clamp(44px,7.5vw,96px)] text-[#111]">
              products at scale.
            </span>
          </h1>

          {/* Divider + subtext */}
          <div className="flex items-start gap-6 mb-12 max-w-2xl">
            <div className="w-px h-14 bg-[#ddd] flex-shrink-0 mt-1" />
            <p className="text-base md:text-lg text-[#888] leading-relaxed">
              8 years shipping financial platforms, AI-powered features,
              and multi-market products used by millions of Canadians.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 pb-14 border-b border-[#ebebeb]">
            {[
              { value: "8+", label: "Years in product" },
              { value: "5M+", label: "Users on shipped products" },
              { value: "5", label: "International markets" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-[#111] tabular-nums tracking-tight">{s.value}</div>
                <div className="text-xs text-[#999] mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collage ── */}
      <section ref={collageRef} className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="reveal flex items-baseline justify-between mb-6">
          <p className="text-xs tracking-[0.15em] uppercase text-[#999]">Projects</p>
          <Link href="/work" className="text-xs text-[#999] hover:text-[#111] transition-colors">
            View all →
          </Link>
        </div>

        {/* Featured image — full width */}
        <Link
          href={featured.href}
          className="reveal-scale block relative overflow-hidden rounded-2xl bg-[#f5f5f5] group mb-4"
          style={{ height: "320px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featured.src}
            alt={featured.alt}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
            <span className="text-white text-sm font-medium tracking-wide">
              {featured.label} →
            </span>
          </div>
        </Link>

        {/* 3-col bento grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {collage.map((item, i) => (
            <Link
              key={item.src}
              href={item.href}
              className={`reveal-scale relative overflow-hidden rounded-2xl bg-[#f5f5f5] group ${item.col} ${item.row}`}
              style={{ transitionDelay: `${80 + i * 100}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <span className="text-white text-xs font-medium tracking-wide">
                  {item.label} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Navigation Directory ── */}
      <section ref={navRef} className="px-6 pb-20 max-w-6xl mx-auto border-t border-[#ebebeb]">
        <div className="pt-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="reveal flex items-center justify-between py-5 border-b border-[#ebebeb] group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-5">
                <span className="text-xs text-[#ddd] tabular-nums w-5">{link.index}</span>
                <span className="text-base font-semibold text-[#111] group-hover:text-[#555] transition-colors">
                  {link.label}
                </span>
              </div>
              <span className="text-[#ccc] group-hover:text-[#111] group-hover:translate-x-1 transition-all text-sm">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
