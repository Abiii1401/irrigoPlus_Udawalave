import { useState } from 'react';
import { CheckCircle2, TrendingUp, AlertTriangle, MapPin as MapPinIcon } from 'lucide-react';
import { FieldGridIllustration } from './illustrations/AgricultureIllustrations';

interface MapScreenProps {
  onZoneClick: (zoneId: string) => void;
}

interface Zone {
  id: string;
  name: string;
  status: 'healthy' | 'medium-stress' | 'high-stress';
  area: string;
  lastUpdate: string;
}

const zones: Zone[] = [
  { id: 'A1', name: 'Zone A1', status: 'healthy', area: '100 ha', lastUpdate: '2025-12-04 10:30' },
  { id: 'A2', name: 'Zone A2', status: 'medium-stress', area: '150 ha', lastUpdate: '2025-12-04 10:32' },
  { id: 'B1', name: 'Zone B1', status: 'high-stress', area: '200 ha', lastUpdate: '2025-12-04 10:35' },
  { id: 'B2', name: 'Zone B2', status: 'healthy', area: '250 ha', lastUpdate: '2025-12-04 10:38' },
  { id: 'C1', name: 'Zone C1', status: 'medium-stress', area: '300 ha', lastUpdate: '2025-12-04 10:40' },
  { id: 'C2', name: 'Zone C2', status: 'healthy', area: '350 ha', lastUpdate: '2025-12-04 10:42' },
];

export function MapScreen({ onZoneClick }: MapScreenProps) {
  const healthyCount = zones.filter((z) => z.status === 'healthy').length;
  const mediumCount = zones.filter((z) => z.status === 'medium-stress').length;
  const highCount = zones.filter((z) => z.status === 'high-stress').length;

  const summaryCards = [
    { label: 'Healthy Zones', value: healthyCount, icon: CheckCircle2, bgColor: 'bg-green-50', textColor: 'text-green-700' },
    { label: 'Medium Stress', value: mediumCount, icon: TrendingUp, bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
    { label: 'High Stress', value: highCount, icon: AlertTriangle, bgColor: 'bg-red-50', textColor: 'text-red-700' },
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="px-1">
        <h1 className="text-slate-900">Field Map</h1>
        <p className="text-slate-600 mt-1">Monitor crop health across all zones</p>
      </div>

      {/* Summary Cards - Mobile Optimized */}
      <div className="grid grid-cols-3 gap-2">
        {summaryCards.map((card, index) => (
          <div
            key={card.label}
            className={`gradient-premium-card rounded-xl p-3 border border-slate-200/60 shadow-premium hover-lift active:scale-95 cursor-pointer relative overflow-hidden animate-scaleIn stagger-${index + 1}`}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 opacity-40 ${
              card.bgColor === 'bg-green-50' ? 'bg-gradient-to-br from-green-50/50 to-transparent' :
              card.bgColor === 'bg-amber-50' ? 'bg-gradient-to-br from-amber-50/50 to-transparent' :
              'bg-gradient-to-br from-red-50/50 to-transparent'
            }`} />
            
            <div className="relative z-10 text-center">
              <div
                className={`w-9 h-9 mx-auto rounded-lg ${card.bgColor} flex items-center justify-center shadow-sm mb-2`}
              >
                <card.icon className={`w-5 h-5 ${card.textColor}`} />
              </div>
              <div className={`text-2xl font-semibold ${card.textColor} mb-1`}>{card.value}</div>
              <div className="text-[10px] leading-tight text-slate-600">{card.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Container - Mobile Optimized */}
      <div className="gradient-premium-card rounded-2xl p-4 border border-slate-200/60 shadow-premium-lg relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 gradient-overlay-blue rounded-2xl" />
        
        {/* Satellite background texture */}
        <div className="absolute inset-0 opacity-[0.03] rounded-2xl overflow-hidden">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(30, 64, 175, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(30, 64, 175, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
              `,
              backgroundSize: '30px 30px, 30px 30px, 100% 100%, 100% 100%',
              backgroundPosition: '0 0, 0 0, 0 0, 0 0'
            }}
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-slate-900 mb-4">Zone Overview</h2>
          
          {/* Abstract Map - Taller for mobile */}
          <div className="relative h-[400px] bg-slate-100 rounded-xl overflow-hidden">
            {/* Background field illustration */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <FieldGridIllustration className="w-full h-full text-slate-600" />
            </div>
            
            {/* Zone A1 - Healthy */}
            <div
              className="absolute top-[10%] left-[8%] w-[40%] h-[35%] bg-green-400/40 border-2 border-green-500 rounded-xl cursor-pointer transition-all active:bg-green-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('A1')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-green-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                A1
              </span>
              <div className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>

            {/* Zone A2 - Medium */}
            <div
              className="absolute top-[10%] right-[8%] w-[40%] h-[35%] bg-amber-400/40 border-2 border-amber-500 rounded-xl cursor-pointer transition-all active:bg-amber-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('A2')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-amber-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                A2
              </span>
              <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>

            {/* Zone B1 - High */}
            <div
              className="absolute top-[50%] left-[8%] w-[28%] h-[40%] bg-red-400/40 border-2 border-red-500 rounded-xl cursor-pointer transition-all active:bg-red-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('B1')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-red-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                B1
              </span>
              <div className="absolute inset-0 border-2 border-red-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>

            {/* Zone B2 - Healthy */}
            <div
              className="absolute top-[50%] left-[39%] w-[25%] h-[40%] bg-green-400/40 border-2 border-green-500 rounded-xl cursor-pointer transition-all active:bg-green-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('B2')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-green-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                B2
              </span>
              <div className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>

            {/* Zone C1 - Medium */}
            <div
              className="absolute top-[50%] right-[23%] w-[20%] h-[40%] bg-amber-400/40 border-2 border-amber-500 rounded-xl cursor-pointer transition-all active:bg-amber-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('C1')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-amber-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                C1
              </span>
              <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>

            {/* Zone C2 - Healthy */}
            <div
              className="absolute top-[50%] right-[5%] w-[16%] h-[40%] bg-green-400/40 border-2 border-green-500 rounded-xl cursor-pointer transition-all active:bg-green-400/60 active:scale-95 hover:scale-105 hover:shadow-lg group"
              onClick={() => onZoneClick('C2')}
            >
              <span className="absolute top-2 left-2 text-xs font-medium text-green-900 bg-white/90 px-2 py-1 rounded-lg transition-all group-hover:bg-white group-hover:shadow-sm">
                C2
              </span>
              <div className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-green-400 border border-green-500 rounded"></div>
              <span className="text-xs text-slate-600">Healthy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-amber-400 border border-amber-500 rounded"></div>
              <span className="text-xs text-slate-600">Medium Stress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-red-400 border border-red-500 rounded"></div>
              <span className="text-xs text-slate-600">High Stress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}