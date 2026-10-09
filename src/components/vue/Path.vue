<script setup lang="ts">
import { computed, ref } from 'vue';

interface Step {
  when: string;
  title: string;
  text: string;
  took: string[];
}

const props = defineProps<{
  steps: Step[];
  stepLabel: string;
  tookLabel: string;
  prev: string;
  next: string;
}>();

const i = ref(0);
const last = computed(() => props.steps.length - 1);
const nodes = ref<HTMLButtonElement[]>([]);
const pad = (n: number) => String(n).padStart(2, '0');

function go(n: number) {
  i.value = Math.min(last.value, Math.max(0, n));
  nodes.value[i.value]?.focus();
}
</script>

<template>
  <div>
    <!-- Percurso -->
    <div class="relative">
      <div class="absolute inset-x-5 top-5 h-px bg-line" aria-hidden="true">
        <div
          class="h-full bg-accent transition-[width] duration-500 ease-out"
          :style="{ width: (i / last) * 100 + '%' }"
        ></div>
      </div>
      <ol class="relative flex justify-between" role="tablist" :aria-label="stepLabel">
        <li v-for="(s, n) in steps" :key="s.title" class="flex w-0 flex-1 flex-col items-center first:items-start last:items-end sm:w-auto sm:flex-none">
          <button
            :ref="(el) => { if (el) nodes[n] = el as HTMLButtonElement; }"
            type="button"
            role="tab"
            :aria-selected="i === n"
            :tabindex="i === n ? 0 : -1"
            class="node grid size-10 place-items-center rounded-full border-2 font-mono text-xs transition"
            :class="
              i === n
                ? 'border-accent bg-accent text-bg active'
                : n < i
                  ? 'border-accent bg-bg text-accent'
                  : 'border-line-strong bg-bg text-muted hover:border-accent hover:text-fg'
            "
            @click="i = n"
            @keydown.right.prevent="go(i + 1)"
            @keydown.left.prevent="go(i - 1)"
            @keydown.home.prevent="go(0)"
            @keydown.end.prevent="go(last)"
          >
            {{ pad(n + 1) }}
          </button>
          <span
            class="mt-2 hidden max-w-24 text-center text-xs leading-tight transition-colors lg:block"
            :class="i === n ? 'text-fg' : 'text-muted'"
          >
            {{ s.title }}
          </span>
        </li>
      </ol>
    </div>

    <!-- Painel -->
    <div class="mt-8">
      <article
        v-for="(s, n) in steps"
        v-show="i === n"
        :key="s.title"
        role="tabpanel"
        class="panel-in grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_20rem]"
        data-spot
      >
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {{ stepLabel }} {{ pad(n + 1) }}/{{ pad(steps.length) }}
            <span class="mx-2 text-line-strong">/</span>
            <span class="normal-case tracking-normal text-muted">{{ s.when }}</span>
          </p>
          <h3 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{{ s.title }}</h3>
          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{{ s.text }}</p>
        </div>

        <div class="rounded-xl border border-line bg-bg/60 p-5">
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-muted">{{ tookLabel }}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="(t, k) in s.took"
              :key="t"
              class="took rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs text-fg"
              :style="{ animationDelay: k * 70 + 'ms' }"
            >
              {{ t }}
            </li>
          </ul>
        </div>
      </article>

      <div class="mt-4 flex items-center justify-between">
        <button
          type="button"
          class="rounded-lg border border-line-strong px-4 py-2 text-sm transition hover:bg-surface disabled:opacity-30"
          :disabled="i === 0"
          @click="go(i - 1)"
        >
          <span aria-hidden="true">&larr;</span> {{ prev }}
        </button>
        <button
          type="button"
          class="rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90 disabled:opacity-30"
          :disabled="i === last"
          @click="go(i + 1)"
        >
          {{ next }} <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-in {
  animation: panel-in 0.25s ease-out;
}
.took {
  animation: took 0.35s ease-out both;
}
.node.active {
  box-shadow: 0 0 0 5px color-mix(in oklab, var(--color-accent) 22%, transparent);
}
@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
@keyframes took {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.96);
  }
}
@media (prefers-reduced-motion: reduce) {
  .panel-in,
  .took {
    animation: none;
  }
}
</style>
