import {
  CapabilityCluster,
  CaseStudy,
  ContactContent,
  CredentialsContent,
  ExperienceEntry,
  FeaturedWorkContent,
  HeroContent,
  ImpactMetric,
  ManifestoContent,
  NavItem,
  SiteChrome,
  SocialLink,
} from '../models/portfolio.model';

export const SITE_CHROME: SiteChrome = {
  brandLabel: {
    en: 'Go to portfolio home',
    pt: 'Ir para a página inicial do portfólio',
  },
  switchLanguage: {
    en: 'Switch language',
    pt: 'Alternar idioma',
  },
  openMenu: {
    en: 'Open menu',
    pt: 'Abrir menu',
  },
  closeMenu: {
    en: 'Close menu',
    pt: 'Fechar menu',
  },
  footerRights: {
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
  },
  homeDescription: {
    en: 'Portfolio of João Paulo Dias Ventura, focused on data-intensive products, auditable systems, and premium frontend execution.',
    pt: 'Portfólio de João Paulo Dias Ventura, focado em produtos intensivos em dados, sistemas auditáveis e execução frontend premium.',
  },
};

export const NAV_ITEMS: readonly NavItem[] = [
  {
    id: 'about',
    label: { en: 'About', pt: 'Manifesto' },
  },
  {
    id: 'work',
    label: { en: 'Work', pt: 'Cases' },
  },
  {
    id: 'experience',
    label: { en: 'Experience', pt: 'Experiência' },
  },
  {
    id: 'contact',
    label: { en: 'Contact', pt: 'Contato' },
  },
] as const;

export const HERO_CONTENT: HeroContent = {
  eyebrow: {
    en: 'Data-intensive systems and Precise execution',
    pt: 'Sistemas intensivos em dados e Execução precisa',
  },
  titleLines: {
    en: ['João Paulo', 'Dias Ventura'],
    pt: ['João Paulo', 'Dias Ventura'],
  },
  summary: {
    en: 'I design and ship software for complex flows where data integrity, operational clarity, and product quality cannot drift apart.',
    pt: 'Eu projeto e entrego software para fluxos complexos em que integridade de dados, clareza operacional e qualidade de produto não podem se dissociar.',
  },
  noteTitle: {
    en: 'Current focus',
    pt: 'Foco atual',
  },
  noteBody: {
    en: 'Architecting auditable systems, high-volume processing pipelines, and interfaces that feel as deliberate as the backend behind them.',
    pt: 'Arquitetar sistemas auditáveis, pipelines de alto volume e interfaces com o mesmo rigor do backend que as sustenta.',
  },
  ctas: [
    {
      id: 'work',
      kind: 'primary',
      label: { en: 'Explore featured work', pt: 'Explorar cases em destaque' },
    },
    {
      id: 'contact',
      kind: 'secondary',
      label: { en: 'Start a conversation', pt: 'Iniciar conversa' },
    },
    {
      id: 'cv',
      kind: 'ghost',
      label: { en: 'Download CV', pt: 'Baixar currículo' },
    },
  ],
} as const;

export const IMPACT_METRICS: readonly ImpactMetric[] = [
  {
    id: 'data',
    value: '+16GB',
    label: {
      en: 'Processed data',
      pt: 'Dados processados',
    },
    context: {
      en: 'Ingestion and structuring flows for AI-oriented information pipelines.',
      pt: 'Fluxos de ingestão e estruturação para pipelines orientados a IA.',
    },
  },
  {
    id: 'beneficiaries',
    value: '+1M',
    label: {
      en: 'Beneficiaries handled',
      pt: 'Beneficiários processados',
    },
    context: {
      en: 'Billing rules and multi-layout validation in insurance operations.',
      pt: 'Regras de faturamento e validação multi-layout em operações de corretora.',
    },
  },
  {
    id: 'traffic',
    value: '500+',
    label: {
      en: 'Concurrent users',
      pt: 'Usuários simultâneos',
    },
    context: {
      en: 'Institutional voting flow sustained with auditability and traceability.',
      pt: 'Fluxo de votação institucional sustentado com auditoria e rastreabilidade.',
    },
  },
] as const;

export const MANIFESTO_CONTENT: ManifestoContent = {
  heading: {
    eyebrow: {
      en: 'Positioning',
      pt: 'Posicionamento',
    },
    title: {
      en: 'I build systems where business rules, product decisions, and execution quality stay aligned.',
      pt: 'Eu construo sistemas em que regras de negócio, decisões de produto e qualidade de execução permanecem alinhadas.',
    },
    summary: {
      en: 'The strongest work usually happens where architecture is not abstract theory but an operating constraint. That is the space I prefer to work in.',
      pt: 'O melhor trabalho geralmente acontece quando arquitetura não é teoria abstrata, mas uma restrição operacional real. É nesse espaço que eu prefiro atuar.',
    },
  },
  lead: {
    en: 'My edge is not just shipping features. It is structuring software so that complexity remains understandable, data remains trustworthy, and the product still feels intentional.',
    pt: 'Meu diferencial não é apenas entregar funcionalidades. É estruturar software para que a complexidade continue compreensível, os dados continuem confiáveis e o produto mantenha intencionalidade.',
  },
  body: {
    en: [
      'I work across architecture, backend, data-heavy flows, and frontend systems with the same goal: reduce operational friction without reducing rigor.',
      'That means modeling domains carefully, treating validation as part of product quality, and using interfaces as instruments of clarity rather than decoration.',
    ],
    pt: [
      'Eu atuo entre arquitetura, backend, fluxos intensivos em dados e sistemas frontend com o mesmo objetivo: reduzir fricção operacional sem reduzir rigor.',
      'Isso significa modelar domínio com cuidado, tratar validação como parte da qualidade do produto e usar interfaces como instrumentos de clareza, não de ornamentação.',
    ],
  },
  principles: [
    {
      title: {
        en: 'Traceability over guesswork',
        pt: 'Rastreabilidade acima de suposição',
      },
      description: {
        en: 'Critical flows should explain themselves through explicit modeling, state history, and dependable system contracts.',
        pt: 'Fluxos críticos devem se explicar por modelagem explícita, histórico de estados e contratos de sistema confiáveis.',
      },
    },
    {
      title: {
        en: 'Performance with narrative clarity',
        pt: 'Performance com clareza narrativa',
      },
      description: {
        en: 'Scale only matters when the product experience and operational understanding remain coherent under load.',
        pt: 'Escala só importa quando experiência de produto e entendimento operacional permanecem coerentes sob carga.',
      },
    },
    {
      title: {
        en: 'Design as engineering signal',
        pt: 'Design como sinal de engenharia',
      },
      description: {
        en: 'Interfaces should communicate confidence, order, and decision quality. The visual layer is part of the system story.',
        pt: 'Interfaces devem comunicar confiança, ordem e qualidade de decisão. A camada visual faz parte da narrativa do sistema.',
      },
    },
  ],
  profileCardTitle: {
    en: 'Operator profile',
    pt: 'Perfil de atuação',
  },
  profileCardBody: {
    en: 'Working across product-minded engineering, system architecture, and frontend craftsmanship with an emphasis on auditable flows.',
    pt: 'Atuando entre engenharia orientada a produto, arquitetura de sistemas e frontend refinado, com ênfase em fluxos auditáveis.',
  },
  profileMeta: [
    {
      label: { en: 'Location', pt: 'Localização' },
      value: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    },
    {
      label: { en: 'Email', pt: 'E-mail' },
      value: { en: 'joaopdias.dev@gmail.com', pt: 'joaopdias.dev@gmail.com' },
      href: 'mailto:joaopdias.dev@gmail.com',
    },
    {
      label: { en: 'Availability', pt: 'Disponibilidade' },
      value: {
        en: 'Open to engineering roles with architectural depth.',
        pt: 'Aberto a posições de engenharia com profundidade arquitetural.',
      },
    },
  ],
} as const;

export const FEATURED_WORK_CONTENT: FeaturedWorkContent = {
  heading: {
    eyebrow: {
      en: 'Featured public work',
      pt: 'Cases públicos em destaque',
    },
    title: {
      en: 'Featured projects',
      pt: 'Projetos em destaque',
    },
    summary: {
      en: 'The homepage shows only the essential signal: what each project is, why it matters, and where to open the full breakdown.',
      pt: 'A home mostra apenas o sinal essencial: o que cada projeto é, por que ele importa e onde abrir a análise completa.',
    },
  },
  ctaLabel: {
    en: 'Open case study',
    pt: 'Abrir case study',
  },
  ctaSecondaryLabel: {
    en: 'Live project',
    pt: 'Projeto online',
  },
} as const;

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: 'vox',
    theme: 'vox',
    name: {
      en: 'VOX Electoral System',
      pt: 'VOX Sistema Eleitoral',
    },
    category: {
      en: 'Auditability and voting integrity',
      pt: 'Auditabilidade e integridade eleitoral',
    },
    year: '2025',
    role: {
      en: 'Product architecture, backend design, audit-oriented modeling',
      pt: 'Arquitetura de produto, desenho de backend e modelagem orientada à auditoria',
    },
    timeline: {
      en: 'Independent public case',
      pt: 'Case público independente',
    },
    teaser: {
      en: 'An electoral platform designed to make trust a system property rather than a promise.',
      pt: 'Uma plataforma eleitoral projetada para tornar confiança uma propriedade do sistema, não apenas uma promessa.',
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
    stack: ['Angular', 'NestJS', 'PostgreSQL'],
    metrics: [
      {
        value: '500+',
        label: { en: 'Concurrent users', pt: 'Usuários simultâneos' },
      },
      {
        value: '100%',
        label: { en: 'Vote trail coverage', pt: 'Cobertura de trilha de voto' },
      },
      {
        value: '0',
        label: { en: 'Ambiguous flow states', pt: 'Estados ambíguos no fluxo' },
      },
    ],
    highlights: {
      en: [
        'Domain model designed around elections, ballots, sessions, and validation states.',
        'Transaction rules and audit trails treated as first-class system behavior.',
        'Frontend flow kept explicit so users always understood progress and finality.',
      ],
      pt: [
        'Modelo de domínio estruturado em torno de eleições, cédulas, sessões e estados de validação.',
        'Regras transacionais e trilhas de auditoria tratadas como comportamento de sistema de primeira classe.',
        'Fluxo dep frontend mantido explícito para que o usuário sempre entendesse progresso e finalização.',
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
    links: [
      {
        label: { en: 'Open live project', pt: 'Abrir projeto online' },
        href: 'https://v-o-x.vercel.app',
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
    slug: 'etecfy',
    theme: 'etecfy',
    name: {
      en: 'Etecfy',
      pt: 'Etecfy',
    },
    category: {
      en: 'Music Streaming',
      pt: 'Streaming de Musicas',
    },
    year: '2025',
    role: {
      en: 'Architecture, product structure, media-oriented frontend',
      pt: 'Arquitetura, estrutura de produto e frontend orientado à mídia',
    },
    timeline: {
      en: 'Independent public case',
      pt: 'Case público independente',
    },
    teaser: {
      en: 'A music platform shaped around catalog growth, fast discovery, and a launch experience built to absorb attention.',
      pt: 'Uma plataforma de música moldada em torno de crescimento de catálogo, descoberta rápida e uma experiência de lançamento preparada para absorver atenção.',
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
    stack: ['Android Development', 'Web Audio API', 'MongoDB'],
    metrics: [
      {
        value: '1.3K',
        label: { en: 'Launch accesses in 6h', pt: 'Acessos em 6h de lançamento' },
      },
      {
        value: 'Fast',
        label: { en: 'Catalog discovery', pt: 'Descoberta de catálogo' },
      },
      {
        value: 'Ready',
        label: { en: 'Growth-oriented model', pt: 'Modelo pronto para crescimento' },
      },
    ],
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
          en: 'Use stream to a fluid litening',
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
    links: [
      {
        label: { en: 'Open live project', pt: 'Abrir projeto online' },
        href: 'https://etecfy.vercel.app',
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

export const EXPERIENCE_HEADING = {
  eyebrow: { en: 'Professional experience', pt: 'Experiência profissional' },
  title: {
    en: 'High-responsibility work across startup environments, financial flows, and data-heavy operations.',
    pt: 'Atuação de alta responsabilidade em ambientes de startup, fluxos financeiros e operações intensivas em dados.',
  },
  summary: {
    en: 'The public work shows craft. The professional track record shows ownership under real constraints.',
    pt: 'Os cases públicos mostram craft. A trajetória profissional mostra ownership sob restrições reais.',
  },
} as const;

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'ufind',
    role: { en: 'Mid-level Developer', pt: 'Desenvolvedor Pleno' },
    company: 'UFind',
    period: { en: 'Jun 2025 — Present', pt: 'jun. 2025 — atual' },
    summary: {
      en: 'Lead technical owner for the architecture and implementation of a data-driven AI agent, structuring ingestion and processing flows for high-volume information.',
      pt: 'Principal responsável técnico pela arquitetura e implementação de um agente de IA orientado a dados, estruturando fluxos de ingestão e processamento para grandes volumes de informação.',
    },
    highlights: {
      en: [
        'Defined architecture standards and integration boundaries.',
        'Structured flows for more than 16GB of data.',
        'Preserved traceability and transactional history across the system.',
      ],
      pt: [
        'Defini padrões arquiteturais e limites de integração.',
        'Estruturei fluxos para mais de 16GB de dados.',
        'Preservei rastreabilidade e histórico transacional ao longo do sistema.',
      ],
    },
  },
  {
    id: 'representa-junior',
    role: { en: 'Junior Developer', pt: 'Desenvolvedor Júnior' },
    company: 'Representa Online',
    period: { en: 'Sep 2024 — May 2025', pt: 'set. 2024 — maio 2025' },
    summary: {
      en: 'Led the conception and implementation of a billing system for an insurance brokerage with multiple financial layouts and critical validation rules.',
      pt: 'Liderei a concepção e implementação de um sistema de faturamento para corretora com múltiplos layouts financeiros e regras críticas de validação.',
    },
    highlights: {
      en: [
        'Processed files with more than 1M beneficiaries.',
        'Reduced manual routines from days to minutes.',
        'Designed the architecture for layout variation and financial rules.',
      ],
      pt: [
        'Processei arquivos com mais de 200 mil beneficiários.',
        'Reduzi rotinas manuais de dias para minutos.',
        'Desenhei a arquitetura para variação de layouts e regras financeiras.',
      ],
    },
  },
  {
    id: 'representa-intern',
    role: { en: 'Software Development Intern', pt: 'Estagiário em Desenvolvimento' },
    company: 'Representa Online',
    period: { en: 'Jun 2024 — Aug 2024', pt: 'jun. 2024 — ago. 2024' },
    summary: {
      en: 'Worked in the platform core for product and service catalog behavior, performance, and resilience under large result sets.',
      pt: 'Atuei no núcleo da plataforma para comportamento de catálogo de produtos e serviços, performance e resiliência sob grandes conjuntos de resultados.',
    },
    highlights: {
      en: [
        'Improved query, filter, and pagination performance.',
        'Implemented rule-based access control and fault tolerance mechanisms.',
        'Raised operational robustness in a growing platform core.',
      ],
      pt: [
        'Melhorei performance de consultas, filtros e paginação.',
        'Implementei controle de acesso por regras de negócio e mecanismos de tolerância a falhas.',
        'Elevei a robustez operacional em um núcleo de plataforma em crescimento.',
      ],
    },
  },
] as const;

export const CAPABILITY_HEADING = {
  eyebrow: { en: 'Capabilities', pt: 'Capacidades' },
  title: {
    en: 'What I bring to systems',
    pt: 'O que eu levo para sistemas',
  },
  summary: {
    en: 'Instead of listing tools in isolation, this section frames the kinds of technical leverage I am most useful for.',
    pt: 'Em vez de listar ferramentas isoladamente, esta seção enquadra os tipos de alavanca técnica em que sou mais útil.',
  },
} as const;

export const CAPABILITY_CLUSTERS: readonly CapabilityCluster[] = [
  {
    id: 'systems',
    title: {
      en: 'System architecture',
      pt: 'Arquitetura de sistemas',
    },
    summary: {
      en: 'Designing service boundaries, domain models, and validation-heavy flows that stay understandable over time.',
      pt: 'Desenho de fronteiras de serviço, modelos de domínio e fluxos intensivos em validação que permanecem compreensíveis ao longo do tempo.',
    },
    items: {
      en: [
        'Domain modeling for critical business rules',
        'Transactional integrity and trace history',
        'Service contracts shaped for maintainability',
      ],
      pt: [
        'Modelagem de domínio para regras de negócio críticas',
        'Integridade transacional e histórico de rastreabilidade',
        'Contratos de serviço moldados para manutenção',
      ],
    },
    accentLabel: {
      en: 'Architecture',
      pt: 'Arquitetura',
    },
  },
  {
    id: 'delivery',
    title: {
      en: 'Execution under real constraints',
      pt: 'Execução sob restrições reais',
    },
    summary: {
      en: 'Turning operational bottlenecks into software products with measurable impact and better decision quality.',
      pt: 'Transformar gargalos operacionais em produtos de software com impacto mensurável e melhor qualidade de decisão.',
    },
    items: {
      en: [
        'High-volume ingestion and data processing',
        'Financial rules, layouts, and operational reduction',
        'Applied AI and automation with clear system boundaries',
      ],
      pt: [
        'Ingestão e processamento de alto volume',
        'Regras financeiras, layouts e redução operacional',
        'IA aplicada e automação com limites de sistema claros',
      ],
    },
    accentLabel: {
      en: 'Execution',
      pt: 'Execução',
    },
  },
  {
    id: 'stack',
    title: {
      en: 'Frontend and platform craft',
      pt: 'Refinamento de frontend e plataforma',
    },
    summary: {
      en: 'Building interfaces and technical foundations that feel intentional, fast, and aligned with the architecture beneath them.',
      pt: 'Construção de interfaces e fundações técnicas que pareçam intencionais, rápidas e alinhadas com a arquitetura que as sustenta.',
    },
    items: {
      en: [
        'Angular, Next.js, and React Native',
        'NestJS, Java, Golang, PostgreSQL, MongoDB, Redis',
        'Docker, AWS, GCP, and Continuos Integration and Deplyoment',
      ],
      pt: [
        'Angular, Next.js e React Native',
        'NestJS, Java, Golang, PostgreSQL, MongoDB, Redis',
        'Docker, AWS, GCP e Integração e Implentação Contínua',
      ],
    },
    accentLabel: {
      en: 'Craft',
      pt: 'Craft',
    },
  },
] as const;

export const CREDENTIALS_CONTENT: CredentialsContent = {
  heading: {
    eyebrow: { en: 'Credentials', pt: 'Credenciais' },
    title: {
      en: 'Formal training and certifications.',
      pt: 'Formação e certificados.',
    },
    summary: {
      en: 'Education and certifications stay compact here by design. The priority is to reinforce trust, not to replace proof.',
      pt: 'Formação e certificações permanecem compactas aqui por design. A prioridade é reforçar confiança, não substituir prova.',
    },
  },
  education: [
    {
      title: {
        en: 'Multiplatform Software Development',
        pt: 'Desenvolvimento de Software Multiplataforma',
      },
      subtitle: {
        en: 'Fatec de Osasco',
        pt: 'Fatec de Osasco',
      },
      meta: {
        en: 'Feb 2026 — Dec 2028',
        pt: 'fev. 2026 — dez. 2028',
      },
    },
    {
      title: {
        en: 'Systems Development',
        pt: 'Desenvolvimento de Sistemas',
      },
      subtitle: {
        en: 'Etec de Guarulhos',
        pt: 'Etec de Guarulhos',
      },
      meta: {
        en: 'Feb 2023 — Dec 2025',
        pt: 'fev. 2023 — dez. 2025',
      },
    },
  ],
  certificationsLabel: { en: 'Certifications', pt: 'Certificações' },
  certifications: {
    en: [
      'MongoDB - Financial Services Sector Knowledge',
      'MongoDB - Advanced Data Modeling',
      'EDB - Distributed Postgres',
    ],
    pt: [
      'MongoDB - Conhecimento do Setor de Serviços Financeiros',
      'MongoDB - Modelagem Avançada de Dados',
      'EDB - Postgres Distribuído',
    ],
  },
  languagesLabel: { en: 'Languages', pt: 'Idiomas' },
  languages: {
    en: ['Portuguese — Native', 'English — Advanced', 'French — Basic'],
    pt: ['Português — Nativo', 'Inglês — Avançado', 'Francês — Básico'],
  },
};

export const CONTACT_CONTENT: ContactContent = {
  heading: {
    eyebrow: { en: 'Contact', pt: 'Contato' },
    title: {
      en: 'Let’s talk.',
      pt: 'Vamos conversar.',
    },
    summary: {
      en: 'The best opportunities are usually the ones where architecture, product thinking, and implementation quality are all expected to matter.',
      pt: 'As melhores oportunidades geralmente são aquelas em que arquitetura, visão de produto e qualidade de implementação realmente importam.',
    },
  },
  availability: {
    en: 'Open to high-impact engineering roles, product-minded teams, and complex software challenges.',
    pt: 'Aberto a posições de engenharia de alto impacto, times orientados a produto e desafios complexos de software.',
  },
  links: [
    {
      label: { en: 'Email', pt: 'E-mail' },
      value: { en: 'joaopdias.dev@gmail.com', pt: 'joaopdias.dev@gmail.com' },
      href: 'mailto:joaopdias.dev@gmail.com',
    },
    {
      label: { en: 'LinkedIn', pt: 'LinkedIn' },
      value: { en: 'linkedin.com/in/joaopdias-dev', pt: 'linkedin.com/in/joaopdias-dev' },
      href: 'https://www.linkedin.com/in/joaopdias-dev/',
    },
    {
      label: { en: 'GitHub', pt: 'GitHub' },
      value: { en: 'github.com/Joaopdiasventura', pt: 'github.com/Joaopdiasventura' },
      href: 'https://github.com/Joaopdiasventura',
    },
  ],
  baseItems: [
    {
      label: { en: 'Location', pt: 'Localização' },
      value: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    },
    {
      label: { en: 'Phone', pt: 'Telefone' },
      value: { en: '+55 (11) 98655-3558', pt: '+55 (11) 98655-3558' },
    },
  ],
  formName: { en: 'Name', pt: 'Nome' },
  formEmail: { en: 'Email', pt: 'E-mail' },
  formMessage: { en: 'Message', pt: 'Mensagem' },
  formSubmit: { en: 'Send message', pt: 'Enviar mensagem' },
  formSending: { en: 'Sending...', pt: 'Enviando...' },
  formSent: { en: 'Message sent.', pt: 'Mensagem enviada.' },
  formError: {
    en: 'Unable to send the message right now. Please try again in a moment.',
    pt: 'Não foi possível enviar a mensagem agora. Tente novamente em instantes.',
  },
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    href: 'https://github.com/Joaopdiasventura',
    label: { en: 'GitHub', pt: 'GitHub' },
    icon: 'github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/joaopdias-dev/',
    label: { en: 'LinkedIn', pt: 'LinkedIn' },
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'mailto:joaopdias.dev@gmail.com',
    label: { en: 'Email', pt: 'E-mail' },
    icon: 'mail',
  },
] as const;
