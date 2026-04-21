import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Projects — Michael Do",
};

const projects = [
  {
    index: "01",
    company: "Scotiabank Digital",
    period: "2021 — 2024",
    title: "AI/ML Personalization Engine",
    summary:
      "Spearheaded a personalization initiative to surface contextually relevant content, offers, and nudges to banking customers across the Scotiabank mobile and web platforms. Partnered with data science and ML engineering teams to define feature requirements, establish experimentation guardrails, and iterate on model outputs.",
    outcome:
      "The personalization engine delivered a 15% uplift in activation and clickthrough rates. It became a core component of the platform's engagement strategy, informing downstream product decisions across retail and wealth segments.",
    impact: [
      { metric: "15%", label: "uplift in activation & clickthrough" },
      { metric: "12%", label: "YoY engagement increase" },
      { metric: "2M+", label: "users reached" },
    ],
    tags: ["AI/ML", "Personalization", "Experimentation", "Fintech"],
  },
  {
    index: "02",
    company: "Scotiabank Digital",
    period: "2020 — 2021",
    title: "AI-Powered Bill Payment Features",
    summary:
      "Identified a pattern of failed bill payment transactions through analytics and user research. Defined and shipped an AI-powered prediction layer that proactively flagged likely payment failures—prompting users to review details before submission. Worked closely with engineering and compliance to ensure the model operated within regulatory boundaries.",
    outcome:
      "Transaction success rates improved by 7%, reducing customer service contacts and increasing trust in the platform's core money movement features.",
    impact: [
      { metric: "7%", label: "improvement in transaction success" },
      { metric: "↓", label: "customer service contacts" },
      { metric: "3M+", label: "active mobile users benefiting" },
    ],
    tags: ["AI", "Payments", "Predictive Features", "Mobile"],
  },
  {
    index: "03",
    company: "Scotiabank Digital",
    period: "2021 — 2024",
    title: "Experimentation Culture & A/B Testing Programme",
    summary:
      "Championed the adoption of structured experimentation across Scotiabank's retail and business platforms. Defined experiment frameworks, hypothesis templates, and success metrics. Enabled teams to run controlled experiments at scale, transforming product decisions from intuition-led to evidence-based.",
    outcome:
      "Achieved a 30% reduction in user friction and 20% growth in international money transfer usage through iterative experimentation. Established experimentation as a first-class practice across multiple product squads.",
    impact: [
      { metric: "30%", label: "reduction in user friction" },
      { metric: "20%", label: "growth in money transfers" },
      { metric: "+20", label: "NPS points gained" },
    ],
    tags: ["Experimentation", "A/B Testing", "Data-Driven", "Growth"],
  },
  {
    index: "04",
    company: "Scotiabank Digital",
    period: "2024 — Present",
    title: "Data-Driven Wealth Advisory Platform",
    summary:
      "Led the integration of market data and analytics into the Scotiabank Wealth platform to improve advisor effectiveness and client communication. Managed vendor relationships and defined requirements for data pipelines that surface portfolio insights in real time.",
    outcome:
      "Enabled 200,000 wealth clients to access in-depth portfolio details independently, reducing advisor overhead for routine queries and allowing advisors to focus on high-value relationship work.",
    impact: [
      { metric: "200K", label: "clients with self-serve portfolio access" },
      { metric: "5", label: "markets with live market data integration" },
      { metric: "↑", label: "advisor effectiveness metrics" },
    ],
    tags: ["Wealth Tech", "Data Integration", "Market Data", "Advisory"],
  },
];

export default function AIPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 pb-10 border-b border-[#ebebeb]">
        <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">AI & data</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111] mb-4">
          AI Projects
        </h1>
        <p className="text-sm text-[#888] max-w-xl leading-relaxed">
          AI-powered features, personalization systems, and data-driven product
          decisions shipped across millions of users in regulated industries.
        </p>
      </div>

      {/* Projects */}
      <div className="divide-y divide-[#ebebeb]">
        {projects.map((p) => (
          <div key={p.index} className="py-14">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Meta */}
              <div className="md:col-span-3">
                <div className="text-3xl font-extrabold text-[#ebebeb] tabular-nums mb-4">
                  {p.index}
                </div>
                <p className="text-xs text-[#999] mb-0.5">{p.company}</p>
                <p className="text-xs text-[#bbb]">{p.period}</p>
              </div>

              {/* Content */}
              <div className="md:col-span-9">
                <h2 className="text-xl md:text-2xl font-bold text-[#111] mb-4 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{p.summary}</p>
                <p className="text-sm text-[#888] leading-relaxed mb-8">
                  <span className="font-medium text-[#444]">Outcome: </span>
                  {p.outcome}
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
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill text-xs px-3 py-1 rounded-full border border-[#ebebeb] text-[#888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
