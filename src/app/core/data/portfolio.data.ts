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
    en: 'Portfolio of João Paulo Dias Ventura focused on auditable systems, data-heavy products, and precise frontend delivery.',
    pt: 'Portfólio de João Paulo Dias Ventura focado em sistemas auditáveis, produtos intensivos em dados e execução frontend precisa.',
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
    en: 'I build software for operations that need traceability, strong data flow, and clear interfaces.',
    pt: 'Construo software para operações que exigem rastreabilidade, fluxo de dados robusto e interfaces claras.',
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
    value: '+1M',
    label: {
      en: 'Beneficiaries registered',
      pt: 'Beneficiários cadastrados',
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
    en: 'I design systems where business rules stay explicit, operations stay traceable, and interfaces reduce ambiguity.',
    pt: 'Desenho sistemas em que regras de negócio permanecem explícitas, a operação continua rastreável e a interface reduz ambiguidade.',
  },
  groups: [
    {
      title: {
        en: 'Architecture',
        pt: 'Arquitetura',
      },
      items: {
        en: [
          'Domain modeling for critical rules',
          'Transactional safety and trace history',
          'Clean, event-driven systems',
        ],
        pt: [
          'Modelagem de domínio para regras críticas',
          'Segurança transacional e histórico de rastreio',
          'Sistemas limpos e orientados a eventos',
        ],
      },
    },
    {
      title: {
        en: 'Domain',
        pt: 'Domínio',
      },
      items: {
        en: [
          'High-volume ingestion and validation flows',
          'Financial and operational automation',
          'Applied AI with clear system boundaries',
        ],
        pt: [
          'Fluxos de ingestão e validação em alto volume',
          'Automação financeira e operacional',
          'IA aplicada com limites de sistema claros',
        ],
      },
    },
    {
      title: {
        en: 'Stack',
        pt: 'Ferramentas',
      },
      items: {
        en: [
          'Angular and Next.js',
          'NestJS and Java',
          'PostgreSQL and MongoDB',
          'Docker, AWS, GCP, and CI/CD',
        ],
        pt: [
          'Angular e Next.js',
          'NestJS e Java',
          'PostgreSQL e MongoDB',
          'Docker, AWS, GCP e CI/CD',
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
          'EDB - Distributed Postgres',
        ],
        pt: [
          'Fatec Osasco - Desenvolvimento de Software Multiplataforma (2026-2028)',
          'Etec Guarulhos - Desenvolvimento de Sistemas (2023-2025)',
          'MongoDB - Modelagem Avançada de Dados e Conhecimento Financeiro',
          'EDB - Postgres Distribuido',
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
    company: 'UFind',
    period: { en: 'Jun 2025 - Present', pt: 'jun. 2025 - atual' },
    summary: {
      en: 'Implementing a data-driven AI agent with high-volume ingestion, real-time chat, and traceable production flows.',
      pt: 'Implemento um agente de IA orientado a dados com ingestão em alto volume, chat em tempo real e fluxos produtivos rastreáveis.',
    },
    highlights: {
      en: [
        'Structured asynchronous Node.js pipelines to ingest and process more than 16 GB of information',
        'Built real-time chat with the OpenAI API and participated in production infrastructure decisions',
      ],
      pt: [
        'Estruturei pipelines assíncronos em Node.js para ingestão e processamento de mais de 16 GB de informações',
        'Desenvolvi chat em tempo real com a API da OpenAI e participei de decisões técnicas da infraestrutura em produção',
      ],
    },
  },
  {
    id: 'representa-junior',
    role: { en: 'Junior Developer', pt: 'Desenvolvedor Júnior' },
    company: 'Representa Online',
    period: { en: 'Sep 2024 - May 2025', pt: 'set. 2024 - maio 2025' },
    summary: {
      en: 'Worked on the design and development of an insurance billing system with high-volume file processing and multiple financial layouts.',
      pt: 'Atuei na concepção e no desenvolvimento de um sistema de faturamento para corretora de seguros, com alto volume de arquivos e múltiplos layouts financeiros.',
    },
    highlights: {
      en: [
        'Structured streams-based flows with critical validations to preserve data integrity and traceability',
        'Implemented automation that reduced manual operations from days to minutes',
      ],
      pt: [
        'Estruturei um fluxo com streams e validações críticas para garantir integridade dos dados e rastreabilidade',
        'Implementei uma automação que reduziu operações manuais de dias para minutos',
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
      en: 'Worked on the core catalog for companies, products, and services with a focus on performance and scalability.',
      pt: 'Atuei no núcleo de catálogo de empresas, produtos e serviços com foco em performance e escalabilidade.',
    },
    highlights: {
      en: [
        'Added location search based on coordinates and distance ordering',
        'Implemented JWT and Google OAuth2 flows plus full SSR and SSG pages for faster initial loading',
      ],
      pt: [
        'Adicionei busca por localização baseada em coordenadas e ordenação por distância',
        'Implementei fluxos com JWT e Google OAuth2, além de páginas full SSR e SSG para reduzir o carregamento inicial',
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
