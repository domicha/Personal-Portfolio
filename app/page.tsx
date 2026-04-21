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
    label: "AI Projects",
    description: "AI-powered features, personalization, and intelligent automation.",
    href: "/ai",
    icon: <AIIcon />,
  },
  {
    index: "03",
    label: "Resume",
    description: "8+ years of product leadership across financial services and beyond.",
    href: "/experience",
    icon: <ExperienceIcon />,
  },
  {
    index: "04",
    label: "About & Contact",
    description: "Who I am, how I work, and how to reach me.",
    href: "/contact",
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
    ctaRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

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
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-[#fde047] text-[#713f12] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#854d0e]" style={{ animation: "icon-node-pulse 2s ease-in-out infinite" }} />
                Open to senior and leadership product roles
              </div>

              {/* Display headline */}
              <h1 className="font-extrabold tracking-tight leading-[0.90] mb-8">
                <span className="block text-[clamp(48px,9vw,118px)] text-[#111]">
                  <span className="word-reveal" style={{ animationDelay: "120ms" }}>Michael</span>{" "}
                  <span className="word-reveal" style={{ animationDelay: "240ms" }}>Do</span>                </span>
                <span className="block text-[clamp(34px,6vw,76px)] text-[#ccc]">
                  <span className="word-reveal" style={{ animationDelay: "440ms" }}>building</span>{" "}
                  <span className="word-reveal" style={{ animationDelay: "540ms" }}>digital</span>
                </span>
                <span className="block text-[clamp(34px,6vw,76px)] text-[#111]">
                  <span className="word-reveal" style={{ animationDelay: "640ms" }}>products</span>{" "}
                  <span className="word-reveal" style={{ animationDelay: "740ms" }}>at</span>{" "}
                  <span className="word-reveal text-blue-shimmer" style={{ animationDelay: "860ms" }}>scale.</span>
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
              <div ref={statsRef} className="flex flex-wrap gap-10 pb-12 border-b border-[#ebebeb]">
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
