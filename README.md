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
  i18n/            textos: pt.ts (base), en.ts, es.ts, types.ts (contrato), index.ts (links e idiomas)
  pages/           index.astro (pt), en/index.astro, es/index.astro
  components/      Home.astro monta as seções; Projects.vue e OutsideTabs.vue são as ilhas interativas
  layouts/Base.astro  <head>, hreflang, Open Graph
  styles/global.css   tema (tokens de cor e fonte)
  assets/          profile.jpg (foto, recorte 4:5; o Astro gera os WebP otimizados no build)
public/            favicon, og.svg
```

## Como funciona

- **Idiomas.** Uma página estática por idioma (`/`, `/en/`, `/es/`). O seletor é feito de links comuns, sem JavaScript. Todo texto vive em `src/i18n`; o TypeScript acusa se uma chave faltar em algum idioma.
- **Desempenho.** Só os dois componentes Vue carregam JavaScript, e só quando entram na tela (`client:visible`). Fontes são locais (Inter e JetBrains Mono).
- **Tema.** Dark mode nativo. Cores e fontes são tokens em `src/styles/global.css`; não escreva cores soltas nos componentes.

## Pendências

- Trocar `public/og.svg` por uma imagem PNG 1200x630: a maioria das redes sociais não exibe SVG como prévia.
- Definir onde publicar (GitHub Pages, Vercel ou Netlify).
