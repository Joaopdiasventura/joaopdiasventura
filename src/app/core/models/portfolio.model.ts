export type NavSectionId =
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'education'
  | 'contact';

export interface NavItem {
  id: NavSectionId;
  labelKey: `nav.${NavSectionId}`;
}

export type MetricId = 'data' | 'users' | 'beneficiaries' | 'accesses';

export interface MetricItem {
  id: MetricId;
  valueKey: `metrics.${MetricId}`;
  labelKey: `metrics.${MetricId}.label`;
}

export type ExperienceId = 1 | 2 | 3;

export interface ExperienceItem {
  id: ExperienceId;
  roleKey: `exp.${ExperienceId}.role`;
  companyKey: `exp.${ExperienceId}.company`;
  periodKey: `exp.${ExperienceId}.period`;
  descriptionKey: `exp.${ExperienceId}.desc`;
}

export type SkillGroupId = 'frontend' | 'backend' | 'databases' | 'cloud';

export interface SkillGroup {
  id: SkillGroupId;
  titleKey: `skills.${SkillGroupId}`;
  items: readonly string[];
}

export type ProjectId = 1 | 2;
export type ProjectIcon = 'vox' | 'etecfy';
export type ExternalUrl = `https://${string}` | `http://${string}`;

export interface ProjectItem {
  id: ProjectId;
  icon: ProjectIcon;
  nameKey: `projects.${ProjectId}.name`;
  descriptionKey: `projects.${ProjectId}.desc`;
  liveUrl: ExternalUrl;
  tags: readonly string[];
}

export type EducationId = 1 | 2;

export interface EducationItem {
  id: EducationId;
  courseKey: `edu.${EducationId}.course`;
  schoolKey: `edu.${EducationId}.school`;
  periodKey: `edu.${EducationId}.period`;
}

export type CertificationKey = 'cert.1' | 'cert.2' | 'cert.3';

export interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: 'github' | 'linkedin' | 'mail';
  external?: boolean;
}

