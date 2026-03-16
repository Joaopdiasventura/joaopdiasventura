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
