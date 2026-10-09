import type { Dict } from './types';
import { urls } from './urls';

export const es: Dict = {
  htmlLang: 'es',
  meta: {
    title: 'André Luis Teixeira | Ingeniero de Plataforma',
    description:
      'Platform Engineer en Santander, en COESDLC, en un frente global del banco. CI/CD, GitHub Actions, TypeScript, System Design e IA generativa.',
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
    focus: ['CI/CD', 'GitHub Actions', 'TypeScript', 'Java y Spring Boot', 'System Design', 'IA generativa', 'MCPs y agentes', 'Kubernetes y AWS'],
    facts: [
      { value: '5+', label: 'años en tecnología' },
      { value: '10+', label: 'años trabajando, desde los 15' },
      { value: '3', label: 'formaciones: licenciatura, MBA y posgrado' },
      { value: '14', label: 'montañas en 2026' },
    ],
    photoAlt: 'André Luis Teixeira sonriendo, con gorra y mochila de senderismo',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Ponerse en contacto',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Quién está del otro lado',
    paragraphs: [
      'Soy Platform Engineer en Santander, en COESDLC, y trabajo en un frente global del banco, como el referente técnico de la squad.',
      'Mi especialidad es modernizar ecosistemas complejos, resolver cuellos de botella de rendimiento y garantizar la resiliencia de plataformas de hiperescala. En uno de mis trabajos más recientes logré un 40% más de eficiencia en los despliegues.',
      'Practico un liderazgo técnico hands-on: defino estándares de ingeniería, conduzco code reviews críticos y sigo en el código, junto con equipos globales. Traigo una base sólida en full stack (Java, Spring Boot, Angular y React) y una visión de Tech Management, que profundizo en el posgrado de FIAP.',
      'Mi historia empezó antes del código. A los 15 años entré en el negocio de la familia, J.A Bazar e Papelaria: más de cinco años a tiempo completo y otros cinco los sábados. Allí un perfil introvertido se volvió comunicación asertiva, con empatía, inteligencia emocional y capacidad de negociación. Las soft skills que llevo a todo nacieron en esa tienda.',
      'Hoy llevo la automatización más allá del pipeline. Tengo dominio de las herramientas de IA generativa y construyo mis propios MCPs y agentes para sacar del camino el trabajo repetitivo. También creo productos por mi cuenta, como Clube Quinze, que acompañé de la arquitectura a la publicación en las tiendas, y Flip & Brew, una app para recuperar la atención.',
      'Lejos de las pantallas, estoy en las montañas (fueron 14 en 2026, y la primera fue el Monte Roraima), frente a un café preparado a mano, armando Lego o mirando la Luna con el telescopio. Todo eso, de alguna forma, me hace mejor en lo que hago.',
    ],
    cardTitle: 'En resumen',
    facts: [
      { label: 'Cargo', value: 'Platform Engineer' },
      { label: 'Empresa', value: 'Santander' },
      { label: 'Área', value: 'COESDLC, en un frente global del banco' },
      { label: 'Lugar', value: 'Embu-Guaçu, SP, Brasil' },
      { label: 'Base técnica', value: 'Java, Spring Boot, TypeScript y Node.js' },
      {
        label: 'Foco',
        value: 'Arquitectura de plataformas, CI/CD global (GitHub Actions y Jenkins), cultura DevOps y SRE, liderazgo técnico hands-on, Kubernetes y AWS, optimización de rendimiento',
      },
      {
        label: 'Formación',
        value: 'Posgrado en Tech Management (FIAP, 2026), MBA Ejecutivo en Ingeniería de Software (Impacta), Licenciatura en Sistemas de Información (Sumaré)',
      },
      { label: 'Certificaciones', value: 'GitHub Foundations (2025) y Devin Foundations, de Cognition (2026)' },
      { label: 'Fuera de las pantallas', value: 'Montañas, café de especialidad, Lego y astronomía' },
    ],
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
    title: 'El camino hasta aquí',
    stepLabel: 'Etapa',
    tookLabel: 'Lo que me llevé',
    prev: 'Anterior',
    next: 'Siguiente',
    steps: [
      {
        when: 'Sep. 2015 a 2026',
        title: 'J.A Bazar e Papelaria',
        text: 'Empecé a los 15 años en el negocio de la familia, en Embu-Guaçu. Pasé de la primera línea de atención a la gestión del día a día: caja, precios, flujo de caja y procesos administrativos. Allí un perfil introvertido se volvió comunicación asertiva, con inteligencia emocional, empatía y capacidad de negociación. También di mis primeros pasos en tecnología, cuidando las computadoras y la red local de la tienda. Incluso después de entrar al mercado de software, seguí allí todos los sábados por más de cinco años, hasta cerrar ese ciclo en 2026, con mucho orgullo.',
        took: ['Comunicación asertiva', 'Inteligencia emocional', 'Empatía', 'Negociación', 'Ética de trabajo', 'Gestión del tiempo'],
      },
      {
        when: 'Dic. 2020 a nov. 2022',
        title: 'FNC IT Solutions',
        text: 'Entré como pasante, con inmersión en full stack y cultura DevOps, y me efectivizaron como desarrollador junior en solo 7 meses. Llegué a semi senior liderando, de punta a punta, un sistema B2B que automatizó la creación de currículos: un proceso manual que tomaba días pasó a generar documentos en pocos minutos. En el camino, construí una base de conocimiento inteligente y la arquitectura de un chatbot integrado con IA.',
        took: ['Java y Spring Boot', 'Angular', 'Full stack', 'Scrum', 'Primer contacto con CI/CD'],
      },
      {
        when: 'Oct. 2022 a ene. 2023',
        title: 'unike.TECH',
        text: 'Como desarrollador full stack semi senior, trabajé con biometría facial: arquitectura, modelado de datos e implementación de punta a punta de sistemas complejos, con APIs de alta disponibilidad en Java y Spring Boot conectadas a interfaces dinámicas en React.',
        took: ['Biometría facial', 'Java y Spring Boot', 'React', 'APIs de alta disponibilidad'],
      },
      {
        when: 'Feb. 2023 a may. 2025',
        title: 'Minsait',
        text: 'Como Systems Engineer, desarrollé y optimicé pipelines de despliegue en Jenkins, goberné microservicios críticos de automatización de infraestructura y resolví cuellos de botella de pipelines legados, reduciendo el tiempo de build y elevando la tasa de éxito de los despliegues. En 2025, ya como Systems Engineer II, participé en la fase inicial de un proyecto global del banco, con los primeros diseños de arquitectura y el modelado técnico de la solución.',
        took: ['Jenkins', 'Microservicios', 'Optimización de pipelines', 'System Design', 'Arquitectura de Release'],
      },
      {
        when: 'May. 2025 hasta hoy',
        title: 'Platform Engineer, Santander',
        text: 'Referente técnico de la squad, en COESDLC y en un frente global del banco. Lidero técnicamente y sigo en el código: estándares de ingeniería, code reviews críticos y desarrollo del backend. En uno de mis trabajos más recientes logré un 40% más de eficiencia en los despliegues.',
        took: ['Liderazgo técnico hands-on', 'GitHub Actions', 'TypeScript', 'Code review', 'Estándares de ingeniería'],
      },
      {
        when: 'Ahora',
        title: 'IA generativa y agentes',
        text: 'Tengo dominio de las herramientas de IA generativa y las uso para automatizar lo repetitivo. Construyo mis propios MCPs y agentes, a la medida del flujo de trabajo. En febrero de 2026 recibí el badge Devin Foundations, de Cognition.',
        took: ['IA generativa', 'MCPs propios', 'Agentes propios', 'Automatizaciones'],
      },
      {
        when: 'Sin línea de meta',
        title: 'Siempre aprendiendo',
        text: 'Licenciatura en Sistemas de Información en Sumaré (2018 a 2022), MBA Ejecutivo en Ingeniería de Software en Impacta (2024 a 2025) y, en 2026, el posgrado en Tech Management en FIAP. A eso sumo GitHub Foundations y una base en seguridad de la información y pentest. El estudio, el error, la prueba y el refinamiento importan tanto como el destino, y no hay espacio para la comodidad.',
        took: ['Tech Management', 'Ingeniería de Software', 'Seguridad de la información', 'Aprendizaje continuo'],
      },
    ],
  },
  engineering: {
    eyebrow: 'Ingeniería de plataforma',
    title: 'Lo que hago',
    pillars: [
      {
        title: 'Liderazgo técnico',
        text: 'Referente técnico de la squad. Defino estándares de ingeniería, conduzco code reviews críticos y tomo decisiones de arquitectura, resiliencia e infraestructura, con un liderazgo hands-on: sigo en el código.',
        tags: ['Estándares de ingeniería', 'Code review', 'Dirección de arquitectura', 'Squad global'],
      },
      {
        title: 'Ingeniería de software',
        text: 'Yo desarrollo. Trabajo directo en el backend, en las shared libs y en los pipelines, y respondo por el código crítico y las reglas de negocio arquitectónicas, junto con equipos globales. Traigo una base full stack en Java, Spring Boot, Angular y React, y hoy concentro buena parte del trabajo en TypeScript y Node.js.',
        tags: ['Backend', 'Shared libs', 'Java y Spring Boot', 'TypeScript y Node.js', 'Full stack'],
      },
      {
        title: 'Automatización & CI/CD continuo',
        text: 'Construcción y mantenimiento de pipelines de automatización y flujos globales de entrega, en GitHub Actions y Jenkins. Foco en previsibilidad, repetibilidad y seguridad.',
        tags: ['GitHub Actions', 'Jenkins', 'TypeScript'],
      },
      {
        title: 'Resiliencia & confiabilidad',
        text: 'Arquitecturas diseñadas para resistir fallas. Minimización de puntos únicos de ruptura y observabilidad proactiva, con cultura DevOps y SRE.',
        tags: ['Cultura SRE', 'Alta disponibilidad', 'Observabilidad'],
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Creación de herramientas internas que reducen la fricción diaria de los equipos y la carga cognitiva. La modernización de la plataforma redujo el lead time y la fricción operativa.',
        tags: ['Herramientas internas', 'Lead time', 'Menos fricción'],
      },
      {
        title: 'System Design',
        text: 'Diseño sistemas de punta a punta: del problema de negocio a las fronteras entre servicios, pasando por datos, escala y fallas. Hice los primeros diseños de arquitectura de un proyecto global del banco y, hoy, defino las reglas de negocio arquitectónicas de la plataforma.',
        tags: ['Gran escala', 'Sistemas distribuidos', 'Decisiones de arquitectura'],
      },
      {
        title: 'IA generativa & agentes',
        text: 'Dominio de las herramientas de IA generativa aplicado a la automatización. Construyo mis propios MCPs y agentes, para que lo repetitivo se resuelva solo y las personas se enfoquen en lo que exige decisión.',
        tags: ['IA generativa', 'MCPs propios', 'Agentes propios', 'Automatizaciones'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Con qué construyo',
    lead: 'Java es mi base más fuerte. A su alrededor: TypeScript, nube, automatización e IA generativa.',
    groups: [
      { title: 'Lenguajes', items: ['Java', 'TypeScript', 'JavaScript'] },
      {
        title: 'Back end y APIs',
        items: ['Spring Boot', 'NestJS', 'Node.js', 'Hibernate', 'Liquibase', 'REST con JWT', 'Serverless'],
      },
      {
        title: 'Front end y mobile',
        items: ['Vue 3', 'Angular', 'React', 'React Native', 'Expo'],
      },
      {
        title: 'Nube, DevOps y automatización',
        items: ['GitHub Actions', 'Jenkins', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'SonarCloud', 'Git'],
      },
      {
        title: 'Arquitectura',
        items: ['System Design', 'Microservicios', 'Sistemas distribuidos', 'Resiliencia', 'Antifragilidad'],
      },
      { title: 'IA generativa y agentes', items: ['IA generativa', 'MCP (servidores propios)', 'Agentes propios', 'Automatizaciones'] },
    ],
  },
  projects: {
    eyebrow: 'Proyectos seleccionados',
    title: 'Lo que he construido',
    selectLabel: 'Elige un proyecto',
    more: 'Ver todos los repositorios en GitHub',
    items: [
      {
        name: 'Despliegue global',
        kind: 'Plataforma y automatización',
        description:
          'Lideré la modernización de una plataforma de despliegue global del banco y logré un 40% más de eficiencia en los despliegues.',
        highlights: [
          '40% más de eficiencia en los despliegues.',
          'Liderazgo técnico y desarrollo hands-on.',
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
        name: 'Automatización de currículos B2B',
        kind: 'Producto para cliente',
        description:
          'Sistema B2B, desarrollado de punta a punta en FNC IT Solutions, que automatiza la creación de currículos a partir de una metodología propietaria del cliente.',
        highlights: [
          'Un proceso manual que tomaba días pasó a generar documentos en pocos minutos.',
          'Arquitectura del sistema e integraciones entre backend y frontend, con Java, Spring Boot y Angular.',
          'Versionado con Git y GitFlow, y base de datos con Liquibase y Hibernate.',
        ],
        tags: ['Java', 'Spring Boot', 'Angular', 'Liquibase', 'Hibernate'],
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
        period: 'En curso · 2026',
        focus: 'Seis pilares: gestión, tecnología, gobernanza, innovación, negocios y personas. Arquitectura estratégica y liderazgo de equipos de alto rendimiento, conectando decisiones técnicas con el crecimiento sostenible del negocio.',
      },
      {
        degree: 'MBA Ejecutivo en Ingeniería de Software',
        institution: 'Faculdade Impacta',
        period: 'Mar. 2024 a feb. 2025',
        focus: 'Patrones de arquitectura, calidad y gran escala, con DevSecOps, mobile, Docker y Kubernetes.',
      },
      {
        degree: 'Licenciatura en Sistemas de Información',
        institution: 'Centro Universitário Sumaré',
        period: 'Jul. 2018 a jul. 2022',
        focus: 'Fundamentos, estructuras de datos e infraestructura.',
      },
    ],
    certLabel: 'Certificación',
    certName: 'GitHub Foundations',
    certNote: 'Emitida en mar. de 2025, válida hasta mar. de 2028',
    learningTitle: 'Otras certificaciones y cursos',
    learning: [
      'Devin Foundations (Cognition, 2026)',
      'Técnico en Programación (Escola de TI, 2022)',
      'Técnico en Seguridad de la Información (Escola de TI, 2022)',
      'Pentest Aplicado (Escola de TI, 2022)',
      'Formación Spring Framework (Alura, 2022)',
      'Spring Boot: API REST, seguridad y pruebas (Alura, 2022)',
      'Redes inalámbricas (Sumaré, 2021)',
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos',
    text: 'Abierto a intercambiar ideas sobre ingeniería de plataforma, arquitectura resiliente, pipelines de automatización, o a conversar sobre montañismo y café de especialidad.',
    emailLabel: 'Correo',
  },
  footer: '© André Luis Teixeira. Every second counts.',
  built: {
    eyebrow: 'Cómo se construyó',
    title: 'Por dentro de este sitio',
    paragraphs: [
      'Cada tecnología de este sitio fue elegida a mano, pensando en que cargue rápido, funcione bien en cualquier pantalla y sea simple de mantener.',
      'El código fue escrito con la ayuda de una IA generativa, Claude, de Anthropic, a quien doy el crédito por la construcción. La arquitectura, las decisiones y las reglas que guiaron el código las dicté yo.',
      'El código fuente está en GitHub, y desde allí se publica el sitio, a través de GitHub Pages.',
    ],
    items: [
      { id: 'astro', name: 'Astro', role: 'Páginas estáticas y rápidas, con JavaScript solo donde hace falta.' },
      { id: 'vue', name: 'Vue 3', role: 'Los componentes interactivos: pipeline, recorrido y laboratorio de café.' },
      { id: 'typescript', name: 'TypeScript', role: 'Código tipado, con los tres idiomas revisados por el compilador.' },
      { id: 'tailwind', name: 'Tailwind CSS', role: 'Tema oscuro, diseño y responsividad.' },
      { id: 'claude', name: 'Claude', role: 'Escribió el código, siguiendo mi arquitectura y mis reglas.' },
      { id: 'github', name: 'GitHub Pages', role: 'Código fuente y alojamiento del sitio.' },
    ],
    repoLabel: 'Ver el código en GitHub',
  },
};
