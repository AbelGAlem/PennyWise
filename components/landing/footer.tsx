import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white">
      <div id="pricing" className="sr-only" />
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Logo" height={26} width={26} />
                <div className="text-lg font-semibold tracking-wide">
                  PennyWise
                </div>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                Track transactions, budgets, and net worth in one place. Get clear
                insights and stay in control, without spreadsheets.
              </p>
            </div>

            <div className="md:justify-self-center">
              <div className="text-sm font-medium text-white/80">Product</div>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
                <a className="transition hover:text-white" href="#">
                  Why Us
                </a>
                <a className="transition hover:text-white" href="#">
                  How It Works
                </a>
                <a className="transition hover:text-white" href="#connect">
                  Connect
                </a>
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="text-sm font-medium text-white/80">Get started</div>
              <div className="mt-3 flex flex-col gap-3">
                <Link
                  href="/sign-up"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-medium text-black hover:bg-white/90 transition"
                >
                  Create account
                </Link>
                <p className="text-xs text-white/45">
                  Secure, read-only connections via Plaid.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 px-8 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {year} PennyWise. All rights reserved.</div>
            <div className="flex items-center gap-5">
              <a className="transition hover:text-white" href="#">
                Privacy
              </a>
              <a className="transition hover:text-white" href="#">
                Terms
              </a>
              <a className="transition hover:text-white" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
