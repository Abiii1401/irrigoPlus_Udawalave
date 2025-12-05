export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="h-4 bg-slate-200 rounded w-24 mb-3"></div>
          <div className="h-8 bg-slate-200 rounded w-16"></div>
        </div>
        <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-5 border border-slate-200 animate-pulse"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-1/2 mb-3"></div>
              <div className="h-3 bg-slate-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-6 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 animate-pulse">
            <div className="h-4 bg-slate-200 rounded flex-1"></div>
            <div className="h-4 bg-slate-200 rounded flex-1"></div>
            <div className="h-4 bg-slate-200 rounded flex-1"></div>
            <div className="h-4 bg-slate-200 rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
