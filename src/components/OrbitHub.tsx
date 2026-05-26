const orbitServices = [
  "Applications and Websites",
  "Cloud and Platform",
  "Security and Risk",
  "Networking",
  "Hosting and Maintenance",
  "Data and Analytics",
  "Payments and Banking",
  "SMS and Telecom APIs",
  "PBX and VoIP",
  "Collaboration Platforms",
  "Service Desk",
  "Governance and GRC",
];

const orbitNodes = orbitServices.map((label, index) => ({
  label,
  angle: -90 + index * (360 / orbitServices.length),
}));

const baseWidth = 640;
const baseHeight = 520;
const centerX = baseWidth / 2;
const centerY = baseHeight / 2;
const radius = 200;

function polarToXY(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function OrbitHub() {
  return (
    <section id="catalog" className="relative z-10 bg-[#f6f5fb] py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#2272a3] mb-3">Service Network</p>
          <h2 className="font-display text-3xl md:text-4xl text-slate-900">
            Services around the WJM core
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            A unified ecosystem with every service aligned around your business.
          </p>
        </div>

        <div className="relative">
          <div
            className="relative mx-auto w-full transform origin-center scale-90 sm:scale-95 md:scale-100"
            style={{ maxWidth: baseWidth, aspectRatio: "640 / 520" }}
          >
            <svg viewBox={`0 0 ${baseWidth} ${baseHeight}`} className="absolute inset-0 w-full h-full">
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="rgba(34,114,163,0.5)" />
                </marker>
              </defs>
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="rgba(34,114,163,0.18)"
                strokeDasharray="6 8"
              />
              {orbitNodes.map((node) => {
                const { x, y } = polarToXY(centerX, centerY, radius - 16, node.angle);
                return (
                  <line
                    key={node.label}
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="rgba(34,114,163,0.25)"
                    strokeWidth="1"
                    markerEnd="url(#arrow)"
                  />
                );
              })}
            </svg>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/95 border border-[#cfe6f5] px-6 py-5 shadow-xl animate-float"
            >
              <img
                src="/logo%20with%20word.png"
                alt="WJM logo"
                className="h-16 w-auto"
              />
            </div>

            {orbitNodes.map((node, index) => {
              const { x, y } = polarToXY(centerX, centerY, radius, node.angle);
              const left = `${(x / baseWidth) * 100}%`;
              const top = `${(y / baseHeight) * 100}%`;
              return (
                <div
                  key={node.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-32 sm:w-36 md:w-40 text-center"
                  style={{ left, top, animationDelay: `${index * 40}ms` }}
                >
                  <div className="group rounded-full bg-white border border-slate-100 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:text-[#1a4f79] animate-fade-up leading-snug">
                    {node.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
