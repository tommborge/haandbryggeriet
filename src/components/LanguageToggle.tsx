import React from 'react';
import { Language } from '../types/language';

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  currentLanguage, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700/90 transition-all duration-300 flex items-center space-x-2 group"
      aria-label={`Switch to ${currentLanguage === 'no' ? 'Swedish' : 'Norwegian'}`}
    >
      <span className={`transition-all duration-300 ${currentLanguage === 'no' ? 'text-amber-400' : 'text-slate-400'}`}>
        NO
      </span>
      <div className="relative w-8 h-4 bg-slate-600 rounded-full">
        <div 
          className={`absolute top-0.5 w-3 h-3 bg-amber-400 rounded-full transition-transform duration-300 ${
            currentLanguage === 'sv' ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </div>
      <span className={`transition-all duration-300 ${currentLanguage === 'sv' ? 'text-amber-400' : 'text-slate-400'}`}>
        SV
      </span>
    </button>
  );
};