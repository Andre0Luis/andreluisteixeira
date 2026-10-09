<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import type { CoffeePage } from '../../i18n/content/coffee';

const props = defineProps<{ t: CoffeePage['lab'] }>();

const mIdx = ref(0);
const dose = ref(18);
const elapsed = ref(0);
const running = ref(false);
const fast = ref(false);
const finished = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

const m = computed(() => props.t.methods[mIdx.value]!);
const water = computed(() => Math.round(dose.value * m.value.ratio));
const pct = computed(() => Math.min(1, elapsed.value / m.value.total));
const stepIdx = computed(() => {
  let idx = -1;
  m.value.steps.forEach((s, i) => {
    if (elapsed.value >= s.at && (running.value || elapsed.value > 0)) idx = i;
  });
  return idx;
});
const clock = (s: number) => {
  const v = Math.max(0, Math.floor(s));
  return `${Math.floor(v / 60)}:${String(v % 60).padStart(2, '0')}`;
};

// Nível do café na xícara (y de 150 a 82 no desenho)
const level = computed(() => 150 - pct.value * 68);

function stop() {
  if (timer) clearInterval(timer);
  timer = undefined;
  running.value = false;
}
function toggle() {
  if (running.value) return stop();
  if (finished.value) reset();
  running.value = true;
  timer = setInterval(() => {
    elapsed.value += 0.1 * (fast.value ? 5 : 1);
    if (elapsed.value >= m.value.total) {
      elapsed.value = m.value.total;
      stop();
      finished.value = true;
    }
  }, 100);
}
function reset() {
  stop();
  elapsed.value = 0;
  finished.value = false;
}
watch(mIdx, reset);
onBeforeUnmount(stop);

const stats = computed(() => [
  { label: props.t.water, value: `${water.value} ml` },
  { label: props.t.ratio, value: `${m.value.ratio}:1` },
  { label: props.t.temp, value: m.value.temp },
  { label: props.t.grind, value: m.value.grind },
  ...(m.value.roast ? [{ label: props.t.roast, value: m.value.roast }] : []),
  { label: props.t.time, value: clock(m.value.total) },
]);
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,19rem)_1fr]">
    <!-- Métodos -->
    <div role="tablist" :aria-label="t.methodLabel" class="grid grid-cols-2 content-start gap-3 lg:grid-cols-1">
      <button
        v-for="(me, i) in t.methods"
        :key="me.id"
        role="tab"
        type="button"
        :aria-selected="mIdx === i"
        class="card text-left"
        :class="mIdx === i ? '!border-accent/60 !bg-surface-2' : ''"
        @click="mIdx = i"
      >
        <span class="flex items-center gap-3">
          <svg viewBox="0 0 40 40" class="size-8 shrink-0 text-accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <template v-if="me.id === 'v60'">
              <path d="M8 10h24l-8 16h-8z" />
              <path d="M16 26v4h8v-4" />
              <path d="M12 34h16" />
            </template>
            <template v-else-if="me.id === 'press'">
              <rect x="11" y="12" width="18" height="22" rx="2" />
              <path d="M20 4v14M14 4h12" />
              <path d="M29 18h3a2 2 0 0 1 0 6h-3" />
            </template>
            <template v-else-if="me.id === 'siphon'">
              <circle cx="20" cy="11" r="6" />
              <path d="M20 17v6" />
              <circle cx="20" cy="29" r="7" />
              <path d="M12 36h16" />
            </template>
            <template v-else>
              <rect x="13" y="6" width="14" height="22" rx="2" />
              <path d="M20 2v10M16 2h8" />
              <path d="M10 34h20M13 28l-3 6M27 28l3 6" />
            </template>
          </svg>
          <span>
            <span class="flex flex-wrap items-center gap-2 font-medium">
              {{ me.name }}
              <span
                v-if="me.badge"
                class="rounded-full border border-accent/50 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-normal text-accent"
                >{{ me.badge }}</span
              >
            </span>
            <span class="mt-0.5 hidden text-xs leading-snug text-muted sm:block">{{ me.tagline }}</span>
          </span>
        </span>
      </button>
    </div>

    <!-- Painel -->
    <div class="rounded-2xl border border-line bg-surface p-5 sm:p-7" role="tabpanel" data-spot>
      <div class="grid gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <label class="block font-mono text-xs uppercase tracking-[0.18em] text-accent" for="dose">{{ t.dose }}</label>
          <div class="mt-3 flex items-center gap-4">
            <input id="dose" v-model.number="dose" type="range" min="10" max="40" step="1" class="w-full" :disabled="running" />
            <span class="w-24 shrink-0 whitespace-nowrap text-right font-mono text-2xl font-semibold tabular-nums">{{ dose }} g</span>
          </div>

          <dl class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div v-for="s in stats" :key="s.label" class="rounded-lg border border-line bg-bg/60 px-4 py-3">
              <dd class="font-mono text-base font-semibold tabular-nums sm:text-lg">{{ s.value }}</dd>
              <dt class="mt-0.5 text-xs text-muted">{{ s.label }}</dt>
            </div>
          </dl>
        </div>

        <!-- Xícara + relógio -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <svg viewBox="0 0 170 170" class="w-40" fill="none" aria-hidden="true">
              <defs>
                <clipPath id="lab-cup">
                  <path d="M30 80h96v34c0 22-18 36-48 36s-48-14-48-36V80Z" />
                </clipPath>
              </defs>
              <path d="M30 80h96v34c0 22-18 36-48 36s-48-14-48-36V80Z" fill="#14171c" stroke="#3a414d" stroke-width="2" />
              <path d="M126 92h9c11 0 11 28 0 28h-11" stroke="#3a414d" stroke-width="2" />
              <g clip-path="url(#lab-cup)">
                <rect x="28" :y="level" width="100" height="80" fill="#5b371d" class="liq" />
                <ellipse cx="78" :cy="level" rx="48" ry="3.2" fill="#8b5a33" class="liq" />
              </g>
              <g v-if="running" class="steam-lab" stroke="#9bb8d3" stroke-width="2.4" stroke-linecap="round">
                <path d="M62 66c-6-8 6-14 0-24" />
                <path d="M80 68c-7-9 7-16 0-28" />
                <path d="M98 66c-6-8 6-14 0-24" />
              </g>
            </svg>
          </div>
          <p class="mt-1 font-mono text-4xl font-semibold tabular-nums" aria-live="off">{{ clock(elapsed) }}</p>
          <p class="font-mono text-[11px] text-muted">/ {{ clock(m.total) }}</p>
        </div>
      </div>

      <div class="mt-6 h-1.5 overflow-hidden rounded-full bg-bg">
        <div class="h-full rounded-full bg-accent transition-[width] duration-100" :style="{ width: pct * 100 + '%' }"></div>
      </div>

      <div class="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
          @click="toggle"
        >
          <svg viewBox="0 0 16 16" class="size-3.5" fill="currentColor" aria-hidden="true">
            <path v-if="!running" d="M4 2.5v11l9-5.5z" />
            <path v-else d="M4 2.5h3v11H4zm5 0h3v11H9z" />
          </svg>
          {{ running ? t.pause : t.start }}
        </button>
        <button type="button" class="rounded-lg border border-line-strong px-4 py-2 text-sm transition hover:bg-surface-2" @click="reset">
          {{ t.reset }}
        </button>
        <label class="ml-auto inline-flex cursor-pointer items-center gap-2 font-mono text-xs text-muted">
          <input v-model="fast" type="checkbox" class="size-4" />
          {{ t.fast }}
        </label>
      </div>

      <div class="mt-6 border-t border-line pt-5">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ t.stepsTitle }}</p>
        <ol class="mt-3 space-y-2">
          <li
            v-for="(s, i) in m.steps"
            :key="s.at"
            class="flex gap-3 rounded-lg border px-4 py-3 transition-colors"
            :class="stepIdx === i ? 'border-accent/60 bg-accent/10' : stepIdx > i ? 'border-line opacity-60' : 'border-line'"
          >
            <span class="w-10 shrink-0 font-mono text-xs text-accent">{{ clock(s.at) }}</span>
            <span class="text-sm leading-relaxed">{{ s.text }}</span>
          </li>
        </ol>
        <p v-if="finished" class="mt-4 text-sm text-live" aria-live="polite">{{ t.done }}</p>
      </div>

      <p class="mt-5 font-mono text-[11px] text-muted">{{ t.note }}</p>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  accent-color: var(--color-accent);
}
.liq {
  transition: all 0.1s linear;
}
.steam-lab path {
  stroke-dasharray: 40;
  animation: steam-lab 2.6s ease-in-out infinite;
}
.steam-lab path:nth-child(2) {
  animation-delay: 0.7s;
}
.steam-lab path:nth-child(3) {
  animation-delay: 1.4s;
}
@keyframes steam-lab {
  0% {
    stroke-dashoffset: 40;
    opacity: 0;
  }
  40% {
    opacity: 0.8;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .steam-lab path {
    animation: none;
  }
}
</style>
