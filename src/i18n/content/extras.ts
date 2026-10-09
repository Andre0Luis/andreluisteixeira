import type { Locale } from '../types';

export interface Extras {
  terminal: { title: string; lines: { cmd: string; out: string }[] };
  pipeline: {
    eyebrow: string;
    title: string;
    lead: string;
    stages: { id: string; label: string; text: string }[];
    run: string;
    pause: string;
    inject: string;
    injectQueued: string;
    reset: string;
    states: { idle: string; running: string; failed: string; healed: string };
    counters: { runs: string; absorbed: string; guards: string };
    stageGuards: string;
    failMsg: string;
    healMsg: string;
    note: string;
  };
  stackExplorer: { hint: string; all: string; usedIn: string; none: string; projects: string };
  flip: {
    title: string;
    hint: string;
    flip: string;
    pickUp: string;
    coins: string;
    minutes: string;
    quality: string;
    thin: string;
    full: string;
    bonus: string;
    states: { idle: string; brewing: string; done: string; stopped: string };
    note: string;
  };
  outside: {
    eyebrow: string;
    title: string;
    lead: string;
    mountains: { kicker: string; title: string; text: string; cta: string; stat: string };
    coffee: { kicker: string; title: string; text: string; cta: string; stat: string };
    moreTitle: string;
    items: { title: string; text: string }[];
  };
  ui: { backHome: string; contactCta: string };
}

export const extras: Record<Locale, Extras> = {
  pt: {
    terminal: {
      title: 'andre@plataforma: ~',
      lines: [
        { cmd: 'whoami', out: 'André Luis Teixeira' },
        { cmd: 'cargo', out: 'Engenheiro de Plataforma @ Santander' },
        { cmd: 'foco', out: 'ci/cd · automação · resiliência' },
        { cmd: 'lema', out: 'every second counts' },
      ],
    },
    pipeline: {
      eyebrow: 'Antifragilidade na prática',
      title: 'Uma esteira que fica mais forte a cada falha',
      lead: 'Rode a esteira e injete uma falha. Em vez de só aguentar o impacto, o sistema aprende: cada estágio ganha uma proteção nova.',
      stages: [
        { id: 'commit', label: 'Commit', text: 'Tudo começa num commit pequeno e fácil de revisar.' },
        { id: 'build', label: 'Build', text: 'Build reprodutível: o mesmo resultado em qualquer máquina.' },
        { id: 'test', label: 'Testes', text: 'Testes rápidos primeiro, para falhar cedo e barato.' },
        { id: 'scan', label: 'Segurança', text: 'Análise de código e de dependências antes de qualquer entrega.' },
        { id: 'deploy', label: 'Deploy', text: 'Entrega previsível e repetível, com rollback à mão.' },
        { id: 'observe', label: 'Observar', text: 'Métricas e alertas proativos fecham o ciclo.' },
      ],
      run: 'Rodar esteira',
      pause: 'Pausar',
      inject: 'Injetar falha',
      injectQueued: 'Falha a caminho...',
      reset: 'Zerar',
      states: {
        idle: 'Parada. Aperte para rodar.',
        running: 'Entregando...',
        failed: 'Falha detectada.',
        healed: 'Recuperada, com proteção nova.',
      },
      counters: { runs: 'entregas concluídas', absorbed: 'falhas absorvidas', guards: 'proteções criadas' },
      stageGuards: 'proteções',
      failMsg: 'Falha em {stage}. Rollback automático.',
      healMsg: '{stage} ganhou uma proteção e voltou mais forte.',
      note: 'Simulação ilustrativa, não é uma esteira real.',
    },
    stackExplorer: {
      hint: 'Toque em uma tecnologia para ver onde ela aparece nos meus projetos.',
      all: 'Tudo',
      usedIn: 'Aparece em',
      none: 'Nenhum projeto desta página usa isso diretamente.',
      projects: 'projetos',
    },
    flip: {
      title: 'Experimente o Flip & Brew',
      hint: 'Vire o celular para baixo e veja a xícara encher. Tempo offline vira moeda.',
      flip: 'Virar para baixo',
      pickUp: 'Pegar o celular',
      coins: 'moedas',
      minutes: 'min offline',
      quality: 'Qualidade',
      thin: 'Ralo',
      full: 'Encorpado',
      bonus: 'bônus de 20%',
      states: {
        idle: 'Celular na mão.',
        brewing: 'Passando café...',
        done: 'Xícara cheia! Bônus de 20% nas moedas.',
        stopped: 'Parou cedo: você leva o proporcional, nunca zero.',
      },
      note: 'Simulação acelerada: 1 segundo equivale a 5 minutos, numa xícara de 30 minutos.',
    },
    outside: {
      eyebrow: 'Fora da máquina',
      title: 'Onde eu recarrego',
      lead: 'Duas paixões têm página própria. Entre e fique à vontade.',
      mountains: {
        kicker: 'Trilhas e expedições',
        title: 'Montanhas',
        text: 'A montanha não aceita desculpas nem atalhos. Do Monte Roraima às 14 subidas de 2026, é onde eu encontro o silêncio e a clareza.',
        cta: 'Entrar na montanha',
        stat: '14 montanhas em 2026',
      },
      coffee: {
        kicker: 'Precisão artesanal',
        title: 'Café especial',
        text: 'O contraponto analógico à velocidade da tecnologia. Monte uma receita, siga o cronômetro e veja o que muda no copo.',
        cta: 'Passar um café',
        stat: '4 métodos de preparo',
      },
      moreTitle: 'E ainda tem mais',
      items: [
        {
          title: 'Lego',
          text: 'Montar sets complexos pede foco, paciência e criatividade. Os melhores ficam expostos nas minhas prateleiras.',
        },
        { title: 'Astronomia', text: 'Em noites claras, observo o céu e acompanho a Lua pelo telescópio.' },
        {
          title: 'Trilha sonora',
          text: 'Programando, trilhando ou passando café, quase sempre com Imagine Dragons, minha banda favorita.',
        },
        {
          title: 'Para desligar',
          text: 'Quando preciso rir e esvaziar a cabeça, Rick and Morty é a minha série de animação favorita.',
        },
      ],
    },
    ui: { backHome: 'Voltar ao início', contactCta: 'Entrar em contato' },
  },

  en: {
    terminal: {
      title: 'andre@platform: ~',
      lines: [
        { cmd: 'whoami', out: 'André Luis Teixeira' },
        { cmd: 'role', out: 'Platform Engineer @ Santander' },
        { cmd: 'focus', out: 'ci/cd · automation · resilience' },
        { cmd: 'motto', out: 'every second counts' },
      ],
    },
    pipeline: {
      eyebrow: 'Antifragility in practice',
      title: 'A pipeline that gets stronger with every failure',
      lead: 'Run the pipeline and inject a failure. Instead of just absorbing the impact, the system learns: every stage gains a new guard.',
      stages: [
        { id: 'commit', label: 'Commit', text: 'Everything starts with a small commit that is easy to review.' },
        { id: 'build', label: 'Build', text: 'Reproducible build: the same result on any machine.' },
        { id: 'test', label: 'Tests', text: 'Fast tests first, to fail early and cheaply.' },
        { id: 'scan', label: 'Security', text: 'Code and dependency analysis before any delivery.' },
        { id: 'deploy', label: 'Deploy', text: 'Predictable, repeatable delivery, with rollback at hand.' },
        { id: 'observe', label: 'Observe', text: 'Proactive metrics and alerts close the loop.' },
      ],
      run: 'Run pipeline',
      pause: 'Pause',
      inject: 'Inject failure',
      injectQueued: 'Failure incoming...',
      reset: 'Reset',
      states: {
        idle: 'Stopped. Press to run.',
        running: 'Delivering...',
        failed: 'Failure detected.',
        healed: 'Recovered, with a new guard.',
      },
      counters: { runs: 'deliveries completed', absorbed: 'failures absorbed', guards: 'guards created' },
      stageGuards: 'guards',
      failMsg: 'Failure at {stage}. Automatic rollback.',
      healMsg: '{stage} gained a guard and came back stronger.',
      note: 'Illustrative simulation, not a real pipeline.',
    },
    stackExplorer: {
      hint: 'Tap a technology to see where it shows up in my projects.',
      all: 'All',
      usedIn: 'Shows up in',
      none: 'No project on this page uses it directly.',
      projects: 'projects',
    },
    flip: {
      title: 'Try Flip & Brew',
      hint: 'Put the phone face down and watch the cup fill. Offline time becomes coins.',
      flip: 'Put face down',
      pickUp: 'Pick up the phone',
      coins: 'coins',
      minutes: 'min offline',
      quality: 'Quality',
      thin: 'Thin',
      full: 'Full-bodied',
      bonus: '20% bonus',
      states: {
        idle: 'Phone in hand.',
        brewing: 'Brewing...',
        done: 'Cup full! 20% coin bonus.',
        stopped: 'Stopped early: you keep the proportional amount, never zero.',
      },
      note: 'Accelerated simulation: 1 second equals 5 minutes, on a 30-minute cup.',
    },
    outside: {
      eyebrow: 'Away from the machine',
      title: 'Where I recharge',
      lead: 'Two passions have their own page. Come in and make yourself at home.',
      mountains: {
        kicker: 'Trails and expeditions',
        title: 'Mountains',
        text: 'The mountain accepts no excuses and no shortcuts. From Mount Roraima to the 14 climbs of 2026, it is where I find silence and clarity.',
        cta: 'Enter the mountain',
        stat: '14 mountains in 2026',
      },
      coffee: {
        kicker: 'Artisanal precision',
        title: 'Specialty coffee',
        text: 'The analog counterpoint to the speed of technology. Build a recipe, follow the timer and see what changes in the cup.',
        cta: 'Brew a coffee',
        stat: '4 brewing methods',
      },
      moreTitle: 'And there is more',
      items: [
        {
          title: 'Lego',
          text: 'Building complex sets takes focus, patience and creativity. The best ones end up on my shelves.',
        },
        { title: 'Astronomy', text: 'On clear nights, I watch the sky and follow the Moon through my telescope.' },
        {
          title: 'Soundtrack',
          text: 'Coding, hiking or brewing coffee, it is almost always Imagine Dragons, my favorite band.',
        },
        {
          title: 'To unwind',
          text: 'When I need to laugh and clear my head, Rick and Morty is my favorite animated series.',
        },
      ],
    },
    ui: { backHome: 'Back to home', contactCta: 'Get in touch' },
  },

  es: {
    terminal: {
      title: 'andre@plataforma: ~',
      lines: [
        { cmd: 'whoami', out: 'André Luis Teixeira' },
        { cmd: 'cargo', out: 'Ingeniero de Plataforma @ Santander' },
        { cmd: 'foco', out: 'ci/cd · automatización · resiliencia' },
        { cmd: 'lema', out: 'every second counts' },
      ],
    },
    pipeline: {
      eyebrow: 'Antifragilidad en la práctica',
      title: 'Un pipeline que se fortalece con cada falla',
      lead: 'Ejecuta el pipeline e inyecta una falla. En vez de solo aguantar el impacto, el sistema aprende: cada etapa gana una protección nueva.',
      stages: [
        { id: 'commit', label: 'Commit', text: 'Todo empieza con un commit pequeño y fácil de revisar.' },
        { id: 'build', label: 'Build', text: 'Build reproducible: el mismo resultado en cualquier máquina.' },
        { id: 'test', label: 'Pruebas', text: 'Pruebas rápidas primero, para fallar pronto y barato.' },
        { id: 'scan', label: 'Seguridad', text: 'Análisis de código y de dependencias antes de cualquier entrega.' },
        { id: 'deploy', label: 'Deploy', text: 'Entrega previsible y repetible, con rollback a mano.' },
        { id: 'observe', label: 'Observar', text: 'Métricas y alertas proactivas cierran el ciclo.' },
      ],
      run: 'Ejecutar pipeline',
      pause: 'Pausar',
      inject: 'Inyectar falla',
      injectQueued: 'Falla en camino...',
      reset: 'Reiniciar',
      states: {
        idle: 'Detenido. Presiona para ejecutar.',
        running: 'Entregando...',
        failed: 'Falla detectada.',
        healed: 'Recuperado, con una protección nueva.',
      },
      counters: { runs: 'entregas completadas', absorbed: 'fallas absorbidas', guards: 'protecciones creadas' },
      stageGuards: 'protecciones',
      failMsg: 'Falla en {stage}. Rollback automático.',
      healMsg: '{stage} ganó una protección y volvió más fuerte.',
      note: 'Simulación ilustrativa, no es un pipeline real.',
    },
    stackExplorer: {
      hint: 'Toca una tecnología para ver dónde aparece en mis proyectos.',
      all: 'Todo',
      usedIn: 'Aparece en',
      none: 'Ningún proyecto de esta página la usa directamente.',
      projects: 'proyectos',
    },
    flip: {
      title: 'Prueba Flip & Brew',
      hint: 'Pon el celular boca abajo y mira cómo se llena la taza. El tiempo sin celular se vuelve monedas.',
      flip: 'Poner boca abajo',
      pickUp: 'Tomar el celular',
      coins: 'monedas',
      minutes: 'min sin celular',
      quality: 'Calidad',
      thin: 'Ralo',
      full: 'Con cuerpo',
      bonus: 'bono del 20%',
      states: {
        idle: 'Celular en la mano.',
        brewing: 'Preparando café...',
        done: '¡Taza llena! Bono del 20% en monedas.',
        stopped: 'Paró antes: te llevas lo proporcional, nunca cero.',
      },
      note: 'Simulación acelerada: 1 segundo equivale a 5 minutos, en una taza de 30 minutos.',
    },
    outside: {
      eyebrow: 'Fuera de la máquina',
      title: 'Donde recargo energía',
      lead: 'Dos pasiones tienen su propia página. Pasa y ponte cómodo.',
      mountains: {
        kicker: 'Senderos y expediciones',
        title: 'Montañas',
        text: 'La montaña no acepta excusas ni atajos. Del Monte Roraima a las 14 subidas de 2026, es donde encuentro el silencio y la claridad.',
        cta: 'Entrar a la montaña',
        stat: '14 montañas en 2026',
      },
      coffee: {
        kicker: 'Precisión artesanal',
        title: 'Café de especialidad',
        text: 'El contrapunto analógico a la velocidad de la tecnología. Arma una receta, sigue el cronómetro y mira qué cambia en la taza.',
        cta: 'Preparar un café',
        stat: '4 métodos de preparación',
      },
      moreTitle: 'Y hay más',
      items: [
        {
          title: 'Lego',
          text: 'Armar sets complejos pide foco, paciencia y creatividad. Los mejores quedan exhibidos en mis estantes.',
        },
        { title: 'Astronomía', text: 'En noches despejadas, observo el cielo y sigo la Luna con mi telescopio.' },
        {
          title: 'Banda sonora',
          text: 'Programando, haciendo senderismo o preparando café, casi siempre con Imagine Dragons, mi banda favorita.',
        },
        {
          title: 'Para desconectar',
          text: 'Cuando necesito reír y despejar la cabeza, Rick and Morty es mi serie animada favorita.',
        },
      ],
    },
    ui: { backHome: 'Volver al inicio', contactCta: 'Ponerse en contacto' },
  },
};
