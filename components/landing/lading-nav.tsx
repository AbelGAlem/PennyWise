import Image from "next/image"
import Link from "next/link"

const LandingNavBar = () => {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-full border border-white/10 bg-white/4 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex gap-3">
              <Image  src="/logo.svg" alt="Logo" height={26} width={26}/>
              <div className="text-2xl font-semibold tracking-wider">
                PennyWise
              </div>
            </div>

            <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
              <a className="transition hover:text-white" href="#">
                Why Us
              </a>
              <a className="transition hover:text-white" href="#">
                How It Works
              </a>
              <a className="transition hover:text-white" href="#">
                Connect
              </a>
              <a className="transition hover:text-white" href="#">
                Pricing
              </a>
              <a className="transition hover:text-white" href="#">
                Contact
              </a>
            </nav>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Get started <span className="text-black/70">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LandingNavBar
