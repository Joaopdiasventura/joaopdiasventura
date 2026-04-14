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
      en: 'Each card shows problem, solution, and proof.',
      pt: 'Cada card mostra problema, solução e prova.',
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
      problem: {
        en: 'Transfers and QR payments needed instant feedback without losing settlement safety.',
        pt: 'Transferências e pagamentos por QR precisavam de feedback imediato sem perder segurança na liquidação.',
      },
      solution: {
        en: 'Modular monolith with async settlement, pessimistic locks, and live status updates.',
        pt: 'Monólito modular com liquidação assíncrona, locks pessimistas e atualização de status em tempo real.',
      },
      description: {
        en: 'Digital bank for balances, transfers, requests, and QR payments with async settlement.',
        pt: 'Banco digital para saldo, transferências, cobranças e pagamentos por QR com liquidação assíncrona.',
      },
      metrics: [
        {
          value: '248',
          label: {
            en: 'Automated tests',
            pt: 'Testes automatizados',
          },
        },
        {
          value: '10',
          label: {
            en: 'Protected views',
            pt: 'Telas protegidas',
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
      stack: ['Angular', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://auronix-client.vercel.app',
      repositories: [
        {
          name: 'Auronix Client',
          href: 'https://github.com/joaopdiasventura/Auronix-client',
        },
        {
          name: 'Auronix Server',
          href: 'https://github.com/joaopdiasventura/Auronix-server',
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
      problem: {
        en: 'Onboarding had to stay fast while payment state, retries, and premium activation ran across services.',
        pt: 'O onboarding precisava permanecer rápido enquanto estado de pagamento, retries e ativação premium rodavam entre serviços.',
      },
      solution: {
        en: 'Four services coordinated by typed RabbitMQ contracts, verified webhooks, and split persistence.',
        pt: 'Quatro serviços coordenados por contratos tipados em RabbitMQ, webhooks validados e persistência segmentada.',
      },
      description: {
        en: 'Event-driven backend for onboarding, payment issuance, webhook confirmation, and premium activation.',
        pt: 'Backend orientado a eventos para onboarding, emissão de pagamento, confirmação por webhook e ativação premium.',
      },
      metrics: [
        {
          value: '4',
          label: {
            en: 'Microservices',
            pt: 'Microsserviços',
          },
        },
        {
          value: '57',
          label: {
            en: 'Passing tests',
            pt: 'Testes aprovados',
          },
        },
        {
          value: '8',
          label: {
            en: 'Message contracts',
            pt: 'Contratos de mensagem',
          },
        },
      ],
      stack: ['RabbitMQ', 'Docker', 'MongoDB'],
      liveUrl: null,
      repositories: [
        {
          name: 'code',
          href: 'https://github.com/joaopdiasventura/Modularis',
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
      problem: {
        en: 'The runtime had to reduce hot-path cost without turning into a generic framework clone.',
        pt: 'O runtime precisava reduzir custo no hot path sem virar um clone genérico de framework.',
      },
      solution: {
        en: 'Direct routing, deferred parsing, and a benchmark harness versioned with the codebase.',
        pt: 'Roteamento direto, parsing adiado e um harness de benchmark versionado com o código.',
      },
      description: {
        en: 'Minimal TypeScript runtime on node:http built to reduce overhead and validate gains with benchmarks.',
        pt: 'Runtime minimalista em TypeScript sobre node:http, focado em reduzir overhead e validar ganho com benchmarks.',
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
          href: 'https://github.com/joaopdiasventura/Votrix',
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
      problem: {
        en: 'Critical voting flows needed explicit state, audit trails, and operator clarity under concurrent load.',
        pt: 'Fluxos críticos de votação exigiam estado explícito, trilhas de auditoria e clareza operacional sob concorrência.',
      },
      solution: {
        en: 'Audit-first domain model with explicit transitions, backend guarantees, and clear feedback in the interface.',
        pt: 'Modelo de domínio orientado a auditoria com transições explícitas, garantias de backend e feedback claro na interface.',
      },
      description: {
        en: 'Voting platform with explicit state handling, audit trails, and operator feedback across critical flows.',
        pt: 'Plataforma de votação com estados explícitos, trilhas de auditoria e feedback operacional em fluxos críticos.',
      },
      metrics: [
        {
          value: '+500',
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
      stack: ['Tauri', 'NestJS', 'Redis'],
      liveUrl: 'https://v-o-x.vercel.app',
      repositories: [],
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
      problem: {
        en: 'The product needed fast discovery and smooth playback without collapsing as the catalog grew.',
        pt: 'O produto precisava de descoberta rápida e playback fluido sem colapsar com o crescimento do catálogo.',
      },
      solution: {
        en: 'Catalog-ready structure, chunk-based media delivery, and a frontend tuned for release speed.',
        pt: 'Estrutura pronta para catálogo, entrega de mídia em chunks e frontend ajustado para velocidade de lançamento.',
      },
      description: {
        en: 'Streaming platform with searchable catalog, track detail, and chunk-based playback across web and mobile.',
        pt: 'Plataforma de streaming com catálogo pesquisável, detalhe de faixa e reprodução em chunks em web e mobile.',
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
      stack: ['Angular', 'NestJs', 'Capacitor'],
      liveUrl: 'https://etecfy.vercel.app',
      repositories: [
        {
          name: 'Etecfy Client',
          href: 'https://github.com/joaopdiasventura/etecfy-client',
        },
        {
          name: 'Etecfy Server',
          href: 'https://github.com/joaopdiasventura/etecfy-server',
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
