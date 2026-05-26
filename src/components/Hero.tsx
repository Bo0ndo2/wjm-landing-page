export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-5 overflow-hidden">
      <div className="absolute inset-0 hero-aurora" />
      <div className="absolute -top-12 right-16 w-44 h-44 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 left-10 w-56 h-56 rounded-full bg-[#2a0a6b]/40 blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <div className="hero-panel rounded-[28px] px-8 py-12 md:px-16 md:py-16 text-center overflow-hidden">
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              WJM Telecom and IT
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-up">
              End-to-end IT Services
              <br />Built for Modern Teams
            </h1>

            <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-up">
              From application and website development to cloud, security, and operations, our catalog covers every
              layer of delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-3 animate-fade-up">
              <a
                href="#catalog"
                className="bg-white text-[#2272a3] px-7 py-3 rounded-xl font-semibold shadow-lg"
              >
                View Catalog
              </a>
              <a
                href="#contact"
                className="border border-white/30 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Request Intake
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
