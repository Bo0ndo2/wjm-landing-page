const services = [
  {
    title: "Application and Website Development",
    text: "Discovery, UX, architecture, build, test, deploy, and operate modern apps and sites end-to-end.",
  },
  {
    title: "Cloud and Platform Services",
    text: "Cloud strategy, migration, IaC, Kubernetes, and cost optimization for reliable scale.",
  },
  {
    title: "Security and Risk",
    text: "Security architecture, SOC, vulnerability management, and compliance across your stack.",
  },
];

function ServiceIcon() {
  return (
    <svg className="w-5 h-5 text-[#2272a3]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.1 4.5 4.9.7-3.6 3.4.9 5-4.3-2.4-4.3 2.4.9-5-3.6-3.4 4.9-.7L12 2z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#2272a3] mb-3">Featured Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Application-led delivery with full IT coverage
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            These highlight the most requested engagements, backed by a full catalog of 18 services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl bg-[#f4f2fa] border border-slate-100 p-6 soft-card">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4">
                <ServiceIcon />
              </div>
              <h3 className="font-display text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
