import { Language } from './language.model';

export type LocalizedValue<T> = Readonly<Record<Language, T>>;
export type ExternalUrl = `https://${string}` | `http://${string}` | `mailto:${string}`;

export type NavSectionId = 'about' | 'work' | 'experience' | 'contact';

export interface NavItem {
  id: NavSectionId;
  label: LocalizedValue<string>;
}

export interface HeroCta {
  id: 'work' | 'contact' | 'cv';
  kind: 'primary' | 'secondary' | 'ghost';
  label: LocalizedValue<string>;
}

export interface HeroContent {
  eyebrow: LocalizedValue<string>;
  titleLines: LocalizedValue<readonly [string, string]>;
  summary: LocalizedValue<string>;
  noteTitle: LocalizedValue<string>;
  noteBody: LocalizedValue<string>;
  ctas: readonly HeroCta[];
}

export interface ImpactMetric {
  id: 'data' | 'beneficiaries' | 'access' | 'traffic';
  value: string;
  label: LocalizedValue<string>;
  context: LocalizedValue<string>;
}

export interface SectionHeading {
  eyebrow: LocalizedValue<string>;
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
}

export interface ManifestoPrinciple {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface ProfileMetaItem {
  label: LocalizedValue<string>;
  value: LocalizedValue<string>;
  href?: ExternalUrl;
}

export interface ManifestoContent {
  heading: SectionHeading;
  lead: LocalizedValue<string>;
  body: LocalizedValue<readonly string[]>;
  principles: readonly ManifestoPrinciple[];
  profileCardTitle: LocalizedValue<string>;
  profileCardBody: LocalizedValue<string>;
  profileMeta: readonly ProfileMetaItem[];
}

export interface ExperienceEntry {
  id: 'ufind' | 'representa-junior' | 'representa-intern';
  role: LocalizedValue<string>;
  company: string;
  period: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  highlights: LocalizedValue<readonly string[]>;
}

export interface CapabilityCluster {
  id: 'systems' | 'delivery' | 'stack';
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  items: LocalizedValue<readonly string[]>;
  accentLabel: LocalizedValue<string>;
}

export interface CredentialEntry {
  title: LocalizedValue<string>;
  subtitle: LocalizedValue<string>;
  meta: LocalizedValue<string>;
}

export interface CredentialsContent {
  heading: SectionHeading;
  education: readonly CredentialEntry[];
  certificationsLabel: LocalizedValue<string>;
  certifications: LocalizedValue<readonly string[]>;
  languagesLabel: LocalizedValue<string>;
  languages: LocalizedValue<readonly string[]>;
}

export type CaseStudySlug = 'auronix' | 'modularis' | 'votrix' | 'vox' | 'etecfy';
export type CaseStudyTheme = CaseStudySlug;

export interface CaseStudyMetric {
  value: string;
  label: LocalizedValue<string>;
}

export interface CaseStudyDecision {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface CaseStudyMediaPanel {
  eyebrow: LocalizedValue<string>;
  title: LocalizedValue<string>;
  body: LocalizedValue<string>;
}

export interface CaseStudyLink {
  label: LocalizedValue<string>;
  href: ExternalUrl;
}

export interface CaseStudyPreview {
  slug: CaseStudySlug;
  theme: CaseStudyTheme;
  name: LocalizedValue<string>;
  category: LocalizedValue<string>;
  year: string;
  teaser: LocalizedValue<string>;
  metrics: readonly CaseStudyMetric[];
  stack: readonly string[];
  links: readonly CaseStudyLink[];
}

export interface CaseStudy extends CaseStudyPreview {
  role: LocalizedValue<string>;
  timeline: LocalizedValue<string>;
  thesis: LocalizedValue<string>;
  overview: LocalizedValue<readonly string[]>;
  highlights: LocalizedValue<readonly string[]>;
  challenge: LocalizedValue<readonly string[]>;
  constraints: LocalizedValue<readonly string[]>;
  decisions: readonly CaseStudyDecision[];
  results: LocalizedValue<readonly string[]>;
  mediaCaption: LocalizedValue<string>;
  mediaPanels: readonly CaseStudyMediaPanel[];
  seoTitle: LocalizedValue<string>;
  seoDescription: LocalizedValue<string>;
}

export interface FeaturedWorkContent {
  heading: SectionHeading;
  ctaLabel: LocalizedValue<string>;
  ctaSecondaryLabel: LocalizedValue<string>;
}

export interface ContactLink {
  label: LocalizedValue<string>;
  value: LocalizedValue<string>;
  href: ExternalUrl;
}

export interface ContactContent {
  heading: SectionHeading;
  availability: LocalizedValue<string>;
  links: readonly ContactLink[];
  baseItems: readonly ProfileMetaItem[];
  formName: LocalizedValue<string>;
  formEmail: LocalizedValue<string>;
  formMessage: LocalizedValue<string>;
  formSubmit: LocalizedValue<string>;
  formSending: LocalizedValue<string>;
  formSent: LocalizedValue<string>;
  formError: LocalizedValue<string>;
}

export interface SiteChrome {
  brandLabel: LocalizedValue<string>;
  switchLanguage: LocalizedValue<string>;
  openMenu: LocalizedValue<string>;
  closeMenu: LocalizedValue<string>;
  footerRights: LocalizedValue<string>;
  homeDescription: LocalizedValue<string>;
}

export interface SocialLink {
  href: ExternalUrl;
  label: LocalizedValue<string>;
  icon: 'github' | 'linkedin' | 'mail';
  external?: boolean;
}
