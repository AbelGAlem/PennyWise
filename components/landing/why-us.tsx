import { GridOverlay } from "./ui/grid-overlay";
import { FeatureCard } from "./feature-card";
import { BankShowcase } from "./bank-showcase";
import { HowItWorks } from "./how-it-works";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-black text-white">
      <GridOverlay />

      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Why choose your finance hub?
          </h2>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Everything you need to understand spending, plan ahead, and stay in
            control, securely, in one place.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <FeatureCard
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/80"
                >
                  <path
                    d="M12 3l8 6v12H4V9l8-6z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Read-only bank connections"
              desc="Connect accounts safely with Plaid. We never store your bank login and can’t move money."
            />
            <FeatureCard
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/80"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Instant categorization"
              desc="Auto-categorize transactions and build budgets in minutes, no spreadsheets required."
            />
            <FeatureCard
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/80"
                >
                  <path
                    d="M4 18l6-6 4 4 6-8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Clear insights"
              desc="See where your money goes with trends, recurring charges, and monthly summaries."
            />
            <FeatureCard
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/80"
                >
                  <path
                    d="M7 7h10v10H7V7z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Premium experience"
              desc="A fast, distraction-free UI that feels great on desktop and mobile."
            />
          </div>
        </div>

        <BankShowcase />
        <HowItWorks />
      </div>
    </section>
  );
}
