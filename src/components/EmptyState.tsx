import { CropLeafIllustration } from './illustrations/AgricultureIllustrations';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-xl p-12 border border-slate-200 shadow-sm animate-scaleIn relative overflow-hidden">
      {/* Background illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <CropLeafIllustration className="w-64 h-64 text-slate-600" />
      </div>
      
      <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        {/* Illustration */}
        <div className="relative">
          {icon ? (
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center">
              {icon}
            </div>
          ) : (
            <svg
              className="w-32 h-32 text-slate-200"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Empty box illustration */}
              <rect x="30" y="40" width="60" height="50" rx="4" />
              <path d="M30 60 L60 75 L90 60" />
              <path d="M60 75 L60 90" />
              <circle cx="45" cy="52" r="3" />
              <circle cx="75" cy="52" r="3" />
              <path d="M50 65 Q60 70, 70 65" strokeLinecap="round" />
              {/* Decorative elements */}
              <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.5" />
              <circle cx="100" cy="35" r="2" fill="currentColor" opacity="0.5" />
              <path
                d="M15 90 Q20 85, 25 90"
                strokeDasharray="2 2"
                opacity="0.5"
              />
            </svg>
          )}
          {/* Subtle animations */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-slate-200 animate-pulse" />
          <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-slate-100" />
        </div>

        <div className="max-w-md">
          <h3 className="text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>

        {action && (
          <button
            onClick={action.onClick}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98]"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}