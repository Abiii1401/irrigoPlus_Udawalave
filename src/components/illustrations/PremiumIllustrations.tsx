// Premium agricultural illustrations with gradients and modern design

export function PremiumSatelliteScanning({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="satelliteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Scanning waves */}
      <g opacity="0.4">
        <circle cx="300" cy="300" r="180" stroke="url(#scanGrad)" strokeWidth="2" fill="none" />
        <circle cx="300" cy="300" r="220" stroke="url(#scanGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="300" cy="300" r="260" stroke="url(#scanGrad)" strokeWidth="1" fill="none" />
      </g>

      {/* Satellite body */}
      <g transform="translate(300, 300)">
        <rect x="-30" y="-20" width="60" height="40" rx="8" fill="url(#satelliteGrad)" stroke="#1e40af" strokeWidth="2" />
        
        {/* Solar panels */}
        <g opacity="0.7">
          <rect x="-70" y="-15" width="35" height="30" rx="4" fill="url(#satelliteGrad)" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="-52" y1="-15" x2="-52" y2="15" stroke="#1e40af" strokeWidth="0.5" />
          <line x1="-60" y1="-15" x2="-60" y2="15" stroke="#1e40af" strokeWidth="0.5" />
          <line x1="-44" y1="-15" x2="-44" y2="15" stroke="#1e40af" strokeWidth="0.5" />
        </g>
        <g opacity="0.7">
          <rect x="35" y="-15" width="35" height="30" rx="4" fill="url(#satelliteGrad)" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="44" y1="-15" x2="44" y2="15" stroke="#1e40af" strokeWidth="0.5" />
          <line x1="52" y1="-15" x2="52" y2="15" stroke="#1e40af" strokeWidth="0.5" />
          <line x1="60" y1="-15" x2="60" y2="15" stroke="#1e40af" strokeWidth="0.5" />
        </g>
        
        {/* Antenna */}
        <circle cx="0" cy="0" r="6" fill="#3b82f6" opacity="0.8" />
        <line x1="0" y1="-20" x2="0" y2="-35" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="-35" r="3" fill="#3b82f6" />
      </g>

      {/* Orbital path */}
      <circle cx="300" cy="300" r="140" stroke="url(#orbitGrad)" strokeWidth="2" fill="none" strokeDasharray="10 5" />

      {/* Data transmission beams */}
      <g opacity="0.3">
        <path d="M 300 320 L 200 500" stroke="url(#scanGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 300 320 L 400 500" stroke="url(#scanGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 300 320 L 300 500" stroke="url(#scanGrad)" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Field grid below */}
      <g transform="translate(300, 500)" opacity="0.25">
        {[-60, -20, 20, 60].map((x, i) => (
          <rect key={i} x={x - 15} y="-30" width="30" height="25" rx="4" fill="url(#satelliteGrad)" stroke="#3b82f6" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}

export function PremiumFieldGrid({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fieldGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="fieldAmber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="fieldBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Field parcels with rounded corners */}
      <g opacity="0.7">
        <rect x="50" y="80" width="180" height="140" rx="16" fill="url(#fieldGreen)" stroke="#22c55e" strokeWidth="2" />
        <rect x="250" y="80" width="140" height="140" rx="16" fill="url(#fieldAmber)" stroke="#f59e0b" strokeWidth="2" />
        <rect x="410" y="80" width="140" height="140" rx="16" fill="url(#fieldGreen)" stroke="#22c55e" strokeWidth="2" />
        
        <rect x="50" y="240" width="140" height="180" rx="16" fill="url(#fieldBlue)" stroke="#3b82f6" strokeWidth="2" />
        <rect x="210" y="240" width="220" height="180" rx="16" fill="url(#fieldGreen)" stroke="#22c55e" strokeWidth="2" />
        <rect x="450" y="240" width="100" height="180" rx="16" fill="url(#fieldAmber)" stroke="#f59e0b" strokeWidth="2" />
        
        <rect x="50" y="440" width="180" height="110" rx="16" fill="url(#fieldGreen)" stroke="#22c55e" strokeWidth="2" />
        <rect x="250" y="440" width="160" height="110" rx="16" fill="url(#fieldAmber)" stroke="#f59e0b" strokeWidth="2" />
        <rect x="430" y="440" width="120" height="110" rx="16" fill="url(#fieldGreen)" stroke="#22c55e" strokeWidth="2" />
      </g>

      {/* Crop rows pattern */}
      <g opacity="0.15" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3">
        <line x1="60" y1="100" x2="220" y2="100" />
        <line x1="60" y1="120" x2="220" y2="120" />
        <line x1="60" y1="140" x2="220" y2="140" />
        <line x1="60" y1="160" x2="220" y2="160" />
        <line x1="60" y1="180" x2="220" y2="180" />
        <line x1="60" y1="200" x2="220" y2="200" />
      </g>

      {/* Corner accents */}
      <circle cx="50" cy="80" r="4" fill="#3b82f6" opacity="0.6" />
      <circle cx="550" cy="80" r="4" fill="#3b82f6" opacity="0.6" />
      <circle cx="50" cy="550" r="4" fill="#3b82f6" opacity="0.6" />
      <circle cx="550" cy="550" r="4" fill="#3b82f6" opacity="0.6" />
    </svg>
  );
}

export function PremiumCropLeaf({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Leaf shape */}
      <path
        d="M 200 450 Q 160 360, 140 270 Q 130 220, 135 180 Q 140 140, 155 110 Q 170 80, 200 70 Q 230 80, 245 110 Q 260 140, 265 180 Q 270 220, 260 270 Q 240 360, 200 450"
        fill="url(#leafGrad)"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central vein */}
      <line x1="200" y1="450" x2="200" y2="70" stroke="#16a34a" strokeWidth="2.5" opacity="0.8" />

      {/* Side veins */}
      <g opacity="0.6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M 200 120 Q 170 130, 150 145" />
        <path d="M 200 120 Q 230 130, 250 145" />
        
        <path d="M 200 170 Q 165 180, 145 195" />
        <path d="M 200 170 Q 235 180, 255 195" />
        
        <path d="M 200 220 Q 160 235, 142 250" />
        <path d="M 200 220 Q 240 235, 258 250" />
        
        <path d="M 200 270 Q 165 285, 148 305" />
        <path d="M 200 270 Q 235 285, 252 305" />
        
        <path d="M 200 320 Q 170 340, 155 360" />
        <path d="M 200 320 Q 230 340, 245 360" />
        
        <path d="M 200 370 Q 175 390, 165 410" />
        <path d="M 200 370 Q 225 390, 235 410" />
      </g>

      {/* Decorative dots */}
      <g opacity="0.4" fill="#16a34a">
        <circle cx="170" cy="150" r="3" />
        <circle cx="230" cy="150" r="3" />
        <circle cx="160" cy="200" r="3" />
        <circle cx="240" cy="200" r="3" />
        <circle cx="165" cy="280" r="3" />
        <circle cx="235" cy="280" r="3" />
      </g>
    </svg>
  );
}

export function PremiumWaterDrops({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="dropGlow" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
        </radialGradient>
      </defs>

      {/* Irrigation pipes */}
      <g opacity="0.6" stroke="#64748b" strokeWidth="4" strokeLinecap="round">
        <line x1="200" y1="50" x2="200" y2="120" />
        <line x1="100" y1="120" x2="300" y2="120" />
        <line x1="100" y1="120" x2="100" y2="160" />
        <line x1="150" y1="120" x2="150" y2="160" />
        <line x1="200" y1="120" x2="200" y2="160" />
        <line x1="250" y1="120" x2="250" y2="160" />
        <line x1="300" y1="120" x2="300" y2="160" />
      </g>

      {/* Water drops - large */}
      <g>
        <path d="M 100 170 Q 90 185, 100 200 Q 110 185, 100 170" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1.5" />
        <path d="M 150 175 Q 140 190, 150 205 Q 160 190, 150 175" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1.5" />
        <path d="M 200 170 Q 190 185, 200 200 Q 210 185, 200 170" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1.5" />
        <path d="M 250 175 Q 240 190, 250 205 Q 260 190, 250 175" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1.5" />
        <path d="M 300 170 Q 290 185, 300 200 Q 310 185, 300 170" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1.5" />
      </g>

      {/* Water drops - small scattered */}
      <g opacity="0.7">
        <path d="M 85 215 Q 80 223, 85 230 Q 90 223, 85 215" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 115 220 Q 110 228, 115 235 Q 120 228, 115 220" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 140 230 Q 135 238, 140 245 Q 145 238, 140 230" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 165 225 Q 160 233, 165 240 Q 170 233, 165 225" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 190 235 Q 185 243, 190 250 Q 195 243, 190 235" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 215 230 Q 210 238, 215 245 Q 220 238, 215 230" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 240 225 Q 235 233, 240 240 Q 245 233, 240 225" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 265 230 Q 260 238, 265 245 Q 270 238, 265 230" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 285 220 Q 280 228, 285 235 Q 290 228, 285 220" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
        <path d="M 310 215 Q 305 223, 310 230 Q 315 223, 310 215" fill="url(#dropGlow)" stroke="#1e40af" strokeWidth="1" />
      </g>

      {/* Highlights on drops */}
      <g opacity="0.5" fill="#e0f2fe">
        <ellipse cx="97" cy="180" rx="2" ry="3" />
        <ellipse cx="147" cy="185" rx="2" ry="3" />
        <ellipse cx="197" cy="180" rx="2" ry="3" />
        <ellipse cx="247" cy="185" rx="2" ry="3" />
        <ellipse cx="297" cy="180" rx="2" ry="3" />
      </g>
    </svg>
  );
}

export function PremiumDataFlow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Flowing data waves */}
      <g opacity="0.4" stroke="url(#flowGrad)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 0 150 Q 100 100, 200 150 T 400 150 T 600 150 T 800 150" />
        <path d="M 0 200 Q 100 160, 200 200 T 400 200 T 600 200 T 800 200" />
        <path d="M 0 250 Q 100 220, 200 250 T 400 250 T 600 250 T 800 250" />
      </g>

      {/* Data nodes */}
      <g fill="#3b82f6" opacity="0.6">
        <circle cx="100" cy="100" r="6" />
        <circle cx="300" cy="150" r="6" />
        <circle cx="500" cy="130" r="6" />
        <circle cx="700" cy="170" r="6" />
      </g>

      {/* Node connections */}
      <g opacity="0.3" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="100" y1="100" x2="300" y2="150" />
        <line x1="300" y1="150" x2="500" y2="130" />
        <line x1="500" y1="130" x2="700" y2="170" />
      </g>
    </svg>
  );
}
