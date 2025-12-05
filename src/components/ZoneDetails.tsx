import { ArrowLeft, Camera, AlertCircle } from 'lucide-react';

const zoneData: Record<string, any> = {
  A1: {
    name: 'Zone A1',
    crop: 'Paddy',
    status: 'healthy',
    confidence: 92,
    captureDate: '2025-12-04 10:30 AM',
    predictedIssue: 'No significant issues detected. Crop health appears optimal.',
    history: [
      { date: '2025-12-01', issue: 'None', result: 'Healthy' },
      { date: '2025-11-28', issue: 'None', result: 'Healthy' },
    ],
  },
  A2: {
    name: 'Zone A2',
    crop: 'Maize',
    status: 'medium',
    confidence: 78,
    captureDate: '2025-12-04 10:32 AM',
    predictedIssue: 'Mild water stress detected based on NDVI analysis.',
    history: [
      { date: '2025-12-01', issue: 'Water stress', result: 'Confirmed' },
      { date: '2025-11-28', issue: 'None', result: 'Healthy' },
    ],
  },
  B1: {
    name: 'Zone B1',
    crop: 'Banana',
    status: 'high',
    confidence: 85,
    captureDate: '2025-12-04 10:35 AM',
    predictedIssue: 'Significant water stress and possible nutrient deficiency detected.',
    history: [
      { date: '2025-12-01', issue: 'Water stress', result: 'Confirmed' },
      { date: '2025-11-28', issue: 'Water stress', result: 'Confirmed' },
      { date: '2025-11-25', issue: 'Nutrient deficiency', result: 'Confirmed' },
    ],
  },
  B2: {
    name: 'Zone B2',
    crop: 'Vegetables',
    status: 'healthy',
    confidence: 88,
    captureDate: '2025-12-04 10:38 AM',
    predictedIssue: 'No significant issues detected. Crop health appears optimal.',
    history: [
      { date: '2025-12-01', issue: 'None', result: 'Healthy' },
    ],
  },
  C1: {
    name: 'Zone C1',
    crop: 'Paddy',
    status: 'medium',
    confidence: 81,
    captureDate: '2025-12-04 10:40 AM',
    predictedIssue: 'Early signs of pest activity detected in thermal imaging.',
    history: [
      { date: '2025-12-01', issue: 'Pest activity', result: 'False alert' },
      { date: '2025-11-28', issue: 'None', result: 'Healthy' },
    ],
  },
  C2: {
    name: 'Zone C2',
    crop: 'Maize',
    status: 'healthy',
    confidence: 95,
    captureDate: '2025-12-04 10:42 AM',
    predictedIssue: 'No significant issues detected. Crop health appears optimal.',
    history: [
      { date: '2025-12-01', issue: 'None', result: 'Healthy' },
      { date: '2025-11-28', issue: 'None', result: 'Healthy' },
    ],
  },
};

interface ZoneDetailsProps {
  zoneId: string;
  onBack: () => void;
  onUploadClick: () => void;
}

export function ZoneDetails({ zoneId, onBack, onUploadClick }: ZoneDetailsProps) {
  const zone = zoneData[zoneId];

  if (!zone) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-slideIn">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-slate-900">{zone.name}</h1>
      </div>

      {/* Status Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span
              className={`inline-block px-4 py-2 rounded-full ${
                zone.status === 'healthy'
                  ? 'bg-green-50 text-green-700'
                  : zone.status === 'medium'
                  ? 'bg-amber-50 text-amber-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {zone.status === 'healthy'
                ? 'Healthy'
                : zone.status === 'medium'
                ? 'Medium Stress'
                : 'High Stress'}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Confidence</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${zone.confidence}%` }}
                ></div>
              </div>
              <span className="text-slate-900">{zone.confidence}%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-600">Crop Type</p>
            <p className="text-slate-900 mt-1">{zone.crop}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Satellite Capture</p>
            <p className="text-slate-900 mt-1">{zone.captureDate}</p>
          </div>
        </div>
      </div>

      {/* Predicted Issue Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
              zone.status === 'healthy'
                ? 'bg-green-50'
                : zone.status === 'medium'
                ? 'bg-amber-50'
                : 'bg-red-50'
            }`}
          >
            <AlertCircle
              className={`w-5 h-5 ${
                zone.status === 'healthy'
                  ? 'text-green-600'
                  : zone.status === 'medium'
                  ? 'text-amber-600'
                  : 'text-red-600'
              }`}
            />
          </div>
          <div>
            <h3 className="text-slate-900 mb-2">Predicted Issue</h3>
            <p className="text-slate-600">{zone.predictedIssue}</p>
          </div>
        </div>
      </div>

      {/* History Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-slate-900 mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {zone.history.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-slate-200 rounded-lg"
            >
              <div>
                <p className="text-slate-900 text-sm">{item.issue}</p>
                <p className="text-xs text-slate-500 mt-1">{item.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  item.result === 'Healthy' || item.result === 'False alert'
                    ? 'bg-slate-100 text-slate-700'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                {item.result}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Button */}
      <button
        onClick={onUploadClick}
        className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98]"
      >
        <Camera className="w-5 h-5" />
        Upload ground image
      </button>
    </div>
  );
}
