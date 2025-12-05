export function PremiumLoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 flex items-center justify-center overflow-hidden relative">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="flex flex-col items-center space-y-12 relative z-10">
        {/* Premium satellite scanning animation */}
        <div className="relative w-48 h-48">
          {/* Outer expanding rings */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Scanning rings with animation */}
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="url(#ringGrad1)"
              strokeWidth="2"
              className="animate-ripple"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="url(#ringGrad1)"
              strokeWidth="2"
              className="animate-ripple"
              style={{ animationDelay: '0.5s' }}
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="url(#ringGrad2)"
              strokeWidth="2"
              className="animate-ripple"
              style={{ animationDelay: '1s' }}
            />
          </svg>

          {/* Rotating orbital ring */}
          <svg className="absolute inset-0 w-full h-full animate-rotate" style={{ animationDuration: '8s' }} viewBox="0 0 200 200">
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="url(#orbitGrad)"
              strokeWidth="3"
              strokeDasharray="60 410"
              strokeLinecap="round"
            />
          </svg>

          {/* Center satellite icon with gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl animate-pulse" />
              
              {/* Satellite container */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-premium-lg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10 22 3" />
                  <path d="M13 10 19 12l-4 12-5-10 3-2Z" />
                  <path d="M14 12 8 7l-3 8 8 3 1-6Z" />
                  <path d="m2 22 3-3" />
                  <path d="M8 2 5 5" />
                  <circle cx="12" cy="12" r="8" opacity="0.3" />
                </svg>
              </div>
              
              {/* Pulsing corner accents */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-rotate" style={{ animationDuration: '4s' }}>
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg" />
            </div>
          </div>
          <div className="absolute inset-0 animate-rotate" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
            <div className="w-full h-full relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg" />
            </div>
          </div>

          {/* Scanning beam effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-rotate" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        {/* Loading text with premium styling */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Preparing your workspace
          </h2>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 animate-pulse shadow-lg" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 animate-pulse shadow-lg" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Status text */}
          <p className="text-sm text-slate-600 animate-pulse">
            Initializing AgriSense platform
          </p>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex items-center gap-8 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-green-500/50" />
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-blue-500/50" />
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-amber-500/50" />
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
