import { useState, useCallback } from 'react';
import { Language } from '../types/language';
import { content } from '../data/content';

export const useLanguage = (initialLanguage: Language = 'no') => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);
  
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'no' ? 'sv' : 'no');
  }, []);
  
  const setLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
  }, []);
  
  return {
    currentLanguage,
    content: content[currentLanguage],
    toggleLanguage,
    setLanguage,
    isNorwegian: currentLanguage === 'no',
    isSwedish: currentLanguage === 'sv'
  };
};