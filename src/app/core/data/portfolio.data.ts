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
    en: 'Portfolio of João Paulo Dias Ventura focused on distributed systems, financial workflows, and resilient data-intensive architecture.',
    pt: 'Portfólio de João Paulo Dias Ventura focado em sistemas distribuídos, fluxos financeiros e arquitetura resiliente orientada a dados.',
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
    en: 'Distributed systems. Transactional rigor.',
    pt: 'Sistemas distribuídos. Rigor transacional.',
  },
  titleLines: {
    en: ['João Paulo', 'Dias Ventura'],
    pt: ['João Paulo', 'Dias Ventura'],
  },
  summary: {
    en: 'Software engineer focused on distributed systems and data-intensive applications, building financial and operational flows with transactional consistency, event-driven communication, and resilient high-volume processing.',
    pt: 'Engenheiro de software focado em sistemas distribuídos e aplicações orientadas a dados, construindo fluxos financeiros e operacionais com consistência transacional, comunicação orientada a eventos e processamento resiliente de alto volume.',
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
      en: 'Television media data processed',
      pt: 'Dados de mídia televisiva processados',
    },
  },
  {
    id: 'beneficiaries',
    value: 'R$1M+',
    label: {
      en: 'Monthly billed volume automated',
      pt: 'Volume mensal faturado automatizado',
    },
  },
  {
    id: 'ggconcurrent',
    value: '1.23 GiB/s',
    label: {
      en: 'Compression throughput measured',
      pt: 'Throughput de compressão medido',
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
      en: 'Distributed systems, financial flows, and delivery shaped by production constraints.',
      pt: 'Sistemas distribuídos, fluxos financeiros e entrega moldada por restrições reais de produção.',
    },
    summary: {
      en: 'The profile behind the architecture decisions, asynchronous flows, and performance trade-offs.',
      pt: 'O perfil por trás das decisões arquiteturais, dos fluxos assíncronos e dos trade-offs de performance.',
    },
  },
  statement: {
    en: 'Software engineer with hands-on full-stack delivery across backend, frontend, cloud, and messaging layers, focused on systems where transactional consistency, asynchronous processing, and operational traceability are part of the architecture from day one.',
    pt: 'Engenheiro de software com atuação full stack em backend, frontend, cloud e mensageria, focado em sistemas em que consistência transacional, processamento assíncrono e rastreabilidade operacional fazem parte da arquitetura desde o primeiro dia.',
  },
  groups: [
    {
      title: {
        en: 'Specialization',
        pt: 'Especialização',
      },
      items: {
        en: [
          'Event-driven architecture and asynchronous communication',
          'Distributed systems, concurrency control, and idempotent flows',
          'Transactional consistency for financial and critical business operations',
        ],
        pt: [
          'Arquitetura orientada a eventos e comunicação assíncrona',
          'Sistemas distribuídos, controle de concorrência e fluxos idempotentes',
          'Consistência transacional para operações financeiras e fluxos críticos de negócio',
        ],
      },
    },
    {
      title: {
        en: 'Systems focus',
        pt: 'Foco de atuação',
      },
      items: {
        en: [
          'Financial systems, billing workflows, and transactional processing',
          'Streaming ingestion, data pipelines, and distributed processing',
          'Angular SSR, hydration, lazy loading, and frontend performance optimization',
        ],
        pt: [
          'Sistemas financeiros, fluxos de faturamento e processamento transacional',
          'Ingestão em stream, pipelines de dados e processamento distribuído',
          'Angular SSR, hydration, lazy loading e otimização de performance no frontend',
        ],
      },
    },
    {
      title: {
        en: 'Technical stack',
        pt: 'Stack técnica',
      },
      items: {
        en: [
          'Node.js, Java, and Go for backend and runtime engineering',
          'Angular with SSR, hydration, lazy loading, and route-level performance optimization',
          'PostgreSQL, MongoDB, RabbitMQ, and Redis across storage and messaging',
          'AWS, CI/CD, and infrastructure standards with S3, ECS, and IAM',
        ],
        pt: [
          'Node.js, Java e Go para backend e engenharia de runtime',
          'Angular para interfaces com SSR e performance orientada por rotas',
          'PostgreSQL, MongoDB, RabbitMQ e Redis entre persistência e mensageria',
          'AWS, CI/CD e padrões de infraestrutura com S3, ECS e IAM',
        ],
      },
    },
    {
      title: {
        en: 'Education and certificates',
        pt: 'Formação e certificados',
      },
      items: {
        en: [
          'Fatec Osasco - Multiplatform Software Development (2026-2028)',
          'Etec Guarulhos - Systems Development (2023-2025)',
          'AWS - Event-Driven Architecture Modeling and Deploying Microservices on Amazon EKS',
          'MongoDB - Financial Services Industry Knowledge',
        ],
        pt: [
          'Fatec Osasco - Desenvolvimento de Software Multiplataforma (2026-2028)',
          'Etec Guarulhos - Desenvolvimento de Sistemas (2023-2025)',
          'AWS - Modelagem de arquiteturas orientadas a eventos e implantação de microsserviços no Amazon EKS',
          'MongoDB - Conhecimento do setor de serviços financeiros',
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
      label: { en: 'Language', pt: 'Idioma' },
      value: { en: 'Advanced English', pt: 'Inglês avançado' },
    },
    {
      label: { en: 'Availability', pt: 'Disponibilidade' },
      value: {
        en: 'Open to engineering roles involving distributed systems, critical backend flows, and architectural responsibility.',
        pt: 'Aberto a funções de engenharia com sistemas distribuídos, fluxos críticos de backend e responsabilidade arquitetural.',
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
    en: 'Progressive delivery across frontend performance, data pipelines, and financial processing.',
    pt: 'Evolução prática entre performance de frontend, pipelines de dados e processamento financeiro.',
  },
  summary: {
    en: 'Intern to mid-level growth in production systems, with increasing scope in architecture, resilience, and automation.',
    pt: 'Crescimento de estagiário a pleno em sistemas de produção, com aumento de escopo em arquitetura, resiliência e automação.',
  },
} as const;

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'ufind',
    role: { en: 'Mid-level Developer', pt: 'Desenvolvedor Pleno' },
    company: 'uFind Tecnologia',
    period: { en: 'Jun 2025 - Present', pt: 'jun. 2025 - atual' },
    summary: {
      en: 'Leading the implementation of an insurance billing workflow that ingests heterogeneous financial files, reconciles transactional state, and automates monthly processing above R$1M with end-to-end traceability.',
      pt: 'Conduzo a implementação de um fluxo de faturamento para uma corretora de seguros, ingerindo arquivos financeiros heterogêneos, conciliando estado transacional e automatizando mais de R$ 1 milhão mensais com rastreabilidade ponta a ponta.',
    },
    highlights: {
      en: [
        'Designed stream-based ingestion pipelines for multiple financial layouts with Strategy Pattern, critical validations, and consistency guarantees across the full billing flow',
        'Reduced manual processing from days to minutes and helped evolve AWS architecture standards around S3, ECS, and IAM with high autonomy',
      ],
      pt: [
        'Projetei pipelines de ingestão em stream para múltiplos layouts financeiros com Strategy Pattern, validações críticas e garantias de consistência em todo o fluxo de faturamento',
        'Reduzi o processamento manual de dias para minutos e atuei com alta autonomia na evolução de padrões AWS em S3, ECS e IAM',
      ],
    },
  },
  {
    id: 'representa-junior',
    role: { en: 'Junior Developer', pt: 'Desenvolvedor Júnior' },
    company: 'Representa Online',
    period: { en: 'Sep 2024 - May 2025', pt: 'set. 2024 - maio 2025' },
    summary: {
      en: 'Designed AI-oriented data pipelines for more than 16 GB of television media data, structuring ingestion, transformation, and vector-store storage for model consumption.',
      pt: 'Projetei pipelines orientados a IA para mais de 16 GB de dados de mídia televisiva, estruturando ingestão, transformação e armazenamento vetorial para consumo por modelos.',
    },
    highlights: {
      en: [
        'Structured event-driven Node.js pipelines with flow control, fault isolation, and distributed processing for ingestion and transformation workloads',
        'Developed bidirectional real-time communication over WebSocket integrated with the OpenAI API, keeping asynchronous coordination explicit across long-running interactions',
      ],
      pt: [
        'Estruturei pipelines em Node.js com arquitetura orientada a eventos, controle de fluxo, isolamento de falhas e processamento distribuído para cargas de ingestão e transformação',
        'Desenvolvi comunicação bidirecional em tempo real via WebSocket integrada à API da OpenAI, mantendo a coordenação assíncrona explícita em operações de longa duração',
      ],
    },
  },
  {
    id: 'representa-intern',
    role: {
      en: 'Systems Development Intern',
      pt: 'Estagiário em Desenvolvimento de Sistemas',
    },
    company: 'Representa Online',
    period: { en: 'Jun 2024 - Aug 2024', pt: 'jun. 2024 - ago. 2024' },
    summary: {
      en: 'Built catalog and authentication features focused on scalable discovery, SSR/SSG delivery, and frontend performance for content-heavy experiences.',
      pt: 'Desenvolvi funcionalidades de catálogo e autenticação com foco em descoberta escalável, entrega SSR/SSG e performance de frontend para experiências intensivas em conteúdo.',
    },
    highlights: {
      en: [
        'Implemented proximity search with the Haversine formula and optimized queries for scalable catalog discovery',
        'Implemented JWT and Google OAuth2 authentication plus SSR/SSG pages with lazy loading, asset optimization, and render control to improve TTFB and LCP',
      ],
      pt: [
        'Implementei busca por proximidade com a fórmula de Haversine e consultas otimizadas para descoberta escalável no catálogo',
        'Implementei autenticação com JWT e Google OAuth2, além de páginas SSR/SSG com lazy loading, otimização de assets e controle de renderização para melhorar TTFB e LCP',
      ],
    },
  },
] as const;

export const CONTACT_CONTENT: ContactContent = {
  heading: {
    eyebrow: { en: 'Contact', pt: 'Contato' },
    title: {
      en: 'Start a technical conversation.',
      pt: 'Inicie uma conversa técnica.',
    },
    summary: {
      en: 'Open to engineering roles involving distributed systems, financial backends, and architecture ownership.',
      pt: 'Aberto a funções de engenharia com sistemas distribuídos, backends financeiros e responsabilidade arquitetural.',
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
        en: 'Open to engineering roles involving distributed systems, critical backend flows, and architectural responsibility.',
        pt: 'Aberto a funções de engenharia com sistemas distribuídos, fluxos críticos de backend e responsabilidade arquitetural.',
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
