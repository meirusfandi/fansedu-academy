export interface EcosystemCard {
  id: string;
  name: string;
  description: string;
  iconName: string;
  features: string[];
  ctaLabel: string;
  url: string;
  comingSoon?: boolean;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface PathwayAgeGroup {
  age: string;
  title: string;
  description: string;
  skills: string[];
  badgeColor: string;
}

export interface StatisticItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
  gradient: string;
}

export interface TestimonialItem {
  id: string;
  parentName?: string;
  studentAge?: string;
  avatarSeed?: string;
  commentPlaceholder: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  parentName: string;
  studentAge: number;
  selectedProgram: string;
  whatsappNumber: string;
  emailAddress: string;
  notes?: string;
}
