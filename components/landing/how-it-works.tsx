import Link from "next/link";
import { HowItWorksStep } from "./how-it-works-step";
import { User, Target, TrendingUp, Building2, Upload, PiggyBank, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function HowItWorks() {
  return (
    <div id="how-it-works" className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">

      <div className="flex items-center justify-end border-b border-white/10 px-8 py-6">
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition"
        >
          Create account now <span className="text-emerald-300/80">↗</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <HowItWorksStep
          stepNumber={1}
          title="Create your account"
          description="Sign up and set your goals, budgeting, saving, or paying down debt."
        >
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <User className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Welcome!</div>
                <div className="text-xs text-white/55">Create your profile</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/6 px-4 py-3">
                <Target className="h-4 w-4 text-emerald-400" />
                <div className="text-sm text-white/90">Monthly budget: $3,000</div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                <PiggyBank className="h-4 w-4 text-blue-400" />
                <div className="text-sm text-white/90">Save $500/month</div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/4 px-4 py-3">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <div className="text-sm text-white/90">Pay off credit card</div>
              </div>
            </div>
          </div>
        </HowItWorksStep>

        <HowItWorksStep
          stepNumber={2}
          title="Connect banks (or upload CSV)"
          description="Link accounts for automatic syncing, or import transactions via CSV when you need it."
        >
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-blue-400" />
                <div className="text-sm font-medium text-white">Bank Connections</div>
              </div>
              <div className="flex h-6 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="rounded-xl bg-white/6 p-4 mb-3">
              <div className="text-2xl font-semibold tracking-tight text-emerald-300">
                10,000+
              </div>
              <div className="mt-1 text-xs text-white/55">
                banks supported via Plaid
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <Building2 className="h-4 w-4 text-blue-400" />
                <div className="text-xs text-white/90">Chase Bank</div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <Upload className="h-4 w-4 text-purple-400" />
                <div className="text-xs text-white/90">CSV Upload</div>
              </div>
            </div>
          </div>
        </HowItWorksStep>

        <HowItWorksStep
          stepNumber={3}
          title="Track budgets & net worth"
          description="Get insights on spending, upcoming bills, and progress toward your goals, updated automatically."
          isLast={true}
        >
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-blue-400" />
                  <div className="text-sm text-white/90">Credit Card</div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="h-3 w-3 text-red-400" />
                  <div className="text-sm font-medium text-red-400">-$1,234</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-4 w-4 text-emerald-400" />
                  <div className="text-sm text-white/90">Savings</div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <div className="text-sm font-medium text-emerald-400">+$5,678</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/4 px-4 py-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <div className="text-sm text-white/90">Net Worth</div>
                </div>
                <div className="text-sm font-medium text-white">$24,567</div>
              </div>
            </div>
          </div>
        </HowItWorksStep>
      </div>
    </div>
  );
}
