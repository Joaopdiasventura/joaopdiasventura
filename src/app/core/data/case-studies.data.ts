import { CaseStudy, CaseStudyPreview, CaseStudySlug } from '../models/portfolio.model';
import { CASE_STUDY_PREVIEWS } from './case-study-previews.data';

const INDEPENDENT_PUBLIC_CASE = {
  en: 'Independent engineering project',
  pt: 'Projeto independente de engenharia',
} as const;

const CASE_STUDY_PREVIEW_BY_SLUG = new Map(
  CASE_STUDY_PREVIEWS.map((preview) => [preview.slug, preview] as const),
);

const previewFor = (slug: CaseStudySlug): CaseStudyPreview => {
  const preview = CASE_STUDY_PREVIEW_BY_SLUG.get(slug);

  if (!preview) {
    throw new Error(`Missing case study preview for slug "${slug}".`);
  }

  return preview;
};

export const CASE_STUDIES = [
  {
    ...previewFor('auronix'),
    role: {
      en: 'Full-stack architecture, transactional backend design, workflow UX',
      pt: 'Arquitetura full-stack, desenho de backend transacional e UX de fluxo',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Full-stack digital bank with Angular and NestJS, PostgreSQL as the system of record, Redis-backed async settlement, and live transfer updates.',
      pt: 'Banco digital full-stack com Angular e NestJS, PostgreSQL como fonte de verdade, liquidação assíncrona apoiada por Redis e atualizações ao vivo de transferências.',
    },
    overview: {
      en: [
        'Auronix combines a feature-sliced Angular digital banking app with a modular NestJS backend for balances, transfers, payment requests, QR payments, and account detail flows.',
        'Monetary consistency stays on the server: PostgreSQL is the source of truth, transfers start as pending, workers settle them asynchronously, and final balance mutation runs under pessimistic row locks while live updates keep the UI current.',
      ],
      pt: [
        'Auronix combina uma aplicação Angular de banco digital organizada por features com um backend NestJS modular para saldo, transferências, cobranças, pagamentos por QR e fluxos de detalhe de conta.',
        'A consistência monetária fica no servidor: PostgreSQL é a fonte de verdade, transferências começam como pendentes, workers liquidam tudo de forma assíncrona, e a mutação final de saldo roda sob row locks pessimistas enquanto atualizações ao vivo mantêm a UI atualizada.',
      ],
    },
    highlights: {
      en: [
        'Digital bank organized as a modular monolith.',
        'Async settlement with balance recheck and pessimistic locks.',
        'Redis-backed SSE replay for balance and transfer status updates.',
      ],
      pt: [
        'Banco digital organizado como monólito modular.',
        'Liquidação assíncrona com rechecagem de saldo e locks pessimistas.',
        'Replay de SSE em Redis para saldo e status de transferência.',
      ],
    },
    challenge: {
      en: [
        'Transfer and payment submission had to feel immediate while settlement, balance rechecks, and double-spend protection remained asynchronous and strict.',
      ],
      pt: [
        'O envio de transferências e pagamentos precisava parecer imediato enquanto liquidação, rechecagem de saldo e proteção contra double spend permaneciam assíncronas e rigorosas.',
      ],
    },
    constraints: {
      en: [
        'All monetary values use integer cents.',
        'Cookie auth keeps session authority on the backend.',
        'Pending transfers must resist double spend under concurrency.',
        'Payment requests expire in ten minutes and notification replay stays bounded.',
      ],
      pt: [
        'Todos os valores monetários usam centavos inteiros.',
        'Autenticação por cookie mantém a autoridade de sessão no backend.',
        'Transferências pendentes precisam resistir a double spend sob concorrência.',
        'Cobranças expiram em dez minutos e o replay de notificações permanece limitado.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep core banking consistency inside one modular monolith',
          pt: 'Manter a consistência bancária central em um monólito modular',
        },
        description: {
          en: 'User, transfer, payment-request, notification, cache, and persistence concerns stay separated by module, while deployment remains unified so balance mutation does not depend on distributed coordination.',
          pt: 'Responsabilidades de usuário, transferência, cobrança, notificação, cache e persistência ficam separadas por módulo, enquanto o deploy permanece unificado para que a mutação de saldo não dependa de coordenação distribuída.',
        },
      },
      {
        title: {
          en: 'Accept transfers fast and settle them carefully',
          pt: 'Aceitar transferências rápido e liquidar com cuidado',
        },
        description: {
          en: 'The API persists a pending transfer immediately, then workers recheck balance under pessimistic locks before mutating both accounts and emitting the terminal event.',
          pt: 'A API persiste a transferência pendente imediatamente; depois, os workers rechecam o saldo sob locks pessimistas antes de mutar as duas contas e emitir o evento terminal.',
        },
      },
      {
        title: {
          en: 'Unify money movement entry into one canonical flow',
          pt: 'Unificar a entrada de movimentação financeira em um fluxo canônico',
        },
        description: {
          en: 'Manual keys, payment requests, first-party links, and QR payloads all resolve to the same authorization path, while live updates remove the need for polling-first UX after submission.',
          pt: 'Chaves manuais, cobranças, links próprios e payloads de QR convergem para o mesmo caminho de autorização bancária, enquanto atualizações ao vivo removem a necessidade de uma UX guiada por polling após o envio.',
        },
      },
    ],
    results: {
      en: [
        'Re-run on April 8, 2026: 149 client tests, 59 server unit tests, and 40 checked-in end-to-end scenarios covering account flows, payment-request expiry, double-spend protection, and notification replay.',
      ],
      pt: [
        'Reexecutado em 8 de abril de 2026: 149 testes do cliente, 59 testes unitários do servidor e 40 cenários end-to-end versionados cobrindo fluxos de conta, expiração de cobrança, double spend e replay de notificações.',
      ],
    },
    mediaCaption: {
      en: 'System view of digital account state, transfer authorization, and live settlement feedback.',
      pt: 'Visão de sistema do estado da conta digital, da autorização de transferência e do feedback de liquidação em tempo real.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Banking surface', pt: 'Superfície bancária' },
        title: { en: 'Protected digital banking surface with explicit states', pt: 'Superfície bancária protegida com estados explícitos' },
        body: {
          en: 'Balances, account history, transfer flows, and profile actions live in one session-aware banking surface with explicit loading, empty, and failure states.',
          pt: 'Saldo, extrato, fluxos de transferência e ações de perfil vivem em uma única superfície bancária orientada a sessão com estados explícitos de carregamento, vazio e falha.',
        },
      },
      {
        eyebrow: { en: 'Settlement', pt: 'Liquidação' },
        title: { en: 'Pending first, balanced later', pt: 'Pendente primeiro, saldo depois' },
        body: {
          en: 'Transfers enter quickly, settle in workers, and only finalize after balance is rechecked under pessimistic locks.',
          pt: 'Transferências entram rápido, liquidam em workers e só finalizam depois da rechecagem de saldo sob locks pessimistas.',
        },
      },
      {
        eyebrow: { en: 'Entry model', pt: 'Modelo de entrada' },
        title: { en: 'One authorization flow for every path', pt: 'Um fluxo de autorização para qualquer entrada' },
        body: {
          en: 'Email, request identifiers, links, and QR payloads all converge to one canonical transfer authorization state.',
          pt: 'Email, identificadores de cobrança, links e payloads de QR convergem para um único estado canônico de autorização de transferência.',
        },
      },
    ],
    seoTitle: {
      en: 'Auronix Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Auronix | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about a digital bank with transfer processing, payment requests, QR payments, and live settlement feedback in Auronix.',
      pt: 'Estudo de caso sobre um banco digital com processamento de transferências, cobranças, pagamentos por QR e feedback de liquidação em tempo real no Auronix.',
    },
  },
  {
    ...previewFor('modularis'),
    role: {
      en: 'Backend architecture, async workflow design, service contracts',
      pt: 'Arquitetura de backend, desenho de fluxo assíncrono e contratos de serviço',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Event-driven onboarding backend with four NestJS services, typed RabbitMQ contracts, split persistence, and verified premium-activation webhooks.',
      pt: 'Backend de onboarding orientado a eventos com quatro serviços NestJS, contratos tipados em RabbitMQ, persistência segmentada e webhooks validados para ativação premium.',
    },
    overview: {
      en: [
        'Modularis splits onboarding into four services: browser ingress, identity, payment orchestration, and webhook verification, all coordinated through typed contracts.',
        'Identity stays relational, payment state stays document-oriented, and the runtime ships verified webhooks, rate limiting, session cookies, live updates, and a deterministic gateway simulator for scenario validation.',
      ],
      pt: [
        'Modularis divide o onboarding em quatro serviços: entrada do navegador, identidade, orquestração de pagamento e verificação de webhook, todos coordenados por contratos tipados.',
        'A identidade permanece relacional, o estado do pagamento permanece documental, e o runtime entrega webhooks validados, rate limiting, cookies de sessão, atualizações ao vivo e um simulador determinístico de gateway para validação de cenários.',
      ],
    },
    highlights: {
      en: [
        'Four services with clear runtime boundaries.',
        'Typed RabbitMQ contracts with split persistence ownership.',
        'Webhook flow with HMAC validation, idempotency, and retry/backoff.',
      ],
      pt: [
        'Quatro serviços com fronteiras de runtime claras.',
        'Contratos tipados em RabbitMQ com persistência separada por responsabilidade.',
        'Fluxo de webhook com validação HMAC, idempotência e retry/backoff.',
      ],
    },
    challenge: {
      en: [
        'The browser-facing API had to return quickly while retries, duplicate callbacks, premium activation, and ownership boundaries remained explicit across asynchronous services.',
      ],
      pt: [
        'A API voltada ao navegador precisava responder rápido enquanto retries, callbacks duplicados, ativação premium e fronteiras de responsabilidade permaneciam explícitas entre serviços assíncronos.',
      ],
    },
    constraints: {
      en: [
        'Service-owned data only, with no cross-service global transaction.',
        'At-least-once delivery with idempotent consumers, retries, and dead-letter handling.',
        'Webhook signature verification over raw body plus cookie-authenticated browser flows.',
      ],
      pt: [
        'Os dados pertencem aos serviços, sem transação global entre eles.',
        'Entrega at-least-once com consumidores idempotentes, retries e tratamento de dead letter.',
        'Verificação de assinatura sobre raw body e fluxos de navegador autenticados por cookie.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Split onboarding into explicit service boundaries',
          pt: 'Dividir o onboarding em fronteiras explícitas de serviço',
        },
        description: {
          en: 'Browser ingress, identity, payments, and webhook validation own distinct responsibilities, making trust boundaries and failure modes visible in the architecture.',
          pt: 'Entrada do navegador, identidade, pagamentos e validação de webhook assumem responsabilidades distintas, tornando visíveis na arquitetura as fronteiras de confiança e os modos de falha.',
        },
      },
      {
        title: {
          en: 'Use persistence that matches each state model',
          pt: 'Usar persistência aderente a cada modelo de estado',
        },
        description: {
          en: 'Identity keeps strong relational guarantees while payments use mutable document state for callback metadata, retries, and processed-event tracking.',
          pt: 'A identidade preserva garantias relacionais fortes enquanto pagamentos usam estado documental mutável para metadados de callback, retries e rastreio de eventos processados.',
        },
      },
      {
        title: {
          en: 'Make async progress observable end to end',
          pt: 'Tornar o progresso assíncrono observável ponta a ponta',
        },
        description: {
          en: 'Live updates, centralized runtime config, and a deterministic gateway simulator make retries, expiry, duplicate webhooks, and premium convergence reproducible during validation.',
          pt: 'Atualizações ao vivo, configuração centralizada de runtime e um simulador determinístico de gateway tornam retries, expiração, webhooks duplicados e convergência premium reproduzíveis durante a validação.',
        },
      },
    ],
    results: {
      en: [
        'Verified on April 8, 2026: build, unit, and end-to-end suites passed with 57 tests across 14 suites while four services coordinated through eight typed message patterns.',
      ],
      pt: [
        'Verificado em 8 de abril de 2026: build, testes unitários e end-to-end passaram com 57 testes em 14 suites enquanto quatro serviços se coordenavam por oito padrões tipados de mensagem.',
      ],
    },
    mediaCaption: {
      en: 'System view of service boundaries, queue choreography, and premium-state propagation.',
      pt: 'Visão de sistema das fronteiras de serviço, da coreografia de filas e da propagação de estado premium.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Services', pt: 'Serviços' },
        title: { en: 'Four deployable responsibilities', pt: 'Quatro responsabilidades implantáveis' },
        body: {
          en: 'Ingress, identity, payments, and webhooks coordinate through shared contracts rather than shared persistence.',
          pt: 'Entrada, identidade, pagamentos e webhooks se coordenam por contratos compartilhados em vez de persistência compartilhada.',
        },
      },
      {
        eyebrow: { en: 'Messaging', pt: 'Mensageria' },
        title: { en: 'Idempotent async processing', pt: 'Processamento assíncrono idempotente' },
        body: {
          en: 'Payment progress is modeled through explicit message patterns, retries, and terminal states instead of hidden background behavior.',
          pt: 'O progresso do pagamento é modelado por padrões explícitos de mensagem, retries e estados terminais, sem comportamento oculto em segundo plano.',
        },
      },
      {
        eyebrow: { en: 'Client loop', pt: 'Ciclo do cliente' },
        title: { en: 'Live updates close the workflow', pt: 'Atualizações ao vivo fecham o fluxo' },
        body: {
          en: 'The browser receives scoped updates when payment state and premium access converge.',
          pt: 'O navegador recebe atualizações direcionadas quando estado de pagamento e acesso premium convergem.',
        },
      },
    ],
    seoTitle: {
      en: 'Modularis Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Modularis | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about an event-driven backend with typed service coordination, split persistence, verified webhooks, and live user-state updates.',
      pt: 'Estudo de caso sobre um backend orientado a eventos com coordenação tipada entre serviços, persistência segmentada, webhooks validados e atualizações ao vivo do estado do usuário.',
    },
  },
  {
    ...previewFor('votrix'),
    role: {
      en: 'Runtime architecture, performance engineering, benchmark methodology',
      pt: 'Arquitetura de runtime, engenharia de performance e metodologia de benchmark',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Minimal TypeScript HTTP runtime on node:http focused on direct routing, deferred parsing, and reproducible local benchmarks.',
      pt: 'Runtime HTTP minimalista em TypeScript sobre node:http, focado em roteamento direto, parsing adiado e benchmarks locais reproduzíveis.',
    },
    overview: {
      en: [
        'Votrix is a TypeScript runtime on top of node:http built to reduce work before the handler runs: direct route matching, deferred parsing, and a short response path.',
        'The public surface stays narrow with App, Router, AsyncLogger, body parsing, and logging helpers, and the repository includes a benchmark harness that measures the same scenarios against broader frameworks.',
      ],
      pt: [
        'Votrix é um runtime em TypeScript sobre node:http construído para reduzir trabalho antes do handler: match direto de rota, parsing adiado e um caminho de resposta curto.',
        'A superfície pública permanece enxuta com App, Router, AsyncLogger, body parsing e helpers de log, e o repositório inclui um harness de benchmark que mede os mesmos cenários contra frameworks mais amplos.',
      ],
    },
    highlights: {
      en: [
        'Static routes in Map structures and dynamic routes in a compact tree.',
        'Query and body parsing run only when the matched route needs them.',
        'Benchmarks versioned against Fastify and Express under the same scenarios.',
      ],
      pt: [
        'Rotas estáticas em estruturas Map e rotas dinâmicas em uma árvore compacta.',
        'Query e body parsing rodam só quando a rota casada precisa disso.',
        'Benchmarks versionados contra Fastify e Express sob os mesmos cenários.',
      ],
    },
    challenge: {
      en: [
        'The goal was measurable speed, not a generic framework clone. Routing, middleware, parsing, and error flow had to remain useful without paying unnecessary baseline runtime cost.',
      ],
      pt: [
        'O objetivo era velocidade mensurável, não um clone genérico de framework. Roteamento, middleware, parsing e fluxo de erro precisavam continuar úteis sem pagar custo basal desnecessário.',
      ],
    },
    constraints: {
      en: [
        'Built directly on platform HTTP primitives.',
        'No plugin runtime, schema-validation layer, or specialized serialization subsystem.',
        'Performance claims are limited to the versioned benchmark harness stored in the repository.',
      ],
      pt: [
        'Construído diretamente sobre os primitivos HTTP da plataforma.',
        'Sem runtime de plugin, camada de validação por schema ou subsistema especializado de serialização.',
        'As alegações de performance ficam limitadas ao harness de benchmark versionado no repositório.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep the hot path structurally short',
          pt: 'Manter o hot path estruturalmente curto',
        },
        description: {
          en: 'Server setup and optional middleware stay outside the common request path, while Router focuses on match, dispatch, and error flow with as little overhead as possible.',
          pt: 'Setup do servidor e middleware opcional ficam fora do caminho comum da requisição, enquanto o Router se concentra em match, despacho e erro com o menor overhead possível.',
        },
      },
      {
        title: {
          en: 'Do routing work before parsing work',
          pt: 'Fazer o trabalho de roteamento antes do parsing',
        },
        description: {
          en: 'Exact routes resolve through per-method Map lookups, dynamic paths traverse a compact tree, and query or params are only materialized after a real match.',
          pt: 'Rotas exatas resolvem por lookup em Map por método, caminhos dinâmicos percorrem uma árvore compacta, e query ou params só são materializados depois de um match real.',
        },
      },
      {
        title: {
          en: 'Ship the proof with the runtime',
          pt: 'Entregar a prova junto do runtime',
        },
        description: {
          en: 'The repository validates the scenarios and benchmarks Votrix against the comparison runtimes under the same local contracts, keeping the performance claim inspectable.',
          pt: 'O repositório valida os cenários e benchmarka o Votrix contra runtimes de comparação sob os mesmos contratos locais, mantendo a alegação de performance inspecionável.',
        },
      },
    ],
    results: {
      en: [
        'The benchmark artifact dated 2026-04-03T03:18:21.722Z shows Votrix leading all four measured scenarios, peaking at 30,124.80 RPS on GET /health and reaching a 37.25% lead over Fastify and a 42.08% lead over Express in create-user.',
      ],
      pt: [
        'O artefato de benchmark datado em 2026-04-03T03:18:21.722Z mostra o Votrix liderando os quatro cenários medidos, chegando a 30.124,80 RPS em GET /health e atingindo 37,25% de vantagem sobre o Fastify e 42,08% sobre o Express em create-user.',
      ],
    },
    mediaCaption: {
      en: 'System view of the hot path, routing stages, and benchmark evidence.',
      pt: 'Visão de sistema do hot path, das etapas de roteamento e da evidência de benchmark.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Routing', pt: 'Roteamento' },
        title: { en: 'Exact and dynamic routes stay cheap', pt: 'Rotas exatas e dinâmicas permanecem baratas' },
        body: {
          en: 'Map lookup handles exact paths while a compact tree handles params without pulling in expensive generalized machinery.',
          pt: 'Lookup em Map atende caminhos exatos enquanto uma árvore compacta trata params sem puxar maquinário generalista caro.',
        },
      },
      {
        eyebrow: { en: 'Parsing', pt: 'Parsing' },
        title: { en: 'Requests pay only for what they use', pt: 'A requisição só paga pelo que usa' },
        body: {
          en: 'Query parsing, body parsing, and promise checks happen only when the matched route actually needs them.',
          pt: 'Query parsing, body parsing e verificações de promise acontecem apenas quando a rota casada realmente precisa disso.',
        },
      },
      {
        eyebrow: { en: 'Proof', pt: 'Prova' },
        title: { en: 'Benchmark claims stay inspectable', pt: 'As alegações de benchmark permanecem inspecionáveis' },
        body: {
          en: 'The same harness validates scenarios first and then measures all runtimes under equivalent local contracts.',
          pt: 'O mesmo harness valida os cenários primeiro e depois mede todos os runtimes sob contratos locais equivalentes.',
        },
      },
    ],
    seoTitle: {
      en: 'Votrix Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Votrix | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about a high-performance runtime focused on hot-path reduction and benchmarked throughput gains.',
      pt: 'Estudo de caso sobre um runtime de alta performance focado em redução de hot path e ganhos de throughput medidos em benchmark.',
    },
  },
  {
    ...previewFor('vox'),
    role: {
      en: 'Product architecture, backend design, audit-oriented modeling',
      pt: 'Arquitetura de produto, desenho de backend e modelagem orientada a auditoria',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Design a voting flow where traceability, transactional safety, and operator clarity reinforce each other from end to end.',
      pt: 'Desenhar um fluxo de votação em que rastreabilidade, segurança transacional e clareza operacional se reforcem de ponta a ponta.',
    },
    overview: {
      en: [
        'VOX was conceived as an institutional voting platform where every critical interaction needed explicit state handling, auditable decisions, and confidence under concurrent access.',
        'The work focused on translating trust requirements into domain rules, persistence strategy, and user feedback that kept the flow legible without making it bureaucratic.',
      ],
      pt: [
        'VOX foi concebido como uma plataforma de votação institucional em que cada interação crítica precisava de tratamento explícito de estado, decisões auditáveis e confiança sob acesso concorrente.',
        'O trabalho se concentrou em traduzir requisitos de confiança em regras de domínio, estratégia de persistência e feedback de interface que mantivesse o fluxo legível sem torná-lo burocrático.',
      ],
    },
    highlights: {
      en: [
        'Domain model designed around elections, ballots, sessions, and validation states.',
        'Transaction rules and audit trails treated as first-class system behavior.',
        'Frontend flow kept explicit so users always understood progress and finality.',
      ],
      pt: [
        'Modelo de domínio estruturado em torno de eleições, cédulas, sessões e estados de validação.',
        'Regras transacionais e trilhas de auditoria tratadas como comportamento de sistema de primeira classe.',
        'Fluxo de frontend mantido explícito para que o usuário sempre entendesse progresso e finalização.',
      ],
    },
    challenge: {
      en: [
        'Voting systems fail when correctness stays implicit. The challenge was to make integrity visible in both architecture and experience.',
        'Each state transition needed to be deliberate, recoverable, and explainable to operators and users.',
      ],
      pt: [
        'Sistemas de votação falham quando a correção permanece implícita. O desafio era tornar a integridade visível tanto na arquitetura quanto na experiência.',
        'Cada transição de estado precisava ser deliberada, recuperável e explicável para operadores e usuários.',
      ],
    },
    constraints: {
      en: [
        'Institutional trust requirements.',
        'Concurrent access during critical voting windows.',
        'Need for transparent audit history without overwhelming the interface.',
      ],
      pt: [
        'Requisitos institucionais de confiança.',
        'Acesso concorrente em janelas críticas de votação.',
        'Necessidade de histórico de auditoria transparente sem sobrecarregar a interface.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model irreversible steps explicitly',
          pt: 'Modelar passos irreversíveis de forma explícita',
        },
        description: {
          en: 'The flow was organized around state transitions that reflected finality and removed hidden behavior from the voting journey.',
          pt: 'O fluxo foi organizado em torno de transições de estado que refletiam finalização e removiam comportamento oculto da jornada de votação.',
        },
      },
      {
        title: {
          en: 'Treat audit trails as product surface',
          pt: 'Tratar trilhas de auditoria como superfície de produto',
        },
        description: {
          en: 'Logging and trace history were not afterthoughts. They shaped how entities, validations, and admin feedback were designed.',
          pt: 'Logs e histórico de rastreabilidade não foram pós-pensamento. Eles moldaram o desenho de entidades, validações e feedback administrativo.',
        },
      },
      {
        title: {
          en: 'Balance confidence with usability',
          pt: 'Equilibrar confiança com usabilidade',
        },
        description: {
          en: 'UI states avoided ambiguity while keeping the experience fast and readable in high-attention moments.',
          pt: 'Os estados de interface evitaram ambiguidade enquanto mantinham a experiência rápida e legível em momentos de alta atenção.',
        },
      },
    ],
    results: {
      en: [
        'A voting system where trust is reinforced by backend guarantees and interface behavior.',
        'A case structured around explicit state handling, auditability, and critical product flows under concurrency.',
      ],
      pt: [
        'Um sistema de votação em que a confiança é reforçada por garantias de backend e comportamento de interface.',
        'Um caso estruturado em torno de tratamento explícito de estado, auditabilidade e fluxos críticos de produto sob concorrência.',
      ],
    },
    mediaCaption: {
      en: 'System view of election state, trust checkpoints, and operator visibility.',
      pt: 'Visão de sistema do estado da eleição, dos checkpoints de confiança e da visibilidade operacional.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'System view', pt: 'Visão de sistema' },
        title: { en: 'Audit-first election flow', pt: 'Fluxo eleitoral orientado a auditoria' },
        body: {
          en: 'Structured states, transaction checkpoints, and traceable actions.',
          pt: 'Estados estruturados, checkpoints transacionais e ações rastreáveis.',
        },
      },
      {
        eyebrow: { en: 'Operator view', pt: 'Visão operacional' },
        title: { en: 'Clear feedback under load', pt: 'Feedback claro sob carga' },
        body: {
          en: 'System signals designed to reduce ambiguity during critical windows.',
          pt: 'Sinais de sistema desenhados para reduzir ambiguidade em janelas críticas.',
        },
      },
      {
        eyebrow: { en: 'Reliability view', pt: 'Visão de confiabilidade' },
        title: {
          en: 'Trust expressed as data lineage',
          pt: 'Confiança expressa como linhagem de dados',
        },
        body: {
          en: 'Every relevant transition leaves an explainable footprint.',
          pt: 'Cada transição relevante deixa um rastro explicável.',
        },
      },
    ],
    seoTitle: {
      en: 'VOX Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso VOX | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about architecture, traceability, and voting integrity in the VOX platform.',
      pt: 'Estudo de caso sobre arquitetura, rastreabilidade e integridade eleitoral na plataforma VOX.',
    },
  },
  {
    ...previewFor('etecfy'),
    role: {
      en: 'Architecture, product structure, media-oriented frontend',
      pt: 'Arquitetura, estrutura de produto e frontend orientado a mídia',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Build a streaming product that feels immediate while staying structurally ready for growth in catalog, access, and media delivery.',
      pt: 'Construir um produto de streaming que pareça imediato sem perder preparo estrutural para crescimento de catálogo, acessos e entrega de mídia.',
    },
    overview: {
      en: [
        'Etecfy was designed as a music experience with equal attention to performance, navigation rhythm, and backend readiness for catalog expansion.',
        'The challenge was not only rendering media well, but deciding how discovery, organization, and future scale should shape the data model and the interface.',
      ],
      pt: [
        'Etecfy foi desenhado como uma experiência musical com atenção equivalente para performance, ritmo de navegação e preparo de backend para expansão de catálogo.',
        'O desafio não era apenas renderizar mídia com qualidade, mas decidir como descoberta, organização e escala futura deveriam moldar o modelo de dados e a interface.',
      ],
    },
    highlights: {
      en: [
        'Catalog structure planned for scale instead of hard-coded media shelves.',
        'Media integrations and user flow designed around perceived immediacy.',
        'Interface direction favored pace, energy, and hierarchy over generic app layouts.',
      ],
      pt: [
        'Estrutura de catálogo pensada para escala, não para prateleiras rígidas de mídia.',
        'Integrações de mídia e fluxo do usuário desenhados em torno de imediatismo percebido.',
        'A direção de interface favoreceu ritmo, energia e hierarquia acima de layouts genéricos.',
      ],
    },
    challenge: {
      en: [
        'Music products succeed when navigation feels effortless and the catalog feels alive. That required both product restraint and technical structure.',
        'The system needed to avoid visual noise while remaining extensible for future content and media behaviors.',
      ],
      pt: [
        'Produtos de música funcionam melhor quando a navegação parece sem esforço e o catálogo parece vivo. Isso exigiu contenção de produto e estrutura técnica ao mesmo tempo.',
        'O sistema precisava evitar ruído visual sem perder extensibilidade para conteúdo futuro e novos comportamentos de mídia.',
      ],
    },
    constraints: {
      en: [
        'Fast launch window and traffic spike right after release.',
        'Need for a scalable catalog model.',
        'Media behavior across web and mobile surfaces.',
      ],
      pt: [
        'Janela de lançamento curta e pico de tráfego logo após a estreia.',
        'Necessidade de um modelo de catálogo escalável.',
        'Comportamento de mídia entre superfícies web e mobile.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model discovery, not just playback',
          pt: 'Modelar descoberta, não apenas playback',
        },
        description: {
          en: 'The information architecture prioritized how users reach music quickly, making discovery a structural concern instead of a visual afterthought.',
          pt: 'A arquitetura da informação priorizou como usuários chegam rapidamente à música, tornando descoberta uma preocupação estrutural e não apenas visual.',
        },
      },
      {
        title: {
          en: 'Build for catalog expansion',
          pt: 'Construir para expansão de catálogo',
        },
        description: {
          en: 'Entities and views were designed for future breadth, preventing the product from collapsing as the catalog grows.',
          pt: 'Entidades e views foram desenhadas para amplitude futura, evitando que o produto colapse conforme o catálogo cresce.',
        },
      },
      {
        title: {
          en: 'Make playback feel immediate',
          pt: 'Fazer a reprodução parecer imediata',
        },
        description: {
          en: 'Chunked delivery, playback controls, and interface pacing were designed to keep listening fluid with minimal friction.',
          pt: 'Entrega em chunks, controles de reprodução e ritmo de interface foram desenhados para manter a escuta fluida com o mínimo de atrito.',
        },
      },
    ],
    results: {
      en: [
        'A streaming platform structured around catalog navigation, playback continuity, and delivery planning.',
        'Reached 1.3K accesses in six hours after launch while validating catalog depth and perceived responsiveness.',
      ],
      pt: [
        'Uma plataforma de streaming estruturada em torno de navegação de catálogo, continuidade de reprodução e planejamento de entrega.',
        'Alcançou 1,3 mil acessos em seis horas após o lançamento enquanto validava profundidade de catálogo e responsividade percebida.',
      ],
    },
    mediaCaption: {
      en: 'System view of catalog depth, release momentum, and motion language in a media-focused product.',
      pt: 'Visão de sistema da profundidade de catálogo, do impulso de lançamento e da linguagem de motion em um produto orientado a mídia.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Catalog view', pt: 'Visão de catálogo' },
        title: {
          en: 'Discovery-ready information architecture',
          pt: 'Arquitetura da informação pronta para descoberta',
        },
        body: {
          en: 'Content shelves and metadata planned for growth and fast navigation.',
          pt: 'Prateleiras de conteúdo e metadados planejados para crescimento e navegação rápida.',
        },
      },
      {
        eyebrow: { en: 'Playback view', pt: 'Visão de playback' },
        title: { en: 'Media-first pacing', pt: 'Ritmo orientado a mídia' },
        body: {
          en: 'Transitions and hierarchy keep the experience energetic without losing control.',
          pt: 'Transições e hierarquia mantêm a experiência enérgica sem perder controle.',
        },
      },
      {
        eyebrow: { en: 'Launch view', pt: 'Visão de lançamento' },
        title: { en: 'Prepared for attention spikes', pt: 'Preparado para picos de atenção' },
        body: {
          en: 'The launch validated both structure and perceived responsiveness.',
          pt: 'O lançamento validou tanto a estrutura quanto a responsividade percebida.',
        },
      },
    ],
    seoTitle: {
      en: 'Etecfy Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Etecfy | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about catalog scale, media delivery, and interface pacing in the Etecfy streaming platform.',
      pt: 'Estudo de caso sobre escala de catálogo, entrega de mídia e ritmo de interface na plataforma de streaming Etecfy.',
    },
  },
] as const satisfies readonly CaseStudy[];





