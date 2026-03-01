import {
  CertificationKey,
  EducationItem,
  ExperienceItem,
  MetricItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from '../models/portfolio.model';

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const;

export const METRICS: readonly MetricItem[] = [
  { id: 'data', valueKey: 'metrics.data', labelKey: 'metrics.data.label' },
  { id: 'users', valueKey: 'metrics.users', labelKey: 'metrics.users.label' },
  {
    id: 'beneficiaries',
    valueKey: 'metrics.beneficiaries',
    labelKey: 'metrics.beneficiaries.label',
  },
  {
    id: 'accesses',
    valueKey: 'metrics.accesses',
    labelKey: 'metrics.accesses.label',
  },
] as const;

export const EXPERIENCES: readonly ExperienceItem[] = [
  {
    id: 1,
    roleKey: 'exp.1.role',
    companyKey: 'exp.1.company',
    periodKey: 'exp.1.period',
    descriptionKey: 'exp.1.desc',
  },
  {
    id: 2,
    roleKey: 'exp.2.role',
    companyKey: 'exp.2.company',
    periodKey: 'exp.2.period',
    descriptionKey: 'exp.2.desc',
  },
  {
    id: 3,
    roleKey: 'exp.3.role',
    companyKey: 'exp.3.company',
    periodKey: 'exp.3.period',
    descriptionKey: 'exp.3.desc',
  },
] as const;

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend',
    titleKey: 'skills.frontend',
    items: ['Angular', 'Next.js', 'React Native'],
  },
  {
    id: 'backend',
    titleKey: 'skills.backend',
    items: ['NestJS', 'Java', 'Golang'],
  },
  {
    id: 'databases',
    titleKey: 'skills.databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'cloud',
    titleKey: 'skills.cloud',
    items: ['Docker', 'AWS', 'GCP'],
  },
] as const;

export const SPECIALIZATIONS_EN = [
  'Large-scale data processing',
  'Financial systems & billing',
  'System architecture',
  'Applied AI & automation',
  'Domain modeling',
  'Cloud deployment',
] as const;

export const SPECIALIZATIONS_PT = [
  'Processamento de grandes volumes',
  'Sistemas financeiros e faturamento',
  'Arquitetura de sistemas',
  'IA aplicada e automação',
  'Modelagem de domínio',
  'Deploy em cloud',
] as const;

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 1,
    icon: 'vox',
    nameKey: 'projects.1.name',
    descriptionKey: 'projects.1.desc',
    liveUrl: 'https://v-o-x.vercel.app',
    tags: ['NestJS', 'PostgreSQL', 'Angular'],
  },
  {
    id: 2,
    icon: 'etecfy',
    nameKey: 'projects.2.name',
    descriptionKey: 'projects.2.desc',
    liveUrl: 'https://etecfy.vercel.app',
    tags: ['Streams', 'Web Audio API', 'Android Development'],
  },
] as const;

export const EDUCATION_ITEMS: readonly EducationItem[] = [
  {
    id: 1,
    courseKey: 'edu.1.course',
    schoolKey: 'edu.1.school',
    periodKey: 'edu.1.period',
  },
  {
    id: 2,
    courseKey: 'edu.2.course',
    schoolKey: 'edu.2.school',
    periodKey: 'edu.2.period',
  },
] as const;

export const CERTIFICATION_KEYS: readonly CertificationKey[] = [
  'cert.1',
  'cert.2',
  'cert.3',
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    href: 'https://github.com/Joaopdiasventura',
    ariaLabel: 'GitHub',
    icon: 'github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/joaopdias-dev/',
    ariaLabel: 'LinkedIn',
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'mailto:joaopdias.dev@gmail.com',
    ariaLabel: 'E-mail',
    icon: 'mail',
  },
] as const;
