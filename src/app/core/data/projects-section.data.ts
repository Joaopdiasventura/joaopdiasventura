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
      problem: {
        en: 'Transfers and QR payments needed instant feedback without losing settlement safety.',
        pt: 'Transferências e pagamentos por QR precisavam de feedback imediato sem perder segurança na liquidação.',
      },
      solution: {
        en: 'Modular monolith with async settlement, pessimistic locks, and live status updates.',
        pt: 'Monólito modular com liquidação assíncrona, locks pessimistas e atualização de status em tempo real.',
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
        src: '/assets/projects/covers/auronix/auronix-1280.webp',
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
        en: 'Distributed onboarding saga and payment orchestration',
        pt: 'Saga distribuída de onboarding e orquestração de pagamentos',
      },
      problem: {
        en: 'The edge had to respond quickly while identity, payment intent, webhook confirmation, and premium convergence tolerated retries and duplicate delivery.',
        pt: 'A borda precisava responder rápido enquanto identidade, intenção de pagamento, confirmação de webhook e convergência premium toleravam retries e entrega duplicada.',
      },
      solution: {
        en: 'A persisted saga coordinates service-owned stores, RabbitMQ contracts, and idempotent consumers across NestJS, Spring Boot, and Go.',
        pt: 'Uma saga persistida coordena persistências por serviço, contratos RabbitMQ e consumidores idempotentes em NestJS, Spring Boot e Go.',
      },
      metrics: [
        {
          value: '6',
          label: {
            en: 'Deployable services',
            pt: 'Serviços implantáveis',
          },
        },
        {
          value: '9',
          label: {
            en: 'Async channels',
            pt: 'Canais assíncronos',
          },
        },
        {
          value: '3',
          label: {
            en: 'Runtime stacks',
            pt: 'Stacks de runtime',
          },
        },
      ],
      stack: ['NestJS', 'Spring Boot', 'Go'],
      liveUrl: null,
      repositories: [
        {
          name: 'code',
          href: 'https://github.com/joaopdiasventura/Modularis',
        },
      ],
      icon: {
        src: '/assets/projects/icons/modularis.svg',
        width: 28,
        height: 28,
      },
      cover: {
        src: '/assets/projects/covers/modularis/modularis-1280.webp',
        alt: {
          en: 'Modularis cover showing the real flow demo used to drive account creation, stream subscription, and webhook confirmation over the distributed runtime.',
          pt: 'Capa do Modularis mostrando a demo de fluxo real usada para acionar criação de conta, inscrição no stream e confirmação de webhook sobre o runtime distribuído.',
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
      problem: {
        en: 'The runtime had to reduce hot-path cost without turning into a generic framework clone.',
        pt: 'O runtime precisava reduzir custo no hot path sem virar um clone genérico de framework.',
      },
      solution: {
        en: 'Direct routing, deferred parsing, and a benchmark harness versioned with the codebase.',
        pt: 'Roteamento direto, parsing adiado e um harness de benchmark versionado com o código.',
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
        src: '/assets/projects/covers/votrix/votrix-1280.webp',
        alt: {
          en: 'Votrix cover showing route maps, dispatch stages, and benchmark throughput.',
          pt: 'Capa do Votrix mostrando mapas de rota, etapas de despacho e throughput em benchmark.',
        },
      },
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
      problem: {
        en: 'Large files and directory trees needed predictable throughput, bounded memory, and safe extraction without losing deterministic output.',
        pt: 'Arquivos grandes e árvores de diretório precisavam de throughput previsível, memória limitada e extração segura sem perder saída determinística.',
      },
      solution: {
        en: 'Sequential reader, goroutine workers, ordered writer, and a versioned `.ggc` format with chunk and index validation.',
        pt: 'Leitor sequencial, workers com goroutines, writer ordenado e um formato `.ggc` versionado com validação de chunks e índices.',
      },
      metrics: [
        {
          value: '1.23 GiB/s',
          label: {
            en: 'Observed throughput',
            pt: 'Throughput observado',
          },
        },
        {
          value: '9.77 GiB',
          label: {
            en: 'Benchmark input',
            pt: 'Entrada de benchmark',
          },
        },
        {
          value: '0.47%',
          label: {
            en: 'Compression ratio',
            pt: 'Taxa de compressão',
          },
        },
      ],
      stack: ['Go', 'gzip', 'SHA-256'],
      liveUrl: null,
      repositories: [
        {
          name: 'GGCompress Repository',
          href: 'https://github.com/Joaopdiasventura/ggc',
        },
      ],
      icon: {
        src: '/assets/projects/icons/ggc.svg',
        width: 30,
        height: 30,
      },
      cover: {
        src: '/assets/projects/covers/ggc/ggc-1280.webp',
        alt: {
          en: 'GGCompress cover showing a terminal benchmark with multi-gigabyte throughput, archive output, and compression metrics.',
          pt: 'Capa do GGCompress mostrando um benchmark no terminal com throughput em multigigabytes, saída do arquivo e métricas de compressão.',
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
      problem: {
        en: 'Critical voting flows needed explicit state, audit trails, and operator clarity under concurrent load.',
        pt: 'Fluxos críticos de votação exigiam estado explícito, trilhas de auditoria e clareza operacional sob concorrência.',
      },
      solution: {
        en: 'Audit-first domain model with explicit transitions, backend guarantees, and clear feedback in the interface.',
        pt: 'Modelo de domínio orientado a auditoria com transições explícitas, garantias de backend e feedback claro na interface.',
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
        src: '/assets/projects/covers/vox/vox-1280.webp',
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
      problem: {
        en: 'The product needed fast discovery and smooth playback without collapsing as the catalog grew.',
        pt: 'O produto precisava de descoberta rápida e playback fluido sem colapsar com o crescimento do catálogo.',
      },
      solution: {
        en: 'Catalog-ready structure, chunk-based media delivery, and a frontend tuned for release speed.',
        pt: 'Estrutura pronta para catálogo, entrega de mídia em chunks e frontend ajustado para velocidade de lançamento.',
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
      stack: ['Angular', 'NestJS', 'Capacitor'],
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
        src: '/assets/projects/covers/etecfy/etecfy-1280.webp',
        alt: {
          en: 'Etecfy cover showing catalog depth, playback controls, and launch-focused hierarchy.',
          pt: 'Capa do Etecfy mostrando profundidade de catálogo, controles de playback e hierarquia focada em lançamento.',
        },
      },
    },
  ],
} as const;
