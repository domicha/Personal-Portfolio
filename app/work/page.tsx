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
      "Led end-to-end strategy and launch of the Scotia Wealth Management mobile app — bringing 40K wealth clients and $436B in AUM onto a unified self-serve digital experience for the first time. The app consolidated five wealth divisions (ScotiaMcLeod, Scotia iTRADE, Jarislowsky Fraser, Scotiatrust, and Private Investment Counsel) into a single authenticated experience, launching to 25K Canadian clients and scaling across 5 international markets.",
    product:
      "Built on top of Scotiabank's existing app infrastructure, the platform delivers biometric sign-in, real-time portfolio dashboards, asset mix breakdowns, holdings detail, transaction history, and document management for statements and tax slips. Owned the multi-quarter roadmap for self-service transactions, advisor workflows, and real-time data integrations — alongside API and service-layer strategy that standardized contracts and cut duplicate build across markets.",
    impact: [
      { metric: "14%", label: "funded account growth in month one" },
      { metric: "45%", label: "onboarding completion, up from 30%" },
      { metric: "1.5d", label: "time-to-first-trade, down from 4 days" },
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
      "Owned strategy and full GTM execution for the redesign of Scotia's online banking platform, now used by 2 million+ active Canadians. Led the modernization of a legacy web client through a phased migration that de-risked delivery for existing users while meeting compliance, accessibility, and fraud prevention requirements across a complex, high-traffic platform.",
    product:
      "The platform covers bill payment with recurring options, Interac e-Transfer, international money transfers, investment monitoring, free TransUnion credit score, Scotia InfoAlerts, and direct deposit setup. Drove a rigorous A/B testing and experimentation programme — using customer research and performance data to continuously reduce friction and grow engagement across retail and business segments.",
    impact: [
      { metric: "2M+", label: "active Canadian users" },
      { metric: "+20", label: "NPS improvement" },
      { metric: "20%", label: "growth in money transfers" },
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
      "Delivered a new unified mobile banking experience adopted by 3 million+ active users. Consolidated key product lines — InfoAlerts, SelectPay (BNPL), and Money Movement — into a single cohesive app, and introduced AI-powered bill payment features that improved transaction success by 7%. Partnered with analytics to turn large datasets into segmentation insights across retail, SMB, and wealth.",
    product:
      "The app features quick-access shortcuts for everyday tasks, fast bill payments and transfers, an in-app Help Center, and optimized performance across iOS and Android. AI-powered routing logic was embedded directly into the payment and alerts experience — improving reliability and reducing failed transactions at scale.",
    impact: [
      { metric: "3M+", label: "active users" },
      { metric: "20%", label: "engagement increase" },
      { metric: "7%", label: "transaction success lift via AI bill pay" },
    ],
    tags: ["Mobile", "BNPL", "AI Features", "iOS & Android"],
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
        — including the National Post — from WordPress to Python/Django. Owned the GTM strategy with editorial and senior leadership, and partnered closely with monetization teams to optimize ad inventory performance and improve advertiser value across the network.
      </>
    ),
    product:
      "The relaunch replaced a fragmented legacy CMS with a scalable Python/Django platform — enabling faster page loads, streamlined content publishing workflows, and a more efficient ad delivery architecture. The modernized stack reduced operational overhead by 40% while improving reader experience and CTR across 130+ brand properties.",
    impact: [
      { metric: "130+", label: "media brand sites migrated" },
      { metric: "27%", label: "reader engagement growth" },
      { metric: "22%", label: "CTR improvement on ad inventory" },
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
      "Defined the vision and roadmap for WellnessLiving's SaaS fitness platform across mobile and web, with a focus on growing adoption among small fitness and wellness businesses. Led the redesign of the core booking and marketplace experience, and built payments enablement with external partners to create a net-new recurring revenue stream for the business.",
    product:
      "The platform offers a branded client booking portal, automated waitlist management, Google Search and Maps integration, scheduling widgets for websites and social media, virtual class streaming, and automated notifications via email, SMS, and push — purpose-built for small fitness and wellness operators managing staff, schedules, and client acquisition.",
    impact: [
      { metric: "8%", label: "increase in client bookings" },
      { metric: "New", label: "recurring revenue via payments integration" },
      { metric: "↑", label: "SMB adoption and platform retention" },
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
          <div key={p.index} id={`project-${p.index}`} className="py-14">
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
                <h2 className="text-xl md:text-2xl font-bold text-[#111] mb-4 leading-snug transition-colors duration-300 hover:text-[#1a56ff] cursor-default w-fit">
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
                      <div className="text-2xl font-bold text-[#1a56ff] tabular-nums">{imp.metric}</div>
                      <div className="text-xs text-[#999] mt-0.5">{imp.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill text-xs px-3 py-1 rounded-full border border-[#ebebeb] text-[#888]"
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
                        className="reveal rounded-xl overflow-hidden border border-[#ebebeb] bg-[#f9f9f9] group hover:border-[#1a56ff]/20 hover:shadow-[0_4px_24px_rgba(26,86,255,0.08)] transition-all duration-400"
                        style={{ transitionDelay: `${160 + i * 100}ms` }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.03]"
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
