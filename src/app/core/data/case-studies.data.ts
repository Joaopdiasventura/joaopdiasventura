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
      pt: 'Arquitetura full-stack, backend transacional e UX de fluxo',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    problem: {
      en: 'Transfers and QR payments had to feel immediate while settlement, balance recheck, and double-spend protection stayed strict.',
      pt: 'Transferências e pagamentos por QR precisavam parecer imediatos enquanto liquidação, rechecagem de saldo e proteção contra double-spend permaneciam rigorosas.',
    },
    solution: {
      en: 'Core banking consistency stayed in one modular monolith. Transfers enter as pending, workers settle them asynchronously, and balance mutation runs under pessimistic row locks with live UI updates.',
      pt: 'A consistência bancária central ficou em um monolito modular. Transferências entram como pendentes, workers liquidam tudo de forma assíncrona, e a mutação de saldo roda com row locks pessimistas e atualização ao vivo na interface.',
    },
    resultSummary: {
      en: 'Re-run on April 8, 2026: 248 automated tests covering account flows, payment-request expiry, double-spend protection, and notification replay.',
      pt: 'Reexecutado em 8 de abril de 2026: 248 testes automatizados cobrindo fluxos de conta, expiração de cobrança, double-spend e replay de notificações.',
    },
    constraints: {
      en: [
        'All monetary values use integer cents',
        'Cookie auth keeps session authority on the backend',
        'Pending transfers must resist concurrency and replay limits',
      ],
      pt: [
        'Todos os valores monetários usam centavos inteiros',
        'Autenticação por cookie mantém a autoridade de sessão no backend',
        'Transferências pendentes precisam resistir \u00e0 concorrência e a limites de replay',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Keep banking consistency in one deployable core',
          pt: 'Manter a consistência bancária em um núcleo implantável',
        },
        description: {
          en: 'User, transfer, payment-request, notification, cache, and persistence concerns stay modular without turning balance mutation into distributed coordination.',
          pt: 'Responsabilidades de usuário, transferência, cobrança, notificação, cache e persistência ficam modulares sem transformar mutação de saldo em coordenação distribuída.',
        },
      },
      {
        title: {
          en: 'Accept fast, settle carefully',
          pt: 'Aceitar rápido, liquidar com cuidado',
        },
        description: {
          en: 'The API persists a pending transfer first, then workers recheck balance before mutating both accounts and emitting the final event.',
          pt: 'A API persiste a transferência pendente primeiro; depois, workers rechecam saldo antes de mutar as duas contas e emitir o evento final.',
        },
      },
      {
        title: {
          en: 'Unify money movement into one authorization path',
          pt: 'Unificar movimentação financeira em um único caminho',
        },
        description: {
          en: 'Manual keys, payment requests, links, and QR payloads converge to the same transfer authorization flow.',
          pt: 'Chaves manuais, cobranças, links e payloads de QR convergem para o mesmo fluxo de autorização de transferência.',
        },
      },
    ],
    seoTitle: {
      en: 'Auronix Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Auronix | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about a digital bank with async settlement, live transfer updates, and auditable money movement.',
      pt: 'Estudo de caso sobre um banco digital com liquidação assíncrona, atualização ao vivo e movimentação financeira auditável.',
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
          en: 'Distributed backend architecture, sagas, and integration contracts',
          pt: 'Arquitetura de backend distribuído, sagas e contratos de integração',
        },
      },
      {
        label: { en: 'Topology', pt: 'Topologia' },
        value: {
          en: 'nginx + gateway + five business services',
          pt: 'nginx + gateway + cinco serviços de negócio',
        },
      },
      {
        label: { en: 'Persistence', pt: 'Persistência' },
        value: {
          en: 'PostgreSQL, MongoDB, and RabbitMQ with service ownership',
          pt: 'PostgreSQL, MongoDB e RabbitMQ com ownership por serviço',
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
      'Docker',
      'Nginx',
    ],
    heroTags: [
      'Event-driven architecture',
      'Distributed microservices',
      'RabbitMQ',
      'Sagas',
      'Idempotency',
      'Retries',
      'Fault tolerance',
      'NestJS',
      'Spring Boot',
      'Go',
    ],
    heroVisualLabel: {
      en: 'Runtime surface',
      pt: 'Superfície de runtime',
    },
    heroVisualCaption: {
      en: 'Real manual demo used to drive account creation, stream subscription, and webhook confirmation against the distributed topology.',
      pt: 'Demo manual real usada para acionar criação de conta, inscrição no stream e confirmação de webhook contra a topologia distribuída.',
    },
    problem: {
      en: 'Account creation had to stay fast at the edge without assuming a global transaction. Identity, payment intent, signed webhooks, and premium entitlement each needed explicit ownership, duplicate protection, and recovery after partial failure.',
      pt: 'A criação de conta precisava permanecer rápida na borda sem assumir uma transação global. Identidade, intenção de pagamento, webhooks assinados e entitlement premium exigiam ownership explícito, proteção contra duplicidade e recuperação após falha parcial.',
    },
    solution: {
      en: 'Modularis keeps HTTP thin and shifts coordination to a persisted onboarding saga. The gateway publishes commands, downstream services exchange events and RPC-style responses over RabbitMQ, webhook ingress is durably relayed before mutating payment state, and each bounded context keeps the storage model that matches its own failure and consistency profile.',
      pt: 'O Modularis mantém o HTTP fino e desloca a coordenação para uma saga persistida de onboarding. O gateway publica comandos, os serviços trocam eventos e respostas em estilo RPC via RabbitMQ, o ingresso de webhook é retransmitido de forma durável antes de alterar o estado do pagamento, e cada bounded context preserva o modelo de armazenamento que combina com seu perfil de falha e consistência.',
    },
    technicalHighlights: [
      {
        title: {
          en: 'Persisted saga orchestration',
          pt: 'Orquestração de saga persistida',
        },
        description: {
          en: 'The onboarding service stores transitions, retry schedule, and lease ownership in PostgreSQL before advancing identity and payment steps.',
          pt: 'O onboarding-service persiste transições, agenda de retry e ownership de lease em PostgreSQL antes de avançar etapas de identidade e pagamento.',
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
      en: 'Reviewed on May 1, 2026: the repository implements six deployable services behind nginx, three RabbitMQ exchanges, nine documented async channels, signed webhook verification, outbox and inbox style delivery controls, and recovery loops that converge the flow from account request to premium entitlement.',
      pt: 'Revisado em 1 de maio de 2026: o repositório implementa seis serviços implantáveis atrás do nginx, três exchanges RabbitMQ, nove canais assíncronos documentados, verificação de webhook assinado, controles de entrega em estilo outbox e inbox e loops de recuperação que convergem o fluxo da requisição de conta ao entitlement premium.',
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
        'Workers de recuperação exigem ownership por lease para evitar progresso duplicado de saga',
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
          pt: 'A saga de onboarding armazena estado, retryability, próxima ação e ownership de lock para que fluxos parcialmente concluídos sejam recuperados de forma determinística.',
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
      en: 'Case study about a production-shaped distributed platform with a persisted saga, RabbitMQ contracts, idempotent delivery, and signed webhook relay.',
      pt: 'Estudo de caso sobre uma plataforma distribuída com formato de produção, saga persistida, contratos RabbitMQ, entrega idempotente e retransmissão de webhook assinado.',
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
      en: 'Systems design, archive format engineering, concurrency pipeline, benchmark methodology',
      pt: 'Desenho de sistemas, engenharia de formato de arquivo, pipeline concorrente e metodologia de benchmark',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    problem: {
      en: 'Large inputs had to compress and verify quickly without unbounded memory, non-deterministic archives, or unsafe extraction paths.',
      pt: 'Entradas grandes precisavam ser comprimidas e verificadas rapidamente sem memória ilimitada, arquivos não deterministas ou caminhos inseguros de extração.',
    },
    solution: {
      en: 'GGCompress combines sequential disk reads, goroutine-based chunk workers, ordered emission, and one versioned `.ggc` format that validates manifest and chunk indexes before restore.',
      pt: 'GGCompress combina leitura sequencial de disco, workers por chunk baseados em goroutines, emissão ordenada e um único formato `.ggc` versionado que valida manifesto e índices de chunk antes da restauração.',
    },
    resultSummary: {
      en: 'Measured CLI run dated April 23, 2026: a 9.77 GiB file compressed at 1.23 GiB/s with 8 workers and 4 MiB chunks, finishing in 7.952s at a 0.47% ratio.',
      pt: 'Execução medida da CLI em 23 de abril de 2026: um arquivo de 9.77 GiB foi comprimido a 1.23 GiB/s com 8 workers e chunks de 4 MiB, concluindo em 7.952s com taxa de 0.47%.',
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
      en: 'Case study about a Go compression engine with deterministic archive design, concurrent chunk pipelines, and measured throughput.',
      pt: 'Estudo de caso sobre um motor de compressão em Go com design determinístico de arquivo, pipelines concorrentes por chunk e throughput medido.',
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
