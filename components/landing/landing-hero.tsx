import Link from "next/link"

const LandingHero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden px-6 pt-14 text-center min-h-130">

      <div className="spline-container pointer-events-none absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs"
          frameBorder="0"
          className="h-full w-full"
          id="aura-spline"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
            NEW
          </span>
          <span>AI Insights Incoming...</span>
        </div>

        <h1 className="mt-10 text-balance text-4xl mx-4 font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Take control of your money.
          <br className="hidden sm:block" />
          <span className="text-emerald-300 italic">Effortlessly.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
          Join thousands who have transformed their financial lives with financial tracking,
          smart insights, and bank integration.
        </p>

        <div className="mt-12 flex flex-row items-center gap-4 ">
          <Link
            href="/sign-up"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_40px_rgba(0,0,0,0.55)] transition hover:bg-white/90"
          >
            Get started
          </Link>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 px-7 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/6 hover:text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="h-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black to-transparent"></div>
    </section>
  )
}

export default LandingHero
