export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  builtWith: string[];
  status: string;
  focus?: string;
  period?: string;
  highlightMetric: {
    label: string;
    value: string;
  };
  flowSteps: {
    number: number;
    title: string;
    description: string;
  }[];
  problem: {
    summary: string;
    points: string[];
  };
  solution: {
    summary: string;
    points: string[];
  };
  impact: string[];
  previewType: 'careerhq' | 'mindsaathi' | 'smartdialer';
  liveUrl?: string;
  githubUrl?: string;
  tag: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverable: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  date: string;
  comment: string;
  avatarText: string;
}
