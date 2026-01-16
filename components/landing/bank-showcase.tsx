import Link from "next/link";
import { BankChip } from "./bank-chip";

export function BankShowcase() {
  return (
    <div id="connect" className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-80 border-b border-white/10 md:border-b-0 md:border-r">
          <div className="absolute bottom-8 left-8">
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition"
            >
              Connect your banks{" "}
              <span className="text-emerald-300/80">↗</span>
            </Link>
            <div className="mt-2 text-xs text-white/50">
              Connect to 10,000+ banks worldwide via Plaid.
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <BankChip name="Chase" type="Checking • ••1234" status="ok" />
            <BankChip name="Bank of America" type="Savings • ••7781" status="ok" />
            <BankChip name="Wells Fargo" type="Credit Card • ••4509" status="warn" />
            <BankChip name="Capital One" type="Credit Card • ••9012" status="ok" />
            <BankChip name="Wise" type="Multi-currency • ••0331" status="ok" />
            <BankChip name="Revolut" type="Card • ••2208" status="ok" />
          </div>
        </div>
      </div>
    </div>
  );
}
