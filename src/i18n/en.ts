import type { Dict } from './types';

export const en: Dict = {
  htmlLang: 'en',
  meta: {
    title: 'André Luis Teixeira | Platform Engineer',
    description:
      'Platform Engineer and systems builder. Resilient architectures, automation pipelines and tools that remove technical complexity.',
  },
  a11y: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    mainNav: 'Main navigation',
  },
  nav: {
    about: 'About',
    journey: 'Journey',
    engineering: 'Engineering',
    projects: 'Projects',
    education: 'Education',
    outside: 'Hobbies',
    contact: 'Contact',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Platform Engineer & Systems Builder',
    signature: 'Every second counts.',
    bio: 'I design and sustain resilient architectures, automation pipelines and tools that remove technical complexity. Away from the screen, I look for clarity at mountain altitude, in the precision of a specialty coffee and in the steady discipline of learning from uncertainty.',
    photoAlt: 'André Luis Teixeira smiling, wearing a cap and a hiking backpack',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
  },
  principles: {
    eyebrow: 'Posture and principles',
    title: 'How I think',
    cards: [
      {
        title: 'Investigative curiosity',
        text: 'My path in technology did not come from shortcuts. It grew out of a practical restlessness to understand how things work beneath the surface. I investigate what breaks, where the real bottlenecks are, and how to design systems that withstand the impact of production without relying on temporary patches.',
      },
      {
        title: 'The antifragile filter',
        text: 'Fragile systems break under stress; merely robust systems hold up to the impact until they reach their limit. When I architect solutions and make decisions, my goal is antifragility: structures that absorb the unexpected, learn from operational failure and grow stronger with every shock.',
      },
      {
        title: 'The weight of time',
        text: 'The urgency behind "Every second counts" is not blind rushing but active presence. It means removing useless complexity, not hesitating in the face of the inevitable, and building tools that respect the time of the people who depend on them.',
      },
    ],
  },
  journey: {
    eyebrow: 'Origin and journey',
    title: 'Where I come from',
    blocks: [
      {
        title: 'Learning on the shop floor',
        text: 'My work ethic and my ability to deal with reality did not begin in front of a screen. At 15, I took my first professional steps in local retail, working directly in customer service and operations at J.A Bazar e Papelaria. Serving every kind of customer, closing the register, organizing stock and solving the surprises of the day taught me early on the weight of accountability, responsibility and respect for the customer.',
      },
      {
        title: 'The move into technology',
        text: 'I carried that same practical solidity with me when I entered technology, where I have worked for over 5 years. Because I treat systems with the seriousness of someone who knows the cost of a failure in the real world, I naturally became the technical reference and focal point on the teams I joined: designing architectures, solving critical incidents and giving developers autonomy.',
      },
      {
        title: 'The journey over the destination',
        text: 'Reaching platform engineering and the support of complex systems is not a finish line. The daily process of studying, failing, testing and refining matters as much as the destination. I keep learning, with no room for complacency.',
      },
    ],
  },
  engineering: {
    eyebrow: 'Platform engineering',
    title: 'What I work on',
    pillars: [
      {
        title: 'Automation & continuous CI/CD',
        text: 'Building and sustaining automation pipelines and global delivery flows. Focus on predictability, repeatability and security.',
      },
      {
        title: 'Resilience & reliability',
        text: 'Architectures designed to withstand failure. Fewer single points of failure and proactive observability.',
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Building internal tools that reduce the daily friction of teams and lower cognitive load.',
      },
    ],
  },
  projects: {
    eyebrow: 'Selected projects',
    title: 'What I have built',
    selectLabel: 'Choose a project',
    items: [
      {
        name: 'Clube Quinze',
        kind: 'Mobile app',
        description:
          'Built with a focus on direct usability and stability. Followed from the architecture concept through to publication on the stores (App Store and Google Play).',
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot'],
        channels: ['App Store', 'Google Play'],
      },
      {
        name: 'Flip & Brew',
        kind: 'Productivity and habits',
        description:
          'An app designed as a response to excess stimulation. It tracks attention retention and encourages mindful breaks.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
      },
    ],
  },
  education: {
    eyebrow: 'Education and credentials',
    title: 'Theory and practice',
    lead: 'Theory without practice becomes empty abstraction; practice without theory becomes fragile improvisation.',
    items: [
      {
        degree: 'Postgraduate degree in Tech Management',
        institution: 'FIAP',
        focus: 'Strategic leadership, governance and management.',
      },
      {
        degree: 'MBA in Software Engineering',
        institution: 'Faculdade Impacta',
        focus: 'Architecture patterns, quality and large scale.',
      },
      {
        degree: "Bachelor's degree in Information Systems",
        institution: 'Centro Universitário Sumaré',
        focus: 'Fundamentals, data structures and infrastructure.',
      },
    ],
    certLabel: 'Certification',
    certName: 'GitHub Certified Foundations',
  },
  outside: {
    eyebrow: 'Away from the machine',
    title: 'Where I recharge',
    tabsLabel: 'Hobbies',
    tabs: [
      {
        id: 'mountains',
        label: 'Mountains and expeditions',
        title: 'Mountains and expeditions',
        text: 'The mountain accepts no excuses and no shortcuts. Being on the trail with a pack on my back, facing changes in weather and altitude, demands total mental presence and careful management of physical limits. It is on the summits that I find the silence I need to clear the noise of the corporate world and practice clarity under strain.',
        story: {
          label: 'The first mountain',
          meta: ['Mount Roraima', '2025', '7 days'],
          text: 'My first mountain was Mount Roraima. I had never camped in my life. It was 7 days away from everything, and it is the journey that changed me the most: it taught me to be a much simpler person and to value the small things.',
        },
      },
      {
        id: 'coffee',
        label: 'Specialty coffee',
        title: 'The specialty coffee ritual',
        text: 'Brewing coffee by hand is the analog counterpoint to the speed of technology. Grinding, temperature control and pour rate demand method, calm attention and respect for the time the process takes. A well-extracted cup is a daily exercise in artisanal precision.',
        chips: ['Hario V60', 'French Press', 'Siphon', 'AeroPress'],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    text: 'Open to conversations about platform engineering, resilient architecture, automation pipelines, or mountaineering and specialty coffee.',
    emailLabel: 'Email',
  },
  footer:
    '© André Luis Teixeira. Every second counts. Built with Astro, Vue 3 and TypeScript.',
};
