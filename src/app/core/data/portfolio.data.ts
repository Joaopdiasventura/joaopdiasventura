import {
  ContactContent,
  CredibilityContent,
  ExperienceEntry,
  FeaturedProjectsContent,
  HeroContent,
  ImpactMetric,
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
    en: 'Portfolio of João Paulo Dias Ventura focused on distributed systems, transactional consistency, and data-intensive architecture.',
    pt: 'Portfólio de João Paulo Dias Ventura focado em sistemas distribuídos, consistência transacional e arquitetura orientada a dados.',
  },
};

export const NAV_ITEMS: readonly NavItem[] = [
  {
    id: 'about',
    label: { en: 'About', pt: 'Sobre' },
  },
  {
    id: 'projects',
    label: { en: 'Projects', pt: 'Projetos' },
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
    en: 'Auditable systems. Clear execution.',
    pt: 'Sistemas auditáveis. Execução clara.',
  },
  titleLines: {
    en: ['João Paulo', 'Dias Ventura'],
    pt: ['João Paulo', 'Dias Ventura'],
  },
  summary: {
    en: 'I build distributed and data-intensive systems with transactional consistency, high-throughput processing, and resilient architecture.',
    pt: 'Construo sistemas distribuídos e orientados a dados com consistência transacional, alto volume de processamento e arquitetura resiliente.',
  },
  ctas: [
    {
      id: 'projects',
      kind: 'primary',
      label: { en: 'View projects', pt: 'Ver projetos' },
    },
    {
      id: 'contact',
      kind: 'secondary',
      label: { en: 'Get in touch', pt: 'Entrar em contato' },
    },
    {
      id: 'cv',
      kind: 'ghost',
      label: { en: 'View CV', pt: 'Ver currículo' },
    },
  ],
} as const;

export const IMPACT_METRICS: readonly ImpactMetric[] = [
  {
    id: 'data',
    value: '+16GB',
    label: {
      en: 'Data processed',
      pt: 'Dados processados',
    },
  },
  {
    id: 'beneficiaries',
    value: 'R$1M',
    label: {
      en: 'Monthly billed volume',
      pt: 'Volume mensal faturado',
    },
  },
  {
    id: 'traffic',
    value: '+500',
    label: {
      en: 'Concurrent users',
      pt: 'Usuários simultâneos',
    },
  },
  {
    id: 'ggconcurrent',
    value: '1.23 GiB/s',
    label: {
      en: 'GGConcurrent throughput',
      pt: 'Throughput do GGConcurrent',
    },
  },
] as const;

export const CREDIBILITY_CONTENT: CredibilityContent = {
  heading: {
    eyebrow: {
      en: 'Profile',
      pt: 'Perfil',
    },
    title: {
      en: 'Architecture, data flow, and delivery without noise.',
      pt: 'Arquitetura, fluxo de dados e entrega sem ruído.',
    },
    summary: {
      en: 'Enough context to understand how I work.',
      pt: 'Contexto suficiente para entender como eu trabalho.',
    },
  },
  statement: {
    en: 'I design production-critical systems with explicit rules, resilient asynchronous flows, and traceable operations at scale.',
    pt: 'Desenho sistemas críticos em produção com regras explícitas, fluxos assíncronos resilientes e operações rastreáveis em escala.',
  },
  groups: [
    {
      title: {
        en: 'Specialization',
        pt: 'Especialização',
      },
      items: {
        en: [
          'Event-driven architecture',
          'Distributed systems and asynchronous communication',
          'Concurrency control and data consistency',
        ],
        pt: [
          'Arquitetura orientada a eventos',
          'Sistemas distribuídos e comunicação assíncrona',
          'Controle de concorrência e consistência de dados',
        ],
      },
    },
    {
      title: {
        en: 'Focus',
        pt: 'Foco',
      },
      items: {
        en: [
          'Financial systems and transactional processing',
          'Large-scale data processing with streams and pipelines',
          'High-performance interfaces with hybrid rendering and LCP/TTFB optimization',
        ],
        pt: [
          'Sistemas financeiros e processamento transacional',
          'Processamento de grandes volumes de dados com streams e pipelines',
          'Interfaces de alta performance com rendering híbrido e otimização de LCP/TTFB',
        ],
      },
    },
    {
      title: {
        en: 'Tech stack',
        pt: 'Stack técnica',
      },
      items: {
        en: [
          'Node.js and Golang',
          'Angular with SSR, hydration, and lazy loading',
          'PostgreSQL, MongoDB, RabbitMQ, and Redis',
          'AWS and CI/CD',
        ],
        pt: [
          'Node.js e Golang',
          'Angular com SSR, hydration e lazy loading',
          'PostgreSQL, MongoDB, RabbitMQ e Redis',
          'AWS e CI/CD',
        ],
      },
    },
    {
      title: {
        en: 'Credentials',
        pt: 'Credenciais',
      },
      items: {
        en: [
          'Fatec Osasco - Multiplatform Software Development (2026-2028)',
          'Etec Guarulhos - Systems Development (2023-2025)',
          'MongoDB - Advanced Data Modeling and Financial Knowledge',
          'AWS - Event-Driven Architecture Modeling',
        ],
        pt: [
          'Fatec Osasco - Desenvolvimento de Software Multiplataforma (2026-2028)',
          'Etec Guarulhos - Desenvolvimento de Sistemas (2023-2025)',
          'MongoDB - Modelagem Avançada de Dados e Conhecimento Financeiro',
          'EDB - Postgres Distribuido1',
        ],
      },
    },
  ],
  facts: [
    {
      label: { en: 'Location', pt: 'Localização' },
      value: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    },
    {
      label: { en: 'Email', pt: 'Email' },
      value: { en: 'joaopdias.dev@gmail.com', pt: 'joaopdias.dev@gmail.com' },
      href: 'mailto:joaopdias.dev@gmail.com',
    },
    {
      label: { en: 'Availability', pt: 'Disponibilidade' },
      value: {
        en: 'Open to engineering roles with architecture ownership.',
        pt: 'Aberto a funções de engenharia com responsabilidade arquitetural.',
      },
    },
  ],
} as const;

export const FEATURED_PROJECTS_CONTENT: FeaturedProjectsContent = {
  ctaLabel: {
    en: 'Open case study',
    pt: 'Abrir estudo de caso',
  },
} as const;

export const EXPERIENCE_HEADING = {
  eyebrow: { en: 'Experience', pt: 'Experiência' },
  title: {
    en: 'Delivery in startup, financial, and data-heavy systems.',
    pt: 'Entrega em startup, financeiro e sistemas intensivos em dados.',
  },
  summary: {
    en: 'A short record of scope, constraints, and impact.',
    pt: 'Um recorte curto de escopo, restrição e impacto.',
  },
} as const;

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'ufind',
    role: { en: 'Mid-level Developer', pt: 'Desenvolvedor Pleno' },
    company: 'uFind Tecnologia',
    period: { en: 'Jun 2025 - Present', pt: 'jun. 2025 - atual' },
    summary: {
      en: 'Led the design of an insurance billing workflow with high-volume monthly processing, traceability, and transactional consistency.',
      pt: 'Liderei o desenho de um fluxo de faturamento para corretora de seguros com alto volume mensal, rastreabilidade e consistência transacional.',
    },
    highlights: {
      en: [
        'Built streams-based ingestion for multiple financial layouts using the Strategy Pattern and critical validations',
        'Reduced manual work from days to minutes and helped evolve AWS standards across S3, ECS, and IAM',
      ],
      pt: [
        'Desenvolvi ingestão com streams para múltiplos layouts financeiros usando Strategy Pattern e validações críticas',
        'Reduzi operações manuais de dias para minutos e atuei na evolução de padrões AWS com S3, ECS e IAM',
      ],
    },
  },
  {
    id: 'representa-junior',
    role: { en: 'Junior Developer', pt: 'Desenvolvedor Júnior' },
    company: 'uFind Tecnologia',
    period: { en: 'Sep 2024 - May 2025', pt: 'set. 2024 - maio 2025' },
    summary: {
      en: 'Designed AI-driven pipelines for more than 16 GB of television media data and real-time communication integrated with the OpenAI API.',
      pt: 'Projetei pipelines orientados a IA para mais de 16 GB de dados de mídia televisiva e comunicação em tempo real integrada à API da OpenAI.',
    },
    highlights: {
      en: [
        'Structured event-driven Node.js pipelines with flow control, fault isolation, and distributed processing',
        'Stored processed media data in a vector store and delivered bidirectional communication over WebSocket',
      ],
      pt: [
        'Estruturei pipelines em Node.js com arquitetura orientada a eventos, controle de fluxo, isolamento de falhas e processamento distribuído',
        'Armazenei dados processados em vector store e entreguei comunicação bidirecional via WebSocket',
      ],
    },
  },
  {
    id: 'representa-intern',
    role: {
      en: 'Systems Development Intern',
      pt: 'Estagiário em Desenvolvimento de Sistemas',
    },
    company: 'uFind Tecnologia',
    period: { en: 'Jun 2024 - Aug 2024', pt: 'jun. 2024 - ago. 2024' },
    summary: {
      en: 'Built catalog features with geospatial search, SSR/SSG delivery, and authentication flows tuned for performance and scale.',
      pt: 'Desenvolvi features de catálogo com busca geoespacial, entrega SSR/SSG e autenticação orientadas a performance e escala.',
    },
    highlights: {
      en: [
        'Implemented proximity search with the Haversine formula and optimized queries for scalable catalog discovery',
        'Structured JWT and Google OAuth2 auth plus SSR/SSG pages with lazy loading, asset optimization, and rendering control',
      ],
      pt: [
        'Implementei busca por proximidade com a fórmula de Haversine e consultas otimizadas para descoberta escalável no catálogo',
        'Estruturei autenticação com JWT e Google OAuth2, além de páginas SSR/SSG com lazy loading, otimização de assets e controle de renderização',
      ],
    },
  },
] as const;

export const CONTACT_CONTENT: ContactContent = {
  heading: {
    eyebrow: { en: 'Contact', pt: 'Contato' },
    title: {
      en: 'Start a conversation.',
      pt: 'Inicie uma conversa.',
    },
    summary: {
      en: 'Open to engineering roles with architecture ownership and complex product problems.',
      pt: 'Aberto a funções de engenharia com responsabilidade arquitetural e problemas complexos de produto.',
    },
  },
  details: [
    {
      label: { en: 'Email', pt: 'Email' },
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
    {
      label: { en: 'Location', pt: 'Localização' },
      value: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    },
    {
      label: { en: 'Phone', pt: 'Telefone' },
      value: { en: '+55 (11) 98655-3558', pt: '+55 (11) 98655-3558' },
    },
    {
      label: { en: 'Availability', pt: 'Disponibilidade' },
      value: {
        en: 'Open to engineering roles with architecture ownership.',
        pt: 'Aberto a funções de engenharia com responsabilidade arquitetural.',
      },
    },
  ],
  formName: { en: 'Name', pt: 'Nome' },
  formEmail: { en: 'Email', pt: 'Email' },
  formMessage: { en: 'Message', pt: 'Mensagem' },
  formSubmit: { en: 'Send message', pt: 'Enviar mensagem' },
  formSending: { en: 'Sending...', pt: 'Enviando...' },
  formSent: { en: 'Message sent.', pt: 'Mensagem enviada.' },
  formError: {
    en: 'Unable to send the message now. Please try again shortly.',
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
    label: { en: 'Email', pt: 'Email' },
    icon: 'mail',
  },
] as const;
