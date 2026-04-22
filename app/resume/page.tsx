import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Michael Do",
};

const experience = [
  {
    company: "Scotiabank Digital",
    role: "Product Lead, Domestic and International Digital Platforms",
    period: "Oct 2024 — Present",
    location: "Toronto, ON",
    bullets: [
      "Lead product strategy for a digital platform across 5 international markets supporting 40K wealth clients and $436B in AUM. Launched the Canadian Wealth Management app to 25K Canadian clients.",
      "Own client onboarding and Direct Investing acquisition outcomes: grew funded accounts 14% in the first month, improved onboarding completion 30% to 45%, and cut time-to-first-trade from 4 days to 1.5 days.",
      "Owned a multi-quarter roadmap for self-service transactions, advisor workflows, and real-time data integrations.",
      "Directly manage 2 PMs and 2 business analysts, setting priorities, coaching on craft, and building the senior PM bench.",
      "Drove executive alignment on standardized data models, design patterns, and reusable frameworks, cutting duplicate build across markets and accelerating time-to-market.",
      "Partnered with compliance, legal, and risk to ship products in highly regulated, multi-jurisdictional environments at pace.",
      "Led API and service-layer strategy with engineering, defining standardized contracts that cut duplicate work.",
    ],
  },
  {
    company: "Scotiabank Digital",
    role: "Senior Product Manager, Retail & Business Platforms",
    period: "Aug 2021 — Sep 2024",
    location: "Toronto, ON",
    bullets: [
      "Delivered the new Scotiabank web client platform for Canadians adopted by 2 million+ active users through the GTM rollout.",
      "Owned strategy and roadmap for mobile app and web platforms, increasing engagement by 12% YoY.",
      "Championed A/B testing and experimentation, achieving +20 NPS, 30% less user friction, and 20% growth in money transfers.",
      "Used customer research, competitive analysis, and performance data to identify growth opportunities and shape roadmap priorities.",
      "Led modernization of a legacy platform with a phased roadmap and migration strategy that de-risked delivery for existing users.",
      "Mentored and coached PMs and cross-functional leads, strengthening organizational product craft and leadership pipeline.",
    ],
  },
  {
    company: "Scotiabank Digital",
    role: "Product Manager, Retail & Business Platforms",
    period: "Oct 2020 — Jul 2021",
    location: "Toronto, ON",
    bullets: [
      "Delivered a new unified mobile app experience adopted by 3 million+ active users, increasing engagement by 20%.",
      "Owned product strategy and GTM for InfoAlerts, SelectPay (BNPL), and Money Movement, driving a 10% revenue lift.",
      "Introduced AI-powered bill payment features that improved transaction success by 7%.",
      "Partnered with analytics teams to turn large data sets into insights, shaping segmentation across retail, SMB, and wealth.",
      "Shipped go-to-market initiatives that raised customer satisfaction scores and reduced downstream support and operational costs.",
    ],
  },
  {
    company: "Postmedia Digital",
    role: "Product Manager, News & Engagement",
    period: "Aug 2019 — Sep 2020",
    location: "Toronto, ON",
    bullets: [
      "Led a cross-functional team of 10+ engineers and designers to relaunch 130+ media brand sites, moving from WordPress to Python/Django; +27% engagement, -40% cost.",
      "Partnered with monetization teams to optimize ad inventory, improving CTR by 22%.",
      "Developed GTM strategy in collaboration with editorial and senior leadership, emphasizing advertiser value and improved UX.",
    ],
  },
  {
    company: "WellnessLiving Systems",
    role: "Product Manager, SaaS Platform",
    period: "Mar 2019 — Jul 2019",
    location: "Toronto, ON",
    bullets: [
      "Defined vision and roadmap for SaaS fitness software across mobile and web platforms, driving adoption with small businesses.",
      "Launched redesigned marketplace and booking flows, increasing client bookings by 8%.",
      "Integrated payments enablement with external partners, creating a new recurring revenue stream.",
    ],
  },
];

const skills = [
  {
    category: "AI & Emerging Tech",
    items: ["Claude", "Cursor", "LLM-powered features", "Prompt Engineering", "Vibe Coding", "AI-assisted Prototyping"],
  },
  {
    category: "Product Management",
    items: ["Roadmapping", "OKRs", "GTM", "Agile / Scrum", "Discovery", "A/B Testing", "Competitive Analysis"],
  },
  {
    category: "Leadership",
    items: ["People Management", "Coaching & Mentoring", "Cross-functional Leadership", "Executive Stakeholder Mgmt"],
  },
  {
    category: "Tools",
    items: ["Jira", "Confluence", "Figma", "SQL", "Adobe Analytics", "Tableau", "API Design"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 pb-10 border-b border-[#ebebeb] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">Background</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111]">
            Experience
          </h1>
        </div>
        <a
          href="/resume.pdf"
          download="Michael_Do_Resume_2026.pdf"
          className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-full bg-[#1a56ff] text-white hover:bg-[#1240d6] hover:shadow-[0_4px_20px_rgba(26,86,255,0.35)] active:scale-95 transition-all duration-200 w-fit"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="md:col-span-2">
          <div className="divide-y divide-[#ebebeb]">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`} className="py-10">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <p className="text-xs text-[#999] mb-0.5">{job.company}</p>
                    <h3 className="text-base font-semibold text-[#111]">{job.role}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#666]">{job.period}</p>
                    <p className="text-xs text-[#bbb]">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-[#666] leading-relaxed flex gap-2.5">
                      <span className="text-[#1a56ff] flex-shrink-0 mt-1.5 text-xs opacity-50">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education */}
            <div className="py-10">
              <p className="text-xs text-[#999] mb-0.5">York University</p>
              <h3 className="text-base font-semibold text-[#111]">Bachelor of Finance</h3>
              <p className="text-sm text-[#666] mt-0.5">2012 – 2016</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-5">
          <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-6">Skills</p>
          {skills.map((group) => (
            <div key={group.category} className="border border-[#ebebeb] rounded-xl p-5">
              <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#bbb] mb-3">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="tag-pill text-xs px-2.5 py-1 rounded-full border border-[#ebebeb] text-[#666]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
