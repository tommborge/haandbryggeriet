export type Language = 'no' | 'sv';

export interface LanguageContent {
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
    downloadButton: string;
  };
  heritage: {
    title: string;
    description: string;
    cards: {
      years: { title: string; description: string };
      award: { title: string; description: string };
      position: { title: string; description: string };
    };
  };
  situation: {
    title: string;
    description: string;
    challenges: {
      title: string;
      items: string[];
    };
    opportunities: {
      title: string;
      items: string[];
    };
    capacity: {
      current: string;
      today: string;
      investment: string;
    };
  };
  partnership: {
    title: string;
    description: string;
    cards: {
      global: { title: string; description: string };
      export: { title: string; description: string };
      craft: { title: string; description: string };
    };
  };
  growth: {
    title: string;
    description: string;
    projects: {
      retail: { title: string; description: string; note: string };
      volume: { title: string; description: string; note: string };
      strategic: { title: string; description: string; note: string };
    };
  };
  whyNow: {
    title: string;
    description: string;
    haandbryggeriet: {
      title: string;
      items: string[];
    };
    vi: {
      title: string;
      items: string[];
    };
    ctaButton: string;
  };
  footer: {
    subtitle: string;
  };
}