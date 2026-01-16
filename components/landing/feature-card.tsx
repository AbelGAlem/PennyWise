import { IconCircle } from "./ui/icon-circle";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <div className="h-full border-r border-white/10 p-8 last:border-r-0">
      <IconCircle>{icon}</IconCircle>
      <h3 className="mt-6 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
    </div>
  );
}
