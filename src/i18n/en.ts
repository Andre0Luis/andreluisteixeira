import type { Dict } from './types';
import { urls } from './urls';

export const en: Dict = {
  htmlLang: 'en',
  meta: {
    title: 'André Luis Teixeira | Platform Engineer',
    description:
      'Platform Engineer at Santander. CI/CD, GitHub Actions, TypeScript, Java and resilient architectures. Projects, journey and what I do away from the screen.',
  },
  a11y: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    mainNav: 'Main navigation',
  },
  nav: {
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    engineering: 'Engineering',
    stack: 'Stack',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    mountains: 'Mountains',
    coffee: 'Coffee',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Platform Engineer',
    status: 'Platform Engineer at Santander',
    location: 'Embu-Guaçu, SP · Brazil',
    signature: 'Every second counts.',
    bio: 'I design and sustain resilient architectures, automation pipelines and tools that remove technical complexity. Away from the screen, I look for clarity at mountain altitude, in the precision of a specialty coffee and in the steady discipline of learning from uncertainty.',
    focus: ['CI/CD', 'GitHub Actions', 'TypeScript', 'Java and Spring Boot', 'System Design', 'AWS'],
    facts: [
      { value: '5+', label: 'years in technology' },
      { value: '15', label: 'age at my first job' },
      { value: '44', label: 'public repositories' },
      { value: '14', label: 'mountains in 2026' },
    ],
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
        note: "An idea borrowed from Nassim Taleb, applied to code, decisions and habits.",
      },
      {
        title: 'The weight of time',
        text: 'The urgency behind "Every second counts" is not blind rushing but active presence. It means removing useless complexity, not hesitating in the face of the inevitable, and building tools that respect the time of the people who depend on them.',
        note: 'The motto is tattooed on my forearm.',
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
    timelineTitle: 'Milestones',
    timeline: [
      {
        when: 'At 15',
        title: 'J.A Bazar e Papelaria',
        text: 'First job: customer service, cash register and stock in local retail.',
      },
      {
        when: '2020',
        title: 'Joining GitHub',
        text: 'The account that now holds 44 public repositories is created in May.',
      },
      {
        when: '2021 to 2022',
        title: 'Learning by doing',
        text: 'Java and React at Alura, bootcamps (Santander Bootcamp Fullstack, Rocketseat), machine learning, a blockchain game and the final thesis at Sumaré.',
      },
      {
        when: '2022 to 2023',
        title: 'First real tools',
        text: 'An inventory system with barcode scanning, and a Spring Boot and Selenium automation to check the day’s classes on SED SP.',
      },
      {
        when: '2024',
        title: 'MBA at Impacta',
        text: 'DevSecOps, mobile, Docker and Kubernetes, and code analysis with SonarCloud.',
      },
      {
        when: '2025',
        title: 'Clube Quinze and Mount Roraima',
        text: 'The Clube Quinze app and API take shape. First mountain: seven days on Roraima, having never camped before.',
      },
      {
        when: '2026',
        title: 'Flip & Brew and 14 mountains',
        text: 'The app that turns offline time into coffee takes shape. On the trails, 14 mountains in one year.',
      },
      {
        when: 'Today',
        title: 'Platform Engineer at Santander',
        text: 'CI/CD, GitHub Actions and global infrastructure automation, as the team’s technical reference.',
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
        tags: ['GitHub Actions', 'TypeScript', 'Global deploy'],
      },
      {
        title: 'Resilience & reliability',
        text: 'Architectures designed to withstand failure. Fewer single points of failure and proactive observability.',
        tags: ['System Design', 'Distributed systems', 'Observability'],
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Building internal tools that reduce the daily friction of teams and lower cognitive load.',
        tags: ['Internal tools', 'Team autonomy', 'Less friction'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'What I build with',
    lead: 'Java is my strongest foundation. Around it: TypeScript, cloud and automation.',
    groups: [
      { title: 'Languages', items: ['Java', 'TypeScript', 'JavaScript'] },
      {
        title: 'Back end and APIs',
        items: ['Spring Boot', 'NestJS', 'Node.js', 'Serverless', 'REST with JWT'],
      },
      {
        title: 'Front end and mobile',
        items: ['Vue 3', 'Angular', 'React Native', 'Expo', 'HTML and CSS'],
      },
      {
        title: 'Cloud, DevOps and automation',
        items: ['GitHub Actions', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'SonarCloud', 'Git'],
      },
      {
        title: 'Architecture',
        items: ['System Design', 'Distributed systems', 'Resilience', 'Antifragility'],
      },
    ],
  },
  projects: {
    eyebrow: 'Selected projects',
    title: 'What I have built',
    selectLabel: 'Choose a project',
    more: 'See all repositories on GitHub',
    items: [
      {
        name: 'Thunder',
        kind: 'Platform and automation',
        description:
          'Optimization and refactoring of a global deployment workflow in GitHub Actions, rewritten entirely in TypeScript.',
        highlights: [
          'More scale, with much faster execution.',
          'Simple maintenance: the deployment logic now lives in TypeScript.',
          'Built for a global deploy, where every second of a pipeline counts.',
        ],
        tags: ['GitHub Actions', 'TypeScript', 'CI/CD'],
      },
      {
        name: 'Clube Quinze',
        kind: 'Mobile app',
        description:
          'Built with a focus on direct usability and stability. Followed from the architecture concept through to publication on the stores (App Store and Google Play).',
        highlights: [
          'From interface design to builds and tests with Expo and TestFlight, through to store distribution.',
          'Versioned REST API in Spring Boot, with JWT authentication and session refresh.',
          'Membership plans and tiers, profile with gallery and push notifications.',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'JWT'],
        links: [
          { label: 'App code', href: urls.clubeQuinzeApp },
          { label: 'API code', href: urls.clubeQuinzeApi },
        ],
      },
      {
        name: 'Flip & Brew',
        demo: 'flip',
        kind: 'Productivity and habits',
        description:
          'An app designed as a response to excess stimulation. It tracks attention retention and encourages mindful breaks.',
        highlights: [
          'You put the phone face down and a cup fills in real time. Offline time becomes coins.',
          'Counting uses timestamps, so it stays correct with the screen off or the app in the background.',
          'Energy check-in in coffee cups, a well-being dashboard and articles on antifragility and stoicism.',
          'In Portuguese, English and Spanish, with an optional account (the app never requires sign-up).',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
        links: [{ label: 'Code on GitHub', href: urls.flipAndBrew }],
      },
      {
        name: 'ClassChecker',
        kind: 'Automation',
        description:
          'A Spring Boot application with Selenium that captures SED SP screens to check the classes taught on a given day.',
        highlights: [
          'Replaces a repetitive manual check with an automatic routine.',
          'Results come out as screenshots that are easy to review.',
        ],
        tags: ['Java', 'Spring Boot', 'Selenium'],
        links: [{ label: 'Code on GitHub', href: urls.classChecker }],
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
    learningTitle: 'Courses and bootcamps along the way',
    learning: [
      'Alura (Java and React)',
      'Santander Bootcamp Fullstack',
      'Rocketseat (NLW)',
      'Machine learning',
      'Blockchain game',
      'Docker and Kubernetes',
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
