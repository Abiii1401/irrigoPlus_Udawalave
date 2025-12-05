import { useState } from 'react';
import { Satellite, Mail, Lock } from 'lucide-react';
import { PremiumSatelliteScanning } from './illustrations/PremiumIllustrations';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Simulate login delay
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Background illustration - very subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <PremiumSatelliteScanning className="w-full max-w-4xl h-auto text-blue-900" />
      </div>
      
      <div className="w-full max-w-md animate-scaleIn relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl animate-pulse" />
            
            {/* Logo container */}
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-premium-xl">
              <Satellite className="w-10 h-10 text-white" />
              {/* Corner accents */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
            AgriSense Udawalawe
          </h1>
          <p className="text-slate-600">Crop health monitoring system</p>
        </div>

        {/* Login Form */}
        <div className="gradient-premium-card rounded-2xl p-8 border border-slate-200/60 shadow-premium-lg backdrop-blur-sm relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 gradient-overlay-blue rounded-2xl" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-slate-700">
                Email address
              </label>
              <div className="relative">
                <div
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${
                    focusedField === 'email' ? 'text-blue-600' : 'text-slate-400'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your.email@agrisense.lk"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl transition-all outline-none ${
                    focusedField === 'email'
                      ? 'border-blue-300 bg-white shadow-sm scale-[1.01]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-slate-700">
                Password
              </label>
              <div className="relative">
                <div
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${
                    focusedField === 'password' ? 'text-blue-600' : 'text-slate-400'
                  }`}
                >
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl transition-all outline-none ${
                    focusedField === 'password'
                      ? 'border-blue-300 bg-white shadow-sm scale-[1.01]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoggingIn ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-6 text-center">
            <button className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Secure crop monitoring for Udawalawe region
          </p>
          <p className="text-xs text-slate-400 mt-4">
            Demo: Use any email and password to sign in
          </p>
        </div>
      </div>
    </div>
  );
}