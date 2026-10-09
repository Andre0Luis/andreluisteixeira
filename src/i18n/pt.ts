import type { Dict } from './types';
import { urls } from './urls';

export const pt: Dict = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'André Luis Teixeira | Engenheiro de Plataforma',
    description:
      'Engenheiro de Plataforma no Santander. CI/CD, GitHub Actions, TypeScript, Java e arquiteturas resilientes. Projetos, trajetória e o que faço longe das telas.',
  },
  a11y: {
    skip: 'Ir para o conteúdo',
    menu: 'Menu',
    language: 'Idioma',
    mainNav: 'Navegação principal',
  },
  nav: {
    home: 'Início',
    about: 'Sobre',
    journey: 'Trajetória',
    engineering: 'Engenharia',
    stack: 'Stack',
    projects: 'Projetos',
    education: 'Formação',
    contact: 'Contato',
    mountains: 'Montanhas',
    coffee: 'Café',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Engenheiro de Plataforma',
    status: 'Engenheiro de Plataforma no Santander',
    location: 'Embu-Guaçu, SP · Brasil',
    signature: 'Every second counts.',
    bio: 'Desenho e sustento arquiteturas resilientes, esteiras de automação e ferramentas que eliminam a complexidade técnica. Fora das telas, busco clareza na altitude das montanhas, na precisão de um café especial e na disciplina constante de aprender com a incerteza.',
    focus: ['CI/CD', 'GitHub Actions', 'TypeScript', 'Java e Spring Boot', 'System Design', 'AWS'],
    facts: [
      { value: '5+', label: 'anos em tecnologia' },
      { value: '15', label: 'anos: idade do primeiro emprego' },
      { value: '44', label: 'repositórios públicos' },
      { value: '14', label: 'montanhas em 2026' },
    ],
    photoAlt: 'André Luis Teixeira sorrindo, de boné e mochila de trilha',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entrar em contato',
  },
  principles: {
    eyebrow: 'Postura e princípios',
    title: 'Como eu penso',
    cards: [
      {
        title: 'Curiosidade investigativa',
        text: 'Meu caminho na tecnologia não veio de atalhos. Nasceu da inquietação prática de entender como as coisas funcionam por baixo da superfície. Investigo o que quebra, os gargalos reais e como desenhar sistemas que resistam ao impacto da produção sem depender de remendos provisórios.',
      },
      {
        title: 'O filtro antifrágil',
        text: 'Sistemas frágeis quebram sob estresse; sistemas meramente robustos aguentam o impacto até o limite. Meu objetivo ao arquitetar soluções e tomar decisões é a antifragilidade: criar estruturas que absorvam o imprevisto, aprendam com o erro operacional e se tornem mais fortes a cada choque.',
        note: 'Ideia emprestada de Nassim Taleb, aplicada ao código, às decisões e aos hábitos.',
      },
      {
        title: 'O peso do tempo',
        text: 'A urgência do lema "Every second counts" não é correria cega, mas presença ativa. Significa eliminar complexidades inúteis, não hesitar diante do inevitável e construir ferramentas que respeitem o tempo de quem depende delas.',
        note: 'O lema está tatuado no meu antebraço.',
      },
    ],
  },
  journey: {
    eyebrow: 'Origem e trajetória',
    title: 'De onde eu venho',
    blocks: [
      {
        title: 'O aprendizado no chão de loja',
        text: 'Minha ética de trabalho e minha capacidade de lidar com a realidade não começaram diante de uma tela. Aos 15 anos, dei meus primeiros passos profissionais no comércio local, atuando diretamente no atendimento e na operação da J.A Bazar e Papelaria. Atender todo perfil de público, fechar caixa, organizar estoque e resolver os imprevistos da rotina me ensinaram, cedo, o peso da prestação de contas, da responsabilidade e do respeito ao cliente.',
      },
      {
        title: 'A transição para a tecnologia',
        text: 'Levei essa mesma solidez prática comigo quando entrei na tecnologia, onde atuo há mais de 5 anos. Por encarar sistemas com a seriedade de quem sabe o custo de uma falha no mundo real, assumi naturalmente o papel de referência técnica e ponto focal nas equipes por onde passei: desenhando arquiteturas, solucionando incidentes críticos e dando autonomia aos desenvolvedores.',
      },
      {
        title: 'A jornada sobre o destino',
        text: 'Ter chegado à engenharia de plataforma e à sustentação de sistemas complexos não é uma linha de chegada. O processo diário de estudo, erro, teste e refinamento importa tanto quanto o ponto de chegada. Permaneço em aprendizado contínuo, sem espaço para comodismo.',
      },
    ],
    timelineTitle: 'Marcos',
    timeline: [
      {
        when: 'Aos 15',
        title: 'J.A Bazar e Papelaria',
        text: 'Primeiro emprego: atendimento, caixa e estoque no comércio local.',
      },
      {
        when: '2020',
        title: 'Entrada no GitHub',
        text: 'A conta que hoje reúne 44 repositórios públicos nasce em maio.',
      },
      {
        when: '2021 a 2022',
        title: 'Estudo na prática',
        text: 'Java e React na Alura, bootcamps (Santander Bootcamp Fullstack, Rocketseat), machine learning, um jogo em blockchain e o TCC no Sumaré.',
      },
      {
        when: '2022 a 2023',
        title: 'Primeiras ferramentas de verdade',
        text: 'Um sistema de inventário com leitura de código de barras e uma automação em Spring Boot e Selenium para conferir as aulas do dia no SED SP.',
      },
      {
        when: '2024',
        title: 'MBA na Impacta',
        text: 'DevSecOps, mobile, Docker e Kubernetes, e análise de código com SonarCloud.',
      },
      {
        when: '2025',
        title: 'Clube Quinze e o Monte Roraima',
        text: 'O app e a API do Clube Quinze ganham forma. Primeira montanha: sete dias no Roraima, sem nunca ter acampado antes.',
      },
      {
        when: '2026',
        title: 'Flip & Brew e 14 montanhas',
        text: 'O app que transforma tempo offline em café ganha forma. Nas trilhas, 14 montanhas em um ano.',
      },
      {
        when: 'Hoje',
        title: 'Engenheiro de Plataforma no Santander',
        text: 'CI/CD, GitHub Actions e automação de infraestrutura global, como referência técnica do time.',
      },
    ],
  },
  engineering: {
    eyebrow: 'Engenharia de plataforma',
    title: 'No que eu trabalho',
    pillars: [
      {
        title: 'Automação & CI/CD contínuo',
        text: 'Construção e sustentação de esteiras de automação e fluxos globais de entrega. Foco em previsibilidade, repetibilidade e segurança.',
        tags: ['GitHub Actions', 'TypeScript', 'Deploy global'],
      },
      {
        title: 'Resiliência & confiabilidade',
        text: 'Arquiteturas desenhadas para resistir a falhas. Minimização de pontos únicos de ruptura e observabilidade proativa.',
        tags: ['System Design', 'Sistemas distribuídos', 'Observabilidade'],
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Criação de ferramentas internas que diminuem o atrito diário dos times, reduzindo a carga cognitiva.',
        tags: ['Ferramentas internas', 'Autonomia dos times', 'Menos atrito'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Com o que eu construo',
    lead: 'Java é a minha base mais forte. Em volta dela, TypeScript, nuvem e automação.',
    groups: [
      { title: 'Linguagens', items: ['Java', 'TypeScript', 'JavaScript'] },
      {
        title: 'Back-end e APIs',
        items: ['Spring Boot', 'NestJS', 'Node.js', 'Serverless', 'REST com JWT'],
      },
      {
        title: 'Front-end e mobile',
        items: ['Vue 3', 'Angular', 'React Native', 'Expo', 'HTML e CSS'],
      },
      {
        title: 'Nuvem, DevOps e automação',
        items: ['GitHub Actions', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'SonarCloud', 'Git'],
      },
      {
        title: 'Arquitetura',
        items: ['System Design', 'Sistemas distribuídos', 'Resiliência', 'Antifragilidade'],
      },
    ],
  },
  projects: {
    eyebrow: 'Projetos selecionados',
    title: 'O que eu construí',
    selectLabel: 'Escolha um projeto',
    more: 'Ver todos os repositórios no GitHub',
    items: [
      {
        name: 'Thunder',
        kind: 'Plataforma e automação',
        description:
          'Otimização e refatoração de um workflow global de deploy em GitHub Actions, reescrito por completo em TypeScript.',
        highlights: [
          'Mais escala, com execução bem mais rápida.',
          'Manutenção simples: a lógica do deploy agora vive em TypeScript.',
          'Pensado para um deploy global, onde cada segundo de pipeline conta.',
        ],
        tags: ['GitHub Actions', 'TypeScript', 'CI/CD'],
      },
      {
        name: 'Clube Quinze',
        kind: 'Aplicativo mobile',
        description:
          'Construído com foco em usabilidade direta e estabilidade. Acompanhado desde a concepção de arquitetura até a publicação nas lojas (App Store e Google Play).',
        highlights: [
          'Do design de interface aos builds e testes com Expo e TestFlight, até a distribuição nas lojas.',
          'API REST em Spring Boot, versionada, com autenticação JWT e renovação de sessão.',
          'Planos e níveis de associação, perfil com galeria e notificações push.',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'JWT'],
        links: [
          { label: 'Código do app', href: urls.clubeQuinzeApp },
          { label: 'Código da API', href: urls.clubeQuinzeApi },
        ],
      },
      {
        name: 'Flip & Brew',
        demo: 'flip',
        kind: 'Produtividade e hábitos',
        description:
          'Aplicativo desenhado como resposta ao excesso de estímulos. Monitora a retenção de atenção e incentiva pausas conscientes.',
        highlights: [
          'Você vira o celular para baixo e uma xícara enche em tempo real. O tempo offline vira moedas.',
          'A contagem usa horários, então continua certa com a tela apagada ou o app em segundo plano.',
          'Check-in de energia em xícaras, painel de bem-estar e artigos sobre antifragilidade e estoicismo.',
          'Em português, inglês e espanhol, com conta opcional (o app nunca exige cadastro).',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
        links: [{ label: 'Código no GitHub', href: urls.flipAndBrew }],
      },
      {
        name: 'ClassChecker',
        kind: 'Automação',
        description:
          'Aplicação em Spring Boot com Selenium que captura as telas do SED SP para conferir as aulas ministradas em um dia.',
        highlights: [
          'Troca uma conferência manual e repetitiva por uma rotina automática.',
          'Os resultados saem como capturas de tela, fáceis de revisar.',
        ],
        tags: ['Java', 'Spring Boot', 'Selenium'],
        links: [{ label: 'Código no GitHub', href: urls.classChecker }],
      },
    ],
  },
  education: {
    eyebrow: 'Formação e credenciais',
    title: 'Teoria e prática',
    lead: 'Teoria sem prática vira abstração vazia; prática sem teoria vira improviso frágil.',
    items: [
      {
        degree: 'Pós-graduação em Tech Management',
        institution: 'FIAP',
        focus: 'Liderança estratégica, governança e gestão.',
      },
      {
        degree: 'MBA em Engenharia de Software',
        institution: 'Faculdade Impacta',
        focus: 'Padrões de arquitetura, qualidade e alta escala.',
      },
      {
        degree: 'Bacharelado em Sistemas de Informação',
        institution: 'Centro Universitário Sumaré',
        focus: 'Fundamentos, estrutura de dados e infraestrutura.',
      },
    ],
    certLabel: 'Certificação',
    certName: 'GitHub Certified Foundations',
    learningTitle: 'Cursos e bootcamps pelo caminho',
    learning: [
      'Alura (Java e React)',
      'Santander Bootcamp Fullstack',
      'Rocketseat (NLW)',
      'Machine learning',
      'Blockchain game',
      'Docker e Kubernetes',
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    text: 'Aberto a trocas sobre engenharia de plataforma, arquitetura resiliente, esteiras de automação ou conversas sobre montanhismo e café especial.',
    emailLabel: 'E-mail',
  },
  footer:
    '© André Luis Teixeira. Every second counts. Desenvolvido com Astro, Vue 3 e TypeScript.',
};
