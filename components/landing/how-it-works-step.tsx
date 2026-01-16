interface HowItWorksStepProps {
  stepNumber: number;
  title: string;
  description: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function HowItWorksStep({ 
  stepNumber, 
  title, 
  description, 
  children, 
  isLast = false 
}: HowItWorksStepProps) {
  return (
    <div className={`border-b border-white/10 p-8 ${!isLast ? 'md:border-b-0 md:border-r' : ''}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-sm text-white/75">
          {stepNumber}
        </div>
        <div className="text-sm font-semibold text-white">
          {title}
        </div>
      </div>

      {children}

      <h4 className="mt-6 text-sm font-semibold">Get started in minutes</h4>
      <p className="mt-2 text-sm leading-6 text-white/60">
        {description}
      </p>
    </div>
  );
}
