<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import type { Extras } from '../../i18n/content/extras';

const props = defineProps<{ t: Extras['flip'] }>();

// Simulação: 1 s = 5 min, numa xícara de 30 min (README do app: 1 moeda por minuto, +20% ao encher).
const CUP_MIN = 30;
const TICK_MS = 100;
const PCT_PER_TICK = 100 / ((CUP_MIN / 5) * (1000 / TICK_MS));

const pct = ref(0);
const state = ref<'idle' | 'brewing' | 'done' | 'stopped'>('idle');
let timer: ReturnType<typeof setInterval> | undefined;

const minutes = computed(() => Math.floor((pct.value / 100) * CUP_MIN));
const bonus = computed(() => (state.value === 'done' ? Math.round(CUP_MIN * 0.2) : 0));
const coins = computed(() => minutes.value + bonus.value);
const faceDown = computed(() => state.value === 'brewing' || state.value === 'done');

function stop() {
  if (timer) clearInterval(timer);
  timer = undefined;
}

function flip() {
  stop();
  if (state.value === 'done' || state.value === 'stopped') pct.value = 0;
  state.value = 'brewing';
  timer = setInterval(() => {
    pct.value = Math.min(100, pct.value + PCT_PER_TICK);
    if (pct.value >= 100) {
      stop();
      state.value = 'done';
    }
  }, TICK_MS);
}

function pickUp() {
  stop();
  state.value = pct.value >= 100 ? 'done' : pct.value > 0 ? 'stopped' : 'idle';
}

onBeforeUnmount(stop);

// Nível do café dentro da xícara (y de 150 a 78 no desenho)
const level = computed(() => 150 - (pct.value / 100) * 72);
const message = computed(() => props.t.states[state.value]);
</script>

<template>
  <div class="mt-6 rounded-xl border border-line bg-surface-2 p-5" data-spot>
    <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ t.title }}</p>
    <p class="mt-2 text-sm text-muted">{{ t.hint }}</p>

    <div class="mt-5 grid items-center gap-6 sm:grid-cols-[auto_1fr]">
      <div class="flex items-end justify-center gap-6">
        <!-- Celular -->
        <div class="phone" :class="{ down: faceDown }" aria-hidden="true">
          <div class="face front"><span class="notch"></span></div>
          <div class="face back"><span class="lens"></span></div>
        </div>

        <!-- Xícara -->
        <svg viewBox="0 0 150 170" class="w-32" fill="none" aria-hidden="true">
          <defs>
            <clipPath id="flip-cup">
              <path d="M22 70h106v40c0 24-20 40-53 40s-53-16-53-40V70Z" />
            </clipPath>
          </defs>
          <path d="M22 70h106v40c0 24-20 40-53 40s-53-16-53-40V70Z" fill="#14171c" stroke="#3a414d" stroke-width="2" />
          <path d="M128 82h10c12 0 12 30 0 30h-12" stroke="#3a414d" stroke-width="2" />
          <g clip-path="url(#flip-cup)">
            <rect x="20" :y="level" width="112" height="90" fill="#6b4226" class="liquid" />
            <ellipse cx="75" :cy="level" rx="52" ry="3.5" fill="#8b5a33" class="liquid" />
          </g>
          <g v-if="state === 'brewing'" class="steam-mini" stroke="#9bb8d3" stroke-width="2.4" stroke-linecap="round">
            <path d="M58 56c-6-8 6-14 0-24" />
            <path d="M78 58c-7-9 7-16 0-28" />
            <path d="M98 56c-6-8 6-14 0-24" />
          </g>
        </svg>
      </div>

      <div>
        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            @click="faceDown && state === 'brewing' ? pickUp() : flip()"
          >
            {{ state === 'brewing' ? t.pickUp : t.flip }}
          </button>
          <p class="text-sm" :class="state === 'done' ? 'text-live' : 'text-muted'" aria-live="polite">{{ message }}</p>
        </div>

        <dl class="mt-4 grid grid-cols-2 gap-3">
          <div class="rounded-lg border border-line bg-bg/60 px-4 py-3">
            <dd class="font-mono text-2xl font-semibold tabular-nums">{{ minutes }}</dd>
            <dt class="mt-0.5 text-xs text-muted">{{ t.minutes }}</dt>
          </div>
          <div class="rounded-lg border border-line bg-bg/60 px-4 py-3">
            <dd class="font-mono text-2xl font-semibold tabular-nums text-live">
              {{ coins }}
              <span v-if="bonus" class="ml-1 align-middle text-[11px] font-normal text-live/80">+{{ bonus }}</span>
            </dd>
            <dt class="mt-0.5 text-xs text-muted">{{ t.coins }}</dt>
          </div>
        </dl>

        <div class="mt-4">
          <div class="flex justify-between font-mono text-[11px] text-muted">
            <span>{{ t.thin }}</span>
            <span>{{ t.quality }}</span>
            <span>{{ t.full }}</span>
          </div>
          <div class="mt-1.5 h-2 overflow-hidden rounded-full bg-bg">
            <div class="h-full rounded-full bg-accent transition-[width] duration-100" :style="{ width: pct + '%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <p class="mt-4 font-mono text-[11px] text-muted">{{ t.note }}</p>
  </div>
</template>

<style scoped>
.phone {
  position: relative;
  width: 54px;
  height: 100px;
  perspective: 500px;
}
.face {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 2px solid var(--color-line-strong);
  backface-visibility: hidden;
  transition: transform 0.6s cubic-bezier(0.3, 0.7, 0.2, 1);
}
.front {
  background: linear-gradient(160deg, #1d2a3a, #0d141d);
}
.back {
  background: var(--color-surface);
  transform: rotateY(180deg);
}
.phone.down .front {
  transform: rotateY(-180deg);
}
.phone.down .back {
  transform: rotateY(0deg);
}
.notch {
  position: absolute;
  top: 6px;
  left: 50%;
  width: 16px;
  height: 4px;
  border-radius: 4px;
  background: var(--color-line-strong);
  transform: translateX(-50%);
}
.lens {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--color-line-strong);
}
.liquid {
  transition: all 0.1s linear;
}
.steam-mini path {
  stroke-dasharray: 40;
  animation: steam-mini 2.6s ease-in-out infinite;
}
.steam-mini path:nth-child(2) {
  animation-delay: 0.7s;
}
.steam-mini path:nth-child(3) {
  animation-delay: 1.4s;
}
@keyframes steam-mini {
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
  .face {
    transition: none;
  }
  .steam-mini path {
    animation: none;
  }
}
</style>
