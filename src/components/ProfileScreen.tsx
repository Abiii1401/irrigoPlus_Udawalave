import { User, CheckCircle2, XCircle, Bell, Globe, LogOut } from "lucide-react";
import { useState } from "react";

export function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
      <h1 className="text-slate-900">Profile</h1>

      {/* User Info Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm animate-scaleIn">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
              <User className="w-10 h-10" />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h2 className="text-slate-900">Pradeep Silva</h2>
            <p className="text-slate-600 mt-1">Field Officer</p>
            <p className="text-sm text-slate-500 mt-1">
              pradeep.silva@IrrigoPlus+.lk
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          <div className="text-center">
            <p className="text-2xl text-slate-900">28</p>
            <p className="text-sm text-slate-600 mt-1">Zones Validated</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-slate-900">21</p>
            <p className="text-sm text-slate-600 mt-1">Confirmed Alerts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-slate-900">7</p>
            <p className="text-sm text-slate-600 mt-1">False Alerts</p>
          </div>
        </div>
      </div>

      {/* Performance Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm animate-scaleIn stagger-1">
        <h3 className="text-slate-900 mb-4">Validation Accuracy</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center transition-all hover:scale-110">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-900">Confirmed Alerts</p>
                <p className="text-sm text-slate-600">
                  Correctly validated issues
                </p>
              </div>
            </div>
            <span className="text-slate-900">75%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center transition-all hover:scale-110">
                <XCircle className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-slate-900">False Alerts</p>
                <p className="text-sm text-slate-600">
                  Helped improve detection
                </p>
              </div>
            </div>
            <span className="text-slate-900">25%</span>
          </div>
        </div>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-scaleIn stagger-2">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900">Settings</h3>
        </div>

        <div className="divide-y divide-slate-100">
          {/* Notifications Toggle */}
          <button
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-slate-600" />
              <div className="text-left">
                <p className="text-slate-900">Notifications</p>
                <p className="text-sm text-slate-600 mt-1">
                  Receive alerts for new issues
                </p>
              </div>
            </div>
            <div
              className={`w-12 h-7 rounded-full transition-all ${
                notificationsEnabled ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full mt-1 transition-all ${
                  notificationsEnabled ? "ml-6" : "ml-1"
                }`}
              ></div>
            </div>
          </button>

          {/* Language */}
          <button className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-slate-600" />
              <div className="text-left">
                <p className="text-slate-900">Language</p>
                <p className="text-sm text-slate-600 mt-1">English</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Logout */}
          <button className="w-full flex items-center gap-3 p-6 hover:bg-red-50 transition-colors text-red-600">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
