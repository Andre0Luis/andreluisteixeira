import type { Locale } from '../types';

export interface MountainsPage {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; quote: string; lead: string; scroll: string };
  stats: { to: number; suffix?: string; label: string; fixed?: boolean }[];
  altimeter: { label: string; unit: string };
  lessons: {
    eyebrow: string;
    title: string;
    hint: string;
    items: { title: string; short: string; long: string }[];
  };
  roraima: {
    eyebrow: string;
    title: string;
    meta: string[];
    paragraphs: string[];
    factLabel: string;
    fact: string;
  };
  turning: { eyebrow: string; title: string; text: string; closing: string };
  bridge: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
    flipLink: string;
  };
  photo: { alt: string; caption: string };
  cta: { title: string; text: string; coffee: string };
}

export const mountains: Record<Locale, MountainsPage> = {
  pt: {
    meta: {
      title: 'Montanhas | André Luis Teixeira',
      description:
        'Do Monte Roraima às 14 montanhas de 2026: o que as trilhas me ensinaram sobre presença, limites, silêncio e simplicidade.',
    },
    hero: {
      eyebrow: 'Fora da máquina',
      title: 'Montanhas',
      quote: 'A montanha não aceita desculpas nem atalhos.',
      lead: 'Estar na trilha com a mochila nas costas, enfrentando variações de clima e altitude, exige presença mental absoluta e gerenciamento de limites físicos.',
      scroll: 'Role para subir',
    },
    stats: [
      { to: 14, label: 'montanhas em 2026' },
      { to: 7, label: 'dias no Monte Roraima' },
      { to: 2810, suffix: ' m', label: 'altitude do Roraima' },
      { to: 2025, label: 'ano da primeira montanha', fixed: true },
    ],
    altimeter: { label: 'Altitude', unit: 'm' },
    lessons: {
      eyebrow: 'O que a montanha cobra',
      title: 'Quatro coisas que não se negociam',
      hint: 'Toque em um cartão para abrir.',
      items: [
        {
          title: 'Presença',
          short: 'Presença mental absoluta.',
          long: 'Na trilha não existe piloto automático. Clima, altitude e terreno mudam o tempo todo, e é a atenção que sustenta cada decisão.',
        },
        {
          title: 'Limites',
          short: 'Gerenciar o corpo.',
          long: 'Variações de clima e altitude cobram um preço físico. Conhecer o próprio limite, e respeitá-lo, faz parte da subida.',
        },
        {
          title: 'Silêncio',
          short: 'Esvaziar o ruído.',
          long: 'É nos cumes que encontro o silêncio necessário para esvaziar o excesso de ruído do mundo corporativo e praticar a clareza sob desgaste.',
        },
        {
          title: 'Simplicidade',
          short: 'Dar valor às pequenas coisas.',
          long: 'Sete dias longe de tudo me ensinaram a ser uma pessoa muito mais simples e a dar valor às pequenas coisas.',
        },
      ],
    },
    roraima: {
      eyebrow: 'Capítulo 1',
      title: 'Monte Roraima',
      meta: ['2025', '7 dias', '2.810 m', 'Primeira vez acampando'],
      paragraphs: [
        'Minha primeira montanha foi o Monte Roraima. Eu nunca tinha acampado na vida.',
        'Foram 7 dias longe de tudo. É a jornada que eu digo que me mudou de forma extrema.',
        'Ela me ensinou a ser uma pessoa muito mais simples e a dar valor às pequenas coisas.',
      ],
      factLabel: 'Você sabia?',
      fact: 'O Roraima fica na tríplice fronteira entre Brasil, Venezuela e Guiana.',
    },
    turning: {
      eyebrow: 'O ponto de virada',
      title: 'Por que eu subo',
      text: 'Decidi abraçar esse caminho depois de perder a pessoa que eu mais amava. Aquela perda me acordou para viver de verdade. Hoje as montanhas são o meu jeito de me reconectar, de testar meus limites e de encontrar clareza longe do ruído.',
      closing: 'Em 2026, foram 14 montanhas.',
    },
    bridge: {
      eyebrow: 'Da trilha para o código',
      title: 'O que eu trago de volta',
      items: [
        {
          title: 'Antifragilidade',
          text: 'Clima ruim, cansaço e imprevistos são o terreno. A pergunta é a mesma que faço em produção: o que isso me ensina?',
        },
        {
          title: 'Every second counts',
          text: 'O lema que carrego tatuado no antebraço resume as duas vidas: presença ativa, sem correria cega.',
        },
        {
          title: 'Flip & Brew',
          text: 'No meu app, a série Montanha é uma das coleções especiais da loja. A trilha também foi parar no código.',
        },
      ],
      flipLink: 'Conhecer o Flip & Brew',
    },
    photo: {
      alt: 'André Luis Teixeira de boné e mochila de trilha, sorrindo, em uma trilha',
      caption: 'Na trilha, agosto de 2026.',
    },
    cta: {
      title: 'Bora trocar ideia?',
      text: 'Se você também gosta de trilha, expedições ou só quer conversar sobre como a montanha muda a gente, é só chamar.',
      coffee: 'Depois da trilha, um café',
    },
  },

  en: {
    meta: {
      title: 'Mountains | André Luis Teixeira',
      description:
        'From Mount Roraima to the 14 mountains of 2026: what the trails taught me about presence, limits, silence and simplicity.',
    },
    hero: {
      eyebrow: 'Away from the machine',
      title: 'Mountains',
      quote: 'The mountain accepts no excuses and no shortcuts.',
      lead: 'Being on the trail with a pack on my back, facing changes in weather and altitude, demands total mental presence and careful management of physical limits.',
      scroll: 'Scroll to climb',
    },
    stats: [
      { to: 14, label: 'mountains in 2026' },
      { to: 7, label: 'days on Mount Roraima' },
      { to: 2810, suffix: ' m', label: 'height of Roraima' },
      { to: 2025, label: 'year of the first mountain', fixed: true },
    ],
    altimeter: { label: 'Altitude', unit: 'm' },
    lessons: {
      eyebrow: 'What the mountain demands',
      title: 'Four things that are not negotiable',
      hint: 'Tap a card to open it.',
      items: [
        {
          title: 'Presence',
          short: 'Total mental presence.',
          long: 'There is no autopilot on the trail. Weather, altitude and terrain keep changing, and attention is what supports every decision.',
        },
        {
          title: 'Limits',
          short: 'Managing the body.',
          long: 'Changes in weather and altitude take a physical toll. Knowing your own limit, and respecting it, is part of the climb.',
        },
        {
          title: 'Silence',
          short: 'Clearing the noise.',
          long: 'It is on the summits that I find the silence I need to clear the excess noise of the corporate world and practice clarity under strain.',
        },
        {
          title: 'Simplicity',
          short: 'Valuing the small things.',
          long: 'Seven days away from everything taught me to be a much simpler person and to value the small things.',
        },
      ],
    },
    roraima: {
      eyebrow: 'Chapter 1',
      title: 'Mount Roraima',
      meta: ['2025', '7 days', '2,810 m', 'First time camping'],
      paragraphs: [
        'My first mountain was Mount Roraima. I had never camped in my life.',
        'It was 7 days away from everything. It is the journey I say changed me the most.',
        'It taught me to be a much simpler person and to value the small things.',
      ],
      factLabel: 'Did you know?',
      fact: 'Roraima sits at the tripoint between Brazil, Venezuela and Guyana.',
    },
    turning: {
      eyebrow: 'The turning point',
      title: 'Why I climb',
      text: 'I decided to embrace this path after losing the person I loved most. That loss woke me up to truly live. Today the mountains are my way of reconnecting, testing my limits and finding clarity away from the noise.',
      closing: 'In 2026, it was 14 mountains.',
    },
    bridge: {
      eyebrow: 'From the trail to the code',
      title: 'What I bring back',
      items: [
        {
          title: 'Antifragility',
          text: 'Bad weather, fatigue and surprises are the terrain. The question is the same one I ask in production: what does this teach me?',
        },
        {
          title: 'Every second counts',
          text: 'The motto tattooed on my forearm sums up both lives: active presence, no blind rushing.',
        },
        {
          title: 'Flip & Brew',
          text: 'In my app, the Mountain series is one of the special collections in the shop. The trail made it into the code too.',
        },
      ],
      flipLink: 'Meet Flip & Brew',
    },
    photo: {
      alt: 'André Luis Teixeira smiling on a trail, wearing a cap and a hiking backpack',
      caption: 'On the trail, August 2026.',
    },
    cta: {
      title: 'Want to talk?',
      text: 'If you also love trails, expeditions, or just want to talk about how the mountain changes us, reach out.',
      coffee: 'After the trail, a coffee',
    },
  },

  es: {
    meta: {
      title: 'Montañas | André Luis Teixeira',
      description:
        'Del Monte Roraima a las 14 montañas de 2026: lo que los senderos me enseñaron sobre presencia, límites, silencio y simplicidad.',
    },
    hero: {
      eyebrow: 'Fuera de la máquina',
      title: 'Montañas',
      quote: 'La montaña no acepta excusas ni atajos.',
      lead: 'Estar en el sendero con la mochila a cuestas, enfrentando cambios de clima y altitud, exige presencia mental absoluta y manejo de los límites físicos.',
      scroll: 'Desplázate para subir',
    },
    stats: [
      { to: 14, label: 'montañas en 2026' },
      { to: 7, label: 'días en el Monte Roraima' },
      { to: 2810, suffix: ' m', label: 'altitud del Roraima' },
      { to: 2025, label: 'año de la primera montaña', fixed: true },
    ],
    altimeter: { label: 'Altitud', unit: 'm' },
    lessons: {
      eyebrow: 'Lo que la montaña exige',
      title: 'Cuatro cosas que no se negocian',
      hint: 'Toca una tarjeta para abrirla.',
      items: [
        {
          title: 'Presencia',
          short: 'Presencia mental absoluta.',
          long: 'En el sendero no existe el piloto automático. Clima, altitud y terreno cambian todo el tiempo, y la atención sostiene cada decisión.',
        },
        {
          title: 'Límites',
          short: 'Manejar el cuerpo.',
          long: 'Los cambios de clima y altitud cobran un precio físico. Conocer el propio límite, y respetarlo, es parte de la subida.',
        },
        {
          title: 'Silencio',
          short: 'Vaciar el ruido.',
          long: 'Es en las cumbres donde encuentro el silencio necesario para vaciar el exceso de ruido del mundo corporativo y practicar la claridad bajo desgaste.',
        },
        {
          title: 'Simplicidad',
          short: 'Valorar las pequeñas cosas.',
          long: 'Siete días lejos de todo me enseñaron a ser una persona mucho más simple y a valorar las pequeñas cosas.',
        },
      ],
    },
    roraima: {
      eyebrow: 'Capítulo 1',
      title: 'Monte Roraima',
      meta: ['2025', '7 días', '2.810 m', 'Primera vez acampando'],
      paragraphs: [
        'Mi primera montaña fue el Monte Roraima. Nunca había acampado en mi vida.',
        'Fueron 7 días lejos de todo. Es el viaje que digo que me cambió de forma extrema.',
        'Me enseñó a ser una persona mucho más simple y a valorar las pequeñas cosas.',
      ],
      factLabel: '¿Sabías que...?',
      fact: 'El Roraima está en la triple frontera entre Brasil, Venezuela y Guyana.',
    },
    turning: {
      eyebrow: 'El punto de inflexión',
      title: 'Por qué subo',
      text: 'Decidí abrazar este camino después de perder a la persona que más amaba. Esa pérdida me despertó para vivir de verdad. Hoy las montañas son mi forma de reconectarme, de probar mis límites y de encontrar claridad lejos del ruido.',
      closing: 'En 2026 fueron 14 montañas.',
    },
    bridge: {
      eyebrow: 'Del sendero al código',
      title: 'Lo que traigo de vuelta',
      items: [
        {
          title: 'Antifragilidad',
          text: 'Mal clima, cansancio e imprevistos son el terreno. La pregunta es la misma que hago en producción: ¿qué me enseña esto?',
        },
        {
          title: 'Every second counts',
          text: 'El lema que llevo tatuado en el antebrazo resume las dos vidas: presencia activa, sin prisa ciega.',
        },
        {
          title: 'Flip & Brew',
          text: 'En mi app, la serie Montaña es una de las colecciones especiales de la tienda. El sendero también llegó al código.',
        },
      ],
      flipLink: 'Conocer Flip & Brew',
    },
    photo: {
      alt: 'André Luis Teixeira sonriendo en un sendero, con gorra y mochila de senderismo',
      caption: 'En el sendero, agosto de 2026.',
    },
    cta: {
      title: '¿Conversamos?',
      text: 'Si a ti también te gustan los senderos y las expediciones, o solo quieres hablar de cómo la montaña nos cambia, escríbeme.',
      coffee: 'Después del sendero, un café',
    },
  },
};
