<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CoffeePage } from '../../i18n/content/coffee';

const props = defineProps<{ t: CoffeePage['extraction'] }>();

const grind = ref(50);
const time = ref(50);
const temp = ref(50);

// Regra de bolso: moagem pesa mais, depois tempo, depois temperatura.
const score = computed(() => Math.round(grind.value * 0.4 + time.value * 0.35 + temp.value * 0.25));
const zone = computed<'under' | 'balanced' | 'over'>(() =>
  score.value < 42 ? 'under' : score.value > 58 ? 'over' : 'balanced',
);
const info = computed(() => props.t.zones[zone.value]);

// Cor do café: do âmbar claro ao marrom escuro conforme a extração.
const coffeeColor = computed(() => {
  const k = score.value / 100;
  const mix = (a: number, b: number) => Math.round(a + (b - a) * k);
  return `rgb(${mix(196, 52)}, ${mix(138, 28)}, ${mix(64, 16)})`;
});

// Preferência: equilibrado, puxando para a acidez mais elevada (um pouco menos de tempo e temperatura).
function applyPreset() {
  grind.value = 50;
  time.value = 40;
  temp.value = 45;
}

const sliders = computed(() => [
  { key: 'grind' as const, model: grind, label: props.t.sliders.grind },
  { key: 'time' as const, model: time, label: props.t.sliders.time },
  { key: 'temp' as const, model: temp, label: props.t.sliders.temp },
]);
</script>

<template>
  <div class="grid gap-6 rounded-2xl border border-line bg-surface p-5 sm:p-7 lg:grid-cols-[1fr_minmax(0,21rem)]" data-spot>
    <div class="space-y-6">
      <button
        type="button"
        class="rounded-lg border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-fg transition hover:bg-accent/20"
        @click="applyPreset"
      >
        {{ t.preset }}
      </button>
      <div v-for="s in sliders" :key="s.key">
        <label class="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.18em] text-accent" :for="`ex-${s.key}`">
          {{ s.label[0] }}
          <span class="tabular-nums text-muted">{{ s.model.value }}</span>
        </label>
        <input :id="`ex-${s.key}`" v-model.number="s.model.value" type="range" min="0" max="100" class="mt-3 w-full" />
        <div class="mt-1 flex justify-between text-xs text-muted">
          <span>{{ s.label[1] }}</span>
          <span>{{ s.label[2] }}</span>
        </div>
      </div>

      <p class="font-mono text-[11px] text-muted">{{ t.note }}</p>
    </div>

    <div class="rounded-xl border border-line bg-bg/60 p-5">
      <div class="flex items-center gap-4">
        <svg viewBox="0 0 90 80" class="w-24 shrink-0" fill="none" aria-hidden="true">
          <path d="M10 22h62v18c0 14-12 22-31 22S10 54 10 40V22Z" fill="#14171c" stroke="#3a414d" stroke-width="2" />
          <path d="M72 30h5c7 0 7 17 0 17h-6" stroke="#3a414d" stroke-width="2" />
          <ellipse cx="41" cy="23" rx="30" ry="4.5" class="cup-surface" :style="{ fill: coffeeColor }" />
        </svg>
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{{ t.scoreLabel }}</p>
          <p class="font-mono text-4xl font-semibold tabular-nums">{{ score }}</p>
        </div>
      </div>

      <div class="relative mt-5 h-3 rounded-full gauge">
        <div class="absolute inset-y-0 rounded-full border border-fg/50" style="left: 42%; width: 16%" aria-hidden="true"></div>
        <div class="needle absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fg bg-bg" :style="{ left: score + '%' }"></div>
      </div>

      <div class="mt-5" aria-live="polite">
        <p
          class="font-medium"
          :class="{ 'text-bad': zone === 'under' || zone === 'over', 'text-live': zone === 'balanced' }"
        >
          {{ info.title }}
        </p>
        <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ info.notes }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  accent-color: var(--color-accent);
}
.gauge {
  background: linear-gradient(to right, #d9b36a, #7fd1a8 50%, #5a3a22);
}
.needle {
  transition: left 0.15s ease-out;
}
.cup-surface {
  transition: fill 0.2s ease;
}
@media (prefers-reduced-motion: reduce) {
  .needle,
  .cup-surface {
    transition: none;
  }
}
</style>
