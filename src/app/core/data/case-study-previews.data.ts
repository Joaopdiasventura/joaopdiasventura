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
      en: 'Distributed onboarding saga and payment orchestration',
      pt: 'Saga distribuída de onboarding e orquestração de pagamentos',
    },
    teaser: {
      en: 'Polyglot microservice platform where a persisted onboarding saga coordinates identity, payment intent, verified webhooks, and premium activation through RabbitMQ contracts.',
      pt: 'Plataforma de microsserviços poliglota em que uma saga persistida de onboarding coordena identidade, intenção de pagamento, webhooks verificados e ativação premium por contratos RabbitMQ.',
    },
    metrics: [
      {
        value: '6',
        label: { en: 'Deployable services', pt: 'Serviços implantáveis' },
      },
      {
        value: '9',
        label: { en: 'Async channels', pt: 'Canais assíncronos' },
      },
      {
        value: '3',
        label: { en: 'Runtime stacks', pt: 'Stacks de runtime' },
      },
    ],
    stack: ['NestJS', 'Spring Boot', 'Go'],
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
    slug: 'ggc',
    name: {
      en: 'GGCompress',
      pt: 'GGCompress',
    },
    category: {
      en: 'High-throughput archive and compression engineering',
      pt: 'Engenharia de compressão e arquivamento de alto throughput',
    },
    teaser: {
      en: 'Go compression engine built around ordered chunk pipelines, deterministic indexing, and benchmarked multi-gigabyte throughput.',
      pt: 'Motor de compressão em Go construído em torno de pipelines ordenados por chunk, indexação determinística e throughput em multigigabytes medido em benchmark.',
    },
    metrics: [
      {
        value: '1.23 GiB/s',
        label: { en: 'Observed throughput', pt: 'Throughput observado' },
      },
      {
        value: '9.77 GiB',
        label: { en: 'Benchmark input', pt: 'Entrada de benchmark' },
      },
      {
        value: '0.47%',
        label: { en: 'Compression ratio', pt: 'Taxa de compressão' },
      },
    ],
    stack: ['Go', 'gzip', 'SHA-256'],
    links: [
      repositoryLink(
        { en: 'repository', pt: 'repositório' },
        'https://github.com/Joaopdiasventura/ggc',
      ),
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
    stack: ['Angular', 'NestJS', 'Capacitor'],
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
