import { useState, useEffect } from 'react';
import { Satellite, MapPin, Bell, Clock, User } from 'lucide-react';
import { MapScreen } from './components/MapScreen';
import { ZoneDetails } from './components/ZoneDetails';
import { UploadValidation } from './components/UploadValidation';
import { Recommendations } from './components/Recommendations';
import { AlertsScreen } from './components/AlertsScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { LoginScreen } from './components/LoginScreen';
import { PremiumLoadingScreen } from './components/PremiumLoadingScreen';

type Screen = 'map' | 'alerts' | 'history' | 'profile';
type SubScreen = 'zone-details' | 'upload' | 'recommendations' | null;
type AppState = 'loading' | 'login' | 'authenticated';

export default function App() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [currentScreen, setCurrentScreen] = useState<Screen>('map');
  const [subScreen, setSubScreen] = useState<SubScreen>(null);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<'confirmed' | 'false' | null>(null);

  // Simulate initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState('login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setAppState('authenticated');
  };

  const handleZoneClick = (zoneId: string) => {
    setSelectedZone(zoneId);
    setSubScreen('zone-details');
  };

  const handleUploadClick = () => {
    setSubScreen('upload');
  };

  const handleValidationComplete = (result: 'confirmed' | 'false') => {
    setValidationResult(result);
  };

  const handleViewRecommendations = () => {
    setSubScreen('recommendations');
  };

  const handleBackToMap = () => {
    setSubScreen(null);
    setSelectedZone(null);
    setValidationResult(null);
  };

  const handleBackToZone = () => {
    setSubScreen('zone-details');
    setValidationResult(null);
  };

  const navItems = [
    { id: 'map' as Screen, label: 'Map', icon: MapPin },
    { id: 'alerts' as Screen, label: 'Alerts', icon: Bell },
    { id: 'history' as Screen, label: 'History', icon: Clock },
    { id: 'profile' as Screen, label: 'Profile', icon: User },
  ];

  // Show loading or login screens without navigation
  if (appState === 'loading') {
    return <PremiumLoadingScreen />;
  }

  if (appState === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Main authenticated app
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 animate-fadeIn relative">
      {/* Top Bar with premium styling */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/90 border-b border-slate-200/60 z-40 backdrop-blur-lg shadow-premium animate-slideIn">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-sm">
              <Satellite className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-900 font-semibold tracking-tight">AgriSense Udawalawe</span>
          </div>
          <button
            onClick={() => {
              setCurrentScreen('profile');
              setSubScreen(null);
            }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white cursor-pointer transition-all hover:shadow-lg hover:scale-110 relative group"
          >
            <User className="w-5 h-5" />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </button>
        </div>
      </div>

      {/* Desktop Side Navigation with premium styling */}
      <div className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-white/90 border-r border-slate-200/60 z-30 backdrop-blur-lg shadow-premium">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentScreen(item.id);
                  setSubScreen(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden ${
                  isActive
                    ? 'text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:scale-[1.02]'
                }`}
              >
                {/* Active background gradient */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-xl" />
                )}
                <Icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-medium">{item.label}</span>
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute right-2 w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-16 md:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 md:p-6 pb-24 md:pb-6">
          {appState === 'authenticated' && (
            <>
              {subScreen === 'zone-details' && selectedZone && (
                <ZoneDetails
                  zoneId={selectedZone}
                  onBack={handleBackToMap}
                  onUploadClick={handleUploadClick}
                />
              )}
              {subScreen === 'upload' && (
                <UploadValidation
                  onBack={handleBackToZone}
                  onValidationComplete={handleValidationComplete}
                  validationResult={validationResult}
                  onViewRecommendations={handleViewRecommendations}
                />
              )}
              {subScreen === 'recommendations' && (
                <Recommendations onBack={handleBackToMap} />
              )}
              {!subScreen && currentScreen === 'map' && (
                <MapScreen onZoneClick={handleZoneClick} />
              )}
              {!subScreen && currentScreen === 'alerts' && (
                <AlertsScreen onAlertClick={handleZoneClick} />
              )}
              {!subScreen && currentScreen === 'history' && <HistoryScreen />}
              {!subScreen && currentScreen === 'profile' && <ProfileScreen />}
            </>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 z-40">
        <nav className="h-full flex items-center justify-around px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentScreen(item.id);
                  setSubScreen(null);
                }}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}