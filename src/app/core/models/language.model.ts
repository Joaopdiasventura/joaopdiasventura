export type Language = 'en' | 'pt';

export const SUPPORTED_LANGUAGES = ['en', 'pt'] as const;
export const DEFAULT_LANGUAGE: Language = 'en';

export type Theme = 'light' | 'dark';
