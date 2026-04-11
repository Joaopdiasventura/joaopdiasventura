import { CaseStudyLink, CaseStudyPreview, LocalizedValue } from '../models/portfolio.model';

const OPEN_LIVE_PROJECT_LABEL = {
  en: 'Open live project',
  pt: 'Abrir projeto online',
} as const;

const repositoryLabel = (name: string): LocalizedValue<string> => ({
  en: `View ${name} repository`,
  pt: `Ver repositorio ${name}`,
});

const liveLink = (href: CaseStudyLink['href']): CaseStudyLink => ({
  label: OPEN_LIVE_PROJECT_LABEL,
  href,
});

const repositoryLink = (name: string, href: CaseStudyLink['href']): CaseStudyLink => ({
  label: repositoryLabel(name),
  href,
});

export const CASE_STUDY_PREVIEWS = [
  {
    slug: 'auronix',
    theme: 'auronix',
    name: {
      en: 'Auronix',
      pt: 'Auronix',
    },
    category: {
      en: 'Stored-value transfers and payment requests',
      pt: 'Transferencias de saldo e cobrancas',
    },
    year: '2025',
    teaser: {
      en: 'Full-stack financial workspace with Angular and NestJS, PostgreSQL as the system of record, Redis-backed async delivery, and live updates for transfer outcomes.',
      pt: 'Workspace financeiro full-stack com Angular e NestJS, PostgreSQL como fonte de verdade, entrega assincrona apoiada por Redis e atualizacoes ao vivo para desfechos de transferencia.',
    },
    metrics: [
      {
        value: '208',
        label: { en: 'Automated tests', pt: 'Testes automatizados' },
      },
      {
        value: '10',
        label: { en: 'Guarded screens', pt: 'Telas protegidas' },
      },
      {
        value: '100 / 24h',
        label: { en: 'SSE replay window', pt: 'Janela de replay SSE' },
      },
    ],
    stack: ['Angular', 'NestJS', 'PostgreSQL + Redis'],
    links: [
      liveLink('https://auronix-client.vercel.app'),
      repositoryLink('Auronix Client', 'https://github.com/Joaopdiasventura/Auronix-client'),
      repositoryLink('Auronix Server', 'https://github.com/Joaopdiasventura/Auronix-server'),
    ],
  },
  {
    slug: 'modularis',
    theme: 'modularis',
    name: {
      en: 'Modularis',
      pt: 'Modularis',
    },
    category: {
      en: 'Event-driven onboarding and payments',
      pt: 'Onboarding e pagamentos orientados a eventos',
    },
    year: '2025',
    teaser: {
      en: 'Event-driven onboarding backend with four NestJS services, RabbitMQ contracts, PostgreSQL plus MongoDB persistence, and verified webhooks for premium activation.',
      pt: 'Backend de onboarding orientado a eventos com quatro servicos NestJS, contratos sobre RabbitMQ, persistencia em PostgreSQL e MongoDB, e webhooks validados para ativacao premium.',
    },
    metrics: [
      {
        value: '4',
        label: { en: 'Deployable services', pt: 'Servicos implantaveis' },
      },
      {
        value: '8',
        label: { en: 'Typed message patterns', pt: 'Padroes tipados' },
      },
      {
        value: '57',
        label: { en: 'Passing tests', pt: 'Testes aprovados' },
      },
    ],
    stack: ['NestJS', 'RabbitMQ', 'PostgreSQL + MongoDB'],
    links: [
      repositoryLink('Modularis Workspace', 'https://github.com/Joaopdiasventura/Modularis'),
    ],
  },
  {
    slug: 'votrix',
    theme: 'votrix',
    name: {
      en: 'Votrix',
      pt: 'Votrix',
    },
    category: {
      en: 'High-performance Node.js HTTP framework',
      pt: 'Framework HTTP de alta performance para Node.js',
    },
    year: '2025',
    teaser: {
      en: 'Minimal TypeScript HTTP runtime on node:http focused on route resolution, deferred parsing, and reproducible benchmark throughput across real request scenarios.',
      pt: 'Runtime HTTP minimalista em TypeScript sobre node:http focado em resolucao de rotas, parsing adiado e throughput reproduzivel em benchmark com cenarios reais.',
    },
    metrics: [
      {
        value: '30.1K',
        label: { en: 'Local RPS', pt: 'RPS local' },
      },
      {
        value: '37.3%',
        label: { en: 'Lead vs Fastify', pt: 'Vantagem vs Fastify' },
      },
      {
        value: '42.08%',
        label: { en: 'Lead vs Express', pt: 'Vantagem vs Express' },
      },
    ],
    stack: ['TypeScript', 'node:http', 'autocannon'],
    links: [
      repositoryLink('Votrix Repository', 'https://github.com/Joaopdiasventura/Votrix'),
    ],
  },
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
      en: 'Voting platform built with Angular, NestJS, and PostgreSQL to keep ballot state, audit trails, and operator feedback consistent under concurrent sessions.',
      pt: 'Plataforma de votacao em Angular, NestJS e PostgreSQL para manter estado do voto, trilhas de auditoria e feedback operacional consistentes sob concorrencia.',
    },
    metrics: [
      {
        value: '500+',
        label: { en: 'Users', pt: 'Usuarios' },
      },
      {
        value: '100%',
        label: { en: 'Vote trail coverage', pt: 'Cobertura de trilha de voto' },
      },
      {
        value: '0',
        label: { en: 'Ambiguous flow states', pt: 'Estados ambiguos no fluxo' },
      },
    ],
    stack: ['Angular', 'NestJS', 'PostgreSQL'],
    links: [
      liveLink('https://v-o-x.vercel.app'),
      repositoryLink('VOX App', 'https://github.com/Joaopdiasventura/Vox'),
      repositoryLink('VOX Landing Page', 'https://github.com/Joaopdiasventura/vox-landing-page'),
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
      en: 'Music streaming',
      pt: 'Streaming de musica',
    },
    year: '2025',
    teaser: {
      en: 'A music platform shaped around catalog growth, fast discovery, and a launch experience built to absorb attention.',
      pt: 'Uma plataforma de musica moldada em torno de crescimento de catalogo, descoberta rapida e uma experiencia de lancamento preparada para absorver atencao.',
    },
    metrics: [
      {
        value: '16K+',
        label: { en: 'Accesses', pt: 'Acessos' },
      },
      {
        value: 'Fast',
        label: { en: 'Catalog discovery', pt: 'Descoberta de catalogo' },
      },
      {
        value: 'Ready',
        label: { en: 'Growth-oriented model', pt: 'Modelo pronto para crescimento' },
      },
    ],
    stack: ['Android Development', 'Web Audio API', 'MongoDB'],
    links: [
      liveLink('https://etecfy.vercel.app'),
      repositoryLink('Etecfy Client', 'https://github.com/Joaopdiasventura/etecfy-client'),
      repositoryLink('Etecfy Server', 'https://github.com/Joaopdiasventura/etecfy-server'),
    ],
  },
] as const satisfies readonly CaseStudyPreview[];

export const CASE_STUDY_SLUGS = new Set<string>(
  CASE_STUDY_PREVIEWS.map((caseStudy) => caseStudy.slug),
);
