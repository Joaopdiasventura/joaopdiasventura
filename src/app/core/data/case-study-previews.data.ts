import { CaseStudyLink, CaseStudyPreview, LocalizedValue } from '../models/portfolio.model';

const OPEN_LIVE_PROJECT_LABEL = {
  en: 'Open live project',
  pt: 'Abrir projeto online',
} as const;

const repositoryLabel = (name: LocalizedValue<string>): LocalizedValue<string> => ({
  en: `View ${name.en}`,
  pt: `Ver ${name.pt}`,
});

const liveLink = (href: CaseStudyLink['href']): CaseStudyLink => ({
  label: OPEN_LIVE_PROJECT_LABEL,
  href,
});

const repositoryLink = (
  name: LocalizedValue<string>,
  href: CaseStudyLink['href'],
): CaseStudyLink => ({
  label: repositoryLabel(name),
  href,
});

export const CASE_STUDY_PREVIEWS = [
  {
    slug: 'auronix',
    name: {
      en: 'Auronix',
      pt: 'Auronix',
    },
    category: {
      en: 'Digital banking and payment flows',
      pt: 'Banco digital e fluxos de pagamento',
    },
    teaser: {
      en: 'Digital banking flow with async settlement, live status, and strict money movement rules.',
      pt: 'Fluxo bancário digital com liquidação assíncrona, status ao vivo e regras estritas de movimentação financeira.',
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
    stack: ['Angular', 'PostgreSQL', 'Redis'],
    links: [
      liveLink('https://auronix-client.vercel.app'),
      repositoryLink(
        { en: 'backend code', pt: 'código do backend' },
        'https://github.com/joaopdiasventura/Auronix-server',
      ),
      repositoryLink(
        { en: 'frontend code', pt: 'código do frontend' },
        'https://github.com/joaopdiasventura/Auronix-client',
      ),
    ],
  },
  {
    slug: 'modularis',
    name: {
      en: 'Modularis',
      pt: 'Modularis',
    },
    category: {
      en: 'Event-driven onboarding and payments',
      pt: 'Onboarding e pagamentos orientados a eventos',
    },
    teaser: {
      en: 'Event-driven onboarding backend with typed contracts, verified webhooks, and premium activation across four services.',
      pt: 'Backend de onboarding orientado a eventos com contratos tipados, webhooks validados e ativação premium em quatro serviços.',
    },
    metrics: [
      {
        value: '4',
        label: { en: 'Microservices', pt: 'Microsserviços' },
      },
      {
        value: '57',
        label: { en: 'Passing tests', pt: 'Testes aprovados' },
      },
      {
        value: '8',
        label: { en: 'Message contracts', pt: 'Contratos de mensagem' },
      },
    ],
    stack: ['RabbitMQ', 'Docker', 'MongoDB'],
    links: [
      repositoryLink({ en: 'Code', pt: 'Código' }, 'https://github.com/joaopdiasventura/Modularis'),
    ],
  },
  {
    slug: 'votrix',
    name: {
      en: 'Votrix',
      pt: 'Votrix',
    },
    category: {
      en: 'High-performance Node.js HTTP runtime',
      pt: 'Runtime HTTP de alta performance para Node.js',
    },
    teaser: {
      en: 'TypeScript HTTP runtime built for direct routing, deferred parsing, and inspectable benchmark gains.',
      pt: 'Runtime HTTP em TypeScript construído para roteamento direto, parsing adiado e ganhos de benchmark inspecionáveis.',
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
      repositoryLink({ en: 'code', pt: 'código' }, 'https://github.com/joaopdiasventura/Votrix'),
    ],
  },
  {
    slug: 'vox',
    name: {
      en: 'VOX',
      pt: 'VOX',
    },
    category: {
      en: 'Auditability and voting integrity',
      pt: 'Auditabilidade e integridade eleitoral',
    },
    teaser: {
      en: 'Voting platform focused on explicit state, auditability, and operator clarity under concurrent load.',
      pt: 'Plataforma de votação focada em estado explícito, auditabilidade e clareza operacional sob carga concorrente.',
    },
    metrics: [
      {
        value: '+500',
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
    stack: ['Tauri', 'NestJS', 'Redis'],
    links: [liveLink('https://v-o-x.vercel.app')],
  },
  {
    slug: 'etecfy',
    name: {
      en: 'Etecfy',
      pt: 'Etecfy',
    },
    category: {
      en: 'Music streaming',
      pt: 'Streaming de música',
    },
    teaser: {
      en: 'Streaming platform built for catalog growth, fast discovery, and smooth playback.',
      pt: 'Plataforma de streaming desenhada para crescimento de catálogo, descoberta rápida e reprodução fluida.',
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
    stack: ['Angular', 'NestJs', 'Capacitor'],
    links: [
      liveLink('https://etecfy.vercel.app'),
      repositoryLink(
        { en: 'backend code', pt: 'código do backend' },
        'https://github.com/joaopdiasventura/etecfy-server',
      ),
      repositoryLink(
        { en: 'frontend code', pt: 'código do frontend' },
        'https://github.com/joaopdiasventura/etecfy-client',
      ),
    ],
  },
] as const satisfies readonly CaseStudyPreview[];

export const CASE_STUDY_SLUGS = new Set<string>(
  CASE_STUDY_PREVIEWS.map((caseStudy) => caseStudy.slug),
);
