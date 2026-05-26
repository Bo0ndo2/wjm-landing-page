export default function CTA() {
  return (
    <section id="contact" className="relative z-10 bg-[#f6f5fb] py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#14324d] via-[#2272a3] to-[#4aa0d9] px-8 py-10 md:px-12 md:py-12 text-white">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">Request Intake</p>
              <h2 className="font-display text-3xl md:text-4xl mb-2">
                Let's Plan and Deliver Your Next Release
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-xl">
                Share your requirements, and we will scope, plan, and deliver with clear SLAs.
              </p>
            </div>
            <a
              href="mailto:info@wjm.com"
              className="bg-white text-[#2272a3] px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Email WJM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
