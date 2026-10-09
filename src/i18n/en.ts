import type { Dict } from './types';
import { urls } from './urls';

export const en: Dict = {
  htmlLang: 'en',
  meta: {
    title: 'André Luis Teixeira | Platform Engineer',
    description:
      'Platform Engineer at Santander, in COESDLC, on a global front of the bank. CI/CD, GitHub Actions, TypeScript, System Design and generative AI.',
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
    focus: ['CI/CD', 'GitHub Actions', 'TypeScript', 'Java and Spring Boot', 'System Design', 'Generative AI', 'MCPs and agents', 'Kubernetes and AWS'],
    facts: [
      { value: '5+', label: 'years in technology' },
      { value: '10+', label: 'years working, since age 15' },
      { value: '3', label: 'degrees: bachelor’s, MBA and postgraduate' },
      { value: '14', label: 'mountains in 2026' },
    ],
    photoAlt: 'André Luis Teixeira smiling, wearing a cap and a hiking backpack',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
  },
  about: {
    eyebrow: 'About me',
    title: 'Who is on the other side',
    paragraphs: [
      'I am a Platform Engineer at Santander, in COESDLC, working on a global front of the bank as the squad’s technical reference.',
      'My specialty is modernizing complex ecosystems, solving performance bottlenecks and ensuring the resilience of hyperscale platforms. In one of my most recent pieces of work, I achieved 40% more efficiency in deploys.',
      'I practice hands-on technical leadership: I set engineering standards, run critical code reviews and stay in the code, in partnership with global teams. I bring a solid full stack background (Java, Spring Boot, Angular and React) and a Tech Management view, which I deepen in my postgraduate studies at FIAP.',
      'My story began before code. At 15, I joined the family business, J.A Bazar e Papelaria: more than five years full time and another five on Saturdays. That is where an introspective profile turned into assertive communication, with empathy, emotional intelligence and negotiation skills. The soft skills I bring to everything were born in that store.',
      'Today I take automation beyond the pipeline. I have strong command of generative AI tools and build my own MCPs and agents to take repetitive work out of the way. I also build products on my own, like Clube Quinze, which I followed from architecture to store publication, and Flip & Brew, an app to win back attention.',
      'Away from the screen, I am in the mountains (14 in 2026, the first one was Mount Roraima), in front of a hand-brewed coffee, building Lego or watching the Moon through a telescope. All of it, somehow, makes me better at what I do.',
    ],
    cardTitle: 'At a glance',
    facts: [
      { label: 'Role', value: 'Platform Engineer' },
      { label: 'Company', value: 'Santander' },
      { label: 'Area', value: 'COESDLC, on a global front of the bank' },
      { label: 'Location', value: 'Embu-Guaçu, SP, Brazil' },
      { label: 'Technical base', value: 'Java, Spring Boot, TypeScript and Node.js' },
      {
        label: 'Focus',
        value: 'Platform architecture, global CI/CD (GitHub Actions and Jenkins), DevOps and SRE culture, hands-on technical leadership, Kubernetes and AWS, performance optimization',
      },
      {
        label: 'Education',
        value: 'Postgraduate in Tech Management (FIAP, 2026), Executive MBA in Software Engineering (Impacta), Bachelor’s in Information Systems (Sumaré)',
      },
      { label: 'Certifications', value: 'GitHub Foundations (2025) and Devin Foundations, by Cognition (2026)' },
      { label: 'Away from the screen', value: 'Mountains, specialty coffee, Lego and astronomy' },
    ],
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
        note: 'An idea borrowed from Nassim Taleb, applied to code, decisions and habits.',
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
    title: 'The road so far',
    stepLabel: 'Step',
    tookLabel: 'What I took with me',
    prev: 'Previous',
    next: 'Next',
    steps: [
      {
        when: 'Sep. 2015 to 2026',
        title: 'J.A Bazar e Papelaria',
        text: 'I started at 15 in the family business, in Embu-Guaçu. I went from the front line of customer service to day-to-day management: cash register, pricing, cash flow and administrative processes. That is where an introspective profile turned into assertive communication, with emotional intelligence, empathy and negotiation skills. I also took my first steps in technology, looking after the store’s computers and local network. Even after entering the software market, I kept going back every Saturday for more than five years, until I closed that cycle in 2026, with great pride.',
        took: ['Assertive communication', 'Emotional intelligence', 'Empathy', 'Negotiation', 'Work ethic', 'Time management'],
      },
      {
        when: 'Dec. 2020 to Nov. 2022',
        title: 'FNC IT Solutions',
        text: 'I joined as an intern, immersed in full stack and DevOps culture, and was promoted to junior developer in just 7 months. I reached mid-level leading, end to end, a B2B system that automated resume creation: a manual process that took days started producing documents in minutes. Along the way, I built an intelligent knowledge base and the architecture of an AI-integrated chatbot.',
        took: ['Java and Spring Boot', 'Angular', 'Full stack', 'Scrum', 'First contact with CI/CD'],
      },
      {
        when: 'Oct. 2022 to Jan. 2023',
        title: 'unike.TECH',
        text: 'As a mid-level full stack developer, I worked on facial biometrics: architecture, data modeling and end-to-end implementation of complex systems, with high-availability APIs in Java and Spring Boot connected to dynamic React interfaces.',
        took: ['Facial biometrics', 'Java and Spring Boot', 'React', 'High-availability APIs'],
      },
      {
        when: 'Feb. 2023 to May 2025',
        title: 'Minsait',
        text: 'As a Systems Engineer, I developed and optimized deploy pipelines in Jenkins, governed critical infrastructure-automation microservices and solved bottlenecks in legacy pipelines, cutting build time and raising deploy success rates. In 2025, already as Systems Engineer II, I took part in the early phase of a global project at the bank, with the first architecture designs and the technical modeling of the solution.',
        took: ['Jenkins', 'Microservices', 'Pipeline optimization', 'System Design', 'Release architecture'],
      },
      {
        when: 'May 2025 to today',
        title: 'Platform Engineer, Santander',
        text: 'Technical reference of the squad, in COESDLC and on a global front of the bank. I lead technically and stay in the code: engineering standards, critical code reviews and backend development. In one of my most recent pieces of work, I achieved 40% more efficiency in deploys.',
        took: ['Hands-on technical leadership', 'GitHub Actions', 'TypeScript', 'Code review', 'Engineering standards'],
      },
      {
        when: 'Now',
        title: 'Generative AI and agents',
        text: 'I have strong command of generative AI tools and use them to automate what is repetitive. I build my own MCPs and agents, tailored to the workflow. In February 2026, I earned the Devin Foundations badge from Cognition.',
        took: ['Generative AI', 'Own MCPs', 'Own agents', 'Automations'],
      },
      {
        when: 'No finish line',
        title: 'Always learning',
        text: 'A bachelor’s in Information Systems at Sumaré (2018 to 2022), an Executive MBA in Software Engineering at Impacta (2024 to 2025) and, in 2026, a postgraduate degree in Tech Management at FIAP. On top of that, GitHub Foundations and a base in information security and pentesting. Study, failure, testing and refinement matter as much as the destination, and there is no room for complacency.',
        took: ['Tech Management', 'Software Engineering', 'Information security', 'Continuous learning'],
      },
    ],
  },
  engineering: {
    eyebrow: 'Platform engineering',
    title: 'What I do',
    pillars: [
      {
        title: 'Technical leadership',
        text: 'Technical reference of the squad. I set engineering standards, run critical code reviews and make architecture, resilience and infrastructure decisions, with hands-on leadership: I stay in the code.',
        tags: ['Engineering standards', 'Code review', 'Architecture direction', 'Global squad'],
      },
      {
        title: 'Software engineering',
        text: 'I develop. I work directly on the backend, shared libs and pipelines, and I am accountable for the critical code and the architectural business rules, in partnership with global teams. I bring a full stack background in Java, Spring Boot, Angular and React, and today I focus much of my work on TypeScript and Node.js.',
        tags: ['Backend', 'Shared libs', 'Java and Spring Boot', 'TypeScript and Node.js', 'Full stack'],
      },
      {
        title: 'Automation & continuous CI/CD',
        text: 'Building and sustaining automation pipelines and global delivery flows, in GitHub Actions and Jenkins. Focus on predictability, repeatability and security.',
        tags: ['GitHub Actions', 'Jenkins', 'TypeScript'],
      },
      {
        title: 'Resilience & reliability',
        text: 'Architectures designed to withstand failure. Fewer single points of failure and proactive observability, with DevOps and SRE culture.',
        tags: ['SRE culture', 'High availability', 'Observability'],
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Building internal tools that reduce the daily friction of teams and lower cognitive load. Modernizing the platform cut lead time and operational friction.',
        tags: ['Internal tools', 'Lead time', 'Less friction'],
      },
      {
        title: 'System Design',
        text: 'I design systems end to end: from the business problem to the boundaries between services, through data, scale and failure. I made the first architecture designs of a global project at the bank and, today, I define the platform’s architectural business rules.',
        tags: ['Large scale', 'Distributed systems', 'Architecture decisions'],
      },
      {
        title: 'Generative AI & agents',
        text: 'Command of generative AI tools applied to automation. I build my own MCPs and agents, so the repetitive solves itself and people focus on what needs a decision.',
        tags: ['Generative AI', 'Own MCPs', 'Own agents', 'Automations'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'What I build with',
    lead: 'Java is my strongest foundation. Around it: TypeScript, cloud, automation and generative AI.',
    groups: [
      { title: 'Languages', items: ['Java', 'TypeScript', 'JavaScript'] },
      {
        title: 'Back end and APIs',
        items: ['Spring Boot', 'NestJS', 'Node.js', 'Hibernate', 'Liquibase', 'REST with JWT', 'Serverless'],
      },
      {
        title: 'Front end and mobile',
        items: ['Vue 3', 'Angular', 'React', 'React Native', 'Expo'],
      },
      {
        title: 'Cloud, DevOps and automation',
        items: ['GitHub Actions', 'Jenkins', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'SonarCloud', 'Git'],
      },
      {
        title: 'Architecture',
        items: ['System Design', 'Microservices', 'Distributed systems', 'Resilience', 'Antifragility'],
      },
      { title: 'Generative AI and agents', items: ['Generative AI', 'MCP (own servers)', 'Own agents', 'Automations'] },
    ],
  },
  projects: {
    eyebrow: 'Selected projects',
    title: 'What I have built',
    selectLabel: 'Choose a project',
    more: 'See all repositories on GitHub',
    items: [
      {
        name: 'Global deploy',
        kind: 'Platform and automation',
        description:
          'I led the modernization of a global deploy platform at the bank and achieved 40% more efficiency in deploys.',
        highlights: [
          '40% more efficiency in deploys.',
          'Technical leadership and hands-on development.',
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
        name: 'B2B resume automation',
        kind: 'Client product',
        description:
          'A B2B system, built end to end at FNC IT Solutions, that automates resume creation from a client’s proprietary methodology.',
        highlights: [
          'A manual process that took days started producing documents in minutes.',
          'System architecture and backend-to-frontend integrations, with Java, Spring Boot and Angular.',
          'Versioning with Git and GitFlow, and database management with Liquibase and Hibernate.',
        ],
        tags: ['Java', 'Spring Boot', 'Angular', 'Liquibase', 'Hibernate'],
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
        period: 'In progress · 2026',
        focus: 'Six pillars: management, technology, governance, innovation, business and people. Strategic architecture and leadership of high-performance teams, linking technical decisions to sustainable business growth.',
      },
      {
        degree: 'Executive MBA in Software Engineering',
        institution: 'Faculdade Impacta',
        period: 'Mar. 2024 to Feb. 2025',
        focus: 'Architecture patterns, quality and large scale, with DevSecOps, mobile, Docker and Kubernetes.',
      },
      {
        degree: "Bachelor's degree in Information Systems",
        institution: 'Centro Universitário Sumaré',
        period: 'Jul. 2018 to Jul. 2022',
        focus: 'Fundamentals, data structures and infrastructure.',
      },
    ],
    certLabel: 'Certification',
    certName: 'GitHub Foundations',
    certNote: 'Issued Mar. 2025, valid until Mar. 2028',
    learningTitle: 'Other certifications and courses',
    learning: [
      'Devin Foundations (Cognition, 2026)',
      'Programming Technician (Escola de TI, 2022)',
      'Information Security Technician (Escola de TI, 2022)',
      'Applied Pentest (Escola de TI, 2022)',
      'Spring Framework track (Alura, 2022)',
      'Spring Boot: REST API, security and testing (Alura, 2022)',
      'Wireless networks (Sumaré, 2021)',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    text: 'Open to conversations about platform engineering, resilient architecture, automation pipelines, or mountaineering and specialty coffee.',
    emailLabel: 'Email',
  },
  footer: '© André Luis Teixeira. Every second counts.',
  built: {
    eyebrow: 'How it was built',
    title: 'Inside this site',
    paragraphs: [
      'Every technology on this site was hand-picked, thinking about fast loading, working well on any screen and being simple to maintain.',
      'The code was written with the help of a generative AI, Claude, by Anthropic, who gets the credit for the construction. The architecture, the decisions and the rules that guided the code were dictated by me.',
      'The source code lives on GitHub, and that is where the site is published from, through GitHub Pages.',
    ],
    items: [
      { id: 'astro', name: 'Astro', role: 'Fast static pages, with JavaScript only where it is needed.' },
      { id: 'vue', name: 'Vue 3', role: 'The interactive components: pipeline, journey path and coffee lab.' },
      { id: 'typescript', name: 'TypeScript', role: 'Typed code, with all three languages checked by the compiler.' },
      { id: 'tailwind', name: 'Tailwind CSS', role: 'Dark theme, layout and responsiveness.' },
      { id: 'claude', name: 'Claude', role: 'Wrote the code, following my architecture and my rules.' },
      { id: 'github', name: 'GitHub Pages', role: 'Source code and site hosting.' },
    ],
    repoLabel: 'See the code on GitHub',
  },
};
