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
        'Autenticacao por cookie mantém a autoridade de sessao no backend',
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
      en: 'Backend architecture, async workflow design, service contracts',
      pt: 'Arquitetura de backend, desenho de fluxo assíncrono e contratos de serviço',
    },
    timeline: INDEPENDENT_PUBLIC_CASE,
    problem: {
      en: 'Onboarding had to respond quickly while retries, duplicate callbacks, and premium activation stayed explicit across services.',
      pt: 'O onboarding precisava responder rápido enquanto retries, callbacks duplicados e ativação premium permaneciam explícitos entre serviços.',
    },
    solution: {
      en: 'The flow was split into four NestJS services with typed RabbitMQ contracts, verified webhooks, split persistence, and observable async progress.',
      pt: 'O fluxo foi dividido em quatro serviços NestJS com contratos tipados em RabbitMQ, webhooks validados, persistência segmentada e progresso assíncrono observável.',
    },
    resultSummary: {
      en: 'Verified on April 8, 2026: build, unit, and end-to-end suítes passed with 57 tests across 14 suítes while four services coordinated through eight message patterns.',
      pt: 'Verificado em 8 de abril de 2026: build, testes unitários e end-to-end passaram com 57 testes em 14 suítes enquanto quatro serviços se coordenavam por oito padrões de mensagem.',
    },
    constraints: {
      en: [
        'Service-owned data only, with no global transaction',
        'At-least-once delivery with idempotent consumers',
        'Webhook signature verification over raw body',
      ],
      pt: [
        'Dados pertencem aos serviços, sem transação global',
        'Entrega at-least-once com consumidores idempotentes',
        'Verificação de assinatura de webhook sobre raw body',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Split onboarding into explicit service boundaries',
          pt: 'Dividir o onboarding em fronteiras explícitas de serviço',
        },
        description: {
          en: 'Ingress, identity, payments, and webhooks own separate responsibilities, making trust boundaries and failure modes visible.',
          pt: 'Entrada, identidade, pagamentos e webhooks assumem responsabilidades separadas, deixando fronteiras de confiança e falhas visíveis.',
        },
      },
      {
        title: {
          en: 'Match persistence to each state model',
          pt: 'Aderir a persistência a cada modelo de estado',
        },
        description: {
          en: 'Identity keeps relational guarantees while payment state stores callback metadata, retries, and processed-event tracking.',
          pt: 'Identidade preserva garantias relacionais enquanto o estado de pagamento armazena metadados de callback, retries e rastreio de eventos processados.',
        },
      },
      {
        title: {
          en: 'Make async progress observable end to end',
          pt: 'Tornar o progresso assíncrono observável ponta a ponta',
        },
        description: {
          en: 'Live updates and a deterministic gateway simulator made retries, expiry, duplicate webhooks, and premium convergence reproducible.',
          pt: 'Atualizações ao vivo e um simulador determinístico de gateway tornaram retries, expiração, webhooks duplicados e convergência premium reproduzíveis.',
        },
      },
    ],
    seoTitle: {
      en: 'Modularis Case Study | João Paulo Dias Ventura',
      pt: 'Estudo de caso Modularis | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about an event-driven onboarding backend with typed contracts, verified webhooks, and split persistence.',
      pt: 'Estudo de caso sobre um backend de onboarding orientado a eventos com contratos tipados, webhooks validados e persistência segmentada.',
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
      pt: 'O sistema foi planejado em torno de estrutura escalável de catálogo, entrega em chunks e ritmo de frontend ajustado para descoberta músical.',
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
