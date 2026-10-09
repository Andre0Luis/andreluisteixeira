// Efeitos globais. Tudo é opcional: sem JavaScript, a página continua legível.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;

/* Barra de progresso de leitura */
const bar = document.getElementById('progress');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, scrollY / max) : 0;
    bar?.style.setProperty('--p', String(p));
    document.documentElement.style.setProperty('--scroll', String(scrollY));
    updateAltimeter(p);
    updateTimeline();
  });
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll, { passive: true });

/* Revelar ao entrar na tela */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !reduced) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

/* Contadores: [data-count-to] anima de 0 até o valor quando aparece */
const counters = document.querySelectorAll<HTMLElement>('[data-count-to]');
function format(n: number, el: HTMLElement) {
  const locale = el.dataset.locale || undefined;
  const plain = el.dataset.plain === 'true';
  const text = plain ? String(Math.round(n)) : Math.round(n).toLocaleString(locale);
  return text + (el.dataset.suffix ?? '');
}
if (!reduced && 'IntersectionObserver' in window) {
  const co = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        co.unobserve(el);
        const to = Number(el.dataset.countTo);
        const start = performance.now();
        const dur = 1300;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = format(to * eased, el);
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    el.textContent = format(0, el);
    co.observe(el);
  });
}

/* Spotlight que segue o ponteiro nos cartões */
if (finePointer) {
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>('.card, [data-spot]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}

/* Inclinação 3D suave */
if (finePointer && !reduced) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 6;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/* Parallax do mouse nas camadas decorativas */
if (finePointer && !reduced) {
  const layers = document.querySelectorAll<HTMLElement>('[data-mouse]');
  if (layers.length) {
    addEventListener(
      'pointermove',
      (e) => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        layers.forEach((l) => {
          const k = Number(l.dataset.mouse) || 10;
          l.style.setProperty('--mx-shift', `${x * k}px`);
          l.style.setProperty('--my-shift', `${y * k}px`);
        });
      },
      { passive: true },
    );
  }
}

/* Parallax por rolagem: [data-speed] desloca a camada conforme o scroll */
const parallax = document.querySelectorAll<HTMLElement>('[data-speed]');
function updateParallax() {
  if (reduced) return;
  parallax.forEach((el) => {
    const speed = Number(el.dataset.speed) || 0;
    el.style.setProperty('--py', `${scrollY * speed}px`);
  });
}
addEventListener('scroll', updateParallax, { passive: true });

/* Altímetro: a altitude sobe conforme a página é lida */
const altimeter = document.querySelector<HTMLElement>('[data-altimeter]');
function updateAltimeter(p: number) {
  if (!altimeter) return;
  const max = Number(altimeter.dataset.max) || 0;
  const value = Math.round(max * p);
  const text = value.toLocaleString(altimeter.dataset.locale || undefined);
  altimeter.querySelectorAll<HTMLElement>('[data-alt-value]').forEach((out) => (out.textContent = text));
  altimeter.style.setProperty('--alt', String(p));
}

/* Linha do tempo que se desenha com a rolagem */
const timeline = document.querySelector<HTMLElement>('[data-timeline]');
function updateTimeline() {
  if (!timeline) return;
  const r = timeline.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
  timeline.style.setProperty('--tl', String(p));
  timeline.querySelectorAll<HTMLElement>('[data-tl-item]').forEach((li) => {
    const lr = li.getBoundingClientRect();
    li.classList.toggle('is-lit', lr.top < innerHeight * 0.62);
  });
}

onScroll();
updateParallax();
