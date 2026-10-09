import type { Dict } from './types';
import { urls } from './urls';

export const es: Dict = {
  htmlLang: 'es',
  meta: {
    title: 'André Luis Teixeira | Ingeniero de Plataforma',
    description:
      'Ingeniero de Plataforma en Santander. CI/CD, GitHub Actions, TypeScript, Java y arquitecturas resilientes. Proyectos, trayectoria y lo que hago lejos de las pantallas.',
  },
  a11y: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    language: 'Idioma',
    mainNav: 'Navegación principal',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    journey: 'Trayectoria',
    engineering: 'Ingeniería',
    stack: 'Stack',
    projects: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',
    mountains: 'Montañas',
    coffee: 'Café',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Ingeniero de Plataforma',
    status: 'Ingeniero de Plataforma en Santander',
    location: 'Embu-Guaçu, SP · Brasil',
    signature: 'Every second counts.',
    bio: 'Diseño y mantengo arquitecturas resilientes, pipelines de automatización y herramientas que eliminan la complejidad técnica. Lejos de las pantallas, busco claridad en la altitud de las montañas, en la precisión de un café de especialidad y en la disciplina constante de aprender de la incertidumbre.',
    focus: ['CI/CD', 'GitHub Actions', 'TypeScript', 'Java y Spring Boot', 'System Design', 'AWS'],
    facts: [
      { value: '5+', label: 'años en tecnología' },
      { value: '15', label: 'años: edad de mi primer empleo' },
      { value: '44', label: 'repositorios públicos' },
      { value: '14', label: 'montañas en 2026' },
    ],
    photoAlt: 'André Luis Teixeira sonriendo, con gorra y mochila de senderismo',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Ponerse en contacto',
  },
  principles: {
    eyebrow: 'Postura y principios',
    title: 'Cómo pienso',
    cards: [
      {
        title: 'Curiosidad investigativa',
        text: 'Mi camino en la tecnología no vino de atajos. Nació de la inquietud práctica por entender cómo funcionan las cosas bajo la superficie. Investigo lo que se rompe, los cuellos de botella reales y cómo diseñar sistemas que resistan el impacto de producción sin depender de parches provisorios.',
      },
      {
        title: 'El filtro antifrágil',
        text: 'Los sistemas frágiles se rompen bajo estrés; los sistemas meramente robustos aguantan el impacto hasta su límite. Mi objetivo al diseñar soluciones y tomar decisiones es la antifragilidad: crear estructuras que absorban lo imprevisto, aprendan del error operativo y se fortalezcan con cada golpe.',
        note: 'Una idea prestada de Nassim Taleb, aplicada al código, a las decisiones y a los hábitos.',
      },
      {
        title: 'El peso del tiempo',
        text: 'La urgencia del lema "Every second counts" no es prisa ciega, sino presencia activa. Significa eliminar complejidades inútiles, no dudar ante lo inevitable y construir herramientas que respeten el tiempo de quienes dependen de ellas.',
        note: 'El lema está tatuado en mi antebrazo.',
      },
    ],
  },
  journey: {
    eyebrow: 'Origen y trayectoria',
    title: 'De dónde vengo',
    blocks: [
      {
        title: 'El aprendizaje en el piso de la tienda',
        text: 'Mi ética de trabajo y mi capacidad para lidiar con la realidad no empezaron frente a una pantalla. A los 15 años di mis primeros pasos profesionales en el comercio local, atendiendo y operando directamente en J.A Bazar e Papelaria. Atender a todo tipo de público, cerrar la caja, ordenar el inventario y resolver los imprevistos de la rutina me enseñaron pronto el peso de rendir cuentas, de la responsabilidad y del respeto al cliente.',
      },
      {
        title: 'La transición hacia la tecnología',
        text: 'Llevé esa misma solidez práctica conmigo cuando entré en la tecnología, donde trabajo desde hace más de 5 años. Por encarar los sistemas con la seriedad de quien conoce el costo de una falla en el mundo real, asumí de forma natural el papel de referente técnico y punto focal en los equipos por los que pasé: diseñando arquitecturas, resolviendo incidentes críticos y dando autonomía a los desarrolladores.',
      },
      {
        title: 'El camino por encima del destino',
        text: 'Haber llegado a la ingeniería de plataforma y al soporte de sistemas complejos no es una línea de meta. El proceso diario de estudiar, errar, probar y refinar importa tanto como el punto de llegada. Sigo aprendiendo, sin espacio para la comodidad.',
      },
    ],
    timelineTitle: 'Hitos',
    timeline: [
      {
        when: 'A los 15',
        title: 'J.A Bazar e Papelaria',
        text: 'Primer empleo: atención al cliente, caja e inventario en el comercio local.',
      },
      {
        when: '2020',
        title: 'Llegada a GitHub',
        text: 'La cuenta que hoy reúne 44 repositorios públicos nace en mayo.',
      },
      {
        when: '2021 a 2022',
        title: 'Estudiar haciendo',
        text: 'Java y React en Alura, bootcamps (Santander Bootcamp Fullstack, Rocketseat), machine learning, un juego en blockchain y el trabajo de fin de carrera en Sumaré.',
      },
      {
        when: '2022 a 2023',
        title: 'Las primeras herramientas de verdad',
        text: 'Un sistema de inventario con lectura de códigos de barras y una automatización en Spring Boot y Selenium para revisar las clases del día en SED SP.',
      },
      {
        when: '2024',
        title: 'MBA en Impacta',
        text: 'DevSecOps, mobile, Docker y Kubernetes, y análisis de código con SonarCloud.',
      },
      {
        when: '2025',
        title: 'Clube Quinze y el Monte Roraima',
        text: 'La app y la API de Clube Quinze toman forma. Primera montaña: siete días en el Roraima, sin haber acampado nunca antes.',
      },
      {
        when: '2026',
        title: 'Flip & Brew y 14 montañas',
        text: 'La app que convierte el tiempo sin celular en café toma forma. En los senderos, 14 montañas en un año.',
      },
      {
        when: 'Hoy',
        title: 'Ingeniero de Plataforma en Santander',
        text: 'CI/CD, GitHub Actions y automatización de infraestructura global, como referente técnico del equipo.',
      },
    ],
  },
  engineering: {
    eyebrow: 'Ingeniería de plataforma',
    title: 'En qué trabajo',
    pillars: [
      {
        title: 'Automatización & CI/CD continuo',
        text: 'Construcción y mantenimiento de pipelines de automatización y flujos globales de entrega. Foco en previsibilidad, repetibilidad y seguridad.',
        tags: ['GitHub Actions', 'TypeScript', 'Deploy global'],
      },
      {
        title: 'Resiliencia & confiabilidad',
        text: 'Arquitecturas diseñadas para resistir fallas. Minimización de puntos únicos de ruptura y observabilidad proactiva.',
        tags: ['System Design', 'Sistemas distribuidos', 'Observabilidad'],
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Creación de herramientas internas que reducen la fricción diaria de los equipos y la carga cognitiva.',
        tags: ['Herramientas internas', 'Autonomía de los equipos', 'Menos fricción'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Con qué construyo',
    lead: 'Java es mi base más fuerte. A su alrededor: TypeScript, nube y automatización.',
    groups: [
      { title: 'Lenguajes', items: ['Java', 'TypeScript', 'JavaScript'] },
      {
        title: 'Back end y APIs',
        items: ['Spring Boot', 'NestJS', 'Node.js', 'Serverless', 'REST con JWT'],
      },
      {
        title: 'Front end y mobile',
        items: ['Vue 3', 'Angular', 'React Native', 'Expo', 'HTML y CSS'],
      },
      {
        title: 'Nube, DevOps y automatización',
        items: ['GitHub Actions', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'SonarCloud', 'Git'],
      },
      {
        title: 'Arquitectura',
        items: ['System Design', 'Sistemas distribuidos', 'Resiliencia', 'Antifragilidad'],
      },
    ],
  },
  projects: {
    eyebrow: 'Proyectos seleccionados',
    title: 'Lo que he construido',
    selectLabel: 'Elige un proyecto',
    more: 'Ver todos los repositorios en GitHub',
    items: [
      {
        name: 'Thunder',
        kind: 'Plataforma y automatización',
        description:
          'Optimización y refactorización de un workflow global de despliegue en GitHub Actions, reescrito por completo en TypeScript.',
        highlights: [
          'Más escala, con una ejecución mucho más rápida.',
          'Mantenimiento simple: la lógica del despliegue ahora vive en TypeScript.',
          'Pensado para un despliegue global, donde cada segundo del pipeline cuenta.',
        ],
        tags: ['GitHub Actions', 'TypeScript', 'CI/CD'],
      },
      {
        name: 'Clube Quinze',
        kind: 'Aplicación móvil',
        description:
          'Construida con foco en usabilidad directa y estabilidad. Acompañada desde la concepción de la arquitectura hasta la publicación en las tiendas (App Store y Google Play).',
        highlights: [
          'Del diseño de la interfaz a los builds y pruebas con Expo y TestFlight, hasta la distribución en las tiendas.',
          'API REST en Spring Boot, versionada, con autenticación JWT y renovación de sesión.',
          'Planes y niveles de membresía, perfil con galería y notificaciones push.',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'JWT'],
        links: [
          { label: 'Código de la app', href: urls.clubeQuinzeApp },
          { label: 'Código de la API', href: urls.clubeQuinzeApi },
        ],
      },
      {
        name: 'Flip & Brew',
        demo: 'flip',
        kind: 'Productividad y hábitos',
        description:
          'Aplicación diseñada como respuesta al exceso de estímulos. Monitorea la retención de atención e incentiva pausas conscientes.',
        highlights: [
          'Pones el celular boca abajo y una taza se llena en tiempo real. El tiempo sin celular se vuelve monedas.',
          'El conteo usa horarios, así que sigue correcto con la pantalla apagada o la app en segundo plano.',
          'Check-in de energía en tazas de café, panel de bienestar y artículos sobre antifragilidad y estoicismo.',
          'En portugués, inglés y español, con cuenta opcional (la app nunca exige registro).',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
        links: [{ label: 'Código en GitHub', href: urls.flipAndBrew }],
      },
      {
        name: 'ClassChecker',
        kind: 'Automatización',
        description:
          'Aplicación en Spring Boot con Selenium que captura las pantallas de SED SP para revisar las clases dictadas en un día.',
        highlights: [
          'Cambia una revisión manual y repetitiva por una rutina automática.',
          'Los resultados salen como capturas de pantalla, fáciles de revisar.',
        ],
        tags: ['Java', 'Spring Boot', 'Selenium'],
        links: [{ label: 'Código en GitHub', href: urls.classChecker }],
      },
    ],
  },
  education: {
    eyebrow: 'Formación y credenciales',
    title: 'Teoría y práctica',
    lead: 'La teoría sin práctica se vuelve abstracción vacía; la práctica sin teoría se vuelve improvisación frágil.',
    items: [
      {
        degree: 'Posgrado en Tech Management',
        institution: 'FIAP',
        focus: 'Liderazgo estratégico, gobernanza y gestión.',
      },
      {
        degree: 'MBA en Ingeniería de Software',
        institution: 'Faculdade Impacta',
        focus: 'Patrones de arquitectura, calidad y gran escala.',
      },
      {
        degree: 'Licenciatura en Sistemas de Información',
        institution: 'Centro Universitário Sumaré',
        focus: 'Fundamentos, estructuras de datos e infraestructura.',
      },
    ],
    certLabel: 'Certificación',
    certName: 'GitHub Certified Foundations',
    learningTitle: 'Cursos y bootcamps en el camino',
    learning: [
      'Alura (Java y React)',
      'Santander Bootcamp Fullstack',
      'Rocketseat (NLW)',
      'Machine learning',
      'Juego en blockchain',
      'Docker y Kubernetes',
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos',
    text: 'Abierto a intercambiar ideas sobre ingeniería de plataforma, arquitectura resiliente, pipelines de automatización, o a conversar sobre montañismo y café de especialidad.',
    emailLabel: 'Correo',
  },
  footer:
    '© André Luis Teixeira. Every second counts. Desarrollado con Astro, Vue 3 y TypeScript.',
};
