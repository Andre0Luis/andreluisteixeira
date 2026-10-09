export type Locale = 'pt' | 'en' | 'es';

export interface TitleText {
  title: string;
  text: string;
  note?: string;
  tags?: string[];
}

export interface Fact {
  value: string;
  label: string;
}

export interface Dict {
  htmlLang: string;
  meta: { title: string; description: string };
  a11y: { skip: string; menu: string; language: string; mainNav: string };
  nav: {
    home: string;
    about: string;
    journey: string;
    engineering: string;
    stack: string;
    projects: string;
    education: string;
    contact: string;
    mountains: string;
    coffee: string;
  };
  hero: {
    name: string;
    role: string;
    status: string;
    location: string;
    signature: string;
    bio: string;
    focus: string[];
    facts: Fact[];
    photoAlt: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cardTitle: string;
    facts: { label: string; value: string }[];
  };
  principles: { eyebrow: string; title: string; cards: [TitleText, TitleText, TitleText] };
  journey: {
    eyebrow: string;
    title: string;
    stepLabel: string;
    tookLabel: string;
    prev: string;
    next: string;
    steps: { when: string; title: string; text: string; took: string[] }[];
  };
  engineering: { eyebrow: string; title: string; pillars: TitleText[] };
  stack: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: { title: string; items: string[] }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    selectLabel: string;
    more: string;
    items: {
      name: string;
      kind: string;
      description: string;
      highlights: string[];
      tags: string[];
      links?: { label: string; href: string }[];
      demo?: 'flip';
    }[];
  };
  education: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { degree: string; institution: string; period: string; focus: string }[];
    certLabel: string;
    certName: string;
    certNote: string;
    learningTitle: string;
    learning: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
  };
  footer: string;
  built: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: { id: 'astro' | 'vue' | 'typescript' | 'tailwind' | 'claude' | 'github'; name: string; role: string }[];
    repoLabel: string;
  };
}
