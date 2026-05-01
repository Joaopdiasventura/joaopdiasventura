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
      en: 'Full-stack architecture, transactional backend design, real-time workflow UX',
      pt: 'Arquitetura full stack, backend transacional e UX de fluxos em tempo real',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    facts: [
      {
        label: { en: 'Focus', pt: 'Foco' },
        value: {
          en: 'Transactional settlement, payment requests, and live transfer feedback',
          pt: 'Liquidação transacional, cobranças e feedback ao vivo de transferências',
        },
      },
      {
        label: { en: 'Consistency', pt: 'Consistência' },
        value: {
          en: 'PostgreSQL as system of record with pessimistic row locking',
          pt: 'PostgreSQL como fonte transacional com bloqueio pessimista de linhas',
        },
      },
      {
        label: { en: 'Delivery', pt: 'Entrega' },
        value: {
          en: 'Angular client, SSE replay, and QR-driven transfer entry',
          pt: 'Cliente Angular, replay via SSE e entrada de transferências por QR Code',
        },
      },
    ],
    systemStack: ['NestJS', 'Fastify', 'PostgreSQL', 'Redis', 'BullMQ', 'Angular', 'SSE'],
    heroTags: [
      'Transactional consistency',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Pessimistic locking',
      'SSE',
      'QR flows',
    ],
    problem: {
      en: 'Transfers, payment requests, and QR entry points had to feel immediate at the UI while balance mutation, double-spend protection, and notification replay stayed strictly controlled.',
      pt: 'Transferências, cobranças e pontos de entrada por QR Code precisavam parecer imediatos na interface enquanto mutação de saldo, proteção contra double-spend e replay de notificações permaneciam estritamente controlados.',
    },
    solution: {
      en: 'Auronix keeps money movement inside one modular NestJS core. The API writes pending transfers transactionally, BullMQ workers recheck balance under pessimistic row locks before settlement, Redis supports queueing plus replayable SSE delivery, and the Angular client stays thin while surfacing live transfer state.',
      pt: 'O Auronix mantém a movimentação financeira dentro de um único núcleo modular em NestJS. A API grava transferências pendentes de forma transacional, workers com BullMQ rechecam saldo sob bloqueio pessimista de linhas antes da liquidação, Redis sustenta filas e entrega SSE com replay, e o cliente Angular permanece enxuto enquanto expõe o estado da transferência em tempo real.',
    },
    technicalHighlights: [
      {
        title: {
          en: 'Modular monolith around the consistency boundary',
          pt: 'Monólito modular em torno da fronteira de consistência',
        },
        description: {
          en: 'User, transfer, payment-request, notification, and cache responsibilities stay separated inside one deployable runtime so balance mutation never crosses service boundaries.',
          pt: 'Responsabilidades de usuário, transferência, cobrança, notificação e cache permanecem separadas dentro de um único runtime implantável para que a mutação de saldo nunca atravesse fronteiras de serviço.',
        },
      },
      {
        title: {
          en: 'Accept fast, settle under lock',
          pt: 'Aceitar rápido, liquidar sob lock',
        },
        description: {
          en: 'The API persists pending transfers synchronously, then BullMQ workers recheck balance and settle under pessimistic row locks before emitting the final outcome.',
          pt: 'A API persiste transferências pendentes de forma síncrona e, em seguida, workers com BullMQ rechecam saldo e liquidam sob bloqueio pessimista de linhas antes de emitir o resultado final.',
        },
      },
      {
        title: {
          en: 'Replayable real-time feedback',
          pt: 'Feedback em tempo real com replay',
        },
        description: {
          en: 'Redis backs notification fan-out and bounded replay windows so reconnecting SSE clients recover recent state without turning the browser into the source of truth.',
          pt: 'O Redis sustenta fan-out de notificações e janelas de replay limitadas para que clientes SSE reconectados recuperem estado recente sem transformar o navegador na fonte da verdade.',
        },
      },
      {
        title: {
          en: 'Unified transfer entry surface',
          pt: 'Superfície unificada de entrada de transferências',
        },
        description: {
          en: 'Manual targets, direct links, payment requests, and QR payloads converge to the same authorization path, centralizing validation and money movement rules.',
          pt: 'Alvos manuais, links diretos, cobranças e payloads de QR convergem para o mesmo caminho de autorização, centralizando validações e regras de movimentação financeira.',
        },
      },
    ],
    resultSummary: {
      en: 'Reviewed on May 1, 2026: 248 automated tests cover account lifecycle, cursor-based transfer history, payment-request expiry, double-spend protection, and replayable transfer notifications across the full pending-to-settled flow.',
      pt: 'Revisado em 1 de maio de 2026: 248 testes automatizados cobrem ciclo de vida de conta, histórico de transferências com cursor, expiração de cobrança, proteção contra double-spend e notificações com replay ao longo de todo o fluxo de pendente até liquidado.',
    },
    constraints: {
      en: [
        'All monetary values stay in integer cents',
        'Session authority remains on the backend through secure cookie auth',
        'Transfer settlement must recheck balance under lock before mutation',
        'Replay windows and expiring payment requests need bounded TTL behavior visible to the client',
      ],
      pt: [
        'Todos os valores monetários permanecem em centavos inteiros',
        'A autoridade da sessão permanece no backend por autenticação segura com cookie',
        'A liquidação da transferência precisa revalidar saldo sob lock antes de qualquer mutação',
        'Janelas de replay e cobranças expiradas exigem comportamento de TTL limitado e visível ao cliente',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep consistency in one deployable core',
          pt: 'Manter a consistência em um único núcleo implantável',
        },
        description: {
          en: 'User, transfer, payment-request, notification, and cache concerns stay modular without turning balance mutation into distributed coordination.',
          pt: 'Responsabilidades de usuário, transferência, cobrança, notificação e cache permanecem modulares sem transformar mutação de saldo em coordenação distribuída.',
        },
      },
      {
        title: {
          en: 'Separate acceptance from settlement',
          pt: 'Separar aceitação de liquidação',
        },
        description: {
          en: 'The API responds after persisting the pending transfer, while workers own the locked recheck, balance mutation, and final transfer event.',
          pt: 'A API responde após persistir a transferência pendente, enquanto os workers assumem a rechecagem sob lock, a mutação de saldo e o evento final da transferência.',
        },
      },
      {
        title: {
          en: 'Push events one way and keep truth on the server',
          pt: 'Empurrar eventos em uma direção e manter a verdade no servidor',
        },
        description: {
          en: 'SSE keeps transfer state visible in real time, but balance authority, replay limits, and notification history remain enforced by backend and Redis boundaries.',
          pt: 'SSE mantém o estado da transferência visível em tempo real, mas autoridade de saldo, limites de replay e histórico de notificações permanecem impostos pelo backend e pelas fronteiras do Redis.',
        },
      },
    ],
    seoTitle: {
      en: 'Auronix Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Auronix | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about a digital banking core with asynchronous settlement, pessimistic locking, and replayable SSE notifications.',
      pt: 'Estudo de caso sobre um núcleo bancário digital com liquidação assíncrona, bloqueio pessimista e notificações SSE com replay.',
    },
  },
  {
    ...previewFor('modularis'),
    role: {
      en: 'Distributed backend architecture, saga orchestration, async contracts, operational resilience',
      pt: 'Arquitetura de backend distribuído, orquestração de sagas, contratos assíncronos e resiliência operacional',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    facts: [
      {
        label: { en: 'Focus', pt: 'Foco' },
        value: {
          en: 'Distributed onboarding, payment confirmation, and premium activation',
          pt: 'Onboarding distribuído, confirmação de pagamento e ativação premium',
        },
      },
      {
        label: { en: 'Topology', pt: 'Topologia' },
        value: {
          en: 'nginx + gateway + onboarding, identity, membership, payment, and webhook services',
          pt: 'nginx + gateway + serviços de onboarding, identidade, membership, pagamento e webhook',
        },
      },
      {
        label: { en: 'Messaging', pt: 'Mensageria' },
        value: {
          en: 'RabbitMQ commands, events, RPC responses, and signed webhook relay',
          pt: 'Comandos, eventos, respostas RPC em RabbitMQ e retransmissão de webhook assinado',
        },
      },
    ],
    systemStack: [
      'NestJS',
      'Spring Boot',
      'Go',
      'RabbitMQ',
      'PostgreSQL',
      'MongoDB',
      'Docker Compose',
      'nginx',
      'AsyncAPI',
    ],
    heroTags: [
      'Event-driven architecture',
      'Distributed microservices',
      'RabbitMQ',
      'Sagas',
      'Idempotency',
      'Retries',
      'Fault tolerance',
      'Signed webhooks',
      'NestJS',
      'Spring Boot',
      'Go',
    ],
    heroVisualLabel: {
      en: 'Runtime surface',
      pt: 'Superfície de runtime',
    },
    heroVisualCaption: {
      en: 'Manual demo used to drive account creation, event propagation, and webhook confirmation against the distributed topology.',
      pt: 'Demo manual usada para acionar criação de conta, propagação de eventos e confirmação de webhook contra a topologia distribuída.',
    },
    problem: {
      en: 'Account creation had to stay fast at the edge without assuming a global transaction. Identity, payment intent, signed webhooks, and premium entitlement each needed explicit ownership, duplicate protection, and deterministic recovery after partial failure.',
      pt: 'A criação de conta precisava permanecer rápida na borda sem assumir uma transação global. Identidade, intenção de pagamento, webhooks assinados e entitlement premium exigiam responsabilidade explícita, proteção contra duplicidade e recuperação determinística após falha parcial.',
    },
    solution: {
      en: 'Modularis keeps HTTP thin and shifts coordination to a persisted onboarding saga. The gateway publishes commands, downstream services exchange events and RPC-style responses over RabbitMQ, signed webhook ingress is relayed durably before mutating payment state, and each bounded context keeps the storage model that matches its own consistency and failure profile.',
      pt: 'O Modularis mantém o HTTP fino e desloca a coordenação para uma saga persistida de onboarding. O gateway publica comandos, os serviços trocam eventos e respostas em estilo RPC via RabbitMQ, o ingresso de webhook assinado é retransmitido de forma durável antes de alterar o estado do pagamento, e cada bounded context preserva o modelo de armazenamento que combina com seu perfil de consistência e falha.',
    },
    technicalHighlights: [
      {
        title: {
          en: 'Persisted saga orchestration',
          pt: 'Orquestração de saga persistida',
        },
        description: {
          en: 'The onboarding service stores transitions, retry schedule, and lease ownership in PostgreSQL before advancing identity and payment steps.',
          pt: 'O serviço de onboarding persiste transições, agenda de retries e controle por lease em PostgreSQL antes de avançar etapas de identidade e pagamento.',
        },
      },
      {
        title: {
          en: 'Async contract boundary',
          pt: 'Fronteira assíncrona por contrato',
        },
        description: {
          en: 'Commands, events, and RPC responses travel through RabbitMQ exchanges documented in AsyncAPI instead of ad hoc service coupling.',
          pt: 'Comandos, eventos e respostas RPC trafegam por exchanges RabbitMQ documentadas em AsyncAPI, sem acoplamento ad hoc entre serviços.',
        },
      },
      {
        title: {
          en: 'Delivery safety and retries',
          pt: 'Segurança de entrega e retries',
        },
        description: {
          en: 'Payment and webhook flows persist dedupe keys, pending publications, and retry backoff rather than assuming single-shot processing.',
          pt: 'Os fluxos de pagamento e webhook persistem chaves de deduplicação, publicações pendentes e backoff de retry em vez de assumir processamento de tentativa única.',
        },
      },
      {
        title: {
          en: 'Polyglot service ownership',
          pt: 'Ownership poliglota por serviço',
        },
        description: {
          en: 'NestJS owns the edge and saga, Spring Boot owns identity and membership, and Go isolates payment plus webhook ingress with storage chosen per state model.',
          pt: 'NestJS assume borda e saga, Spring Boot assume identidade e membership, e Go isola pagamento e ingresso de webhook com storage escolhido por modelo de estado.',
        },
      },
    ],
    resultSummary: {
      en: 'Reviewed on May 1, 2026: the repository implements six deployable services behind nginx, RabbitMQ command and event contracts, nine documented async channels, signed webhook verification, and recovery loops that converge onboarding from account request to premium activation.',
      pt: 'Revisado em 1 de maio de 2026: o repositório implementa seis serviços implantáveis atrás do nginx, contratos de comandos e eventos em RabbitMQ, nove canais assíncronos documentados, verificação de webhook assinado e loops de recuperação que convergem o onboarding da requisição de conta até a ativação premium.',
    },
    constraints: {
      en: [
        'Service-owned data only, with no global transaction',
        'At-least-once delivery requires idempotent consumers and dedupe receipts',
        'External callbacks are accepted only after HMAC verification over the raw payload',
        'Recovery workers need lease-based ownership to avoid duplicated saga progress',
      ],
      pt: [
        'Os dados pertencem aos serviços, sem transação global',
        'Entrega at-least-once exige consumidores idempotentes e recibos de deduplicação',
        'Callbacks externos só são aceitos após verificação HMAC sobre o payload bruto',
        'Workers de recuperação exigem controle por lease para evitar progresso duplicado de saga',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Persist the orchestration instead of coordinating in memory',
          pt: 'Persistir a orquestração em vez de coordenar em memória',
        },
        description: {
          en: 'The onboarding saga stores state, retryability, next action, and lock ownership so partially completed flows can be recovered deterministically.',
          pt: 'A saga de onboarding armazena estado, política de retry, próxima ação e posse do lock para que fluxos parcialmente concluídos sejam recuperados de forma determinística.',
        },
      },
      {
        title: {
          en: 'Treat webhook ingress as a durable boundary',
          pt: 'Tratar o ingresso de webhook como uma fronteira durável',
        },
        description: {
          en: 'The webhook service validates signatures, records receipts, deduplicates confirmations, and only then relays payment callbacks to the broker.',
          pt: 'O webhook-service valida assinaturas, registra receipts, deduplica confirmações e só então retransmite callbacks de pagamento para o broker.',
        },
      },
      {
        title: {
          en: 'Use delivery controls at every boundary',
          pt: 'Usar controles de entrega em cada fronteira',
        },
        description: {
          en: 'Idempotency keys, request hashes, outbox and inbox receipts, correlation metadata, and retry backoff make failures explicit instead of hiding them behind optimistic assumptions.',
          pt: 'Chaves de idempotência, hashes de requisição, receipts de outbox e inbox, metadados de correlação e backoff de retry tornam falhas explícitas em vez de escondê-las atrás de suposições otimistas.',
        },
      },
    ],
    seoTitle: {
      en: 'Modularis Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Modularis | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about event-driven microservices with a persisted saga, RabbitMQ contracts, idempotent delivery, and signed webhook relay.',
      pt: 'Estudo de caso sobre microsserviços orientados a eventos com saga persistida, contratos RabbitMQ, entrega idempotente e retransmissão de webhook assinado.',
    },
  },
  {
    ...previewFor('votrix'),
    role: {
      en: 'Runtime architecture, performance engineering, benchmark methodology',
      pt: 'Arquitetura de runtime, engenharia de performance e metodologia de benchmark',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    problem: {
      en: 'The goal was measurable speed, not a generic framework clone. Routing, parsing, and error flow had to stay useful without baseline overhead.',
      pt: 'O objetivo era velocidade mensurável, não um clone genérico de framework. Roteamento, parsing e fluxo de erro precisavam continuar úteis sem overhead basal.',
    },
    solution: {
      en: 'Votrix keeps the hot path short with direct route matching, deferred parsing, and a repository-level benchmark harness against Fastify and Express.',
      pt: 'O Votrix mantêm o hot path curto com match direto de rotas, parsing adiado e um harness de benchmark no repositório contra Fastify e Express.',
    },
    resultSummary: {
      en: 'The benchmark artifact dated 2026-04-03T03:18:21.722Z shows Votrix leading all four measured scenarios, peaking at 30,124.80 RPS on GET /health.',
      pt: 'O artefato de benchmark datado em 2026-04-03T03:18:21.722Z mostra o Votrix liderando os quatro cenários medidos, chegando a 30.124,80 RPS em GET /health.',
    },
    constraints: {
      en: [
        'Built directly on platform HTTP primitives',
        'No plugin runtime or schema-validation layer',
        'Performance claims are limited to the versioned benchmark harness',
      ],
      pt: [
        'Construído diretamente sobre os primitivos HTTP da plataforma',
        'Sem runtime de plugin ou camada de validação por schema',
        'As alegações de performance ficam limitadas ao benchmark versionado',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep the hot path structurally short',
          pt: 'Manter o hot path estruturalmente curto',
        },
        description: {
          en: 'Server setup and optional middleware stay outside the common request path while Router focuses on match, dispatch, and error flow.',
          pt: 'Setup do servidor e middleware opcional ficam fora do caminho comum da requisição enquanto o Router foca em match, despacho e erro.',
        },
      },
      {
        title: {
          en: 'Route before parsing',
          pt: 'Rotear antes de fazer parsing',
        },
        description: {
          en: 'Exact routes resolve through Maps, dynamic paths traverse a compact tree, and query or body parsing runs only when needed.',
          pt: 'Rotas exatas resolvem por Maps, caminhos dinâmicos percorrem uma árvore compacta, e query ou body parsing rodam apenas quando necessário.',
        },
      },
      {
        title: {
          en: 'Ship the proof with the runtime',
          pt: 'Entregar a prova junto do runtime',
        },
        description: {
          en: 'The repository validates scenarios first and then measures all runtimes under the same local contracts.',
          pt: 'O repositório valida os cenários primeiro e depois mede todos os runtimes sob os mesmos contratos locais.',
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
    ...previewFor('ggc'),
    role: {
      en: 'Systems design, archive format engineering, concurrency pipeline, and benchmark methodology',
      pt: 'Desenho de sistemas, engenharia de formato de arquivo, pipeline concorrente e metodologia de benchmark',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    facts: [
      {
        label: { en: 'Focus', pt: 'Foco' },
        value: {
          en: 'Archive format design, concurrency pipeline, and integrity verification',
          pt: 'Design de formato de arquivo, pipeline concorrente e verificação de integridade',
        },
      },
      {
        label: { en: 'Runtime', pt: 'Runtime' },
        value: {
          en: 'Sequential reader, worker pool, and ordered writer',
          pt: 'Leitor sequencial, pool de workers e escrita ordenada',
        },
      },
      {
        label: { en: 'Safety', pt: 'Segurança' },
        value: {
          en: 'Per-chunk checksums, optional SHA-256, and staged extraction',
          pt: 'Checksums por chunk, SHA-256 opcional e extração em staging',
        },
      },
    ],
    systemStack: ['Go', 'goroutines', 'channels', 'gzip', 'SHA-256', 'CLI'],
    heroTags: [
      'Go',
      'Concurrency pipeline',
      'Archive format',
      'Worker pool',
      'Checksums',
      'Safe extraction',
    ],
    problem: {
      en: 'Large file and directory inputs had to compress and verify quickly without unbounded memory, non-deterministic archive order, or unsafe restore paths.',
      pt: 'Entradas grandes de arquivos e diretórios precisavam ser comprimidas e verificadas rapidamente sem memória ilimitada, ordem de arquivo não determinística ou caminhos inseguros de restauração.',
    },
    solution: {
      en: 'GGCompress uses one versioned `.ggc` format for single files and directory trees, combining sequential discovery and reads, goroutine chunk workers, ordered emission, and integrity checks before restore.',
      pt: 'O GGCompress usa um único formato `.ggc` versionado para arquivos únicos e árvores de diretório, combinando descoberta e leitura sequencial, workers por chunk com goroutines, emissão ordenada e verificações de integridade antes da restauração.',
    },
    technicalHighlights: [
      {
        title: {
          en: 'One official archive format',
          pt: 'Um formato oficial de arquivamento',
        },
        description: {
          en: 'The `GGC1` layout keeps one deterministic contract for files, directory trees, metadata, chunk indexes, and restore semantics instead of splitting behaviors across modes.',
          pt: 'O layout `GGC1` mantém um único contrato determinístico para arquivos, árvores de diretório, metadados, índices de chunk e semântica de restauração, sem dividir comportamento entre modos.',
        },
      },
      {
        title: {
          en: 'Parallel chunk work with ordered output',
          pt: 'Trabalho paralelo por chunk com saída ordenada',
        },
        description: {
          en: 'Sequential readers feed goroutine workers while an ordered emission stage preserves deterministic archive order by global chunk index.',
          pt: 'Leitores sequenciais alimentam workers com goroutines enquanto uma etapa de emissão ordenada preserva a ordem determinística do arquivo por índice global de chunk.',
        },
      },
      {
        title: {
          en: 'Restore only after verification',
          pt: 'Restaurar apenas após verificação',
        },
        description: {
          en: 'Chunk checksums, optional SHA-256 validation, normalized relative paths, and staged extraction make corruption and traversal risks explicit before the final rename.',
          pt: 'Checksums por chunk, validação opcional com SHA-256, caminhos relativos normalizados e extração em staging tornam explícitos riscos de corrupção e traversal antes do rename final.',
        },
      },
    ],
    resultSummary: {
      en: 'Measured CLI run dated April 23, 2026: a 9.77 GiB input compressed at 1.23 GiB/s with 8 workers and 4 MiB chunks, finishing in 7.952s while preserving deterministic archive order.',
      pt: 'Execução medida da CLI em 23 de abril de 2026: uma entrada de 9.77 GiB foi comprimida a 1.23 GiB/s com 8 workers e chunks de 4 MiB, concluindo em 7.952s enquanto preservava ordem determinística de arquivamento.',
    },
    constraints: {
      en: [
        'Pipelines stay bounded in memory through pooled buffers and fixed-size channels',
        'Archive paths must remain normalized, relative, and traversal-safe',
        'Symlink recreation is platform-dependent and fails explicitly when unsupported',
        'Performance claims stay scoped to the versioned benchmark run and input profile',
      ],
      pt: [
        'Os pipelines permanecem limitados em memória por meio de buffers reutilizados e canais de tamanho fixo',
        'Os caminhos do arquivo precisam permanecer normalizados, relativos e seguros contra traversal',
        'A recriação de symlinks depende da plataforma e falha explicitamente quando não é suportada',
        'As alegações de performance ficam restritas à execução versionada de benchmark e ao perfil da entrada',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Unify file and directory roots under one official format',
          pt: 'Unificar raízes de arquivo e diretório em um único formato oficial',
        },
        description: {
          en: 'The `GGC1` v1 layout keeps `Header -> Metadata -> Entry Table -> Chunk Table -> Data`, so single files, trees, and symlinks share one deterministic archive contract.',
          pt: 'O layout `GGC1` v1 mantém `Header -> Metadata -> Entry Table -> Chunk Table -> Data`, permitindo que arquivos únicos, árvores e symlinks compartilhem um contrato determinístico de arquivamento.',
        },
      },
      {
        title: {
          en: 'Parallelize chunk work, serialize archive order',
          pt: 'Paralelizar o trabalho por chunk e serializar a ordem do arquivo',
        },
        description: {
          en: 'A sequential reader feeds goroutine workers, while an ordered emission helper preserves contiguous chunk indexes and deterministic output by global chunk index.',
          pt: 'Um leitor sequencial alimenta workers com goroutines, enquanto um helper de emissão ordenada preserva índices contíguos de chunk e saída determinística por índice global.',
        },
      },
      {
        title: {
          en: 'Validate integrity beyond payload decompression',
          pt: 'Validar integridade além da descompressão do payload',
        },
        description: {
          en: 'Per-chunk checksums, optional canonical SHA-256 over archive metadata plus logical bytes, and staged extraction with final rename make corruption and partial restore states explicit.',
          pt: 'Checksums por chunk, SHA-256 canônico opcional sobre metadados do arquivo e bytes lógicos, e extração em staging com rename final tornam explícitos os estados de corrupção e restauração parcial.',
        },
      },
    ],
    seoTitle: {
      en: 'GGCompress Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso GGCompress | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about a Go archive engine with deterministic format design, concurrent chunk pipelines, and measured throughput.',
      pt: 'Estudo de caso sobre uma engine de arquivamento em Go com design determinístico de formato, pipelines concorrentes por chunk e throughput medido.',
    },
  },
  {
    ...previewFor('vox'),
    role: {
      en: 'Product architecture, backend design, audit-oriented modeling',
      pt: 'Arquitetura de produto, desenho de backend e modelagem orientada a auditoria',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    problem: {
      en: 'Voting systems fail when correctness stays implicit. State transitions had to be deliberate, recoverable, and explainable to operators and voters.',
      pt: 'Sistemas de votação falham quando a corretude permanece implícita. Transições de estado precisavam ser deliberadas, recuperáveis e explicáveis para operadores e eleitores.',
    },
    solution: {
      en: 'The product was structured around explicit election states, audit trails as first-class behavior, and UI feedback that keeps progress and finality clear.',
      pt: 'O produto foi estruturado em torno de estados explícitos de eleição, trilhas de auditoria como comportamento de primeira classe e feedback de interface que deixa progresso e finalização claros.',
    },
    resultSummary: {
      en: 'The result is a voting platform where backend guarantees and interface behavior reinforce trust, with support for +500 concurrent users and 108 automated tests.',
      pt: 'O resultado é uma plataforma de votação em que garantias de backend e comportamento de interface reforçam confiança, com suporte a +500 usuários simultâneos e 108 testes automatizados.',
    },
    constraints: {
      en: [
        'Institutional trust requirements',
        'Concurrent access during critical voting windows',
        'Transparent audit history without overwhelming the interface',
      ],
      pt: [
        'Requisitos institucionais de confiança',
        'Acesso concorrente em janelas críticas de votação',
        'Histórico de auditoria transparente sem sobrecarregar a interface',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model irreversible steps explicitly',
          pt: 'Modelar passos irreversíveis de forma explícita',
        },
        description: {
          en: 'The flow was organized around transitions that reflect finality and remove hidden behavior from the voting journey.',
          pt: 'O fluxo foi organizado em torno de transições que refletem finalização e removem comportamento oculto da jornada de votação.',
        },
      },
      {
        title: {
          en: 'Treat audit trails as product surface',
          pt: 'Tratar trilhas de auditoria como superfície de produto',
        },
        description: {
          en: 'Logs and trace history shaped how entities, validations, and admin feedback were designed.',
          pt: 'Logs e histórico de rastreabilidade moldaram o desenho de entidades, validações e feedback administrativo.',
        },
      },
      {
        title: {
          en: 'Balance confidence with usability',
          pt: 'Equilibrar confiança com usabilidade',
        },
        description: {
          en: 'UI states avoid ambiguity while keeping the experience fast and readable in high-attention moments.',
          pt: 'Estados de interface evitam ambiguidade enquanto mantêm a experiência rápida e legível em momentos de alta atenção.',
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
    problem: {
      en: 'The product had to feel immediate for discovery and playback without breaking as catalog depth and traffic increased.',
      pt: 'O produto precisava parecer imediato para descoberta e playback sem quebrar com o aumento de catálogo e tráfego.',
    },
    solution: {
      en: 'The system was planned around scalable catalog structure, chunk-based delivery, and frontend pacing tuned for music discovery.',
      pt: 'O sistema foi planejado em torno de estrutura escalável de catálogo, entrega em chunks e ritmo de frontend ajustado para descoberta musical.',
    },
    resultSummary: {
      en: 'Launch reached 1.3K accesses in six hours while validating catalog depth, playback continuity, and perceived responsiveness.',
      pt: 'O lançamento alcançou 1,3 mil acessos em seis horas enquanto validava profundidade de catálogo, continuidade de playback e responsividade percebida.',
    },
    constraints: {
      en: [
        'Fast launch window and immediate traffic spike',
        'Need for a catalog model that scales',
        'Media behavior across web and mobile surfaces',
      ],
      pt: [
        'Janela de lançamento curta e pico imediato de tráfego',
        'Necessidade de um modelo de catálogo escalável',
        'Comportamento de mídia entre web e mobile',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Model discovery, not only playback',
          pt: 'Modelar descoberta, não apenas playback',
        },
        description: {
          en: 'The information architecture prioritizes how users reach music quickly instead of treating discovery as a cosmetic layer.',
          pt: 'A arquitetura da informação prioriza como usuários chegam rápido \u00e0 música, em vez de tratar descoberta como camada cosmética.',
        },
      },
      {
        title: {
          en: 'Build for catalog expansion',
          pt: 'Construir para expansão de catálogo',
        },
        description: {
          en: 'Entities and views were designed for future breadth so the product does not collapse as the catalog grows.',
          pt: 'Entidades e views foram desenhadas para amplitude futura para que o produto não colapse conforme o catálogo cresce.',
        },
      },
      {
        title: {
          en: 'Make playback feel immediate',
          pt: 'Fazer a reprodução parecer imediata',
        },
        description: {
          en: 'Chunked delivery, playback controls, and interface pacing keep listening fluid with minimal friction.',
          pt: 'Entrega em chunks, controles de reprodução e ritmo de interface mantêm a escuta fluida com mínimo atrito.',
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
