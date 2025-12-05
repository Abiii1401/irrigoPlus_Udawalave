import { useState } from 'react';
import { Camera, Image, X, CheckCircle2, Loader2, Shield, ArrowLeft } from 'lucide-react';
import { DataWaveIllustration } from './illustrations/AgricultureIllustrations';

interface UploadValidationProps {
  onBack: () => void;
  onValidationComplete: (result: 'confirmed' | 'false') => void;
  validationResult: 'confirmed' | 'false' | null;
  onViewRecommendations: () => void;
}

export function UploadValidation({
  onBack,
  onValidationComplete,
  validationResult,
  onViewRecommendations,
}: UploadValidationProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  const handleImageSelect = (source: 'camera' | 'gallery') => {
    // Simulate image selection
    setSelectedImage(`${source}-image-${Date.now()}.jpg`);
  };

  const handleSendForValidation = () => {
    setIsValidating(true);
    // Simulate validation process
    setTimeout(() => {
      setIsValidating(false);
      // Randomly assign result for demo
      const result = Math.random() > 0.5 ? 'confirmed' : 'false';
      onValidationComplete(result as 'confirmed' | 'false');
    }, 2500);
  };

  const handleRetake = () => {
    setSelectedImage(null);
  };

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
        <h1 className="text-slate-900">Ground Validation</h1>
      </div>

      {/* No Image Selected - Show Upload Options */}
      {!selectedImage && !validationResult && (
        <div className="bg-white rounded-xl p-12 border border-slate-200 shadow-sm animate-scaleIn">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Camera Illustration */}
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Camera className="w-12 h-12 text-blue-600" />
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-100 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blue-200" />
              {/* Line illustration elements */}
              <svg
                className="absolute -top-8 -left-8 w-32 h-32 text-slate-200"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M10 50 Q 30 30, 50 50"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                <circle cx="10" cy="50" r="2" fill="currentColor" />
              </svg>
            </div>

            <div>
              <h2 className="text-slate-900 mb-2">Capture Ground Image</h2>
              <p className="text-slate-600 max-w-md">
                Take a photo of the crop to validate the satellite alert and confirm the
                actual ground conditions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <button
                onClick={() => handleImageSelect('camera')}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98]"
              >
                <Camera className="w-5 h-5" />
                Open camera
              </button>
              <button
                onClick={() => handleImageSelect('gallery')}
                className="flex-1 border border-slate-300 text-slate-700 py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                <Image className="w-5 h-5" />
                Choose from gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Selected - Show Preview */}
      {selectedImage && !validationResult && (
        <div className="space-y-6 animate-slideIn">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-slate-900">Image Preview</h3>
                <p className="text-sm text-slate-600 mt-1">{selectedImage}</p>
              </div>
              <button
                onClick={handleRetake}
                className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Placeholder with illustration */}
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-full h-full text-slate-200"
                  viewBox="0 0 400 300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="50" y="80" width="120" height="140" rx="8" />
                  <rect x="230" y="80" width="120" height="140" rx="8" />
                  <circle cx="110" cy="140" r="20" />
                  <circle cx="290" cy="140" r="20" />
                  <path d="M80 180 Q 110 160, 140 180" />
                  <path d="M260 180 Q 290 160, 320 180" />
                  <path d="M30 250 L 370 250" strokeDasharray="4 4" />
                </svg>
              </div>
              <Image className="w-12 h-12 text-slate-400 relative z-10" />
            </div>
          </div>

          <button
            onClick={handleSendForValidation}
            disabled={isValidating}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isValidating ? 'Validating...' : 'Send for validation'}
          </button>
        </div>
      )}

      {/* Validating State */}
      {isValidating && (
        <div className="bg-white rounded-xl p-12 border border-slate-200 shadow-sm animate-scaleIn">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border-2 border-blue-100 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Validating Alert</h3>
              <p className="text-slate-600">
                Comparing satellite alert with ground image...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Result - Confirmed */}
      {validationResult === 'confirmed' && (
        <div className="space-y-6 animate-scaleIn">
          <div className="bg-white rounded-xl p-8 border border-green-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                {/* Success animation elements */}
                <svg
                  className="absolute -inset-8 w-32 h-32"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    className="animate-pulse"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-900 mb-2">Issue Confirmed</h2>
                <p className="text-slate-600 max-w-md">
                  The satellite alert has been validated. Ground image confirms the
                  detected issue matches field conditions.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onViewRecommendations}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.98]"
          >
            View recommendations
          </button>
        </div>
      )}

      {/* Result - False Alert */}
      {validationResult === 'false' && (
        <div className="space-y-6 animate-scaleIn">
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-blue-200" />
                <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-blue-300" />
              </div>
              <div>
                <h2 className="text-slate-900 mb-2">False Alert</h2>
                <p className="text-slate-600 max-w-md">
                  Ground image shows no significant stress. The satellite alert has been
                  marked as false and will help improve future detection accuracy.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="w-full bg-slate-600 text-white py-4 rounded-xl hover:bg-slate-700 transition-all hover:shadow-lg active:scale-[0.98]"
          >
            Return to zone details
          </button>
        </div>
      )}
    </div>
  );
}