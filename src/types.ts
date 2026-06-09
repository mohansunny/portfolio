export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  suffix?: string;
  description: string;
  iconName: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  category: string;
  challenge: string;
  solution: string;
  impacts: string[];
  technologies: string[];
  metrics?: { label: string; val: string }[];
}

export interface SkillItem {
  name: string;
  level: number; // percentage
  category: 'BI' | 'Database' | 'Reporting' | 'Cloud';
  description?: string;
}

export interface TimelineChapter {
  chapterNum: number;
  title: string;
  period: string;
  role: string;
  companies: string[];
  skills: string[];
  details: string[];
  highlights: string[];
}
