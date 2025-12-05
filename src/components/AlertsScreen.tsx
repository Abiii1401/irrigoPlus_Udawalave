import { AlertTriangle, TrendingUp, Clock } from 'lucide-react';

const alerts = [
  {
    id: 'B1',
    zone: 'Zone B1',
    crop: 'Banana',
    issue: 'High water stress detected',
    description: 'NDVI readings show significant crop stress in multiple areas.',
    time: '2 hours ago',
    status: 'new',
  },
  {
    id: 'A2',
    zone: 'Zone A2',
    crop: 'Maize',
    issue: 'Medium water stress',
    description: 'Mild water stress patterns detected in satellite imagery.',
    time: '4 hours ago',
    status: 'in-progress',
  },
  {
    id: 'C1',
    zone: 'Zone C1',
    crop: 'Paddy',
    issue: 'Possible pest activity',
    description: 'Thermal imaging shows anomalies consistent with pest presence.',
    time: '6 hours ago',
    status: 'in-progress',
  },
  {
    id: 'B1-old',
    zone: 'Zone B1',
    crop: 'Banana',
    issue: 'Nutrient deficiency',
    description: 'Spectral analysis indicates potential nitrogen deficiency.',
    time: '1 day ago',
    status: 'done',
  },
  {
    id: 'A1',
    zone: 'Zone A1',
    crop: 'Paddy',
    issue: 'Drainage issue',
    description: 'Water accumulation detected in low-lying sections.',
    time: '2 days ago',
    status: 'done',
  },
];

interface AlertsScreenProps {
  onAlertClick: (zoneId: string) => void;
}

export function AlertsScreen({ onAlertClick }: AlertsScreenProps) {
  const newCount = alerts.filter((a) => a.status === 'new').length;
  const inProgressCount = alerts.filter((a) => a.status === 'in-progress').length;
  const doneCount = alerts.filter((a) => a.status === 'done').length;

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-slate-900">Alerts</h1>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn">
          <p className="text-sm text-slate-600">New</p>
          <p className="text-2xl text-slate-900 mt-1">{newCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn stagger-1">
          <p className="text-sm text-slate-600">In Progress</p>
          <p className="text-2xl text-slate-900 mt-1">{inProgressCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn stagger-2">
          <p className="text-sm text-slate-600">Done</p>
          <p className="text-2xl text-slate-900 mt-1">{doneCount}</p>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            onClick={() => onAlertClick(alert.id.split('-')[0])}
            className="bg-white rounded-xl p-5 border border-slate-200 cursor-pointer transition-all hover:border-blue-300 hover:shadow-md hover:scale-[1.01] animate-slideIn"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  alert.status === 'new'
                    ? 'bg-red-50'
                    : alert.status === 'in-progress'
                    ? 'bg-amber-50'
                    : 'bg-green-50'
                }`}
              >
                {alert.status === 'new' ? (
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                ) : alert.status === 'in-progress' ? (
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                ) : (
                  <Clock className="w-6 h-6 text-green-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-slate-900">{alert.issue}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {alert.zone} • {alert.crop}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs flex-shrink-0 ${
                      alert.status === 'new'
                        ? 'bg-red-50 text-red-700'
                        : alert.status === 'in-progress'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {alert.status === 'new'
                      ? 'New'
                      : alert.status === 'in-progress'
                      ? 'In Progress'
                      : 'Done'}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-2">{alert.description}</p>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}