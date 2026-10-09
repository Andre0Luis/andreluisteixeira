# andreluisteixeira.dev

Site pessoal e profissional de André Luis Teixeira: apresentação, trajetória, projetos e formação. Disponível em português (padrão), inglês e espanhol.

**Stack:** Astro 7 (páginas estáticas) + Vue 3 (ilhas interativas) + Tailwind CSS 4 + TypeScript.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # typecheck (astro check) + build estático em dist/
npm run preview  # serve o dist/
```

## Estrutura

```
src/
  i18n/
    pt.ts, en.ts, es.ts   textos da home (contrato em types.ts)
    content/              extras.ts (terminal, esteira, demos), mountains.ts, coffee.ts
    routes.ts             slugs por idioma e pageUrl(): o seletor leva à página equivalente
    urls.ts               links externos (GitHub, repositórios, redes)
  pages/                  index, montanhas|mountains|montanas, cafe|coffee|cafe (por idioma)
  views/                  MountainsPage.astro e CoffeePage.astro
  components/             seções da home (Hero, Journey, Engineering, Stack, ...)
    art/                  Topo (curvas de nível), Ridges (serras), CupArt (xícara), geradas por código
    vue/                  ilhas interativas: Pipeline, StackExplorer, FlipDemo, Projects, HeroTerminal,
                          Lessons, BrewLab, ExtractionLab
  scripts/fx.ts           efeitos globais: progresso, contadores, spotlight, tilt, parallax, altímetro
  layouts/Base.astro      <head>, hreflang por página, barra de progresso
  styles/global.css       tema (tokens) e animações
  assets/                 profile.jpg e trail.jpg (o Astro gera os WebP no build)
public/                   favicon, og.svg
```

## Como funciona

- **Páginas.** Home, Montanhas e Café, cada uma em três idiomas (9 páginas estáticas). A navegação entre páginas usa transições nativas do navegador, sem JavaScript.
- **Idiomas.** Uma página estática por idioma (`/`, `/en/`, `/es/`). O seletor é feito de links comuns, sem JavaScript. Todo texto vive em `src/i18n`; o TypeScript acusa se uma chave faltar em algum idioma.
- **Desempenho.** Só as ilhas Vue carregam JavaScript, e só quando entram na tela (`client:visible`). Os efeitos globais somam um único script pequeno, e as animações respeitam quem desativa movimento no sistema. Fontes são locais (Inter e JetBrains Mono).
- **Tema.** Dark mode nativo. Cores e fontes são tokens em `src/styles/global.css`; não escreva cores soltas nos componentes.

## Pendências

- Trocar `public/og.svg` por uma imagem PNG 1200x630: a maioria das redes sociais não exibe SVG como prévia.
- Receitas da página de Café (`src/i18n/content/coffee.ts`): são valores de referência. Trocar pelas receitas pessoais.
- Página de Montanhas: incluir o diário dos 14 cumes de 2026 (nome, data, altitude, foto).
- Definir onde publicar (GitHub Pages, Vercel ou Netlify).
