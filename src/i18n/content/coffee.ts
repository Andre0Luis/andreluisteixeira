import type { Locale } from '../types';

export interface BrewMethod {
  id: 'v60' | 'press' | 'siphon' | 'aeropress';
  name: string;
  tagline: string;
  ratio: number;
  temp: string;
  grind: string;
  total: number;
  steps: { at: number; text: string }[];
  badge?: string;
  roast?: string;
}

export interface CoffeePage {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; chips: string[] };
  stats: { to: number; label: string }[];
  favorite: {
    eyebrow: string;
    title: string;
    lead: string;
    specs: { label: string; value: string }[];
    note: string;
    secondLabel: string;
    secondName: string;
    secondText: string;
    cta: string;
  };
  lab: {
    eyebrow: string;
    title: string;
    lead: string;
    methodLabel: string;
    dose: string;
    water: string;
    ratio: string;
    temp: string;
    grind: string;
    roast: string;
    time: string;
    start: string;
    pause: string;
    reset: string;
    speed: string;
    fast: string;
    done: string;
    stepsTitle: string;
    note: string;
    methods: BrewMethod[];
  };
  extraction: {
    eyebrow: string;
    title: string;
    lead: string;
    sliders: { grind: [string, string, string]; time: [string, string, string]; temp: [string, string, string] };
    zones: {
      under: { title: string; notes: string };
      balanced: { title: string; notes: string };
      over: { title: string; notes: string };
    };
    scoreLabel: string;
    note: string;
    preset: string;
  };
  app: { eyebrow: string; title: string; text: string; cta: string };
  cta: { title: string; text: string; mountains: string };
}

export const coffee: Record<Locale, CoffeePage> = {
  pt: {
    meta: {
      title: 'Café especial | André Luis Teixeira',
      description:
        'O ritual do café especial: monte uma receita no cronômetro, entenda a extração e conheça os métodos que eu uso.',
    },
    hero: {
      eyebrow: 'Fora da máquina',
      title: 'O ritual do café especial',
      lead: 'O preparo manual de café é o contraponto analógico à velocidade da tecnologia. Moagem, controle de temperatura e taxa de fluxo de despejo exigem método, atenção calma e respeito ao tempo do processo.',
      chips: ['Hario V60', 'Prensa Francesa', 'Sifão', 'AeroPress'],
    },
    stats: [
      { to: 4, label: 'métodos de preparo' },
      { to: 3, label: 'variáveis que eu estudo: moagem, tempo e temperatura' },
    ],
    favorite: {
      eyebrow: 'Meu favorito',
      title: 'O café que eu mais gosto',
      lead: 'Gosto de café com acidez mais elevada: vivo, aromático e cheio de nuances. Esta é a receita que eu mais repito.',
      specs: [
        { label: 'Método', value: 'Hario V60' },
        { label: 'Moagem', value: 'Média' },
        { label: 'Torra', value: 'Média' },
        { label: 'Proporção', value: '16:1' },
        { label: 'Perfil', value: 'Acidez mais elevada' },
      ],
      note: '16:1 quer dizer 16 partes de água para 1 de café. Com 18 g de café, são 288 ml de água.',
      secondLabel: 'Em segundo lugar',
      secondName: 'AeroPress',
      secondText: 'Depois do V60, é o meu favorito: rápido, versátil e difícil de errar.',
      cta: 'Montar no laboratório',
    },
    lab: {
      eyebrow: 'Laboratório',
      title: 'Monte uma receita',
      lead: 'Escolha o método, ajuste a dose e siga o cronômetro. São pontos de partida de referência: quem manda no ajuste é o gosto.',
      methodLabel: 'Método',
      dose: 'Dose de café',
      water: 'Água',
      ratio: 'Proporção',
      temp: 'Temperatura',
      grind: 'Moagem',
      roast: 'Torra',
      time: 'Tempo total',
      start: 'Iniciar',
      pause: 'Pausar',
      reset: 'Zerar',
      speed: 'Velocidade',
      fast: 'Demonstração (5x)',
      done: 'Pronto. Sirva e preste atenção no primeiro gole.',
      stepsTitle: 'Passo a passo',
      note: 'Valores de referência, não são regras. Ajuste moagem e tempo até chegar no seu gosto.',
      methods: [
        {
          id: 'v60',
          name: 'Hario V60',
          badge: 'Favorito',
          roast: 'Média',
          tagline: 'Filtrado, limpo e cheio de nuances.',
          ratio: 16,
          temp: '92 a 96 °C',
          grind: 'Média',
          total: 180,
          steps: [
            { at: 0, text: 'Bloom: despeje o dobro da dose em água e espere o café respirar.' },
            { at: 40, text: 'Despeje em círculos, devagar, até cerca de 60% da água.' },
            { at: 90, text: 'Complete o restante da água.' },
            { at: 150, text: 'Deixe drenar por completo.' },
          ],
        },
        {
          id: 'press',
          name: 'Prensa Francesa',
          tagline: 'Imersão: corpo e doçura.',
          ratio: 15,
          temp: '93 a 96 °C',
          grind: 'Grossa',
          total: 270,
          steps: [
            { at: 0, text: 'Despeje toda a água de uma vez e tampe, sem pressionar.' },
            { at: 30, text: 'Mexa suavemente uma vez.' },
            { at: 240, text: 'Pressione o êmbolo devagar, até o fim.' },
            { at: 260, text: 'Sirva logo, para não continuar extraindo no fundo.' },
          ],
        },
        {
          id: 'siphon',
          name: 'Sifão',
          tagline: 'Teatro e precisão: vácuo e calor.',
          ratio: 15,
          temp: '90 a 92 °C',
          grind: 'Média',
          total: 120,
          steps: [
            { at: 0, text: 'Aqueça a água até ela subir para a câmara de cima.' },
            { at: 15, text: 'Adicione o café e mexa para molhar tudo.' },
            { at: 60, text: 'Retire do fogo.' },
            { at: 90, text: 'O café desce pelo filtro. Espere terminar.' },
          ],
        },
        {
          id: 'aeropress',
          name: 'AeroPress',
          badge: '2º favorito',
          tagline: 'Rápido, versátil e difícil de errar.',
          ratio: 15,
          temp: '85 a 92 °C',
          grind: 'Média-fina',
          total: 120,
          steps: [
            { at: 0, text: 'Despeje a água e mexa por alguns segundos.' },
            { at: 60, text: 'Encaixe o êmbolo e espere um pouco.' },
            { at: 90, text: 'Pressione devagar, por cerca de 30 segundos.' },
          ],
        },
      ],
    },
    extraction: {
      eyebrow: 'Extração',
      title: 'O que muda no copo',
      lead: 'Moagem, tempo e temperatura puxam o gosto para um lado ou para o outro. Mexa nos controles e veja onde o café cai.',
      sliders: {
        grind: ['Moagem', 'Grossa', 'Fina'],
        time: ['Tempo de contato', 'Curto', 'Longo'],
        temp: ['Temperatura', 'Baixa', 'Alta'],
      },
      zones: {
        under: {
          title: 'Sub-extraído',
          notes: 'Ácido, ralo e meio salgado. Faltou tirar doçura do café: tente moer mais fino ou estender o tempo.',
        },
        balanced: {
          title: 'Equilibrado',
          notes: 'Doce, aromático e com acidez agradável. É a zona que eu procuro.',
        },
        over: {
          title: 'Super-extraído',
          notes: 'Amargo, seco e adstringente. Passou do ponto: tente moer mais grosso ou encurtar o tempo.',
        },
      },
      scoreLabel: 'Extração',
      note: 'Regra de bolso para brincar, não ciência exata.',
      preset: 'Minha preferência: acidez mais elevada',
    },
    app: {
      eyebrow: 'Quando o café vira código',
      title: 'Flip & Brew',
      text: 'Essa obsessão virou aplicativo. No Flip & Brew você vira o celular para baixo e uma xícara enche em tempo real, com cafeteiras como V60, prensa, AeroPress e sifão. O tempo longe da tela vira moeda.',
      cta: 'Ver o projeto',
    },
    cta: {
      title: 'Aceita um café?',
      text: 'Se você também é do time do coador, ou só quer trocar ideia sobre receitas, é só chamar.',
      mountains: 'Antes do café, a trilha',
    },
  },

  en: {
    meta: {
      title: 'Specialty coffee | André Luis Teixeira',
      description:
        'The specialty coffee ritual: build a recipe with the timer, understand extraction and meet the methods I use.',
    },
    hero: {
      eyebrow: 'Away from the machine',
      title: 'The specialty coffee ritual',
      lead: 'Brewing coffee by hand is the analog counterpoint to the speed of technology. Grinding, temperature control and pour rate demand method, calm attention and respect for the time the process takes.',
      chips: ['Hario V60', 'French Press', 'Siphon', 'AeroPress'],
    },
    stats: [
      { to: 4, label: 'brewing methods' },
      { to: 3, label: 'variables I study: grind, time and temperature' },
    ],
    favorite: {
      eyebrow: 'My favorite',
      title: 'The coffee I like best',
      lead: 'I like coffee with higher acidity: bright, aromatic and full of nuance. This is the recipe I repeat the most.',
      specs: [
        { label: 'Method', value: 'Hario V60' },
        { label: 'Grind', value: 'Medium' },
        { label: 'Roast', value: 'Medium' },
        { label: 'Ratio', value: '16:1' },
        { label: 'Profile', value: 'Higher acidity' },
      ],
      note: '16:1 means 16 parts water to 1 part coffee. With 18 g of coffee, that is 288 ml of water.',
      secondLabel: 'In second place',
      secondName: 'AeroPress',
      secondText: 'After the V60, it is my favorite: fast, versatile and hard to get wrong.',
      cta: 'Build it in the lab',
    },
    lab: {
      eyebrow: 'Lab',
      title: 'Build a recipe',
      lead: 'Pick a method, adjust the dose and follow the timer. These are reference starting points: taste is what decides the adjustment.',
      methodLabel: 'Method',
      dose: 'Coffee dose',
      water: 'Water',
      ratio: 'Ratio',
      temp: 'Temperature',
      grind: 'Grind',
      roast: 'Roast',
      time: 'Total time',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      speed: 'Speed',
      fast: 'Demo (5x)',
      done: 'Done. Serve it and pay attention to the first sip.',
      stepsTitle: 'Step by step',
      note: 'Reference values, not rules. Adjust grind and time until you reach your taste.',
      methods: [
        {
          id: 'v60',
          name: 'Hario V60',
          badge: 'Favorite',
          roast: 'Medium',
          tagline: 'Filtered, clean and full of nuance.',
          ratio: 16,
          temp: '92 to 96 °C',
          grind: 'Medium',
          total: 180,
          steps: [
            { at: 0, text: 'Bloom: pour twice the dose in water and let the coffee breathe.' },
            { at: 40, text: 'Pour slowly in circles, up to about 60% of the water.' },
            { at: 90, text: 'Add the rest of the water.' },
            { at: 150, text: 'Let it drain completely.' },
          ],
        },
        {
          id: 'press',
          name: 'French Press',
          tagline: 'Immersion: body and sweetness.',
          ratio: 15,
          temp: '93 to 96 °C',
          grind: 'Coarse',
          total: 270,
          steps: [
            { at: 0, text: 'Pour all the water at once and put the lid on, without pressing.' },
            { at: 30, text: 'Stir gently once.' },
            { at: 240, text: 'Press the plunger down slowly, all the way.' },
            { at: 260, text: 'Serve right away, so it does not keep extracting at the bottom.' },
          ],
        },
        {
          id: 'siphon',
          name: 'Siphon',
          tagline: 'Theater and precision: vacuum and heat.',
          ratio: 15,
          temp: '90 to 92 °C',
          grind: 'Medium',
          total: 120,
          steps: [
            { at: 0, text: 'Heat the water until it rises to the upper chamber.' },
            { at: 15, text: 'Add the coffee and stir to wet everything.' },
            { at: 60, text: 'Take it off the heat.' },
            { at: 90, text: 'The coffee drains through the filter. Wait for it to finish.' },
          ],
        },
        {
          id: 'aeropress',
          name: 'AeroPress',
          badge: '2nd favorite',
          tagline: 'Fast, versatile and hard to get wrong.',
          ratio: 15,
          temp: '85 to 92 °C',
          grind: 'Medium-fine',
          total: 120,
          steps: [
            { at: 0, text: 'Pour the water and stir for a few seconds.' },
            { at: 60, text: 'Fit the plunger and wait a little.' },
            { at: 90, text: 'Press slowly, for about 30 seconds.' },
          ],
        },
      ],
    },
    extraction: {
      eyebrow: 'Extraction',
      title: 'What changes in the cup',
      lead: 'Grind, time and temperature pull the taste one way or the other. Move the controls and see where the coffee lands.',
      sliders: {
        grind: ['Grind', 'Coarse', 'Fine'],
        time: ['Contact time', 'Short', 'Long'],
        temp: ['Temperature', 'Low', 'High'],
      },
      zones: {
        under: {
          title: 'Under-extracted',
          notes: 'Sour, thin and a bit salty. Not enough sweetness was pulled out: try a finer grind or a longer time.',
        },
        balanced: {
          title: 'Balanced',
          notes: 'Sweet, aromatic, with a pleasant acidity. This is the zone I look for.',
        },
        over: {
          title: 'Over-extracted',
          notes: 'Bitter, dry and astringent. It went too far: try a coarser grind or a shorter time.',
        },
      },
      scoreLabel: 'Extraction',
      note: 'A rule of thumb to play with, not exact science.',
      preset: 'My preference: higher acidity',
    },
    app: {
      eyebrow: 'When coffee becomes code',
      title: 'Flip & Brew',
      text: 'That obsession became an app. In Flip & Brew you put the phone face down and a cup fills in real time, with brewers like the V60, press, AeroPress and siphon. Time away from the screen becomes coins.',
      cta: 'See the project',
    },
    cta: {
      title: 'Up for a coffee?',
      text: 'If you are also on team pour-over, or just want to talk recipes, reach out.',
      mountains: 'Before the coffee, the trail',
    },
  },

  es: {
    meta: {
      title: 'Café de especialidad | André Luis Teixeira',
      description:
        'El ritual del café de especialidad: arma una receta con el cronómetro, entiende la extracción y conoce los métodos que uso.',
    },
    hero: {
      eyebrow: 'Fuera de la máquina',
      title: 'El ritual del café de especialidad',
      lead: 'La preparación manual del café es el contrapunto analógico a la velocidad de la tecnología. La molienda, el control de temperatura y el ritmo del vertido exigen método, atención serena y respeto por el tiempo del proceso.',
      chips: ['Hario V60', 'Prensa francesa', 'Sifón', 'AeroPress'],
    },
    stats: [
      { to: 4, label: 'métodos de preparación' },
      { to: 3, label: 'variables que estudio: molienda, tiempo y temperatura' },
    ],
    favorite: {
      eyebrow: 'Mi favorito',
      title: 'El café que más me gusta',
      lead: 'Me gusta el café con acidez más elevada: vivo, aromático y lleno de matices. Es la receta que más repito.',
      specs: [
        { label: 'Método', value: 'Hario V60' },
        { label: 'Molienda', value: 'Media' },
        { label: 'Tueste', value: 'Medio' },
        { label: 'Proporción', value: '16:1' },
        { label: 'Perfil', value: 'Acidez más elevada' },
      ],
      note: '16:1 significa 16 partes de agua por 1 de café. Con 18 g de café, son 288 ml de agua.',
      secondLabel: 'En segundo lugar',
      secondName: 'AeroPress',
      secondText: 'Después del V60, es mi favorito: rápido, versátil y difícil de fallar.',
      cta: 'Armarlo en el laboratorio',
    },
    lab: {
      eyebrow: 'Laboratorio',
      title: 'Arma una receta',
      lead: 'Elige el método, ajusta la dosis y sigue el cronómetro. Son puntos de partida de referencia: el gusto es quien manda en el ajuste.',
      methodLabel: 'Método',
      dose: 'Dosis de café',
      water: 'Agua',
      ratio: 'Proporción',
      temp: 'Temperatura',
      grind: 'Molienda',
      roast: 'Tueste',
      time: 'Tiempo total',
      start: 'Iniciar',
      pause: 'Pausar',
      reset: 'Reiniciar',
      speed: 'Velocidad',
      fast: 'Demostración (5x)',
      done: 'Listo. Sirve y presta atención al primer sorbo.',
      stepsTitle: 'Paso a paso',
      note: 'Valores de referencia, no son reglas. Ajusta molienda y tiempo hasta llegar a tu gusto.',
      methods: [
        {
          id: 'v60',
          name: 'Hario V60',
          badge: 'Favorito',
          roast: 'Medio',
          tagline: 'Filtrado, limpio y lleno de matices.',
          ratio: 16,
          temp: '92 a 96 °C',
          grind: 'Media',
          total: 180,
          steps: [
            { at: 0, text: 'Bloom: vierte el doble de la dosis en agua y deja que el café respire.' },
            { at: 40, text: 'Vierte despacio en círculos, hasta cerca del 60% del agua.' },
            { at: 90, text: 'Completa el resto del agua.' },
            { at: 150, text: 'Deja que drene por completo.' },
          ],
        },
        {
          id: 'press',
          name: 'Prensa francesa',
          tagline: 'Inmersión: cuerpo y dulzor.',
          ratio: 15,
          temp: '93 a 96 °C',
          grind: 'Gruesa',
          total: 270,
          steps: [
            { at: 0, text: 'Vierte toda el agua de una vez y tapa, sin presionar.' },
            { at: 30, text: 'Revuelve suavemente una vez.' },
            { at: 240, text: 'Presiona el émbolo despacio, hasta el fondo.' },
            { at: 260, text: 'Sirve enseguida, para que no siga extrayendo en el fondo.' },
          ],
        },
        {
          id: 'siphon',
          name: 'Sifón',
          tagline: 'Teatro y precisión: vacío y calor.',
          ratio: 15,
          temp: '90 a 92 °C',
          grind: 'Media',
          total: 120,
          steps: [
            { at: 0, text: 'Calienta el agua hasta que suba a la cámara de arriba.' },
            { at: 15, text: 'Agrega el café y revuelve para mojar todo.' },
            { at: 60, text: 'Retíralo del fuego.' },
            { at: 90, text: 'El café baja por el filtro. Espera a que termine.' },
          ],
        },
        {
          id: 'aeropress',
          name: 'AeroPress',
          badge: '2.º favorito',
          tagline: 'Rápido, versátil y difícil de fallar.',
          ratio: 15,
          temp: '85 a 92 °C',
          grind: 'Media-fina',
          total: 120,
          steps: [
            { at: 0, text: 'Vierte el agua y revuelve unos segundos.' },
            { at: 60, text: 'Coloca el émbolo y espera un poco.' },
            { at: 90, text: 'Presiona despacio, durante unos 30 segundos.' },
          ],
        },
      ],
    },
    extraction: {
      eyebrow: 'Extracción',
      title: 'Qué cambia en la taza',
      lead: 'Molienda, tiempo y temperatura inclinan el sabor hacia un lado o hacia el otro. Mueve los controles y mira dónde cae el café.',
      sliders: {
        grind: ['Molienda', 'Gruesa', 'Fina'],
        time: ['Tiempo de contacto', 'Corto', 'Largo'],
        temp: ['Temperatura', 'Baja', 'Alta'],
      },
      zones: {
        under: {
          title: 'Sub-extraído',
          notes: 'Ácido, ralo y algo salado. Faltó sacar dulzor del café: prueba una molienda más fina o más tiempo.',
        },
        balanced: {
          title: 'Equilibrado',
          notes: 'Dulce, aromático y con una acidez agradable. Es la zona que busco.',
        },
        over: {
          title: 'Sobre-extraído',
          notes: 'Amargo, seco y astringente. Se pasó: prueba una molienda más gruesa o menos tiempo.',
        },
      },
      scoreLabel: 'Extracción',
      note: 'Una regla práctica para jugar, no ciencia exacta.',
      preset: 'Mi preferencia: acidez más elevada',
    },
    app: {
      eyebrow: 'Cuando el café se vuelve código',
      title: 'Flip & Brew',
      text: 'Esa obsesión se volvió aplicación. En Flip & Brew pones el celular boca abajo y una taza se llena en tiempo real, con cafeteras como V60, prensa, AeroPress y sifón. El tiempo lejos de la pantalla se vuelve monedas.',
      cta: 'Ver el proyecto',
    },
    cta: {
      title: '¿Te animas a un café?',
      text: 'Si tú también eres del equipo del filtrado, o solo quieres hablar de recetas, escríbeme.',
      mountains: 'Antes del café, el sendero',
    },
  },
};
