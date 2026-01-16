interface BankChipProps {
  name: string;
  type: string;
  status: "ok" | "warn";
}

export function BankChip({ name, type, status }: BankChipProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 backdrop-blur-md">
      <div className="h-9 w-9 rounded-full bg-white/10" />
      <div className="min-w-0">
        <div className="truncate text-sm font-medium text-white">{name}</div>
        <div className="flex items-center gap-2 text-xs text-white/55">
          <span className="truncate">{type}</span>
          <span
            className={
              status === "ok" ? "text-emerald-400" : "text-rose-400"
            }
          >
            {status === "ok" ? "● Synced" : "● Needs attention"}
          </span>
        </div>
      </div>
    </div>
  );
}
