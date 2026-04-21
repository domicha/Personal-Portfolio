"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

const projects: {
  index: string;
  company: string;
  role: string;
  period: string;
  title: string;
  url: string;
  urlLabel: string;
  summary: ReactNode;
  product: string;
  impact: { metric: string; label: string }[];
  tags: string[];
  images: { src: string; alt: string }[];
}[] = [
  {
    index: "01",
    company: "Scotiabank Digital",
    role: "Product Lead, Wealth Management",
    period: "2024 — Present",
    title: "Scotia Wealth Management Mobile App",
    url: "https://www.scotiawealthmanagement.com/ca/en/services/wealth-mobile-app.html",
    urlLabel: "scotiawealthmanagement.com",
    summary:
      "Led the strategy and launch of the Scotia Wealth Management mobile app — giving 200,000 wealth clients secure, self-serve access to their full portfolio for the first time. The app provides a unified view across ScotiaMcLeod, Scotia iTRADE, Scotia Jarislowsky Fraser, Scotiatrust, and Private Investment Counsel accounts.",
    product:
      "The app delivers biometric sign-in, interactive portfolio charts, asset mix breakdowns, holdings detail, transaction history, and document management for statements and tax slips — all within a single authenticated experience shared with the existing Scotiabank app.",
    impact: [
      { metric: "200K", label: "wealth clients enabled" },
      { metric: "5", label: "international markets" },
      { metric: "4", label: "wealth divisions unified under one app" },
    ],
    tags: ["Wealth Management", "Mobile", "Platform Strategy", "API Architecture"],
    images: [
      {
        src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---secure---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1704485888728.png",
        alt: "Scotia Wealth App — secure sign-in",
      },
      {
        src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---asset-mix---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1727804299664.png",
        alt: "Scotia Wealth App — asset mix view",
      },
      {
        src: "https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---account-details---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1727804325423.png",
        alt: "Scotia Wealth App — account details",
      },
    ],
  },
  {
    index: "02",
    company: "Scotiabank Digital",
    role: "Senior PM, Retail & Business Platforms",
    period: "2021 — 2024",
    title: "Scotia Online Banking Platform",
    url: "https://www.scotiabank.com/ca/en/personal/bank-your-way/app-and-online/online-banking.html",
    urlLabel: "scotiabank.com — online banking",
    summary:
      "Owned the strategy and end-to-end GTM rollout of the redesigned Scotia Online Banking platform, now used by 2 million+ active Canadians. Led a multi-year programme to modernize the web client while maintaining continuity for existing users — balancing speed of delivery with compliance, accessibility, and fraud prevention requirements.",
    product:
      "The platform covers bill payment with recurring options, Interac e-Transfer, international money transfers via Western Union, investment monitoring, free TransUnion credit score, Scotia InfoAlerts, and direct deposit setup — all within a refreshed, accessible interface.",
    impact: [
      { metric: "2M+", label: "active users" },
      { metric: "+20", label: "NPS improvement" },
      { metric: "30%", label: "reduction in user friction" },
    ],
    tags: ["Web Platform", "GTM", "A/B Testing", "Accessibility"],
    images: [
      {
        src: "/scotiabank-online-banking.png",
        alt: "Scotia Online Banking — accounts overview",
      },
    ],
  },
  {
    index: "03",
    company: "Scotiabank Digital",
    role: "Product Manager, Retail & Business Platforms",
    period: "2020 — 2021",
    title: "Scotia Mobile Banking App",
    url: "https://www.scotiabank.com/ca/en/personal/ways-to-bank/mobile-tablet/mobile-banking-app.html",
    urlLabel: "scotiabank.com — mobile app",
    summary:
      "Delivered a new unified mobile banking experience adopted by 3 million+ active users. Owned product strategy and GTM across key product lines including InfoAlerts, SelectPay (BNPL), and Money Movement — while driving a 10% revenue lift through new feature adoption.",
    product:
      "The app features quick-access shortcuts for everyday tasks, fast bill payments and transfers, in-app Help Center, optimized app size for lightweight performance, dynamic font sizing, screen reader support, and multi-factor authentication — with a design built for both iOS and Android.",
    impact: [
      { metric: "3M+", label: "active users" },
      { metric: "20%", label: "engagement increase" },
      { metric: "10%", label: "revenue lift" },
    ],
    tags: ["Mobile", "BNPL", "Money Movement", "iOS & Android"],
    images: [
      {
        src: "/scotia-mobile-home.webp",
        alt: "Scotia Mobile App — home screen",
      },
      {
        src: "/scotia-mobile-advice.webp",
        alt: "Scotia Mobile App — Advice+ and insights",
      },
      {
        src: "/scotia-mobile-search.webp",
        alt: "Scotia Mobile App — search for anything",
      },
    ],
  },
  {
    index: "04",
    company: "Postmedia Digital",
    role: "Product Manager, News & Engagement",
    period: "2019 — 2020",
    title: "National Post & Postmedia Network Relaunch",
    url: "https://nationalpost.com/",
    urlLabel: "nationalpost.com",
    summary: (
      <>
        Led a cross-functional team of 10+ engineers and designers to{" "}
        <a
          href="https://nationalpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-[#444] hover:text-[#111] transition-colors"
        >
          migrate 130+ Postmedia media brand sites
        </a>{" "}
        — including the National Post — from WordPress to a Python/Django platform. Developed GTM strategy with editorial and senior leadership, and partnered with monetization teams to improve ad inventory and advertiser value.
      </>
    ),
    product:
      "The relaunch modernized the technical foundation across the entire Postmedia network, enabling faster page loads, improved content management workflows, and a more scalable ad delivery architecture — benefiting both editorial teams and digital advertisers.",
    impact: [
      { metric: "130+", label: "media brand sites relaunched" },
      { metric: "27%", label: "engagement growth" },
      { metric: "40%", label: "operational cost reduction" },
    ],
    tags: ["Platform Migration", "Media", "Monetization", "Python/Django"],
    images: [
      {
        src: "/nationalpost-homepage.png",
        alt: "National Post homepage — Postmedia network relaunch",
      },
    ],
  },
  {
    index: "05",
    company: "WellnessLiving Systems",
    role: "Product Manager, SaaS Platform",
    period: "2019",
    title: "WellnessLiving Booking & Marketplace",
    url: "https://www.wellnessliving.com/features/online-booking/",
    urlLabel: "wellnessliving.com",
    summary:
      "Defined the vision and roadmap for WellnessLiving's SaaS fitness platform, focusing on the client-facing booking experience and marketplace. Launched a redesigned booking flow that increased client bookings by 8% and integrated payment enablement with external partners to create a new recurring revenue stream.",
    product:
      "The platform offers a branded client booking portal, automated waitlist management, Google Search and Maps integration, scheduling widgets for websites and social media, virtual class streaming, automated notifications (email, SMS, push), and staff management tools — built for fitness and wellness small businesses.",
    impact: [
      { metric: "8%", label: "increase in client bookings" },
      { metric: "New", label: "recurring revenue stream via payments" },
      { metric: "↑", label: "small business adoption" },
    ],
    tags: ["SaaS", "Marketplace", "Payments", "Fitness Tech"],
    images: [
      {
        src: "https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2021/09/booking-online-1@2x.webp?x69407",
        alt: "WellnessLiving online booking",
      },
      {
        src: "https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2021/09/instant-booking.webp?x69407",
        alt: "WellnessLiving instant booking",
      },
    ],
  },
];

export default function WorkPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    pageRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal mb-16 pb-10 border-b border-[#ebebeb]">
        <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">Selected work</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111]">
          Work Projects
        </h1>
      </div>

      {/* Projects */}
      <div className="divide-y divide-[#ebebeb]">
        {projects.map((p) => (
          <div key={p.index} className="py-14">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Meta */}
              <div className="reveal md:col-span-3">
                <div className="text-3xl font-extrabold text-[#ebebeb] tabular-nums mb-4">
                  {p.index}
                </div>
                <p className="text-xs text-[#999] mb-0.5">{p.company}</p>
                <p className="text-xs font-medium text-[#666] mb-0.5">{p.role}</p>
                <p className="text-xs text-[#bbb] mb-4">{p.period}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#999] hover:text-[#111] transition-colors underline underline-offset-2"
                >
                  {p.urlLabel}
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Content */}
              <div className="reveal md:col-span-9" style={{ transitionDelay: "80ms" }}>
                <h2 className="text-xl md:text-2xl font-bold text-[#111] mb-4 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{p.summary}</p>
                <p className="text-sm text-[#888] leading-relaxed mb-8">
                  <span className="font-medium text-[#444]">Product: </span>
                  {p.product}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-10 mb-8">
                  {p.impact.map((imp) => (
                    <div key={imp.label}>
                      <div className="text-2xl font-bold text-[#111] tabular-nums">{imp.metric}</div>
                      <div className="text-xs text-[#999] mt-0.5">{imp.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-[#ebebeb] text-[#888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Images */}
                {p.images.length > 0 && (
                  <div
                    className={`grid gap-3 ${
                      p.images.length === 1
                        ? "grid-cols-1"
                        : p.images.length >= 4
                        ? "grid-cols-2 md:grid-cols-3"
                        : p.images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {p.images.map((img, i) => (
                      <div
                        key={img.src}
                        className="reveal rounded-xl overflow-hidden border border-[#ebebeb] bg-[#f9f9f9] group"
                        style={{ transitionDelay: `${160 + i * 100}ms` }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
