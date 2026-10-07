export type Locale = 'pt' | 'en' | 'es';

export interface TitleText {
  title: string;
  text: string;
}

export interface Dict {
  htmlLang: string;
  meta: { title: string; description: string };
  a11y: { skip: string; menu: string; language: string; mainNav: string };
  nav: {
    about: string;
    journey: string;
    engineering: string;
    projects: string;
    education: string;
    outside: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    signature: string;
    bio: string;
    photoAlt: string;
    ctaProjects: string;
    ctaContact: string;
  };
  principles: { eyebrow: string; title: string; cards: [TitleText, TitleText, TitleText] };
  journey: { eyebrow: string; title: string; blocks: [TitleText, TitleText, TitleText] };
  engineering: { eyebrow: string; title: string; pillars: [TitleText, TitleText, TitleText] };
  projects: {
    eyebrow: string;
    title: string;
    selectLabel: string;
    items: {
      name: string;
      kind: string;
      description: string;
      tags: string[];
      channels?: string[];
    }[];
  };
  education: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { degree: string; institution: string; focus: string }[];
    certLabel: string;
    certName: string;
  };
  outside: {
    eyebrow: string;
    title: string;
    tabsLabel: string;
    tabs: {
      id: string;
      label: string;
      title: string;
      text: string;
      chips?: string[];
      story?: { label: string; meta: string[]; text: string };
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
  };
  footer: string;
}
