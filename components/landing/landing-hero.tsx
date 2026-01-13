
const LandingHero = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-14 text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
          NEW
        </span>
        <span>AI Insights now available</span>
      </div>

      <h1 className="mt-10 text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        Take control of your money.
        <br className="hidden sm:block" />
        <span className="text-emerald-300 italic">Effortlessly.</span>
      </h1>

      <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
          Join thousands who have transformed their financial lives with financial tracking, 
          smart insights, and bank integration.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_40px_rgba(0,0,0,0.55)] transition hover:bg-white/90"
        >
          Get started
        </a>
        <a
          href="#"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 px-7 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/6 hover:text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default LandingHero
