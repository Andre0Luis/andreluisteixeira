import type { Dict } from './types';

export const pt: Dict = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'André Luis Teixeira | Engenheiro de Plataforma',
    description:
      'Engenheiro de Plataforma e construtor de sistemas. Arquiteturas resilientes, esteiras de automação e ferramentas que eliminam a complexidade técnica.',
  },
  a11y: {
    skip: 'Ir para o conteúdo',
    menu: 'Menu',
    language: 'Idioma',
    mainNav: 'Navegação principal',
  },
  nav: {
    about: 'Sobre',
    journey: 'Trajetória',
    engineering: 'Engenharia',
    projects: 'Projetos',
    education: 'Formação',
    outside: 'Hobbies',
    contact: 'Contato',
  },
  hero: {
    name: 'André Luis Teixeira',
    role: 'Engenheiro de Plataforma & Construtor de Sistemas',
    signature: 'Every second counts.',
    bio: 'Desenho e sustento arquiteturas resilientes, esteiras de automação e ferramentas que eliminam a complexidade técnica. Fora das telas, busco clareza na altitude das montanhas, na precisão de um café especial e na disciplina constante de aprender com a incerteza.',
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
      },
      {
        title: 'O peso do tempo',
        text: 'A urgência do lema "Every second counts" não é correria cega, mas presença ativa. Significa eliminar complexidades inúteis, não hesitar diante do inevitável e construir ferramentas que respeitem o tempo de quem depende delas.',
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
  },
  engineering: {
    eyebrow: 'Engenharia de plataforma',
    title: 'No que eu trabalho',
    pillars: [
      {
        title: 'Automação & CI/CD contínuo',
        text: 'Construção e sustentação de esteiras de automação e fluxos globais de entrega. Foco em previsibilidade, repetibilidade e segurança.',
      },
      {
        title: 'Resiliência & confiabilidade',
        text: 'Arquiteturas desenhadas para resistir a falhas. Minimização de pontos únicos de ruptura e observabilidade proativa.',
      },
      {
        title: 'Developer Experience (DevEx)',
        text: 'Criação de ferramentas internas que diminuem o atrito diário dos times, reduzindo a carga cognitiva.',
      },
    ],
  },
  projects: {
    eyebrow: 'Projetos selecionados',
    title: 'O que eu construí',
    selectLabel: 'Escolha um projeto',
    items: [
      {
        name: 'Clube Quinze',
        kind: 'Aplicativo mobile',
        description:
          'Construído com foco em usabilidade direta e estabilidade. Acompanhado desde a concepção da arquitetura até a publicação nas lojas (App Store e Google Play).',
        tags: ['React Native', 'Expo', 'TypeScript', 'Spring Boot'],
        channels: ['App Store', 'Google Play'],
      },
      {
        name: 'Flip & Brew',
        kind: 'Produtividade e hábitos',
        description:
          'Aplicativo desenhado como resposta ao excesso de estímulos. Monitora a retenção de atenção e incentiva pausas conscientes.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
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
  },
  outside: {
    eyebrow: 'Fora da máquina',
    title: 'Onde eu recarrego',
    tabsLabel: 'Hobbies',
    tabs: [
      {
        id: 'mountains',
        label: 'Montanhas e expedições',
        title: 'Montanhas e expedições',
        text: 'A montanha não aceita desculpas nem atalhos. Estar na trilha com a mochila nas costas, enfrentando variações de clima e altitude, exige presença mental absoluta e gerenciamento de limites físicos. É nos cumes que encontro o silêncio necessário para esvaziar o excesso de ruído do mundo corporativo e praticar a clareza sob desgaste.',
        story: {
          label: 'A primeira montanha',
          meta: ['Monte Roraima', '2025', '7 dias'],
          text: 'Minha primeira montanha foi o Monte Roraima. Eu nunca tinha acampado na vida. Foram 7 dias longe de tudo, e foi a jornada que mais me mudou: ela me ensinou a ser uma pessoa muito mais simples e a dar valor às pequenas coisas.',
        },
      },
      {
        id: 'coffee',
        label: 'Café especial',
        title: 'O ritual do café especial',
        text: 'O preparo manual de café é o contraponto analógico à velocidade da tecnologia. Moagem, controle de temperatura e taxa de fluxo de despejo exigem método, atenção calma e respeito ao tempo do processo. Uma xícara bem extraída é um exercício diário de precisão artesanal.',
        chips: ['Hario V60', 'Prensa Francesa', 'Sifão', 'AeroPress'],
      },
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
