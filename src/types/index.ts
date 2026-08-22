export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imagePlaceholder: string;
  imageUrl?: string;
  featured?: boolean;
  category: 'Flutter' | 'React' | 'Full Stack';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Leadership {
  id: string;
  title: string;
  description: string;
  icon: 'google' | 'trophy' | 'presentation' | 'users';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
