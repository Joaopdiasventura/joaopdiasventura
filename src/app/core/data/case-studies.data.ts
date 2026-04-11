import { CaseStudy, CaseStudyPreview, CaseStudySlug } from '../models/portfolio.model';
import { CASE_STUDY_PREVIEWS } from './case-study-previews.data';

const INDEPENDENT_PUBLIC_CASE = {
  en: 'Independent engineering project',
  pt: 'Projeto de engenharia independente',
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
      en: 'Full-stack financial workspace with Angular and NestJS, PostgreSQL as the system of record, Redis-backed async delivery, and live updates for transfer outcomes.',
      pt: 'Workspace financeiro full-stack com Angular e NestJS, PostgreSQL como fonte de verdade, entrega assincrona apoiada por Redis e atualizacoes ao vivo para desfechos de transferencia.',
    },
    overview: {
      en: [
        'Auronix combines a feature-sliced Angular workspace with a modular NestJS backend for account access, balance views, transfer authorization, payment requests, QR entry, and transfer detail screens.',
        'Monetary correctness stays on the server: PostgreSQL is the system of record, transfers enter as pending, workers settle them asynchronously, and final balance mutation runs under pessimistic row locks while live updates keep the UI current.',
      ],
      pt: [
        'Auronix combina um workspace Angular organizado por features com um backend NestJS modular para acesso de conta, visualizacao de saldo, autorizacao de transferencia, cobrancas, entrada por QR e telas de detalhe.',
        'A corretude monetaria fica no servidor: PostgreSQL e a fonte de verdade, transferencias entram como pendentes, workers as liquidam de forma assincrona e a mutacao final de saldo roda sob row locks pessimistas enquanto atualizacoes ao vivo mantem a UI atualizada.',
      ],
    },
    highlights: {
      en: [
        'Modular monolith organized by financial domain.',
        'Asynchronous settlement with balance recheck and pessimistic locks.',
        'Redis-backed SSE replay for balance and transfer status updates.',
      ],
      pt: [
        'Monolito modular organizado por dominio financeiro.',
        'Liquidacao assincrona com rechecagem de saldo e locks pessimistas.',
        'Replay de SSE em Redis para saldo e status de transferencia.',
      ],
    },
    challenge: {
      en: [
        'Transfer entry had to feel immediate even though settlement, balance rechecks, and double-spend protection happen asynchronously under strict consistency rules.',
      ],
      pt: [
        'A entrada de transferencia precisava parecer imediata mesmo com liquidacao, rechecagem de saldo e protecao contra double spend acontecendo de forma assincrona sob regras estritas de consistencia.',
      ],
    },
    constraints: {
      en: [
        'All monetary values use integer cents.',
        'Cookie-based auth with backend-owned session authority.',
        'Pending transfers must resist double spend under concurrency.',
        'Payment requests expire in ten minutes and notification replay stays bounded.',
      ],
      pt: [
        'Todos os valores monetarios usam centavos inteiros.',
        'Autenticacao por cookie com autoridade de sessao no backend.',
        'Transferencias pendentes precisam resistir a double spend sob concorrencia.',
        'Cobrancas expiram em dez minutos e o replay de notificacoes permanece limitado.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep monetary consistency inside one modular monolith',
          pt: 'Manter a consistencia monetaria em um monolito modular',
        },
        description: {
          en: 'User, transfer, payment-request, notification, cache, and persistence concerns stay separated by module, but deployment remains unified so balance mutation does not depend on distributed coordination.',
          pt: 'Responsabilidades de usuario, transferencia, cobranca, notificacao, cache e persistencia ficam separadas por modulo, mas o deploy continua unificado para que a mutacao de saldo nao dependa de coordenacao distribuida.',
        },
      },
      {
        title: {
          en: 'Accept transfers fast and settle them carefully',
          pt: 'Aceitar transferencias rapido e liquidar com cuidado',
        },
        description: {
          en: 'The API persists a pending transfer immediately, then workers re-check balance under pessimistic locks before mutating both accounts and emitting the terminal event.',
          pt: 'A API persiste a transferencia pendente imediatamente; depois, os workers rechecam o saldo sob locks pessimistas antes de mutar as duas contas e emitir o evento terminal.',
        },
      },
      {
        title: {
          en: 'Unify transfer entry around one canonical resolution path',
          pt: 'Unificar a entrada de transferencia em um caminho canonico',
        },
        description: {
          en: 'Manual keys, payment requests, first-party links, and QR payloads all resolve to the same authorization flow, and live updates remove the need for polling-first UX after submission.',
          pt: 'Chaves manuais, cobrancas, links de primeira parte e payloads de QR convergem para o mesmo fluxo de autorizacao, e atualizacoes ao vivo removem a necessidade de uma UX guiada por polling apos o envio.',
        },
      },
    ],
    results: {
      en: [
        'Re-run successfully on April 8, 2026: 149 client tests, 59 server unit tests, and 40 checked-in end-to-end scenarios covering account flows, payment-request expiry, double-spend protection, and notification replay.',
      ],
      pt: [
        'Reexecutado com sucesso em 8 de abril de 2026: 149 testes do cliente, 59 testes unitarios do servidor e 40 cenarios end-to-end versionados cobrindo fluxos de conta, expiracao de cobranca, double spend e replay de notificacoes.',
      ],
    },
    mediaCaption: {
      en: 'System view of account state, transfer authorization, and real-time settlement feedback.',
      pt: 'Visao de sistema do estado da conta, da autorizacao de transferencia e do feedback de liquidacao em tempo real.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Workspace', pt: 'Workspace' },
        title: { en: 'Protected account surface with explicit states', pt: 'Superficie protegida com estados explicitos' },
        body: {
          en: 'Balance, ledger slices, transfer flows, and profile actions live in one session-aware workspace with clear loading, empty, and failure handling.',
          pt: 'Saldo, recortes de extrato, fluxos de transferencia e acoes de perfil vivem em um unico workspace orientado a sessao com tratamento claro de carregamento, vazio e falha.',
        },
      },
      {
        eyebrow: { en: 'Settlement', pt: 'Liquidacao' },
        title: { en: 'Pending first, balanced later', pt: 'Pendente primeiro, saldo depois' },
        body: {
          en: 'Transfers enter quickly, settle in workers, and only finalize after balance is rechecked under pessimistic locks.',
          pt: 'Transferencias entram rapido, liquidam em workers e so finalizam depois de rechecagem de saldo sob locks pessimistas.',
        },
      },
      {
        eyebrow: { en: 'Entry model', pt: 'Modelo de entrada' },
        title: { en: 'One authorization flow for every input path', pt: 'Um fluxo de autorizacao para qualquer entrada' },
        body: {
          en: 'Email, request identifiers, links, and QR payloads all converge to one canonical transfer authorization state.',
          pt: 'Email, identificadores de cobranca, links e payloads de QR convergem para um unico estado canonico de autorizacao de transferencia.',
        },
      },
    ],
    seoTitle: {
      en: 'Auronix Project | Joao Paulo Dias Ventura',
      pt: 'Projeto Auronix | Joao Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Project page about a financial workspace with transfer processing, payment requests, QR entry, and real-time notifications in Auronix.',
      pt: 'Pagina do projeto sobre um workspace financeiro com processamento de transferencias, cobrancas, entrada por QR e notificacoes em tempo real no Auronix.',
    },
  },
  {
    ...previewFor('modularis'),
    role: {
      en: 'Backend architecture, async workflow design, service contracts',
      pt: 'Arquitetura de backend, desenho de fluxo assincrono e contratos de servico',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Event-driven onboarding backend with four NestJS services, RabbitMQ contracts, PostgreSQL plus MongoDB persistence, and verified webhooks for premium activation.',
      pt: 'Backend de onboarding orientado a eventos com quatro servicos NestJS, contratos sobre RabbitMQ, persistencia em PostgreSQL e MongoDB, e webhooks validados para ativacao premium.',
    },
    overview: {
      en: [
        'Modularis splits onboarding into four services: browser ingress, identity, payment orchestration, and webhook verification, all coordinated through typed contracts.',
        'User identity stays relational, payment state stays document-oriented, and the runtime ships verified webhooks, rate limiting, session cookies, live updates, and a deterministic gateway simulator for scenario validation.',
      ],
      pt: [
        'Modularis divide o onboarding em quatro servicos: entrada do navegador, identidade, orquestracao de pagamento e verificacao de webhook, todos coordenados por contratos tipados.',
        'A identidade do usuario fica em modelo relacional, o estado do pagamento em modelo documental, e o runtime entrega webhooks validados, rate limiting, cookies de sessao, atualizacoes ao vivo e simulador deterministico de gateway para validacao de cenarios.',
      ],
    },
    highlights: {
      en: [
        'Four services with clear runtime boundaries.',
        'Typed RabbitMQ contracts with split persistence ownership.',
        'Webhook flow with HMAC validation, idempotency, and retry/backoff.',
      ],
      pt: [
        'Quatro servicos com fronteiras de runtime claras.',
        'Contratos tipados em RabbitMQ com persistencia separada por responsabilidade.',
        'Fluxo de webhook com validacao HMAC, idempotencia e retry/backoff.',
      ],
    },
    challenge: {
      en: [
        'The browser-facing API had to return quickly while retries, duplicate callbacks, premium activation, and ownership boundaries remained explicit across asynchronous services.',
      ],
      pt: [
        'A API voltada ao navegador precisava responder rapido enquanto retries, callbacks duplicados, ativacao premium e fronteiras de responsabilidade permaneciam explicitos entre servicos assincronos.',
      ],
    },
    constraints: {
      en: [
        'Service-owned data only, with no cross-service global transaction.',
        'At-least-once delivery with idempotent consumers, retries, and dead-letter handling.',
        'Webhook signature verification over raw body plus cookie-authenticated browser flows.',
      ],
      pt: [
        'Dados pertencem aos servicos, sem transacao global entre eles.',
        'Entrega at-least-once com consumidores idempotentes, retries e dead letter.',
        'Verificacao de assinatura em raw body e fluxos de navegador autenticados por cookie.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Split onboarding into explicit service boundaries',
          pt: 'Dividir o onboarding em fronteiras explicitas de servico',
        },
        description: {
          en: 'Browser ingress, identity, payments, and webhook validation own distinct responsibilities, making trust boundaries and failure modes visible in the architecture.',
          pt: 'Entrada do navegador, identidade, pagamentos e validacao de webhook assumem responsabilidades distintas, deixando fronteiras de confianca e falhas visiveis na arquitetura.',
        },
      },
      {
        title: {
          en: 'Use persistence that matches each state model',
          pt: 'Usar persistencia aderente a cada modelo de estado',
        },
        description: {
          en: 'Identity keeps strong relational guarantees while payments use mutable document state for callback metadata, retries, and processed-event tracking.',
          pt: 'Identidade preserva garantias relacionais fortes enquanto pagamentos usam estado documental mutavel para metadados de callback, retries e rastreio de eventos processados.',
        },
      },
      {
        title: {
          en: 'Make async progress observable end to end',
          pt: 'Tornar o progresso assincrono observavel ponta a ponta',
        },
        description: {
          en: 'Live updates, centralized runtime config, and a deterministic gateway simulator make retries, expiry, duplicate webhooks, and premium convergence reproducible across validation scenarios.',
          pt: 'Atualizacoes ao vivo, configuracao centralizada e simulador deterministico de gateway tornam retries, expiracao, webhooks duplicados e convergencia premium reproduziveis nos cenarios de validacao.',
        },
      },
    ],
    results: {
      en: [
        'Verified on April 8, 2026: build, unit, and end-to-end suites passed with 57 tests across 14 suites while four services coordinated through eight typed message patterns.',
      ],
      pt: [
        'Verificado em 8 de abril de 2026: build, testes unitarios e end-to-end passaram com 57 testes em 14 suites enquanto quatro servicos se coordenavam por oito padroes tipados.',
      ],
    },
    mediaCaption: {
      en: 'System view of service boundaries, queue choreography, and premium-state propagation.',
      pt: 'Visao de sistema das fronteiras de servico, da coreografia de filas e da propagacao de estado premium.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Services', pt: 'Servicos' },
        title: { en: 'Four deployable responsibilities', pt: 'Quatro responsabilidades implantaveis' },
        body: {
          en: 'Ingress, identity, payments, and webhooks coordinate through shared contracts rather than shared persistence.',
          pt: 'Entrada, identidade, pagamentos e webhooks se coordenam por contratos compartilhados em vez de persistencia compartilhada.',
        },
      },
      {
        eyebrow: { en: 'Messaging', pt: 'Mensageria' },
        title: { en: 'Idempotent async processing', pt: 'Processamento assincrono idempotente' },
        body: {
          en: 'Payment progress is modeled through explicit message patterns, retries, and terminal states instead of hidden background behavior.',
          pt: 'O progresso de pagamento e modelado por padroes explicitos de mensagem, retries e estados terminais, sem comportamento oculto em segundo plano.',
        },
      },
      {
        eyebrow: { en: 'Client loop', pt: 'Ciclo do cliente' },
        title: { en: 'Live updates close the workflow', pt: 'Atualizacoes ao vivo fecham o fluxo' },
        body: {
          en: 'The browser receives scoped updates when payment state and premium access converge.',
          pt: 'O navegador recebe atualizacoes por usuario quando estado de pagamento e acesso premium convergem.',
        },
      },
    ],
    seoTitle: {
      en: 'Modularis Event-Driven Backend Project | Joao Paulo Dias Ventura',
      pt: 'Projeto Modularis Backend Orientado a Eventos | Joao Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Project page about Modularis, an event-driven backend with typed service coordination, split persistence, verified webhooks, and live user-state updates.',
      pt: 'Pagina do projeto sobre o Modularis, um backend orientado a eventos com coordenacao tipada entre servicos, persistencia segmentada, webhooks validados e atualizacoes ao vivo do estado do usuario.',
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
      en: 'Minimal TypeScript HTTP runtime on node:http focused on route resolution, deferred parsing, and reproducible benchmark throughput across real request scenarios.',
      pt: 'Runtime HTTP minimalista em TypeScript sobre node:http focado em resolucao de rotas, parsing adiado e throughput reproduzivel em benchmark com cenarios reais.',
    },
    overview: {
      en: [
        'Votrix is a TypeScript runtime on top of node:http built to reduce work before the handler runs: direct route matching, deferred parsing, and a small response path.',
        'The public surface stays narrow with App, Router, AsyncLogger, body parsing, and logging helpers, and the repository includes a benchmark harness that measures the same scenarios against broader frameworks.',
      ],
      pt: [
        'Votrix e um runtime TypeScript sobre node:http construido para reduzir trabalho antes do handler: match direto de rota, parsing adiado e caminho de resposta pequeno.',
        'A superficie publica permanece enxuta com App, Router, AsyncLogger, body parsing e helpers de log, e o repositorio inclui um harness de benchmark que mede os mesmos cenarios contra frameworks mais amplos.',
      ],
    },
    highlights: {
      en: [
        'Static routes in Map structures and dynamic routes in a compact tree.',
        'Query and body parsing run only when the request path needs them.',
        'Benchmarks are versioned against Fastify and Express in the repository.',
      ],
      pt: [
        'Rotas estaticas em estruturas Map e rotas dinamicas em arvore compacta.',
        'Query e body parsing rodam so quando o caminho da requisicao precisa disso.',
        'Benchmarks versionados contra Fastify e Express dentro do repositorio.',
      ],
    },
    challenge: {
      en: [
        'The goal was measurable speed, not a generic framework clone. Routing, middleware, parsing, and error flow had to remain useful without paying unnecessary baseline runtime cost.',
      ],
      pt: [
        'O objetivo era velocidade mensuravel, nao um clone generico de framework. Roteamento, middleware, parsing e fluxo de erro precisavam continuar uteis sem pagar custo basal desnecessario.',
      ],
    },
    constraints: {
      en: [
        'Built directly on platform HTTP primitives.',
        'No plugin runtime, schema validation layer, or specialized serialization subsystem.',
        'Performance claims are based on the versioned benchmark harness stored in the repository.',
      ],
      pt: [
        'Construido diretamente sobre os primitivos HTTP da plataforma.',
        'Sem runtime de plugin, camada de validacao por schema ou serializacao especializada.',
        'As alegacoes de performance se baseiam no harness de benchmark versionado no repositorio.',
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
          pt: 'Setup do servidor e middleware opcional ficam fora do caminho comum da requisicao, enquanto o Router se concentra em match, despacho e erro com o menor overhead possivel.',
        },
      },
      {
        title: {
          en: 'Do routing work before parsing work',
          pt: 'Fazer o trabalho de roteamento antes do parsing',
        },
        description: {
          en: 'Exact routes resolve through per-method Map lookups, dynamic paths traverse a compact tree, and query or params are only materialized after a real match.',
          pt: 'Rotas exatas resolvem por lookup em Map por metodo, caminhos dinamicos percorrem uma arvore compacta, e query ou params so sao materializados depois de um match real.',
        },
      },
      {
        title: {
          en: 'Ship the proof with the runtime',
          pt: 'Entregar a prova junto do runtime',
        },
        description: {
          en: 'The repository validates the scenarios and benchmarks Votrix against the comparison runtimes under the same contracts, keeping the performance claim inspectable.',
          pt: 'O repositorio valida os cenarios e benchmarka Votrix contra runtimes de comparacao sob os mesmos contratos, mantendo a alegacao de performance inspecionavel.',
        },
      },
    ],
    results: {
      en: [
        'The benchmark artifact dated 2026-04-03T03:18:21.722Z shows Votrix ahead in all four measured scenarios, peaking at 30,124.80 RPS on GET /health and keeping a 37.25% to 42.08% lead on create-user versus the comparison runtimes.',
      ],
      pt: [
        'O artefato de benchmark datado em 2026-04-03T03:18:21.722Z mostra o Votrix a frente nos quatro cenarios medidos, chegando a 30.124,80 RPS em GET /health e mantendo vantagem de 37,25% a 42,08% em create-user contra os runtimes comparados.',
      ],
    },
    mediaCaption: {
      en: 'System view of the hot path, routing stages, and benchmark evidence.',
      pt: 'Visao de sistema do hot path, das etapas de roteamento e da evidencia de benchmark.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Routing', pt: 'Roteamento' },
        title: { en: 'Exact and dynamic routes stay cheap', pt: 'Rotas exatas e dinamicas permanecem baratas' },
        body: {
          en: 'Map lookup handles exact paths while a compact tree handles params without pulling in expensive generalized machinery.',
          pt: 'Lookup em Map atende caminhos exatos enquanto uma arvore compacta trata params sem puxar maquinario generalista caro.',
        },
      },
      {
        eyebrow: { en: 'Parsing', pt: 'Parsing' },
        title: { en: 'Requests pay only for features they use', pt: 'A requisicao so paga pelo que usa' },
        body: {
          en: 'Query parsing, body parsing, and promise checks happen only when the matched route actually needs them.',
          pt: 'Parse de query, parsing de body e verificacoes de promise acontecem apenas quando a rota casada realmente precisa disso.',
        },
      },
      {
        eyebrow: { en: 'Proof', pt: 'Prova' },
        title: { en: 'Benchmark claims stay inspectable', pt: 'As alegacoes de benchmark permanecem inspecionaveis' },
        body: {
          en: 'The same harness validates the scenarios first and then measures all runtimes under equivalent contracts.',
          pt: 'O mesmo harness valida os cenarios primeiro e depois mede todos os runtimes sob contratos equivalentes.',
        },
      },
    ],
    seoTitle: {
      en: 'Votrix High-Performance Runtime Project | Joao Paulo Dias Ventura',
      pt: 'Projeto Votrix Runtime de Alta Performance | Joao Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Project page about Votrix, a high-performance runtime focused on hot-path reduction and benchmarked throughput gains.',
      pt: 'Pagina do projeto sobre o Votrix, um runtime de alta performance focado em reducao de hot path e ganhos de throughput medidos em benchmark.',
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
      en: 'Design a voting flow where traceability, transactional safety, and product clarity reinforce each other from end to end.',
      pt: 'Projetar um fluxo de votacao em que rastreabilidade, seguranca transacional e clareza de produto se reforcem de ponta a ponta.',
    },
    overview: {
      en: [
        'VOX was conceived as an institutional voting platform where every critical interaction needed explicit state handling, auditable decisions, and confidence under concurrent access.',
        'The work focused on translating trust requirements into domain rules, persistence strategy, and user feedback that kept the flow legible without making it feel bureaucratic.',
      ],
      pt: [
        'VOX foi concebido como uma plataforma de votacao institucional em que cada interacao critica precisava de tratamento explicito de estado, decisoes auditaveis e confianca sob acesso concorrente.',
        'O trabalho concentrou-se em traduzir requisitos de confianca em regras de dominio, estrategia de persistencia e feedback de interface que mantivesse o fluxo legivel sem torna-lo burocratico.',
      ],
    },
    highlights: {
      en: [
        'Domain model designed around elections, ballots, sessions, and validation states.',
        'Transaction rules and audit trails treated as first-class system behavior.',
        'Frontend flow kept explicit so users always understood progress and finality.',
      ],
      pt: [
        'Modelo de dominio estruturado em torno de eleicoes, cedulas, sessoes e estados de validacao.',
        'Regras transacionais e trilhas de auditoria tratadas como comportamento de sistema de primeira classe.',
        'Fluxo de frontend mantido explicito para que o usuario sempre entendesse progresso e finalizacao.',
      ],
    },
    challenge: {
      en: [
        'Voting systems fail when correctness is implicit. The challenge was to make integrity visible in both architecture and experience.',
        'Each state transition needed to be deliberate, recoverable, and explainable to operators and users.',
      ],
      pt: [
        'Sistemas eleitorais falham quando correcao fica implicita. O desafio era tornar integridade visivel tanto na arquitetura quanto na experiencia.',
        'Cada transicao de estado precisava ser deliberada, recuperavel e explicavel para operadores e usuarios.',
      ],
    },
    constraints: {
      en: [
        'Institutional trust requirements.',
        'Concurrent access during critical voting windows.',
        'Need for transparent audit history without overwhelming the interface.',
      ],
      pt: [
        'Requisitos institucionais de confianca.',
        'Acesso concorrente em janelas criticas de votacao.',
        'Necessidade de historico de auditoria transparente sem sobrecarregar a interface.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model irreversible steps explicitly',
          pt: 'Modelar passos irreversiveis de forma explicita',
        },
        description: {
          en: 'The flow was organized around state transitions that reflected finality and removed hidden behavior from the voting journey.',
          pt: 'O fluxo foi organizado em torno de transicoes de estado que refletiam finalizacao e removiam comportamentos ocultos da jornada de votacao.',
        },
      },
      {
        title: {
          en: 'Treat audit trails as product surface',
          pt: 'Tratar trilhas de auditoria como superficie de produto',
        },
        description: {
          en: 'Logging and trace history were not afterthoughts. They shaped how entities, validations, and admin feedback were designed.',
          pt: 'Logs e historico de rastreabilidade nao foram pos-pensamento. Eles influenciaram como entidades, validacoes e feedback administrativo foram desenhados.',
        },
      },
      {
        title: {
          en: 'Balance confidence with usability',
          pt: 'Equilibrar confianca com usabilidade',
        },
        description: {
          en: 'UI states avoided ambiguity while keeping the experience fast and readable for high-attention moments.',
          pt: 'Os estados de interface evitaram ambiguidade mantendo a experiencia rapida e legivel em momentos de alta atencao.',
        },
      },
    ],
    results: {
      en: [
        'A coherent voting system narrative where trust is reinforced by both backend guarantees and interface behavior.',
        'A system structured around explicit state handling, auditability, and critical product flows under concurrency.',
      ],
      pt: [
        'Uma narrativa de sistema coerente em que confianca e reforcada por garantias de backend e comportamento de interface.',
        'Um sistema estruturado em torno de tratamento explicito de estado, auditoria e fluxos criticos de produto sob concorrencia.',
      ],
    },
    mediaCaption: {
      en: 'System representation of platform logic, emphasizing election state, trust checkpoints, and operator visibility.',
      pt: 'Representacao de sistema da logica da plataforma, com enfase em estado da eleicao, checkpoints de confianca e visibilidade para operadores.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'System view', pt: 'Visao de sistema' },
        title: { en: 'Audit-first election flow', pt: 'Fluxo eleitoral orientado a auditoria' },
        body: {
          en: 'Structured states, transaction checkpoints, and traceable actions.',
          pt: 'Estados estruturados, checkpoints transacionais e acoes rastreaveis.',
        },
      },
      {
        eyebrow: { en: 'Operator view', pt: 'Visao operacional' },
        title: { en: 'Clear feedback under load', pt: 'Feedback claro sob carga' },
        body: {
          en: 'System signals designed to reduce ambiguity during critical windows.',
          pt: 'Sinais de sistema desenhados para reduzir ambiguidade em janelas criticas.',
        },
      },
      {
        eyebrow: { en: 'Reliability view', pt: 'Visao de confiabilidade' },
        title: {
          en: 'Trust expressed as data lineage',
          pt: 'Confianca expressa como linhagem de dados',
        },
        body: {
          en: 'Every relevant transition leaves an explainable footprint.',
          pt: 'Cada transicao relevante deixa um rastro explicavel.',
        },
      },
    ],
    seoTitle: {
      en: 'VOX Electoral System Case Study | Joao Paulo Dias Ventura',
      pt: 'Case Study VOX Sistema Eleitoral | Joao Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about architecture, traceability, and voting integrity in the VOX electoral system.',
      pt: 'Case study sobre arquitetura, rastreabilidade e integridade eleitoral no sistema VOX.',
    },
  },
  {
    ...previewFor('etecfy'),
    role: {
      en: 'Architecture, product structure, media-oriented frontend',
      pt: 'Arquitetura, estrutura de produto e frontend orientado a midia',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    thesis: {
      en: 'Build a streaming product that feels immediate to the user while staying structurally ready for growth in catalog, access, and integrations.',
      pt: 'Construir um produto de streaming que pareca imediato para o usuario sem perder preparo estrutural para crescimento de catalogo, acessos e integracoes.',
    },
    overview: {
      en: [
        'Etecfy was designed as a music experience with equal attention to performance, navigation rhythm, and backend readiness for catalog expansion.',
        'The interesting challenge was not only rendering media nicely, but deciding how discovery, organization, and future scale should shape the data and UI model.',
      ],
      pt: [
        'Etecfy foi desenhado como uma experiencia musical com atencao equivalente a performance, ritmo de navegacao e preparo de backend para expansao de catalogo.',
        'O desafio interessante nao era apenas renderizar midia com qualidade, mas decidir como descoberta, organizacao e escala futura deveriam moldar o modelo de dados e a UI.',
      ],
    },
    highlights: {
      en: [
        'Catalog structure planned for scale instead of hard-coded media shelves.',
        'Media integrations and user flow designed around perceived immediacy.',
        'Interface direction favored pace, energy, and hierarchy over generic app layouts.',
      ],
      pt: [
        'Estrutura de catalogo pensada para escala, e nao para prateleiras fixas e rigidas.',
        'Integracoes de midia e fluxo do usuario desenhados em torno de sensacao de imediatismo.',
        'A direcao de interface favoreceu ritmo, energia e hierarquia acima de layouts genericos.',
      ],
    },
    challenge: {
      en: [
        'Music products succeed when navigation feels effortless and the catalog feels alive. That demanded both product restraint and technical structure.',
        'The system needed to avoid visual noise while staying extensible for future content and media behaviors.',
      ],
      pt: [
        'Produtos de musica vencem quando navegacao parece sem esforco e o catalogo parece vivo. Isso exigiu contencao de produto e estrutura tecnica ao mesmo tempo.',
        'O sistema precisava evitar ruido visual sem perder extensibilidade para conteudo e comportamentos de midia futuros.',
      ],
    },
    constraints: {
      en: [
        'Fast launch window and audience spike right after release.',
        'Need for a scalable catalog model.',
        'Multi-surface media behavior across web and native contexts.',
      ],
      pt: [
        'Janela de lancamento rapida e pico de audiencia logo apos a estreia.',
        'Necessidade de um modelo de catalogo escalavel.',
        'Comportamento de midia em multiplas superficies web e nativas.',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model discovery, not just playback',
          pt: 'Modelar descoberta, nao apenas playback',
        },
        description: {
          en: 'The information architecture prioritized how users reach music quickly, making discovery a structural concern instead of a visual afterthought.',
          pt: 'A arquitetura da informacao priorizou como usuarios chegam rapidamente a musica, tornando descoberta uma preocupacao estrutural e nao apenas visual.',
        },
      },
      {
        title: {
          en: 'Build for catalog expansion',
          pt: 'Construir para expansao de catalogo',
        },
        description: {
          en: 'Entities and views were designed for future breadth, preventing the product from collapsing once the catalog grows.',
          pt: 'Entidades e visoes foram desenhadas para amplitude futura, evitando que o produto colapse quando o catalogo crescer.',
        },
      },
      {
        title: {
          en: 'Use stream to a fluid listening',
          pt: 'Usar streams para uma escuta fluida',
        },
        description: {
          en: 'Stream music instantly with smooth playback and minimal buffering. Enjoy a continuous listening experience across any device.',
          pt: 'Reproduza musicas instantaneamente com streaming continuo e sem interrupcoes. Aproveite uma experiencia de escuta fluida em qualquer dispositivo.',
        },
      },
    ],
    results: {
      en: [
        'A streaming platform structured around catalog navigation, playback continuity, and delivery planning.',
        'The platform recorded more than 16K accesses while maintaining catalog depth and media delivery flow.',
      ],
      pt: [
        'Uma plataforma de streaming estruturada em torno de navegacao de catalogo, continuidade de reproducao e planejamento de entrega.',
        'A plataforma registrou mais de 16 mil acessos mantendo profundidade de catalogo e fluxo de entrega de midia.',
      ],
    },
    mediaCaption: {
      en: 'System representation of catalog depth, release flow, and interface motion for a media-focused product.',
      pt: 'Representacao de sistema da profundidade de catalogo, do fluxo de lancamento e da linguagem de motion em um produto orientado a midia.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'Catalog view', pt: 'Visao de catalogo' },
        title: {
          en: 'Discovery-ready information architecture',
          pt: 'Arquitetura da informacao pronta para descoberta',
        },
        body: {
          en: 'Content shelves and metadata planned for growth and fast navigation.',
          pt: 'Prateleiras de conteudo e metadados planejados para crescimento e navegacao rapida.',
        },
      },
      {
        eyebrow: { en: 'Playback view', pt: 'Visao de playback' },
        title: { en: 'Media-first pacing', pt: 'Ritmo orientado a midia' },
        body: {
          en: 'Transitions and hierarchy keep the experience energetic without losing control.',
          pt: 'Transicoes e hierarquia mantem a experiencia energica sem perder controle.',
        },
      },
      {
        eyebrow: { en: 'Launch view', pt: 'Visao de lancamento' },
        title: { en: 'Prepared for attention spikes', pt: 'Preparado para picos de atencao' },
        body: {
          en: 'The product launch validated both structure and perceived responsiveness.',
          pt: 'O lancamento validou tanto a estrutura quanto a responsividade percebida do produto.',
        },
      },
    ],
    seoTitle: {
      en: 'Etecfy Streaming Platform Case Study | Joao Paulo Dias Ventura',
      pt: 'Case Study Etecfy Plataforma de Streaming | Joao Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about catalog scale, media delivery, and interface pacing in the Etecfy streaming platform.',
      pt: 'Case study sobre escala de catalogo, entrega de midia e ritmo de interface na plataforma Etecfy.',
    },
  },
] as const satisfies readonly CaseStudy[];
