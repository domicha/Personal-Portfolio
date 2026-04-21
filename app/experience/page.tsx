import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Michael Do",
};

const experience = [
  {
    company: "Scotiabank Digital",
    role: "Product Lead — Wealth Management",
    period: "Oct 2024 — Present",
    location: "Toronto, ON",
    bullets: [
      "Define and drive product strategy across Canada, Mexico, Chile, Peru, and the Caribbean, aligning global stakeholders on execution, scalability, and long-term vision.",
      "Launched the Canadian Wealth management app enabling 200,000 wealth clients to access in-depth portfolio details.",
      "Lead roadmap for self-service trading, full-service wealth management, and market data integration.",
      "Directed API strategy, designing standardized contracts that reduced duplication and accelerated delivery timelines.",
      "Managed vendor and partner relationships to deliver data-driven solutions that elevate advisor effectiveness.",
      "Partnered with compliance, legal, and risk teams to ensure products adhered to multi-jurisdictional regulations.",
    ],
  },
  {
    company: "Scotiabank Digital",
    role: "Senior Product Manager — Retail & Business Platforms",
    period: "Aug 2021 — Sep 2024",
    location: "Toronto, ON",
    bullets: [
      "Delivered the new Scotiabank web client platform adopted by 2 million+ active Canadians through a full GTM rollout.",
      "Owned strategy and roadmap for mobile app and web platforms, increasing engagement by 12% YoY.",
      "Championed A/B testing and experimentation: +20 NPS, 30% reduction in user friction, 20% growth in international money transfers.",
      "Spearheaded AI/ML personalization initiatives, achieving a 15% uplift in activation and clickthrough rates.",
      "Mentored and coached PMs and cross-functional leads across the organization.",
    ],
  },
  {
    company: "Scotiabank Digital",
    role: "Product Manager — Retail & Business Platforms",
    period: "Oct 2020 — Jul 2021",
    location: "Toronto, ON",
    bullets: [
      "Delivered a new unified mobile app experience adopted by 3 million+ active users, increasing engagement by 20%.",
      "Owned product strategy and GTM for InfoAlerts, SelectPay (BNPL), and Money Movement, driving a 10% revenue lift.",
      "Introduced AI-powered bill payment features that improved transaction success by 7%.",
      "Collaborated with analytics teams to translate large datasets into actionable segmentation insights.",
    ],
  },
  {
    company: "Postmedia Digital",
    role: "Product Manager — News & Engagement",
    period: "Aug 2019 — Sep 2020",
    location: "Toronto, ON",
    bullets: [
      "Led 10+ engineers and designers to relaunch 130+ media brand sites (WordPress → Python/Django), achieving 27% engagement growth and 40% operational cost reduction.",
      "Partnered with monetization teams to optimize ad inventory, improving CTR by 22%.",
      "Developed GTM strategy with editorial and senior leadership, emphasizing advertiser value and improved UX.",
    ],
  },
  {
    company: "WellnessLiving Systems",
    role: "Product Manager — SaaS Platform",
    period: "Mar 2019 — Jul 2019",
    location: "Toronto, ON",
    bullets: [
      "Defined vision and roadmap for a SaaS fitness platform across mobile and web.",
      "Launched redesigned marketplace and booking flows, increasing client bookings by 8%.",
      "Integrated payments with external partners, creating a new recurring revenue stream.",
    ],
  },
];

const skills = [
  { category: "Strategy", items: ["Product Vision", "Roadmapping", "OKRs", "Business Cases", "GTM"] },
  { category: "Discovery", items: ["User Research", "JTBD", "Journey Mapping", "Competitive Analysis"] },
  { category: "Delivery", items: ["Agile / Scrum", "A/B Testing", "Experimentation", "API Strategy"] },
  { category: "Domain", items: ["Fintech", "Wealth Management", "Digital Banking", "SaaS", "Media"] },
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
          download
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
