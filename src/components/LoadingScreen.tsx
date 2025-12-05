import { Satellite } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center overflow-hidden relative">
      {/* Background subtle grid illustration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-400"/>
        </svg>
      </div>

      <div className="flex flex-col items-center space-y-8 animate-fadeIn relative z-10">
        {/* Premium scanning animation */}
        <div className="relative w-32 h-32">
          {/* Outer scanning rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ripple"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ripple" style={{ animationDelay: '1s' }}></div>
          
          {/* Center pulse */}
          <div className="absolute inset-6 rounded-full bg-blue-50 animate-scanPulse"></div>
          <div className="absolute inset-10 rounded-full bg-blue-100 animate-scanPulse" style={{ animationDelay: '0.3s' }}></div>
          
          {/* Satellite icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <Satellite className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Rotating orbital line */}
          <svg className="absolute inset-0 w-full h-full animate-rotate" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="58"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="20 340"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-3">
          <p className="text-slate-900">Preparing your workspace</p>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}