"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ── Count-up hook ─────────────────────────────────────────────
function useCountUp(end: number, duration = 1400, triggered = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setVal(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, end, duration]);
  return val;
}

// ── Icons ─────────────────────────────────────────────────────
function WorkIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      {/* Back cards */}
      <rect x="2"  y="15" width="32" height="24" rx="3" stroke="#c7d6ff" strokeWidth="1.5" />
      <rect x="5"  y="10" width="32" height="24" rx="3" stroke="#a0baff" strokeWidth="1.5" />
      {/* Front card — floats */}
      <g style={{ animation: "icon-float 3s ease-in-out infinite" }}>
        <rect x="8" y="5" width="32" height="24" rx="3" fill="white" stroke="#1a56ff" strokeWidth="1.5" />
        <line x1="15" y1="13" x2="33" y2="13" stroke="#d0dcff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="18" x2="28" y2="18" stroke="#1a56ff"  strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="15" y1="23" x2="23" y2="23" stroke="#d0dcff" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function AIIcon() {
  const nodes = [
    { cx: 6,  cy: 10 },
    { cx: 40, cy: 10 },
    { cx: 6,  cy: 36 },
    { cx: 40, cy: 36 },
  ];
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      {/* Lines from center to nodes */}
      {nodes.map((n, i) => (
        <line key={i}
          x1="23" y1="23" x2={n.cx} y2={n.cy}
          stroke="#1a56ff" strokeWidth="1" strokeDasharray="24"
          style={{ animation: `icon-line-draw 2.4s ease-in-out infinite ${i * 0.6}s` }}
        />
      ))}
      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="3.5" fill="#1a56ff"
          style={{
            animation: `icon-node-pulse 2.4s ease-in-out infinite ${i * 0.6}s`,
            transformOrigin: `${n.cx}px ${n.cy}px`,
          }}
        />
      ))}
      {/* Center node */}
      <circle cx="23" cy="23" r="5.5" fill="#1a56ff" />
      {/* Orbiting dot */}
      <g style={{ transformOrigin: "23px 23px", animation: "icon-orbit 3s linear infinite" }}>
        <circle cx="23" cy="9" r="2.5" fill="white" stroke="#1a56ff" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      {/* Baseline */}
      <line x1="4" y1="41" x2="42" y2="41" stroke="#ebebeb" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bar 1 */}
      <rect x="7"  y="31" width="9" height="10" rx="2" fill="#c7d6ff"
        className="icon-bar" style={{ animation: "icon-bar-breathe 2.6s ease-in-out infinite 0s" }} />
      {/* Bar 2 — tallest, blue */}
      <rect x="20" y="13" width="9" height="28" rx="2" fill="#1a56ff"
        className="icon-bar" style={{ animation: "icon-bar-breathe 2.6s ease-in-out infinite 0.65s" }} />
      {/* Bar 3 */}
      <rect x="33" y="22" width="9" height="19" rx="2" fill="#6e9dff"
        className="icon-bar" style={{ animation: "icon-bar-breathe 2.6s ease-in-out infinite 1.3s" }} />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      {/* Ripple rings */}
      <circle cx="23" cy="23" r="11" stroke="#1a56ff" strokeWidth="1"
        style={{ animation: "icon-ripple 2.2s ease-out infinite 0s" }} />
      <circle cx="23" cy="23" r="11" stroke="#1a56ff" strokeWidth="1"
        style={{ animation: "icon-ripple 2.2s ease-out infinite 1.1s" }} />
      {/* Head */}
      <circle cx="23" cy="18" r="5.5" fill="#1a56ff" />
      {/* Shoulders */}
      <path d="M10 40 C10 31 36 31 36 40" stroke="#1a56ff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ── CTA data ──────────────────────────────────────────────────
const navLinks = [
  {
    index: "01",
    label: "Work Projects",
    description: "Case studies across banking, media, and SaaS platforms.",
    href: "/work",
    icon: <WorkIcon />,
  },
  {
    index: "02",
    label: "Resume",
    description: "8+ years of product leadership across financial services and beyond.",
    href: "/resume",
    icon: <ExperienceIcon />,
  },
  {
    index: "03",
    label: "About & Contact",
    description: "Who I am, how I work, and how to reach me.",
    href: "/about",
    icon: <ContactIcon />,
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function Home() {
  const glowRef   = useRef<HTMLDivElement>(null);
  const barRef    = useRef<HTMLDivElement>(null);
  const heroRef   = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);

  const [statsVisible, setStatsVisible] = useState(false);
  const count8  = useCountUp(8,  1400, statsVisible);
  const count5m = useCountUp(5,  1400, statsVisible);
  const count5  = useCountUp(5,  1200, statsVisible);

  useEffect(() => {
    const glow = glowRef.current;
    const bar  = barRef.current;

    const moveGlow = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    };
    const updateBar = () => {
      if (!bar) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollHeight <= clientHeight ? 0 : (scrollTop / (scrollHeight - clientHeight)) * 100;
      bar.style.width = pct + "%";
    };

    window.addEventListener("mousemove", moveGlow, { passive: true });
    window.addEventListener("scroll",    updateBar, { passive: true });

    const timer = setTimeout(() => heroRef.current?.classList.add("visible"), 80);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
      }),
      { threshold: 0.05 }
    );
    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));

    const statsObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); statsObs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (statsRef.current) statsObs.observe(statsRef.current);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      window.removeEventListener("scroll",    updateBar);
      clearTimeout(timer);
      observer.disconnect();
      statsObs.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" />
      {/* Scroll progress */}
      <div ref={barRef}  className="scroll-bar" style={{ width: "0%" }} />

      {/* ── Hero ── */}
      <section className="relative z-10 px-6 pt-14 pb-16 max-w-6xl mx-auto">
        <div ref={heroRef} className="reveal">

          {/* Top label row */}
          <div className="flex items-center gap-4 mb-7">
            <span className="text-xs tracking-[0.18em] uppercase text-[#999]">Product Manager</span>
            <span className="w-8 h-px bg-[#ddd]" />
            <span className="text-xs tracking-[0.18em] uppercase text-[#999]">Toronto</span>
          </div>

          {/* Two-column hero layout */}
          <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">

            {/* Left — headline + subtext + stats */}
            <div>
              {/* Social badges */}
              <div className="flex items-center gap-2 mb-6">
                {[
                  {
                    label: "Email",
                    href: "mailto:ddomichael.work@gmail.com",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 7 10-7" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/domicha",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/domicha",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    ),
                  },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={l.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-[#ebebeb] text-[#bbb] hover:text-[#1a56ff] hover:border-[#1a56ff]/30 hover:bg-[#eff3ff] transition-all duration-200"
                  >
                    {l.icon}
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-[#fde047] text-[#713f12] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#854d0e]" style={{ animation: "icon-node-pulse 2s ease-in-out infinite" }} />
                Open to senior and leadership product roles
              </div>

              {/* Display headline */}
              <h1 className="font-extrabold tracking-tight leading-[0.90] mb-8">
                <span className="block text-[clamp(48px,9vw,118px)] text-[#111]">
                  <span className="word-reveal word-hover" style={{ animationDelay: "120ms" }}>Michael</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "240ms" }}>Do</span>                </span>
                <span className="block text-[clamp(34px,6vw,76px)] text-[#111]">
                  <span className="word-reveal word-hover" style={{ animationDelay: "440ms" }}>building</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "520ms" }}>products</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "600ms" }}>at</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "680ms" }}>scale</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "760ms" }}>and</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "840ms" }}>actually</span>{" "}
                  <span className="word-reveal word-hover" style={{ animationDelay: "920ms" }}>matter.</span>
                </span>
              </h1>

              {/* Subtext */}
              <div className="flex items-start gap-6 mb-10 max-w-xl">
                <div className="w-px h-12 bg-[#1a56ff] flex-shrink-0 mt-1 opacity-40" />
                <p className="text-sm md:text-base text-[#888] leading-relaxed">
                  8 years driving digital transformation in complex multi-market industries — shipping products that reach millions, reshape customer journeys, and bring AI from concept to production.
                </p>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 pb-12 border-b border-[#ebebeb]">
                {[
                  { display: `${count8}+`,   label: "Years in product",        yellow: true  },
                  { display: `${count5m}M+`, label: "Users on shipped products", yellow: false },
                  { display: `${count5}`,    label: "International markets",    yellow: false },
                ].map((s) => (
                  <div key={s.label}>
                    <div className={`text-3xl font-bold tabular-nums tracking-tight ${s.yellow ? "text-[#854d0e]" : "text-[#1a56ff]"}`}>
                      {s.display}
                    </div>
                    <div className="text-xs text-[#999] mt-1.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — career snapshot card */}
            <div className="hidden md:flex flex-col border border-[#ebebeb] rounded-2xl overflow-hidden mt-2">
              {/* Card header */}
              <div className="px-5 py-3.5 border-b border-[#ebebeb] bg-[#fafafa]">
                <p className="text-xs tracking-[0.14em] uppercase text-[#bbb] font-medium">Career</p>
              </div>
              {/* Entries */}
              <div className="divide-y divide-[#f4f4f4]">
                {[
                  {
                    company: "Scotiabank",
                    role: "Product Lead",
                    period: "2020 — Present",
                    current: true,
                  },
                  {
                    company: "Postmedia",
                    role: "Product Manager",
                    period: "2019 — 2020",
                    current: false,
                  },
                  {
                    company: "WellnessLiving",
                    role: "Product Manager",
                    period: "2019",
                    current: false,
                  },
                ].map((job) => (
                  <div key={job.company} className="px-5 py-4 flex items-start gap-3">
                    {/* Indicator dot */}
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${job.current ? "bg-[#fde047]" : "bg-[#e5e5e5]"}`} />
                    <div className="min-w-0">
                      <p className={`text-xs font-semibold truncate ${job.current ? "text-[#111]" : "text-[#666]"}`}>
                        {job.company}
                      </p>
                      <p className="text-xs text-[#aaa] mt-0.5">{job.role}</p>
                      <p className="text-xs text-[#ccc] mt-0.5">{job.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Previews ── */}
      <section className="relative z-10 px-6 pb-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-xs tracking-[0.15em] uppercase text-[#999]">Work Projects</p>
          <Link href="/work" className="text-xs text-[#999] hover:text-[#1a56ff] transition-colors">
            View all →
          </Link>
        </div>

        {/* Row 1 — portrait mobile apps (tall) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Scotia Wealth — wide portrait */}
          <Link href="/work#project-01"
            className="reveal-scale md:col-span-2 group flex flex-col rounded-2xl border border-[#ebebeb] overflow-hidden hover:border-[#1a56ff]/25 hover:shadow-[0_8px_32px_rgba(26,86,255,0.09)] transition-all duration-300">
            <div className="overflow-hidden bg-[#f5f5f5] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.scotiawealthmanagement.com/content/experience-fragments/scotiabank/swm/swm_app_and_web_lp/swm-app-lp---chapters---asset-mix---en/master/_jcr_content/root/section_container_co/section-container-par/image.img.png/1727804299664.png"
                alt="Scotia Wealth Management App"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-[#f4f4f4]">
              <div>
                <p className="text-xs text-[#bbb] mb-0.5">Scotiabank Digital · 01</p>
                <p className="text-sm font-semibold text-[#111] group-hover:text-[#1a56ff] transition-colors duration-200">
                  Scotia Wealth Management App
                </p>
                <p className="text-xs text-[#999] mt-1">200K wealth clients · 5 markets</p>
              </div>
              <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0 ml-4">→</span>
            </div>
          </Link>

          {/* Scotia Mobile — narrow portrait */}
          <Link href="/work#project-03"
            className="reveal-scale group flex flex-col rounded-2xl border border-[#ebebeb] overflow-hidden hover:border-[#1a56ff]/25 hover:shadow-[0_8px_32px_rgba(26,86,255,0.09)] transition-all duration-300"
            style={{ transitionDelay: "80ms" }}>
            <div className="overflow-hidden bg-[#f5f5f5] aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/scotia-mobile-home.webp"
                alt="Scotia Mobile Banking App"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-[#f4f4f4]">
              <div>
                <p className="text-xs text-[#bbb] mb-0.5">Scotiabank Digital · 03</p>
                <p className="text-sm font-semibold text-[#111] group-hover:text-[#1a56ff] transition-colors duration-200">
                  Scotia Mobile Banking
                </p>
                <p className="text-xs text-[#999] mt-1">3M+ active users</p>
              </div>
              <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0 ml-4">→</span>
            </div>
          </Link>
        </div>

        {/* Row 2 — landscape web platforms (wide) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Online Banking */}
          <Link href="/work#project-02"
            className="reveal-scale group flex flex-col rounded-2xl border border-[#ebebeb] overflow-hidden hover:border-[#1a56ff]/25 hover:shadow-[0_8px_32px_rgba(26,86,255,0.09)] transition-all duration-300"
            style={{ transitionDelay: "60ms" }}>
            <div className="overflow-hidden bg-[#f5f5f5] aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/scotiabank-online-banking.png"
                alt="Scotia Online Banking"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-[#f4f4f4]">
              <div>
                <p className="text-xs text-[#bbb] mb-0.5">Scotiabank Digital · 02</p>
                <p className="text-sm font-semibold text-[#111] group-hover:text-[#1a56ff] transition-colors duration-200">
                  Scotia Online Banking
                </p>
                <p className="text-xs text-[#999] mt-1">2M+ active users</p>
              </div>
              <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0 ml-4">→</span>
            </div>
          </Link>

          {/* National Post */}
          <Link href="/work#project-04"
            className="reveal-scale group flex flex-col rounded-2xl border border-[#ebebeb] overflow-hidden hover:border-[#1a56ff]/25 hover:shadow-[0_8px_32px_rgba(26,86,255,0.09)] transition-all duration-300"
            style={{ transitionDelay: "140ms" }}>
            <div className="overflow-hidden bg-[#f5f5f5] aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nationalpost-homepage.png"
                alt="National Post Relaunch"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-[#f4f4f4]">
              <div>
                <p className="text-xs text-[#bbb] mb-0.5">Postmedia Digital · 04</p>
                <p className="text-sm font-semibold text-[#111] group-hover:text-[#1a56ff] transition-colors duration-200">
                  National Post Relaunch
                </p>
                <p className="text-xs text-[#999] mt-1">130+ sites migrated</p>
              </div>
              <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0 ml-4">→</span>
            </div>
          </Link>

          {/* WellnessLiving */}
          <Link href="/work#project-05"
            className="reveal-scale group flex flex-col rounded-2xl border border-[#ebebeb] overflow-hidden hover:border-[#1a56ff]/25 hover:shadow-[0_8px_32px_rgba(26,86,255,0.09)] transition-all duration-300"
            style={{ transitionDelay: "220ms" }}>
            <div className="overflow-hidden bg-[#f5f5f5] aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2021/09/booking-online-1@2x.webp?x69407"
                alt="WellnessLiving Marketplace"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-[#f4f4f4]">
              <div>
                <p className="text-xs text-[#bbb] mb-0.5">WellnessLiving · 05</p>
                <p className="text-sm font-semibold text-[#111] group-hover:text-[#1a56ff] transition-colors duration-200">
                  Booking & Marketplace
                </p>
                <p className="text-xs text-[#999] mt-1">8% increase in bookings</p>
              </div>
              <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0 ml-4">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CTA Grid ── */}
      <section ref={ctaRef} className="relative z-10 px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="reveal group border border-[#ebebeb] rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[220px] hover:border-[#1a56ff]/30 hover:bg-[#eff3ff]/30 hover:shadow-[0_8px_40px_rgba(26,86,255,0.10)] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon + arrow */}
              <div className="flex items-start justify-between mb-6">
                <div className="opacity-55 group-hover:opacity-100 transition-opacity duration-300">
                  {link.icon}
                </div>
                <span className="text-[#ddd] group-hover:text-[#1a56ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg mt-1">
                  →
                </span>
              </div>
              {/* Text */}
              <div>
                <h2 className="text-xl font-bold text-[#111] mb-1.5 tracking-tight group-hover:text-[#1a56ff] transition-colors duration-300">
                  {link.label}
                </h2>
                <p className="text-sm text-[#999] leading-relaxed">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
