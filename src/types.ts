export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
  duration: string;
  sessionsPerWeek: string;
  level: string;
  image: string;
  weeklyPlanSummary: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Footprints' | 'Flame' | 'Trophy' | 'Activity';
  badge: string;
  keyPoints: string[];
}

export interface Competency {
  name: string;
  percentage: number;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  role: string;
  name: string;
  tag: string;
  avatar: string;
  rating: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  runningGoal: string;
  message: string;
}
