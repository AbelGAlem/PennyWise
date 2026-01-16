export function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
      {children}
    </div>
  );
}
