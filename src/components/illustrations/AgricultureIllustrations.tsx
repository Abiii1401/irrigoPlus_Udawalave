// Thin-line, abstract agricultural illustrations
// Used as subtle background elements

export function SatelliteGridIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid pattern */}
      <g opacity="0.15" stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1="50"
            y1={100 + i * 50}
            x2="350"
            y2={100 + i * 50}
            strokeDasharray="4 4"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`v-${i}`}
            x1={50 + i * 50}
            y1="100"
            x2={50 + i * 50}
            y2="300"
            strokeDasharray="4 4"
          />
        ))}
      </g>
      {/* Satellite */}
      <g opacity="0.2" stroke="currentColor" strokeWidth="1.5">
        <rect x="180" y="160" width="40" height="30" rx="4" />
        <line x1="180" y1="175" x2="160" y2="165" />
        <line x1="220" y1="175" x2="240" y2="165" />
        <circle cx="200" cy="175" r="3" fill="currentColor" />
        <path d="M160 165 L150 155 L145 160 L155 170 Z" />
        <path d="M240 165 L250 155 L255 160 L245 170 Z" />
      </g>
      {/* Scanning waves */}
      <g opacity="0.1" stroke="currentColor" strokeWidth="1">
        <circle cx="200" cy="175" r="60" />
        <circle cx="200" cy="175" r="90" />
        <circle cx="200" cy="175" r="120" />
      </g>
    </svg>
  );
}

export function CropLeafIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf outline */}
      <g opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M100 160 Q80 120, 70 80 Q68 60, 75 45 Q85 30, 100 30 Q115 30, 125 45 Q132 60, 130 80 Q120 120, 100 160" />
        {/* Leaf veins */}
        <path d="M100 160 L100 30" strokeWidth="1" />
        <path d="M100 60 Q85 65, 75 70" strokeWidth="0.8" opacity="0.5" />
        <path d="M100 60 Q115 65, 125 70" strokeWidth="0.8" opacity="0.5" />
        <path d="M100 90 Q85 95, 77 100" strokeWidth="0.8" opacity="0.5" />
        <path d="M100 90 Q115 95, 123 100" strokeWidth="0.8" opacity="0.5" />
        <path d="M100 120 Q85 125, 80 130" strokeWidth="0.8" opacity="0.5" />
        <path d="M100 120 Q115 125, 120 130" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

export function FieldGridIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Field parcels */}
      <g opacity="0.12" stroke="currentColor" strokeWidth="1.5">
        <rect x="50" y="50" width="80" height="60" rx="4" />
        <rect x="140" y="50" width="110" height="60" rx="4" />
        <rect x="50" y="120" width="110" height="80" rx="4" />
        <rect x="170" y="120" width="80" height="80" rx="4" />
        <rect x="50" y="210" width="90" height="40" rx="4" />
        <rect x="150" y="210" width="100" height="40" rx="4" />
      </g>
      {/* Crop rows */}
      <g opacity="0.08" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2">
        <line x1="60" y1="60" x2="120" y2="60" />
        <line x1="60" y1="70" x2="120" y2="70" />
        <line x1="60" y1="80" x2="120" y2="80" />
        <line x1="60" y1="90" x2="120" y2="90" />
        <line x1="60" y1="100" x2="120" y2="100" />
      </g>
    </svg>
  );
}

export function IrrigationIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Irrigation system */}
      <g opacity="0.15" stroke="currentColor" strokeWidth="1.5">
        <line x1="100" y1="40" x2="100" y2="80" />
        <line x1="70" y1="80" x2="130" y2="80" />
        <line x1="70" y1="80" x2="70" y2="100" />
        <line x1="100" y1="80" x2="100" y2="100" />
        <line x1="130" y1="80" x2="130" y2="100" />
      </g>
      {/* Water drops */}
      <g opacity="0.12" fill="currentColor">
        <path d="M70 105 Q67 110, 70 115 Q73 110, 70 105" />
        <path d="M75 110 Q72 115, 75 120 Q78 115, 75 110" />
        <path d="M65 112 Q62 117, 65 122 Q68 117, 65 112" />
        
        <path d="M100 105 Q97 110, 100 115 Q103 110, 100 105" />
        <path d="M105 110 Q102 115, 105 120 Q108 115, 105 110" />
        <path d="M95 112 Q92 117, 95 122 Q98 117, 95 112" />
        
        <path d="M130 105 Q127 110, 130 115 Q133 110, 130 105" />
        <path d="M135 110 Q132 115, 135 120 Q138 115, 135 110" />
        <path d="M125 112 Q122 117, 125 122 Q128 117, 125 112" />
      </g>
    </svg>
  );
}

export function DataWaveIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Data waves */}
      <g opacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 100 Q60 60, 100 100 T180 100 T260 100 T340 100" />
        <path d="M20 120 Q60 90, 100 120 T180 120 T260 120 T340 120" />
        <path d="M20 140 Q60 120, 100 140 T180 140 T260 140 T340 140" />
      </g>
      {/* Data points */}
      <g opacity="0.15" fill="currentColor">
        <circle cx="60" cy="60" r="2" />
        <circle cx="140" cy="100" r="2" />
        <circle cx="220" cy="80" r="2" />
        <circle cx="300" cy="110" r="2" />
      </g>
    </svg>
  );
}
