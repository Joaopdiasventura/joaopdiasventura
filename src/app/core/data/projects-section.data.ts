export const PROJECTS_SECTION_DATA = {
  heading: {
    eyebrow: {
      en: 'Projects',
      pt: 'Projetos',
    },
    title: {
      en: 'Projects with clear technical signal',
      pt: 'Projetos com sinal técnico claro',
    },
    summary: {
      en: 'Each card summarizes scope, architecture, and proof in one pass.',
      pt: 'Cada card resume escopo, arquitetura e prova em uma única leitura.',
    },
  },
  projects: [
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
      tagline: {
        en: 'Digital bank platform',
        pt: 'Plataforma de banco digital',
      },
      description: {
        en: 'Digital bank for balances, transfers, payment requests, and QR payments with async settlement and live status feedback.',
        pt: 'Banco digital para saldo, transferências, cobranças e pagamentos por QR com liquidação assíncrona e feedback de status em tempo real.',
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
      metrics: [
        {
          value: '10',
          label: {
            en: 'Protected views',
            pt: 'Telas protegidas',
          },
        },
        {
          value: '248',
          label: {
            en: 'Automated tests',
            pt: 'Testes automatizados',
          },
        },
        {
          value: '100 / 24h',
          label: {
            en: 'Replay window',
            pt: 'Janela de replay',
          },
        },
      ],
      stack: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://auronix-client.vercel.app',
      repositories: [
        {
          name: 'Auronix Client',
          href: 'https://github.com/Joaopdiasventura/Auronix-client',
        },
        {
          name: 'Auronix Server',
          href: 'https://github.com/Joaopdiasventura/Auronix-server',
        },
      ],
      icon: {
        src: '/assets/projects/icons/auronix.svg',
        width: 24,
        height: 24,
      },
      cover: {
        src: '/assets/projects/covers/auronix/auronix-1280.png',
        alt: {
          en: 'Auronix cover showing digital account state, transfer authorization, QR payment entry, and live settlement feedback.',
          pt: 'Capa do Auronix mostrando estado da conta digital, autorização de transferência, entrada de pagamento por QR e feedback de liquidação em tempo real.',
        },
      },
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
      tagline: {
        en: 'Distributed onboarding backend',
        pt: 'Backend distribuído de onboarding',
      },
      description: {
        en: 'Event-driven backend for onboarding, payment issuance, webhook confirmation, and async premium activation across isolated services.',
        pt: 'Backend orientado a eventos para onboarding, emissão de pagamento, confirmação por webhook e ativação premium assíncrona entre serviços isolados.',
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
      metrics: [
        {
          value: '4',
          label: {
            en: 'Deployable services',
            pt: 'Serviços implantáveis',
          },
        },
        {
          value: '8',
          label: {
            en: 'Message contracts',
            pt: 'Contratos de mensagem',
          },
        },
        {
          value: '7',
          label: {
            en: 'Critical e2e cases',
            pt: 'Casos críticos em e2e',
          },
        },
      ],
      stack: ['NestJS', 'Node.js', 'RabbitMQ', 'PostgreSQL', 'MongoDB'],
      liveUrl: null,
      repositories: [
        {
          name: 'Modularis Workspace',
          href: 'https://github.com/Joaopdiasventura/Modularis',
        },
      ],
      icon: {
        src: '/assets/projects/icons/modularis.svg',
        width: 24,
        height: 24,
      },
      cover: {
        src: '/assets/projects/covers/modularis/modularis-1280.png',
        alt: {
          en: 'Modularis cover showing service boundaries, queues, and payment state propagation.',
          pt: 'Capa do Modularis mostrando fronteiras de serviço, filas e propagação de estado de pagamento.',
        },
      },
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
      tagline: {
        en: 'Minimal HTTP runtime',
        pt: 'Runtime HTTP minimalista',
      },
      description: {
        en: 'Minimal TypeScript runtime on node:http built to reduce hot-path overhead and validate gains with reproducible benchmarks.',
        pt: 'Runtime minimalista em TypeScript sobre node:http, focado em reduzir overhead no hot path e validar ganho com benchmarks reproduzíveis.',
      },
      highlights: {
        en: [
          'Static routes in Map structures and dynamic routes in a compact tree.',
          'Query and body parsing run only when the matched route needs them.',
          'Benchmarks versioned against Fastify and Express.',
        ],
        pt: [
          'Rotas estáticas em estruturas Map e rotas dinâmicas em uma árvore compacta.',
          'Query e body parsing rodam só quando a rota casada precisa disso.',
          'Benchmarks versionados contra Fastify e Express.',
        ],
      },
      metrics: [
        {
          value: '30.1K',
          label: {
            en: 'RPS on /health',
            pt: 'RPS em /health',
          },
        },
        {
          value: '4 / 4',
          label: {
            en: 'Winning scenarios',
            pt: 'Cenários liderados',
          },
        },
        {
          value: '+37.25%',
          label: {
            en: 'Lead vs Fastify',
            pt: 'Vantagem vs Fastify',
          },
        },
      ],
      stack: ['TypeScript', 'node:http', 'autocannon'],
      liveUrl: null,
      repositories: [
        {
          name: 'Votrix Repository',
          href: 'https://github.com/Joaopdiasventura/Votrix',
        },
      ],
      icon: {
        src: '/assets/projects/icons/votrix.svg',
        width: 24,
        height: 24,
      },
      cover: {
        src: '/assets/projects/covers/votrix/votrix-1280.png',
        alt: {
          en: 'Votrix cover showing route maps, dispatch stages, and benchmark throughput.',
          pt: 'Capa do Votrix mostrando mapas de rota, etapas de despacho e throughput em benchmark.',
        },
      },
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
      tagline: {
        en: 'Auditable voting platform',
        pt: 'Plataforma de votação auditável',
      },
      description: {
        en: 'Voting platform with explicit state handling, audit trails, and operator feedback across critical flows.',
        pt: 'Plataforma de votação com estados explícitos, trilhas de auditoria e feedback operacional em fluxos críticos.',
      },
      highlights: {
        en: [
          'Explicit domain modeling for elections, ballots, votes, and payments.',
          'Combines HTTP, SSE, WebSocket, and async queue processing.',
          'Auditability and operator feedback are part of the product flow.',
        ],
        pt: [
          'Modelagem explícita de domínio para eleições, cédulas, votos e pagamentos.',
          'Combina HTTP, SSE, WebSocket e processamento assíncrono em fila.',
          'Auditabilidade e feedback operacional fazem parte do fluxo do produto.',
        ],
      },
      metrics: [
        {
          value: '500+',
          label: {
            en: 'Concurrent users',
            pt: 'Usuários simultâneos',
          },
        },
        {
          value: '29',
          label: {
            en: 'HTTP routes',
            pt: 'Rotas HTTP',
          },
        },
        {
          value: '108',
          label: {
            en: 'Automated tests',
            pt: 'Testes automatizados',
          },
        },
      ],
      stack: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.IO'],
      liveUrl: 'https://v-o-x.vercel.app',
      repositories: [
        {
          name: 'VOX App',
          href: 'https://github.com/Joaopdiasventura/Vox',
        },
        {
          name: 'VOX Landing Page',
          href: 'https://github.com/Joaopdiasventura/vox-landing-page',
        },
      ],
      icon: {
        src: '/assets/projects/icons/vox.svg',
        width: 24,
        height: 30,
      },
      cover: {
        src: '/assets/projects/covers/vox/vox-1280.png',
        alt: {
          en: 'VOX cover showing vote flow, audit checkpoints, and operator visibility.',
          pt: 'Capa do VOX mostrando fluxo de voto, checkpoints de auditoria e visibilidade operacional.',
        },
      },
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
      tagline: {
        en: 'Streaming platform',
        pt: 'Plataforma de streaming',
      },
      description: {
        en: 'Streaming platform with searchable catalog, track detail, and chunk-based playback across web and mobile delivery.',
        pt: 'Plataforma de streaming com catálogo pesquisável, detalhe de faixa e reprodução por chunks em web e mobile.',
      },
      highlights: {
        en: [
          'SPA with cookie auth, persisted theme, and a player built on MediaSource and Media Session.',
          'Backend split into users, songs, and song-chunk resources.',
          'Upload flow fragments audio into chunks and exposes a searchable catalog.',
        ],
        pt: [
          'SPA com auth por cookie, tema persistido e player em MediaSource e Media Session.',
          'Backend separado em recursos de usuários, músicas e chunks.',
          'Fluxo de upload fragmenta áudio em chunks e expõe um catálogo pesquisável.',
        ],
      },
      metrics: [
        {
          value: '1.3K',
          label: {
            en: 'Launch accesses in 6h',
            pt: 'Acessos em 6h de lançamento',
          },
        },
        {
          value: '10s',
          label: {
            en: 'Chunk size',
            pt: 'Tamanho do chunk',
          },
        },
        {
          value: '3',
          label: {
            en: 'Delivery surfaces',
            pt: 'Superfícies de entrega',
          },
        },
      ],
      stack: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'MediaSource API', 'Capacitor'],
      liveUrl: 'https://etecfy.vercel.app',
      repositories: [
        {
          name: 'Etecfy Client',
          href: 'https://github.com/Joaopdiasventura/etecfy-client',
        },
        {
          name: 'Etecfy Server',
          href: 'https://github.com/Joaopdiasventura/etecfy-server',
        },
      ],
      icon: {
        src: '/assets/projects/icons/etecfy.svg',
        width: 24,
        height: 24,
      },
      cover: {
        src: '/assets/projects/covers/etecfy/etecfy-1280.png',
        alt: {
          en: 'Etecfy cover showing catalog depth, playback controls, and launch-focused hierarchy.',
          pt: 'Capa do Etecfy mostrando profundidade de catálogo, controles de playback e hierarquia focada em lançamento.',
        },
      },
    },
  ],
} as const;
