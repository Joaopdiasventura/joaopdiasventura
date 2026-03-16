import { CaseStudy } from '../models/portfolio.model';
import { CASE_STUDY_PREVIEWS } from './case-study-previews.data';

const [VOX_PREVIEW, ETECFY_PREVIEW] = CASE_STUDY_PREVIEWS;

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    ...VOX_PREVIEW,
    role: {
      en: 'Product architecture, backend design, audit-oriented modeling',
      pt: 'Arquitetura de produto, desenho de backend e modelagem orientada à auditoria',
    },
    timeline: {
      en: 'Independent public case',
      pt: 'Case público independente',
    },
    thesis: {
      en: 'Design a voting flow where traceability, transactional safety, and product clarity reinforce each other from end to end.',
      pt: 'Projetar um fluxo de votação em que rastreabilidade, segurança transacional e clareza de produto se reforcem de ponta a ponta.',
    },
    overview: {
      en: [
        'VOX was conceived as an institutional voting platform where every critical interaction needed explicit state handling, auditable decisions, and confidence under concurrent access.',
        'The work focused on translating trust requirements into domain rules, persistence strategy, and user feedback that kept the flow legible without making it feel bureaucratic.',
      ],
      pt: [
        'VOX foi concebido como uma plataforma de votação institucional em que cada interação crítica precisava de tratamento explícito de estado, decisões auditáveis e confiança sob acesso concorrente.',
        'O trabalho concentrou-se em traduzir requisitos de confiança em regras de domínio, estratégia de persistência e feedback de interface que mantivesse o fluxo legível sem torná-lo burocrático.',
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
        'Voting systems fail when correctness is implicit. The challenge was to make integrity visible in both architecture and experience.',
        'Each state transition needed to be deliberate, recoverable, and explainable to operators and users.',
      ],
      pt: [
        'Sistemas eleitorais falham quando correção fica implícita. O desafio era tornar integridade visível tanto na arquitetura quanto na experiência.',
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
          pt: 'O fluxo foi organizado em torno de transições de estado que refletiam finalização e removiam comportamentos ocultos da jornada de votação.',
        },
      },
      {
        title: {
          en: 'Treat audit trails as product surface',
          pt: 'Tratar trilhas de auditoria como superfície de produto',
        },
        description: {
          en: 'Logging and trace history were not afterthoughts. They shaped how entities, validations, and admin feedback were designed.',
          pt: 'Logs e histórico de rastreabilidade não foram pós-pensamento. Eles influenciaram como entidades, validações e feedback administrativo foram desenhados.',
        },
      },
      {
        title: {
          en: 'Balance confidence with usability',
          pt: 'Equilibrar confiança com usabilidade',
        },
        description: {
          en: 'UI states avoided ambiguity while keeping the experience fast and readable for high-attention moments.',
          pt: 'Os estados de interface evitaram ambiguidade mantendo a experiência rápida e legível em momentos de alta atenção.',
        },
      },
    ],
    results: {
      en: [
        'A coherent voting system narrative where trust is reinforced by both backend guarantees and interface behavior.',
        'A case that demonstrates thinking around state, auditability, and critical product flows under concurrency.',
      ],
      pt: [
        'Uma narrativa de sistema coerente em que confiança é reforçada por garantias de backend e comportamento de interface.',
        'Um case que demonstra raciocínio sobre estado, auditoria e fluxos críticos de produto sob concorrência.',
      ],
    },
    mediaCaption: {
      en: 'Editorial reconstruction of the platform logic, emphasizing election state, trust checkpoints, and operator visibility.',
      pt: 'Reconstrução editorial da lógica da plataforma, enfatizando estado da eleição, checkpoints de confiança e visibilidade para operadores.',
    },
    mediaPanels: [
      {
        eyebrow: { en: 'System view', pt: 'Visão de sistema' },
        title: { en: 'Audit-first election flow', pt: 'Fluxo eleitoral orientado à auditoria' },
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
      en: 'VOX Electoral System Case Study | João Paulo Dias Ventura',
      pt: 'Case Study VOX Sistema Eleitoral | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about architecture, traceability, and voting integrity in the VOX electoral system.',
      pt: 'Case study sobre arquitetura, rastreabilidade e integridade eleitoral no sistema VOX.',
    },
  },
  {
    ...ETECFY_PREVIEW,
    role: {
      en: 'Architecture, product structure, media-oriented frontend',
      pt: 'Arquitetura, estrutura de produto e frontend orientado à mídia',
    },
    timeline: {
      en: 'Independent public case',
      pt: 'Case público independente',
    },
    thesis: {
      en: 'Build a streaming product that feels immediate to the user while staying structurally ready for growth in catalog, access, and integrations.',
      pt: 'Construir um produto de streaming que pareça imediato para o usuário sem perder preparo estrutural para crescimento de catálogo, acessos e integrações.',
    },
    overview: {
      en: [
        'Etecfy was designed as a music experience with equal attention to performance, navigation rhythm, and backend readiness for catalog expansion.',
        'The interesting challenge was not only rendering media nicely, but deciding how discovery, organization, and future scale should shape the data and UI model.',
      ],
      pt: [
        'Etecfy foi desenhado como uma experiência musical com atenção equivalente a performance, ritmo de navegação e preparo de backend para expansão de catálogo.',
        'O desafio interessante não era apenas renderizar mídia com qualidade, mas decidir como descoberta, organização e escala futura deveriam moldar o modelo de dados e a UI.',
      ],
    },
    highlights: {
      en: [
        'Catalog structure planned for scale instead of hard-coded media shelves.',
        'Media integrations and user flow designed around perceived immediacy.',
        'Interface direction favored pace, energy, and hierarchy over generic app layouts.',
      ],
      pt: [
        'Estrutura de catálogo pensada para escala, e não para prateleiras fixas e rígidas.',
        'Integrações de mídia e fluxo do usuário desenhados em torno de sensação de imediatismo.',
        'A direção de interface favoreceu ritmo, energia e hierarquia acima de layouts genéricos.',
      ],
    },
    challenge: {
      en: [
        'Music products succeed when navigation feels effortless and the catalog feels alive. That demanded both product restraint and technical structure.',
        'The system needed to avoid visual noise while staying extensible for future content and media behaviors.',
      ],
      pt: [
        'Produtos de música vencem quando navegação parece sem esforço e o catálogo parece vivo. Isso exigiu contenção de produto e estrutura técnica ao mesmo tempo.',
        'O sistema precisava evitar ruído visual sem perder extensibilidade para conteúdo e comportamentos de mídia futuros.',
      ],
    },
    constraints: {
      en: [
        'Fast launch window and audience spike right after release.',
        'Need for a scalable catalog model.',
        'Multi-surface media behavior across web and native contexts.',
      ],
      pt: [
        'Janela de lançamento rápida e pico de audiência logo após a estreia.',
        'Necessidade de um modelo de catálogo escalável.',
        'Comportamento de mídia em múltiplas superfícies web e nativas.',
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
          en: 'Entities and views were designed for future breadth, preventing the product from collapsing once the catalog grows.',
          pt: 'Entidades e visões foram desenhadas para amplitude futura, evitando que o produto colapse quando o catálogo crescer.',
        },
      },
      {
        title: {
          en: 'Use stream to a fluid listening',
          pt: 'Usar streams para uma escuta fluida',
        },
        description: {
          en: 'Stream music instantly with smooth playback and minimal buffering. Enjoy a continuous listening experience across any device.',
          pt: 'Reproduza músicas instantaneamente com streaming contínuo e sem interrupções. Aproveite uma experiência de escuta fluida em qualquer dispositivo.',
        },
      },
    ],
    results: {
      en: [
        'A public case that shows how product rhythm, frontend polish, and system planning can coexist.',
        'A platform that reached 1.3K accesses within six hours and demonstrates thinking beyond visual styling alone.',
      ],
      pt: [
        'Um case público que mostra como ritmo de produto, refinamento frontend e planejamento de sistema podem coexistir.',
        'Uma plataforma que alcançou 1,3 mil acessos em seis horas e demonstra raciocínio além de estilo visual isolado.',
      ],
    },
    mediaCaption: {
      en: 'Editorial interpretation of catalog depth, release momentum, and the motion language behind a media-focused interface.',
      pt: 'Interpretação editorial de profundidade de catálogo, impulso de lançamento e linguagem de motion por trás de uma interface orientada à mídia.',
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
        title: { en: 'Media-first pacing', pt: 'Ritmo orientado à mídia' },
        body: {
          en: 'Transitions and hierarchy keep the experience energetic without losing control.',
          pt: 'Transições e hierarquia mantêm a experiência enérgica sem perder controle.',
        },
      },
      {
        eyebrow: { en: 'Launch view', pt: 'Visão de lançamento' },
        title: { en: 'Prepared for attention spikes', pt: 'Preparado para picos de atenção' },
        body: {
          en: 'The product launch validated both structure and perceived responsiveness.',
          pt: 'O lançamento validou tanto a estrutura quanto a responsividade percebida do produto.',
        },
      },
    ],
    seoTitle: {
      en: 'Etecfy Streaming Platform Case Study | João Paulo Dias Ventura',
      pt: 'Case Study Etecfy Plataforma de Streaming | João Paulo Dias Ventura',
    },
    seoDescription: {
      en: 'Case study about catalog scale, media delivery, and interface pacing in the Etecfy streaming platform.',
      pt: 'Case study sobre escala de catálogo, entrega de mídia e ritmo de interface na plataforma Etecfy.',
    },
  },
] as const;
