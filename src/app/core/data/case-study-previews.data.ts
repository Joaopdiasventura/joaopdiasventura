import { CaseStudyPreview } from '../models/portfolio.model';

export const CASE_STUDY_PREVIEWS: readonly CaseStudyPreview[] = [
  {
    slug: 'vox',
    theme: 'vox',
    name: {
      en: 'VOX Electoral System',
      pt: 'VOX Sistema Eleitoral',
    },
    category: {
      en: 'Auditability and voting integrity',
      pt: 'Auditabilidade e integridade eleitoral',
    },
    year: '2025',
    teaser: {
      en: 'An electoral platform designed to make trust a system property rather than a promise.',
      pt: 'Uma plataforma eleitoral projetada para tornar confiança uma propriedade do sistema, não apenas uma promessa.',
    },
    metrics: [
      {
        value: '500+',
        label: { en: 'Concurrent users', pt: 'Usuários simultâneos' },
      },
      {
        value: '100%',
        label: { en: 'Vote trail coverage', pt: 'Cobertura de trilha de voto' },
      },
      {
        value: '0',
        label: { en: 'Ambiguous flow states', pt: 'Estados ambíguos no fluxo' },
      },
    ],
    stack: ['Angular', 'NestJS', 'PostgreSQL'],
    links: [
      {
        label: { en: 'Open live project', pt: 'Abrir projeto online' },
        href: 'https://v-o-x.vercel.app',
      },
    ],
  },
  {
    slug: 'etecfy',
    theme: 'etecfy',
    name: {
      en: 'Etecfy',
      pt: 'Etecfy',
    },
    category: {
      en: 'Music Streaming',
      pt: 'Streaming de Musicas',
    },
    year: '2025',
    teaser: {
      en: 'A music platform shaped around catalog growth, fast discovery, and a launch experience built to absorb attention.',
      pt: 'Uma plataforma de música moldada em torno de crescimento de catálogo, descoberta rápida e uma experiência de lançamento preparada para absorver atenção.',
    },
    metrics: [
      {
        value: '1.3K',
        label: { en: 'Launch accesses in 6h', pt: 'Acessos em 6h de lançamento' },
      },
      {
        value: 'Fast',
        label: { en: 'Catalog discovery', pt: 'Descoberta de catálogo' },
      },
      {
        value: 'Ready',
        label: { en: 'Growth-oriented model', pt: 'Modelo pronto para crescimento' },
      },
    ],
    stack: ['Android Development', 'Web Audio API', 'MongoDB'],
    links: [
      {
        label: { en: 'Open live project', pt: 'Abrir projeto online' },
        href: 'https://etecfy.vercel.app',
      },
    ],
  },
] as const;

export const CASE_STUDY_SLUGS = new Set<string>(
  CASE_STUDY_PREVIEWS.map((caseStudy) => caseStudy.slug),
);
