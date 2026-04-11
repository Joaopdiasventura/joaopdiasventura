export const PROJECTS_SECTION_DATA = {
  "heading": {
    "eyebrow": {
      "en": "Projects",
      "pt": "Projetos"
    },
    "title": {
      "en": "Technical products with fast signal",
      "pt": "Produtos tecnicos com leitura rapida de valor"
    },
    "summary": {
      "en": "A focused showcase of product scope, architectural choices, and execution proof without case-study noise in the first scan.",
      "pt": "Uma vitrine focada em escopo de produto, decisoes de arquitetura e prova de execucao, sem ruido de case study na primeira leitura."
    }
  },
  "projects": [
    {
      "slug": "auronix",
      "name": {
        "en": "Auronix",
        "pt": "Auronix"
      },
      "category": {
        "en": "Stored-value transfers and payment requests",
        "pt": "Transferencias de saldo e cobrancas"
      },
      "tagline": {
        "en": "Digital bank",
        "pt": "Banco digital"
      },
      "description": {
        "en": "Financial workspace for account access, balance, transfers, payment requests, and QR flows in one product, with asynchronous settlement and real-time feedback.",
        "pt": "Workspace financeiro para conta, saldo, transferencias, cobrancas e QR em uma experiencia unica, com liquidacao assincrona e feedback em tempo real."
      },
      "highlights": {
        "en": [
          "Modular monolith organized by financial domain.",
          "Asynchronous settlement with balance recheck and pessimistic locks.",
          "Redis-backed SSE replay for balance and transfer status updates."
        ],
        "pt": [
          "Monolito modular organizado por dominio financeiro.",
          "Liquidacao assincrona com rechecagem de saldo e locks pessimistas.",
          "Replay de SSE em Redis para saldo e status de transferencia."
        ]
      },
      "metrics": [
        {
          "value": "10",
          "label": {
            "en": "Protected screens",
            "pt": "Telas protegidas"
          }
        },
        {
          "value": "248",
          "label": {
            "en": "Automated tests",
            "pt": "Testes automatizados"
          }
        },
        {
          "value": "100 / 24h",
          "label": {
            "en": "Replay window",
            "pt": "Janela de replay"
          }
        }
      ],
      "stack": [
        "Angular",
        "NestJS",
        "Node.js with TypeScript",
        "PostgreSQL",
        "Redis"
      ],
      "liveUrl": "https://auronix-client.vercel.app",
      "repositories": [
        {
          "name": "Auronix Client",
          "href": "https://github.com/Joaopdiasventura/Auronix-client"
        },
        {
          "name": "Auronix Server",
          "href": "https://github.com/Joaopdiasventura/Auronix-server"
        }
      ],
      "icon": {
        "src": "/assets/projects/icons/auronix.svg",
        "width": 24,
        "height": 24
      },
      "cover": {
        "src": "/assets/projects/covers/auronix/auronix-1280.png",
        "alt": {
          "en": "Cover for Auronix showing account state, transfer authorization, QR entry, and real-time settlement feedback.",
          "pt": "Capa do Auronix mostrando estado da conta, autorizacao de transferencia, entrada por QR e feedback de liquidacao em tempo real."
        }
      }
    },
    {
      "slug": "modularis",
      "name": {
        "en": "Modularis",
        "pt": "Modularis"
      },
      "category": {
        "en": "Event-driven onboarding and payments",
        "pt": "Onboarding e pagamentos orientados a eventos"
      },
      "tagline": {
        "en": "Distributed backend for payments",
        "pt": "Backend distribuido para pagamentos"
      },
      "description": {
        "en": "Event-driven backend for onboarding, payment issuance, webhook confirmation, and asynchronous premium activation across isolated services.",
        "pt": "Backend orientado a eventos para onboarding, emissao de pagamento, confirmacao por webhook e ativacao premium assincrona em servicos isolados."
      },
      "highlights": {
        "en": [
          "Four services with clear runtime boundaries.",
          "Typed RabbitMQ contracts with split persistence ownership.",
          "Webhook flow with HMAC validation, idempotency, and retry/backoff."
        ],
        "pt": [
          "Quatro servicos com fronteiras de runtime claras.",
          "Contratos tipados em RabbitMQ com persistencia separada por responsabilidade.",
          "Fluxo de webhook com validacao HMAC, idempotencia e retry/backoff."
        ]
      },
      "metrics": [
        {
          "value": "4",
          "label": {
            "en": "Deployable services",
            "pt": "Servicos deployaveis"
          }
        },
        {
          "value": "8",
          "label": {
            "en": "Message contracts",
            "pt": "Contratos de mensagem"
          }
        },
        {
          "value": "7",
          "label": {
            "en": "Critical e2e scenarios",
            "pt": "Cenarios criticos em e2e"
          }
        }
      ],
      "stack": [
        "NestJS",
        "Node.js with TypeScript",
        "RabbitMQ",
        "PostgreSQL",
        "MongoDB"
      ],
      "liveUrl": null,
      "repositories": [
        {
          "name": "Modularis Workspace",
          "href": "https://github.com/Joaopdiasventura/Modularis"
        }
      ],
      "icon": {
        "src": "/assets/projects/icons/modularis.svg",
        "width": 24,
        "height": 24
      },
      "cover": {
        "src": "/assets/projects/covers/modularis/modularis-1280.png",
        "alt": {
          "en": "Cover for Modularis showing service boundaries, queues, and payment state propagation.",
          "pt": "Capa do Modularis mostrando fronteiras de servico, filas e propagacao de estado de pagamento."
        }
      }
    },
    {
      "slug": "votrix",
      "name": {
        "en": "Votrix",
        "pt": "Votrix"
      },
      "category": {
        "en": "High-performance Node.js HTTP framework",
        "pt": "Framework HTTP de alta performance para Node.js"
      },
      "tagline": {
        "en": "High-performance HTTP runtime",
        "pt": "Runtime HTTP de alta performance"
      },
      "description": {
        "en": "Minimal HTTP framework for Node.js focused on cutting hot-path overhead and proving gains with reproducible benchmarks.",
        "pt": "Framework HTTP minimo para Node.js focado em reduzir overhead no hot path e provar ganho com benchmark reproduzivel."
      },
      "highlights": {
        "en": [
          "Static routes in Map structures and dynamic routes in a compact tree.",
          "Query and body parsing run only when the request path needs them.",
          "Benchmarks are versioned against Fastify and Express in the repository."
        ],
        "pt": [
          "Rotas estaticas em estruturas Map e rotas dinamicas em arvore compacta.",
          "Query e body parsing rodam so quando o caminho da requisicao precisa disso.",
          "Benchmarks versionados contra Fastify e Express dentro do repositorio."
        ]
      },
      "metrics": [
        {
          "value": "Faster",
          "label": {
            "en": "than Fastify and Express",
            "pt": "que Fastify e Express"
          }
        },
        {
          "value": "4 / 4",
          "label": {
            "en": "Leading scenarios",
            "pt": "Cenarios com lideranca"
          }
        },
        {
          "value": "+37.25%",
          "label": {
            "en": "vs Fastify on create-user",
            "pt": "vs Fastify em create-user"
          }
        }
      ],
      "stack": [
        "Node.js with TypeScript",
        "node:http",
        "autocannon"
      ],
      "liveUrl": null,
      "repositories": [
        {
          "name": "Votrix Repository",
          "href": "https://github.com/Joaopdiasventura/Votrix"
        }
      ],
      "icon": {
        "src": "/assets/projects/icons/votrix.svg",
        "width": 24,
        "height": 24
      },
      "cover": {
        "src": "/assets/projects/covers/votrix/votrix-1280.png",
        "alt": {
          "en": "Cover for Votrix showing route maps, dispatch stages, and benchmark throughput.",
          "pt": "Capa do Votrix mostrando mapas de rota, etapas de despacho e throughput em benchmark."
        }
      }
    },
    {
      "slug": "vox",
      "name": {
        "en": "VOX",
        "pt": "VOX"
      },
      "category": {
        "en": "Auditability and voting integrity",
        "pt": "Auditabilidade e integridade eleitoral"
      },
      "tagline": {
        "en": "Auditable voting platform",
        "pt": "Plataforma de votacao auditavel"
      },
      "description": {
        "en": "Electoral system for elections, candidates, ballots, voting, credit purchases, and result aggregation with explicit, traceable states.",
        "pt": "Sistema eleitoral com gestao de eleicoes, candidatos, cedulas, votacao, compra de creditos e apuracao com estados explicitos e rastreaveis."
      },
      "highlights": {
        "en": [
          "Explicit domain modeling for elections, ballots, votes, and payments.",
          "Combines HTTP, SSE, WebSocket, and async queue processing.",
          "Auditability and operator feedback are built into the product flow."
        ],
        "pt": [
          "Modelagem explicita de dominio para eleicao, cedula, voto e pagamento.",
          "Combina HTTP, SSE, WebSocket e processamento assincrono em fila.",
          "Auditabilidade e feedback operacional fazem parte do fluxo do produto."
        ]
      },
      "metrics": [
        {
          "value": "500+",
          "label": {
            "en": "Users",
            "pt": "Usuarios"
          }
        },
        {
          "value": "2 + 3",
          "label": {
            "en": "SSE streams and WS events",
            "pt": "Streams SSE e eventos WS"
          }
        },
        {
          "value": "108",
          "label": {
            "en": "Tests",
            "pt": "Testes"
          }
        }
      ],
      "stack": [
        "Angular",
        "NestJS",
        "Node.js with TypeScript",
        "PostgreSQL",
        "Redis",
        "Socket.IO"
      ],
      "liveUrl": "https://v-o-x.vercel.app",
      "repositories": [
        {
          "name": "VOX App",
          "href": "https://github.com/Joaopdiasventura/Vox"
        },
        {
          "name": "VOX Landing Page",
          "href": "https://github.com/Joaopdiasventura/vox-landing-page"
        }
      ],
      "icon": {
        "src": "/assets/projects/icons/vox.svg",
        "width": 24,
        "height": 30
      },
      "cover": {
        "src": "/assets/projects/covers/vox/vox-1280.png",
        "alt": {
          "en": "Cover for VOX showing vote flow, audit checkpoints, and operator visibility.",
          "pt": "Capa do VOX mostrando fluxo de voto, checkpoints de auditoria e visibilidade operacional."
        }
      }
    },
    {
      "slug": "etecfy",
      "name": {
        "en": "Etecfy",
        "pt": "Etecfy"
      },
      "category": {
        "en": "Music streaming",
        "pt": "Streaming de musica"
      },
      "tagline": {
        "en": "Music streaming",
        "pt": "Streaming musical"
      },
      "description": {
        "en": "Streaming application with searchable catalog, track details, and continuous chunk-based playback across web, SSR, and mobile delivery.",
        "pt": "Aplicacao de streaming com catalogo pesquisavel, detalhe da faixa e reproducao continua por chunks, atendendo web, SSR e entrega mobile."
      },
      "highlights": {
        "en": [
          "SPA with cookie auth, persisted theme, and player built on MediaSource and Media Session.",
          "Backend is split into users, songs, and song-chunk resources.",
          "Upload flow fragments audio into chunks and exposes a searchable catalog."
        ],
        "pt": [
          "SPA com auth por cookie, tema persistido e player em MediaSource e Media Session.",
          "Backend separado em recursos de usuarios, musicas e chunks.",
          "Fluxo de upload fragmenta audio em chunks e expoe um catalogo pesquisavel."
        ]
      },
      "metrics": [
        {
          "value": "16K+",
          "label": {
            "en": "Accesses",
            "pt": "Acessos"
          }
        },
        {
          "value": "10s",
          "label": {
            "en": "Audio chunk size",
            "pt": "Tamanho do chunk"
          }
        },
        {
          "value": "3",
          "label": {
            "en": "Delivery surfaces",
            "pt": "Superficies de entrega"
          }
        }
      ],
      "stack": [
        "Angular",
        "NestJS",
        "Node.js with TypeScript",
        "PostgreSQL",
        "MediaSource API",
        "Capacitor"
      ],
      "liveUrl": "https://etecfy.vercel.app",
      "repositories": [
        {
          "name": "Etecfy Client",
          "href": "https://github.com/Joaopdiasventura/etecfy-client"
        },
        {
          "name": "Etecfy Server",
          "href": "https://github.com/Joaopdiasventura/etecfy-server"
        }
      ],
      "icon": {
        "src": "/assets/projects/icons/etecfy.svg",
        "width": 24,
        "height": 24
      },
      "cover": {
        "src": "/assets/projects/covers/etecfy/etecfy-1280.png",
        "alt": {
          "en": "Cover for Etecfy showing catalog depth, playback controls, and launch-focused hierarchy.",
          "pt": "Capa do Etecfy mostrando profundidade de catalogo, controles de playback e hierarquia para lancamento."
        }
      }
    }
  ]
} as const;
