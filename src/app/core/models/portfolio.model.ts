import { Language } from './language.model';

export type LocalizedValue<T> = Readonly<Record<Language, T>>;
export type ExternalUrl = `https://${string}` | `http://${string}` | `mailto:${string}`;

export type NavSectionId = 'about' | 'projects' | 'experience' | 'contact';

export interface NavItem {
  id: NavSectionId;
  label: LocalizedValue<string>;
}

export interface HeroCta {
  id: 'projects' | 'contact' | 'cv';
  kind: 'primary' | 'secondary' | 'ghost';
  label: LocalizedValue<string>;
}

export interface HeroContent {
  eyebrow: LocalizedValue<string>;
  titleLines: LocalizedValue<readonly [string, string]>;
  summary: LocalizedValue<string>;
  ctas: readonly HeroCta[];
}

export interface ImpactMetric {
  id: 'data' | 'beneficiaries' | 'access' | 'traffic' | 'ggconcurrent';
  value: string;
  label: LocalizedValue<string>;
}

export interface SectionHeading {
  eyebrow: LocalizedValue<string>;
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
}

export interface ProfileMetaItem {
  label: LocalizedValue<string>;
  value: LocalizedValue<string>;
  href?: ExternalUrl;
}

export interface CredibilityGroup {
  title: LocalizedValue<string>;
  items: LocalizedValue<readonly string[]>;
}

export interface CredibilityContent {
  heading: SectionHeading;
  statement: LocalizedValue<string>;
  groups: readonly CredibilityGroup[];
  facts: readonly ProfileMetaItem[];
}

export interface ExperienceEntry {
  id: 'ufind' | 'representa-junior' | 'representa-intern';
  role: LocalizedValue<string>;
  company: string;
  period: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  highlights: LocalizedValue<readonly string[]>;
}

export type CaseStudySlug = 'auronix' | 'modularis' | 'votrix' | 'ggc' | 'vox' | 'etecfy';

export interface CaseStudyMetric {
  value: string;
  label: LocalizedValue<string>;
}

export interface CaseStudyDecision {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface CaseStudyLink {
  label: LocalizedValue<string>;
  href: ExternalUrl;
}

export interface CaseStudyPreview {
  slug: CaseStudySlug;
  name: LocalizedValue<string>;
  category: LocalizedValue<string>;
  teaser: LocalizedValue<string>;
  metrics: readonly CaseStudyMetric[];
  stack: readonly string[];
  links: readonly CaseStudyLink[];
}

export interface CaseStudy extends CaseStudyPreview {
  role: LocalizedValue<string>;
  timeline: LocalizedValue<string>;
  problem: LocalizedValue<string>;
  solution: LocalizedValue<string>;
  resultSummary: LocalizedValue<string>;
  constraints: LocalizedValue<readonly string[]>;
  decisions: readonly CaseStudyDecision[];
  seoTitle: LocalizedValue<string>;
  seoDescription: LocalizedValue<string>;
}

export interface FeaturedProjectsContent {
  ctaLabel: LocalizedValue<string>;
}

export interface ContactLink {
  label: LocalizedValue<string>;
  value: LocalizedValue<string>;
  href: ExternalUrl;
}

export interface ContactContent {
  heading: SectionHeading;
  details: readonly ProfileMetaItem[];
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
