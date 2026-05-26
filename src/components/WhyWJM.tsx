import {
  Activity,
  AlertTriangle,
  Building2,
  ClipboardList,
  Code2,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  PenTool,
  Repeat2,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smile,
  TestTube2,
  Timer,
  Wrench,
  Zap,
} from "lucide-react";

const slaHighlights = [
  {
    title: "Support hours",
    desc: "Business hours support with 24/7 coverage for production critical incidents.",
  },
  {
    title: "Escalation path",
    desc: "On-call Tier 2, DevOps, and SRE then Engineering Manager then Head of Applications.",
  },
  {
    title: "Release governance",
    desc: "Scheduled change windows with rollback plans and verified runbooks.",
  },
];

const slaTargets = [
  { label: "Non-production response", value: "8 business hours" },
  { label: "Non-production resolution", value: "5 business days" },
  { label: "Production response", value: "15-60 minutes" },
  { label: "P1 restore target", value: "4 hours" },
];

const kpis = [
  {
    title: "Availability and uptime",
    note: "Service reliability targets by tier.",
    icon: Activity,
  },
  {
    title: "Mean time to recover (MTTR)",
    note: "Speed of incident restoration.",
    icon: Timer,
  },
  {
    title: "Time to interactive (TTI)",
    note: "Performance experience for users.",
    icon: Gauge,
  },
  {
    title: "Error rate (5xx)",
    note: "Quality and stability monitoring.",
    icon: AlertTriangle,
  },
  {
    title: "Deployment frequency",
    note: "Release cadence by product.",
    icon: GitBranch,
  },
  {
    title: "Test coverage and accessibility",
    note: "Quality and compliance checkpoints.",
    icon: ShieldCheck,
  },
  {
    title: "User satisfaction (NPS and CSAT)",
    note: "Feedback-driven improvements.",
    icon: Smile,
  },
];

const leadTimes = [
  { label: "Marketing site", value: "2-8 weeks", icon: Code2 },
  { label: "MVP web app", value: "8-16 weeks", icon: Rocket },
  { label: "Enterprise app", value: "3-12+ months", icon: Building2 },
  { label: "Expedited path", value: "Reduced scope, parallel streams", icon: Zap },
];

const techStack = [
  {
    title: "Front-end",
    icon: Code2,
    items: ["JavaScript and TypeScript", "React and Next.js", "Vue or Angular", "Tailwind CSS"],
  },
  {
    title: "Back-end and APIs",
    icon: Server,
    items: ["Node.js and Python", "REST and GraphQL", "Java or .NET", "Microservices patterns"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL and MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "DevOps and Platform",
    icon: GitBranch,
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    title: "Observability",
    icon: LineChart,
    items: ["Prometheus and Grafana", "ELK or Loki", "OpenTelemetry", "APM tooling"],
  },
  {
    title: "Security",
    icon: Lock,
    items: ["OWASP controls", "SAST and DAST", "IAM and secrets", "WAF and DDoS"],
  },
];

const processSteps = [
  { title: "Discovery and requirements", icon: Search },
  { title: "UX, UI, and prototyping", icon: PenTool },
  { title: "Architecture and security review", icon: Layers },
  { title: "Implementation and testing", icon: TestTube2 },
  { title: "CI/CD, release, and run", icon: Repeat2 },
  { title: "Maintenance and optimization", icon: Wrench },
];

const deliverables = [
  { title: "Functional and API specifications", icon: FileText },
  { title: "Architecture diagrams and data models", icon: Layers },
  { title: "Design system components", icon: PenTool },
  { title: "CI/CD and IaC definitions", icon: GitBranch },
  { title: "Test plans and security assessments", icon: ShieldCheck },
  { title: "Runbooks and monitoring dashboards", icon: ClipboardList },
];

export default function WhyWJM() {
  return (
    <section id="slas" className="relative z-10">
      <div className="relative overflow-hidden bg-linear-to-br from-[#14324d] via-[#2272a3] to-[#4aa0d9] py-20 px-5">
        <div className="absolute inset-0 dot-pattern opacity-35" />
        <div className="relative max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Support and SLAs</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
            Operational coverage with clear targets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {slaHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">Sample SLA targets</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {slaTargets.map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm text-white/85">
                  <span>{row.label}</span>
                  <span className="font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white py-20 px-5">
        <div className="absolute -top-16 right-10 w-48 h-48 rounded-full bg-[#2272a3]/10 blur-3xl animate-pulse-soft" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.55fr,0.45fr] gap-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2272a3]">
              <span className="w-6 h-0.5 bg-[#2272a3] rounded-full" />
              KPIs and Success Metrics
            </div>
            <h3 className="font-display text-3xl text-slate-900 mt-3">Metrics we track</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                <div
                  key={kpi.title}
                  className="section-card group rounded-2xl bg-white border border-slate-100 p-5 soft-card animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f3fb] border border-[#cfe6f5] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#2272a3] transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#2272a3]">KPI</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{kpi.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{kpi.note}</div>
                  <div className="mt-4 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-3/4 bg-linear-to-r from-[#2272a3] via-[#4aa0d9] to-[#b7e3fb]" />
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2272a3]">
              <span className="w-6 h-0.5 bg-[#2272a3] rounded-full" />
              Typical Lead Times
            </div>
            <h3 className="font-display text-3xl text-slate-900 mt-3">Planning guidance</h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {leadTimes.map((item, index) => {
                const Icon = item.icon;
                return (
                <div
                  key={item.label}
                  className="section-card group rounded-2xl border border-slate-100 bg-[#f6f5fb] px-5 py-4 flex items-center justify-between animate-fade-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#2272a3] transition-transform group-hover:-rotate-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                      <div className="text-xs text-slate-500">Delivery window</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#1a4f79] bg-white border border-slate-100 px-3 py-1.5 rounded-full">
                    {item.value}
                  </span>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="stack" className="relative overflow-hidden bg-[#f6f7fb] py-20 px-5">
        <div className="absolute -bottom-16 left-10 w-52 h-52 rounded-full bg-[#2272a3]/10 blur-3xl animate-pulse-soft" />
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2272a3]">
            <span className="w-6 h-0.5 bg-[#2272a3] rounded-full" />
            Recommended Tech Stack
          </div>
          <h3 className="font-display text-3xl text-slate-900 mt-3">Modern tools across every layer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {techStack.map((group, index) => {
              const Icon = group.icon;
              return (
              <div
                key={group.title}
                className="section-card group rounded-2xl bg-white border border-slate-100 p-6 soft-card animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2272a3] text-white flex items-center justify-center">
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-display text-lg text-slate-900">{group.title}</h4>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2272a3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="process" className="relative overflow-hidden bg-white py-20 px-5">
        <div className="absolute -top-16 left-16 w-44 h-44 rounded-full bg-[#2272a3]/10 blur-3xl animate-pulse-soft" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.55fr,0.45fr] gap-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2272a3]">
              <span className="w-6 h-0.5 bg-[#2272a3] rounded-full" />
              Process
            </div>
            <h3 className="font-display text-3xl text-slate-900 mt-3">How we deliver</h3>
            <div className="mt-6 space-y-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                <div
                    key={step.title}
                  className="section-card rounded-2xl border border-slate-100 bg-[#f6f7fb] px-4 py-4 flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-sm font-semibold text-[#2272a3]">
                      <Icon className="w-4 h-4" />
                  </div>
                  <div>
                      <div className="font-medium text-slate-900">{step.title}</div>
                    <div className="text-xs text-slate-500 mt-1">Stage {index + 1}</div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2272a3]">
              <span className="w-6 h-0.5 bg-[#2272a3] rounded-full" />
              Deliverables
            </div>
            <h3 className="font-display text-3xl text-slate-900 mt-3">Artifacts you receive</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                <div
                    key={item.title}
                  className="section-card rounded-2xl border border-slate-100 bg-[#f6f7fb] px-4 py-4 text-sm text-slate-700 flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[11px] font-semibold text-[#2272a3]">
                      <Icon className="w-4 h-4" />
                  </span>
                    <span>{item.title}</span>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
