import type { Dict } from './types';

export const es: Dict = {
  htmlLang: 'es',
  meta: {
    title: 'André Luis Teixeira | Ingeniero de Plataforma',
    description:
      'Ingeniero de Plataforma y constructor de sistemas. Arquitecturas resilientes, pipelines de automatización y herramientas que eliminan la complejidad técnica.',
  },
  a11y: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    language: 'Idioma',
    mainNav: 'Navegación principal',
  },
  nav: {
    about: 'Sobre mí',
    journey: 'Trayectoria',
    engineering: 'Ingeniería',
    projects: 'Proyectos',
    education: 'Formación',
    outside: 'Hobbies',
    contact: 'Contacto',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Ingeniero de Plataforma & Constructor de Sistemas',
    signature: 'Every second counts.',
    bio: 'Diseño y mantengo arquitecturas resilientes, pipelines de automatización y herramientas que eliminan la complejidad técnica. Lejos de las pantallas, busco claridad en la altitud de las montañas, en la precisión de un café de especialidad y en la disciplina constante de aprender de la incertidumbre.',
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
      },
      {
        title: 'El peso del tiempo',
        text: 'La urgencia del lema "Every second counts" no es prisa ciega, sino presencia activa. Significa eliminar complejidades inútiles, no dudar ante lo inevitable y construir herramientas que respeten el tiempo de quienes dependen de ellas.',
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
  },
  engineering: {
    eyebrow: 'Ingeniería de plataforma',
    title: 'En qué trabajo',
    pillars: [
      {
        title: 'Automatización & CI/CD continuo',
        text: 'Construcción y mantenimiento de pipelines de automatización y flujos globales de entrega. Foco en previsibilidad, repetibilidad y seguridad.',
      },
      {
        title: 'Resiliencia & confiabilidad',
        text: 'Arquitecturas diseñadas para resistir fallas. Minimización de puntos únicos de ruptura y observabilidad proactiva.',
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Creación de herramientas internas que reducen la fricción diaria de los equipos y la carga cognitiva.',
      },
    ],
  },
  projects: {
    eyebrow: 'Proyectos seleccionados',
    title: 'Lo que he construido',
    selectLabel: 'Elige un proyecto',
    items: [
      {
        name: 'Clube Quinze',
        kind: 'Aplicación móvil',
        description:
          'Construida con foco en usabilidad directa y estabilidad. Acompañada desde la concepción de la arquitectura hasta la publicación en las tiendas (App Store y Google Play).',
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot'],
        channels: ['App Store', 'Google Play'],
      },
      {
        name: 'Flip & Brew',
        kind: 'Productividad y hábitos',
        description:
          'Aplicación diseñada como respuesta al exceso de estímulos. Monitorea la retención de atención e incentiva pausas conscientes.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
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
  },
  outside: {
    eyebrow: 'Fuera de la máquina',
    title: 'Donde recargo energía',
    tabsLabel: 'Hobbies',
    tabs: [
      {
        id: 'mountains',
        label: 'Montañas y expediciones',
        title: 'Montañas y expediciones',
        text: 'La montaña no acepta excusas ni atajos. Estar en el sendero con la mochila a cuestas, enfrentando cambios de clima y altitud, exige presencia mental absoluta y manejo de los límites físicos. Es en las cumbres donde encuentro el silencio necesario para vaciar el exceso de ruido del mundo corporativo y practicar la claridad bajo desgaste.',
        story: {
          label: 'La primera montaña',
          meta: ['Monte Roraima', '2025', '7 días'],
          text: 'Mi primera montaña fue el Monte Roraima. Nunca había acampado en mi vida. Fueron 7 días lejos de todo, y fue el viaje que más me cambió: me enseñó a ser una persona mucho más simple y a valorar las pequeñas cosas.',
        },
      },
      {
        id: 'coffee',
        label: 'Café de especialidad',
        title: 'El ritual del café de especialidad',
        text: 'La preparación manual del café es el contrapunto analógico a la velocidad de la tecnología. La molienda, el control de temperatura y el ritmo del vertido exigen método, atención serena y respeto por el tiempo del proceso. Una taza bien extraída es un ejercicio diario de precisión artesanal.',
        chips: ['Hario V60', 'Prensa francesa', 'Sifón', 'AeroPress'],
      },
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
