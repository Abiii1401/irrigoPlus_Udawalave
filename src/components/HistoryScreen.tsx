import { useState } from 'react';
import { Filter, CheckCircle2, XCircle } from 'lucide-react';

const historyData = [
  {
    id: 1,
    zone: 'B1',
    crop: 'Banana',
    issue: 'Water stress',
    result: 'Confirmed',
    date: '2025-12-01',
    confidence: 85,
  },
  {
    id: 2,
    zone: 'A2',
    crop: 'Maize',
    issue: 'Water stress',
    result: 'Confirmed',
    date: '2025-12-01',
    confidence: 78,
  },
  {
    id: 3,
    zone: 'C1',
    crop: 'Paddy',
    issue: 'Pest activity',
    result: 'False alert',
    date: '2025-12-01',
    confidence: 81,
  },
  {
    id: 4,
    zone: 'B1',
    crop: 'Banana',
    issue: 'Water stress',
    result: 'Confirmed',
    date: '2025-11-28',
    confidence: 88,
  },
  {
    id: 5,
    zone: 'A1',
    crop: 'Paddy',
    issue: 'Drainage issue',
    result: 'Confirmed',
    date: '2025-11-28',
    confidence: 92,
  },
  {
    id: 6,
    zone: 'B1',
    crop: 'Banana',
    issue: 'Nutrient deficiency',
    result: 'Confirmed',
    date: '2025-11-25',
    confidence: 86,
  },
  {
    id: 7,
    zone: 'C2',
    crop: 'Maize',
    issue: 'Water stress',
    result: 'False alert',
    date: '2025-11-25',
    confidence: 75,
  },
  {
    id: 8,
    zone: 'A2',
    crop: 'Maize',
    issue: 'Pest activity',
    result: 'False alert',
    date: '2025-11-22',
    confidence: 71,
  },
];

type FilterType = 'all' | 'confirmed' | 'false';

export function HistoryScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredData = historyData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'confirmed') return item.result === 'Confirmed';
    if (activeFilter === 'false') return item.result === 'False alert';
    return true;
  });

  const confirmedCount = historyData.filter((h) => h.result === 'Confirmed').length;
  const falseCount = historyData.filter((h) => h.result === 'False alert').length;

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-slate-900">History</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn">
          <p className="text-sm text-slate-600">Total Validations</p>
          <p className="text-3xl text-slate-900 mt-2">{historyData.length}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn stagger-1">
          <p className="text-sm text-slate-600">Confirmed Alerts</p>
          <p className="text-3xl text-slate-900 mt-2">{confirmedCount}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 animate-scaleIn stagger-2">
          <p className="text-sm text-slate-600">False Alerts</p>
          <p className="text-3xl text-slate-900 mt-2">{falseCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-slate-600">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter:</span>
        </div>
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm transition-all ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter('confirmed')}
          className={`px-4 py-2 rounded-lg text-sm transition-all ${
            activeFilter === 'confirmed'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Confirmed
        </button>
        <button
          onClick={() => setActiveFilter('false')}
          className={`px-4 py-2 rounded-lg text-sm transition-all ${
            activeFilter === 'false'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          False Alerts
        </button>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-6 py-4 text-sm text-slate-600">Zone</th>
                <th className="text-left px-6 py-4 text-sm text-slate-600">Crop</th>
                <th className="text-left px-6 py-4 text-sm text-slate-600">Issue</th>
                <th className="text-left px-6 py-4 text-sm text-slate-600">Result</th>
                <th className="text-left px-6 py-4 text-sm text-slate-600">Confidence</th>
                <th className="text-left px-6 py-4 text-sm text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-slate-900">Zone {item.zone}</td>
                  <td className="px-6 py-4 text-slate-600">{item.crop}</td>
                  <td className="px-6 py-4 text-slate-600">{item.issue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {item.result === 'Confirmed' ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span className="text-green-700">Confirmed</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-600">False alert</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.confidence}%</td>
                  <td className="px-6 py-4 text-slate-600">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-slate-100">
          {filteredData.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-slate-900">Zone {item.zone}</p>
                  <p className="text-sm text-slate-600 mt-1">{item.crop}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.result === 'Confirmed'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.result}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-2">{item.issue}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{item.date}</span>
                <span>{item.confidence}% confidence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}