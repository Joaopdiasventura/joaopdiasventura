import {
  CertificationKey,
  EducationId,
  ExperienceId,
  MetricId,
  NavSectionId,
  ProjectId,
  SkillGroupId,
} from '../models/portfolio.model';

type NavKey = `nav.${NavSectionId}`;
type NavControlKey =
  | 'nav.brand'
  | 'nav.toggleLanguage'
  | 'nav.toggleTheme'
  | 'nav.openMenu'
  | 'nav.closeMenu';

type HeroKey =
  | 'hero.role'
  | 'hero.summary'
  | 'hero.cta.cv'
  | 'hero.cta.contact'
  | 'hero.cta.projects';

type AboutKey =
  | 'about.title'
  | 'about.p1'
  | 'about.p2'
  | 'about.location'
  | 'about.email'
  | 'about.phone';

type ExperienceKey =
  | 'exp.title'
  | `exp.${ExperienceId}.role`
  | `exp.${ExperienceId}.company`
  | `exp.${ExperienceId}.period`
  | `exp.${ExperienceId}.desc`;

type SkillsKey =
  | 'skills.title'
  | `skills.${SkillGroupId}`
  | 'skills.specialization';

type ProjectsKey =
  | 'projects.title'
  | 'projects.cta.live'
  | `projects.${ProjectId}.name`
  | `projects.${ProjectId}.desc`;

type EducationKey =
  | 'edu.title'
  | `edu.${EducationId}.course`
  | `edu.${EducationId}.school`
  | `edu.${EducationId}.period`;

type CertificationLabelKey = 'cert.title';
type CertificationKeyLabel = CertificationKey;

type ContactKey =
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'contact.send'
  | 'contact.sending'
  | 'contact.sent'
  | 'contact.error';

type MetricsKey = `metrics.${MetricId}` | `metrics.${MetricId}.label`;

type LanguagesKey =
  | 'languages.title'
  | 'languages.pt'
  | 'languages.en'
  | 'languages.fr';

type FooterKey = 'footer.rights';

export type TranslationKey =
  | NavKey
  | NavControlKey
  | HeroKey
  | AboutKey
  | ExperienceKey
  | SkillsKey
  | ProjectsKey
  | EducationKey
  | CertificationLabelKey
  | CertificationKeyLabel
  | ContactKey
  | MetricsKey
  | LanguagesKey
  | FooterKey;

export type TranslationDictionary = Record<TranslationKey, string>;
