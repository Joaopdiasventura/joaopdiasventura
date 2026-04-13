import { CaseStudyLink, CaseStudyPreview, LocalizedValue } from '../models/portfolio.model';

const OPEN_LIVE_PROJECT_LABEL = {
  en: 'Open live project',
  pt: 'Abrir projeto online',
} as const;

const repositoryLabel = (name: string): LocalizedValue<string> => ({
  en: `View ${name}`,
  pt: `Ver ${name}`,
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
      en: 'Digital banking and payment flows',
      pt: 'Banco digital e fluxos de pagamento',
    },
    year: '2025',
    teaser: {
      en: 'Digital bank for balances, transfers, payment requests, and QR payments with async settlement and live status updates.',
      pt: 'Banco digital para saldo, transferências, cobranças e pagamentos por QR com liquidação assíncrona e atualizações de status em tempo real.',
    },
    metrics: [
      {
        value: '248',
        label: { en: 'Automated tests', pt: 'Testes automatizados' },
      },
      {
        value: '10',
        label: { en: 'Protected views', pt: 'Telas protegidas' },
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
      en: 'Event-driven backend for onboarding, payment issuance, webhook confirmation, and async premium activation across four services.',
      pt: 'Backend orientado a eventos para onboarding, emissão de pagamento, confirmação por webhook e ativação premium assíncrona em quatro serviços.',
    },
    metrics: [
      {
        value: '4',
        label: { en: 'Deployable services', pt: 'Serviços implantáveis' },
      },
      {
        value: '8',
        label: { en: 'Message contracts', pt: 'Contratos de mensagem' },
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
      en: 'High-performance Node.js HTTP runtime',
      pt: 'Runtime HTTP de alta performance para Node.js',
    },
    year: '2025',
    teaser: {
      en: 'TypeScript HTTP runtime on node:http focused on direct routing, deferred parsing, and reproducible local benchmarks.',
      pt: 'Runtime HTTP em TypeScript sobre node:http, focado em roteamento direto, parsing adiado e benchmarks locais reproduzíveis.',
    },
    metrics: [
      {
        value: '30.1K',
        label: { en: 'Local RPS', pt: 'RPS local' },
      },
      {
        value: '37.25%',
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
      en: 'VOX',
      pt: 'VOX',
    },
    category: {
      en: 'Auditability and voting integrity',
      pt: 'Auditabilidade e integridade eleitoral',
    },
    year: '2025',
    teaser: {
      en: 'Voting platform designed to keep ballot state, audit trails, and operator feedback consistent under concurrent load.',
      pt: 'Plataforma de votação desenhada para manter estado do voto, trilhas de auditoria e feedback operacional consistentes sob carga concorrente.',
    },
    metrics: [
      {
        value: '500+',
        label: { en: 'Concurrent users', pt: 'Usuários simultâneos' },
      },
      {
        value: '29',
        label: { en: 'HTTP routes', pt: 'Rotas HTTP' },
      },
      {
        value: '108',
        label: { en: 'Automated tests', pt: 'Testes automatizados' },
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
      pt: 'Streaming de música',
    },
    year: '2025',
    teaser: {
      en: 'Streaming platform built for catalog growth, fast discovery, and smooth playback across web and mobile.',
      pt: 'Plataforma de streaming desenhada para crescimento de catálogo, descoberta rápida e reprodução fluida em web e mobile.',
    },
    metrics: [
      {
        value: '1.3K',
        label: { en: 'Launch accesses in 6h', pt: 'Acessos em 6h de lançamento' },
      },
      {
        value: '10s',
        label: { en: 'Chunk size', pt: 'Tamanho do chunk' },
      },
      {
        value: '3',
        label: { en: 'Delivery surfaces', pt: 'Superfícies de entrega' },
      },
    ],
    stack: ['Angular', 'MediaSource API', 'Capacitor'],
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
