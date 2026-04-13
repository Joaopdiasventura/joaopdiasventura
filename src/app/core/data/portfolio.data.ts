import {
  CapabilityCluster,
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
    en: 'Portfolio of João Paulo Dias Ventura, focused on auditable systems, data-intensive products, and precise frontend execution.',
    pt: 'Portfólio de João Paulo Dias Ventura, focado em sistemas auditáveis, produtos intensivos em dados e execução frontend precisa.',
  },
};

export const NAV_ITEMS: readonly NavItem[] = [
  {
    id: 'about',
    label: { en: 'About', pt: 'Sobre' },
  },
  {
    id: 'work',
    label: { en: 'Work', pt: 'Projetos' },
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
    en: 'I design and deliver software for complex operations where data integrity, operational clarity, and product quality must stay aligned.',
    pt: 'Projeto e entrego software para operações complexas em que integridade de dados, clareza operacional e qualidade de produto precisam permanecer alinhadas.',
  },
  noteTitle: {
    en: 'Current focus',
    pt: 'Foco atual',
  },
  noteBody: {
    en: 'Auditable systems, high-volume data flows, and interfaces that stay clear under complexity.',
    pt: 'Sistemas auditáveis, fluxos de dados de alto volume e interfaces que permanecem claras sob complexidade.',
  },
  ctas: [
    {
      id: 'work',
      kind: 'primary',
      label: { en: 'View work', pt: 'Ver projetos' },
    },
    {
      id: 'contact',
      kind: 'secondary',
      label: { en: 'Get in touch', pt: 'Entrar em contato' },
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
      en: 'Data processed',
      pt: 'Dados processados',
    },
    context: {
      en: 'AI ingestion and processing flows above 16 GB.',
      pt: 'Fluxos de ingestão e processamento para IA acima de 16 GB.',
    },
  },
  {
    id: 'beneficiaries',
    value: '+1M',
    label: {
      en: 'Beneficiaries processed',
      pt: 'Beneficiários processados',
    },
    context: {
      en: 'Insurance billing flows with multi-layout validation.',
      pt: 'Fluxos de faturamento com validação multi-layout em seguros.',
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
      en: 'Voting flows with audit trails under concurrent load.',
      pt: 'Fluxos de votação com trilhas de auditoria sob carga concorrente.',
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
      en: 'I build software that keeps rules, decisions, and execution aligned.',
      pt: 'Construo software que mantém regras, decisões e execução alinhadas.',
    },
    summary: {
      en: 'I prefer environments where architecture is an operating constraint, not presentation.',
      pt: 'Prefiro ambientes em que arquitetura é uma restrição operacional, não apresentação.',
    },
  },
  lead: {
    en: 'I do more than ship features. I structure systems so complexity stays readable, data stays trustworthy, and interfaces stay intentional.',
    pt: 'Faço mais do que entregar funcionalidades. Estruturo sistemas para que a complexidade permaneça legível, os dados permaneçam confiáveis e as interfaces permaneçam intencionais.',
  },
  body: {
    en: [
      'My work spans architecture, backend flows, data-heavy operations, and frontend systems with the same goal: reduce friction without reducing rigor.',
      'That means modeling domains carefully, treating validation as product quality, and using interfaces to clarify critical decisions.',
    ],
    pt: [
      'Meu trabalho cobre arquitetura, fluxos de backend, operações intensivas em dados e sistemas frontend com o mesmo objetivo: reduzir atrito sem reduzir rigor.',
      'Isso significa modelar domínios com cuidado, tratar validação como qualidade de produto e usar interfaces para esclarecer decisões críticas.',
    ],
  },
  principles: [
    {
      title: {
        en: 'Traceability over guesswork',
        pt: 'Rastreabilidade acima de suposição',
      },
      description: {
        en: 'Critical flows should explain themselves through explicit models, state history, and dependable contracts.',
        pt: 'Fluxos críticos devem se explicar por modelos explícitos, histórico de estados e contratos confiáveis.',
      },
    },
    {
      title: {
        en: 'Performance with clarity',
        pt: 'Performance com clareza',
      },
      description: {
        en: 'Scale matters when the product and the operation remain understandable under load.',
        pt: 'Escala importa quando produto e operação permanecem compreensíveis sob carga.',
      },
    },
    {
      title: {
        en: 'Design as system signal',
        pt: 'Design como sinal de sistema',
      },
      description: {
        en: 'Interfaces should communicate confidence, order, and decision quality. The visual layer is part of the system.',
        pt: 'Interfaces devem comunicar confiança, ordem e qualidade de decisão. A camada visual faz parte do sistema.',
      },
    },
  ],
  profileCardTitle: {
    en: 'Working profile',
    pt: 'Perfil de atuação',
  },
  profileCardBody: {
    en: 'Product-minded engineering, system architecture, and frontend craft with emphasis on auditable flows.',
    pt: 'Engenharia orientada a produto, arquitetura de sistemas e frontend refinado com ênfase em fluxos auditáveis.',
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
        en: 'Open to engineering roles with strong architecture ownership.',
        pt: 'Aberto a posições de engenharia com forte responsabilidade arquitetural.',
      },
    },
  ],
} as const;

export const FEATURED_WORK_CONTENT: FeaturedWorkContent = {
  heading: {
    eyebrow: {
      en: 'Selected work',
      pt: 'Trabalhos selecionados',
    },
    title: {
      en: 'Selected projects',
      pt: 'Projetos selecionados',
    },
    summary: {
      en: 'Each project shows scope, architecture, and proof. The case study holds the deeper breakdown.',
      pt: 'Cada projeto resume escopo, arquitetura e prova. O estudo de caso traz o detalhamento completo.',
    },
  },
  ctaLabel: {
    en: 'Open case study',
    pt: 'Abrir estudo de caso',
  },
  ctaSecondaryLabel: {
    en: 'Open live project',
    pt: 'Abrir projeto online',
  },
} as const;

export const EXPERIENCE_HEADING = {
  eyebrow: { en: 'Experience', pt: 'Experiência' },
  title: {
    en: 'Architecture ownership across startup, financial, and data-heavy environments.',
    pt: 'Responsabilidade arquitetural em ambientes de startup, finanças e operações intensivas em dados.',
  },
  summary: {
    en: 'Public work shows craft. Experience shows delivery under constraint.',
    pt: 'Projetos públicos mostram craft. Experiência mostra entrega sob restrição.',
  },
} as const;

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'ufind',
    role: { en: 'Mid-level Developer', pt: 'Desenvolvedor Pleno' },
    company: 'UFind',
    period: { en: 'Jun 2025 - Present', pt: 'jun. 2025 - atual' },
    summary: {
      en: 'Lead technical owner for a data-driven AI agent, defining architecture and high-volume ingestion flows.',
      pt: 'Principal responsável técnico por um agente de IA orientado a dados, definindo arquitetura e fluxos de ingestão de alto volume.',
    },
    highlights: {
      en: [
        'Defined architecture standards and integration boundaries.',
        'Structured flows for more than 16 GB of data.',
        'Kept traceability and transactional history explicit.',
      ],
      pt: [
        'Defini padrões arquiteturais e limites de integração.',
        'Estruturei fluxos para mais de 16 GB de dados.',
        'Mantive rastreabilidade e histórico transacional explícitos.',
      ],
    },
  },
  {
    id: 'representa-junior',
    role: { en: 'Junior Developer', pt: 'Desenvolvedor Júnior' },
    company: 'Representa Online',
    period: { en: 'Sep 2024 - May 2025', pt: 'set. 2024 - maio 2025' },
    summary: {
      en: 'Led the design and implementation of an insurance billing system with multiple layouts and critical financial rules.',
      pt: 'Liderei o desenho e a implementação de um sistema de faturamento para seguros com múltiplos layouts e regras financeiras críticas.',
    },
    highlights: {
      en: [
        'Processed high-volume insurance files.',
        'Reduced manual routines from days to minutes.',
        'Designed for layout variation and financial rule handling.',
      ],
      pt: [
        'Processei arquivos de seguros em alto volume.',
        'Reduzi rotinas manuais de dias para minutos.',
        'Desenhei a arquitetura para variações de layout e regras financeiras.',
      ],
    },
  },
  {
    id: 'representa-intern',
    role: { en: 'Software Development Intern', pt: 'Estagiário em Desenvolvimento' },
    company: 'Representa Online',
    period: { en: 'Jun 2024 - Aug 2024', pt: 'jun. 2024 - ago. 2024' },
    summary: {
      en: 'Worked on the platform core for catalog behavior, performance, and resilience.',
      pt: 'Atuei no núcleo da plataforma em comportamento de catálogo, performance e resiliência.',
    },
    highlights: {
      en: [
        'Improved query, filter, and pagination performance.',
        'Implemented rule-based access control and fault-tolerance mechanisms.',
        'Raised robustness in a growing platform core.',
      ],
      pt: [
        'Melhorei a performance de consultas, filtros e paginação.',
        'Implementei controle de acesso por regras e mecanismos de tolerância a falhas.',
        'Aumentei a robustez de um núcleo de plataforma em crescimento.',
      ],
    },
  },
] as const;

export const CAPABILITY_HEADING = {
  eyebrow: { en: 'Capabilities', pt: 'Capacidades' },
  title: {
    en: 'How I contribute to systems',
    pt: 'Como contribuo para sistemas',
  },
  summary: {
    en: 'This section groups the work by leverage, not by isolated tools.',
    pt: 'Esta seção organiza o trabalho por alavanca técnica, não por ferramentas isoladas.',
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
      en: 'Service boundaries, domain models, and validation-heavy flows that stay understandable over time.',
      pt: 'Fronteiras de serviço, modelos de domínio e fluxos intensivos em validação que permanecem compreensíveis ao longo do tempo.',
    },
    items: {
      en: [
        'Domain modeling for critical business rules',
        'Transactional integrity and trace history',
        'Service contracts designed for maintainability',
      ],
      pt: [
        'Modelagem de domínio para regras de negócio críticas',
        'Integridade transacional e histórico de rastreabilidade',
        'Contratos de serviço desenhados para manutenção',
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
      en: 'Turn operational bottlenecks into software with measurable impact and better decision quality.',
      pt: 'Transformar gargalos operacionais em software com impacto mensurável e melhor qualidade de decisão.',
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
      en: 'Delivery',
      pt: 'Entrega',
    },
  },
  {
    id: 'stack',
    title: {
      en: 'Frontend and platform craft',
      pt: 'Frontend e engenharia de plataforma',
    },
    summary: {
      en: 'Build interfaces and technical foundations that feel deliberate, fast, and aligned with the architecture behind them.',
      pt: 'Construir interfaces e fundações técnicas que pareçam deliberadas, rápidas e alinhadas com a arquitetura que as sustenta.',
    },
    items: {
      en: [
        'Angular, Next.js, and React Native',
        'NestJS, Java, Go, PostgreSQL, MongoDB, Redis',
        'Docker, AWS, GCP, and CI/CD',
      ],
      pt: [
        'Angular, Next.js e React Native',
        'NestJS, Java, Go, PostgreSQL, MongoDB e Redis',
        'Docker, AWS, GCP e CI/CD',
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
      en: 'Education and certifications.',
      pt: 'Formação e certificações.',
    },
    summary: {
      en: 'Compact by design. Enough to establish background without replacing execution proof.',
      pt: 'Compacto por design. O suficiente para estabelecer repertório sem substituir prova de execução.',
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
        en: 'Feb 2026 - Dec 2028',
        pt: 'fev. 2026 - dez. 2028',
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
        en: 'Feb 2023 - Dec 2025',
        pt: 'fev. 2023 - dez. 2025',
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
    en: ['Portuguese - Native', 'English - Advanced', 'French - Basic'],
    pt: ['Português - Nativo', 'Inglês - Avançado', 'Francês - Básico'],
  },
};

export const CONTACT_CONTENT: ContactContent = {
  heading: {
    eyebrow: { en: 'Contact', pt: 'Contato' },
    title: {
      en: 'Start a conversation.',
      pt: 'Inicie uma conversa.',
    },
    summary: {
      en: 'I am interested in work where architecture, product judgment, and implementation quality all matter.',
      pt: 'Tenho interesse em trabalhos em que arquitetura, visão de produto e qualidade de implementação realmente importam.',
    },
  },
  availability: {
    en: 'Open to high-impact engineering roles, product-minded teams, and complex software problems.',
    pt: 'Aberto a posições de engenharia de alto impacto, times orientados a produto e problemas complexos de software.',
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
    label: { en: 'Email', pt: 'E-mail' },
    icon: 'mail',
  },
] as const;
