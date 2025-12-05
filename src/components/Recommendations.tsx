import { CheckCircle2, Droplets, Bug, Thermometer, Calendar } from 'lucide-react';
import { IrrigationIllustration } from './illustrations/AgricultureIllustrations';

interface RecommendationsProps {
  onBack: () => void;
}

export function Recommendations({ onBack }: RecommendationsProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <button
          onClick={onBack}
          className="text-sm text-blue-600 hover:text-blue-700 mb-4 transition-colors"
        >
          ← Back to zone details
        </button>
        <h1 className="text-slate-900">Recommendations</h1>
        <p className="text-slate-600 mt-2">Based on Zone A2 analysis</p>
      </div>

      {/* Status */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 relative overflow-hidden">
        {/* Background illustration */}
        <div className="absolute top-0 right-0 opacity-[0.08] pointer-events-none">
          <IrrigationIllustration className="w-48 h-48 text-amber-600" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Thermometer className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Medium Stress Detected</h3>
              <p className="text-slate-700">
                Satellite and ground validation confirm moderate crop stress. Immediate action
                recommended to prevent escalation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="space-y-3">
        <div
          className="bg-white rounded-xl p-5 border transition-all border-slate-200 hover:border-blue-300 hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all bg-blue-50"
            >
              <Droplets
                className="w-6 h-6 text-blue-600"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-slate-900 mb-1"
              >
                Increase irrigation frequency
              </h3>
              <p
                className="text-sm text-slate-600"
              >
                Water stress detected. Increase irrigation to 2-3 times daily for next 5 days.
              </p>
            </div>

            <button
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all border-slate-300 hover:border-blue-600"
            >
            </button>
          </div>
        </div>

        <div
          className="bg-white rounded-xl p-5 border transition-all border-slate-200 hover:border-blue-300 hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all bg-blue-50"
            >
              <Bug
                className="w-6 h-6 text-blue-600"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-slate-900 mb-1"
              >
                Monitor for pest activity
              </h3>
              <p
                className="text-sm text-slate-600"
              >
                Inspect crops for pest presence. Consider preventive measures if needed.
              </p>
            </div>

            <button
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all border-slate-300 hover:border-blue-600"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}