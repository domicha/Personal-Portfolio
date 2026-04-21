"use client";

import { useState } from "react";

const links = [
  { label: "ddomichael.work@gmail.com", href: "mailto:ddomichael.work@gmail.com" },
  { label: "linkedin.com/in/domicha", href: "https://www.linkedin.com/in/domicha" },
  { label: "647-686-7675", href: "tel:6476867675" },
];

const values = [
  {
    title: "Strategy meets execution",
    body: "I bridge the gap between long-term vision and day-to-day delivery — setting clear direction while staying close enough to the work to unblock teams and make fast decisions.",
  },
  {
    title: "Clarity in complexity",
    body: "Whether navigating multi-jurisdictional compliance, aligning 5 markets, or synthesizing messy user data — I thrive on turning ambiguity into a crisp problem statement and a path forward.",
  },
  {
    title: "People-first leadership",
    body: "I invest heavily in the people around me. Coaching PMs, building trust with engineering partners, and creating conditions for cross-functional teams to do their best work is core to how I operate.",
  },
];

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ddomichael.work@gmail.com?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AReply to: ${form.email}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="min-h-screen">

      {/* ── Hero: Photo + Intro ── */}
      <section className="max-w-6xl mx-auto px-6 pt-14">
        <div className="grid md:grid-cols-2 gap-0">

          {/* Left — Photo */}
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/michael-headshot.jpg"
              alt="Michael Do"
              className="w-full h-64 md:h-[520px] object-cover object-top"
            />
            {/* Subtle bottom fade on desktop */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Right — Content */}
          <div className="md:pl-16 py-10 md:py-14 flex flex-col justify-center">
            <p className="text-xs tracking-[0.18em] uppercase text-[#999] mb-5">
              Product Manager · Toronto
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.04] mb-7">
              Michael Do
            </h1>
            <p className="text-lg text-[#555] leading-relaxed mb-6">
              Strategic product leader with 8 years building digital products
              at scale — across financial services, media, and SaaS.
            </p>
            <p className="text-base text-[#777] leading-relaxed mb-6">
              I&apos;ve shipped a unified mobile banking app to 3M+ Canadians,
              launched a wealth platform across 5 international markets, and led
              AI-powered personalization features that moved the needle on
              activation, engagement, and revenue.
            </p>
            <p className="text-base text-[#777] leading-relaxed mb-10">
              My leadership style blends strategic vision with hands-on
              execution — equally comfortable presenting to executives and
              working through technical decisions with an engineering team.
            </p>

            {/* Quick facts */}
            <div className="space-y-3 border-t border-[#ebebeb] pt-8">
              {[
                { label: "Currently", value: "Product Lead · Scotiabank Digital" },
                { label: "Open to", value: "Senior PM & product leadership roles" },
                { label: "Location", value: "Toronto — open to relocation" },
              ].map((f) => (
                <div key={f.label} className="flex gap-6 text-sm">
                  <span className="text-[#bbb] w-20 flex-shrink-0">{f.label}</span>
                  <span className="text-[#555]">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-[#ebebeb] max-w-6xl mx-auto px-6 py-10">
        <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-8">
          How I work
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-[#111] pt-6">
              <h3 className="text-base font-bold text-[#111] mb-3">{v.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="border-t border-[#ebebeb] max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-14">
          Let&apos;s build something great.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Links */}
          <div>
            <p className="text-base text-[#666] leading-relaxed mb-10 max-w-sm">
              Open to senior product leadership roles, advisory work, and
              conversations about interesting product challenges.
            </p>
            <div className="border-t border-[#ebebeb]">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-4 border-b border-[#ebebeb] group hover:pl-1 transition-all duration-200"
                >
                  <span className="text-sm text-[#666] group-hover:text-[#1a56ff] transition-colors">
                    {l.label}
                  </span>
                  <span className="text-[#ccc] group-hover:text-[#1a56ff] group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="border border-[#ebebeb] rounded-xl p-10 text-center">
                <p className="text-xl font-bold text-[#111] mb-2">Message sent.</p>
                <p className="text-sm text-[#888]">Thanks — I&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#999] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm text-[#111] placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#999] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm text-[#111] placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#999] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm text-[#111] placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors resize-none"
                    placeholder="What are you working on?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#1a56ff] text-white text-sm font-medium hover:bg-[#1240d6] transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

    </main>
  );
}
