<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import type { Extras } from '../../i18n/content/extras';

type Status = 'idle' | 'active' | 'done' | 'fail' | 'healed';

const props = defineProps<{ t: Extras['pipeline'] }>();

const N = props.t.stages.length;
const running = ref(false);
const packet = ref(-1);
const status = ref<Status[]>(Array(N).fill('idle'));
const guards = ref<number[]>(Array(N).fill(0));
const runs = ref(0);
const absorbed = ref(0);
const pending = ref(false);
const selected = ref(0);
const message = ref(props.t.states.idle);
const tone = ref<'idle' | 'running' | 'fail' | 'healed'>('idle');
let token = 0;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const fmt = (tpl: string, i: number) => tpl.replace('{stage}', props.t.stages[i]!.label);

const progress = computed(() => (packet.value < 0 ? 0 : (packet.value / (N - 1)) * 100));
const totalGuards = computed(() => guards.value.reduce((a, b) => a + b, 0));

async function loop(my: number) {
  const alive = () => running.value && my === token;
  while (alive()) {
    status.value = Array(N).fill('idle');
    packet.value = -1;
    for (let i = 0; i < N; i++) {
      if (!alive()) return;
      packet.value = i;
      selected.value = i;
      status.value[i] = 'active';
      tone.value = 'running';
      message.value = props.t.states.running;
      await sleep(850);
      if (!alive()) return;
      if (pending.value) {
        pending.value = false;
        status.value[i] = 'fail';
        absorbed.value++;
        tone.value = 'fail';
        message.value = fmt(props.t.failMsg, i);
        await sleep(1400);
        if (!alive()) return;
        guards.value[i] = (guards.value[i] ?? 0) + 1;
        status.value[i] = 'healed';
        tone.value = 'healed';
        message.value = fmt(props.t.healMsg, i);
        await sleep(1200);
        if (!alive()) return;
      }
      status.value[i] = status.value[i] === 'healed' ? 'healed' : 'done';
    }
    runs.value++;
    await sleep(900);
  }
}

function toggle() {
  running.value = !running.value;
  token++;
  if (running.value) {
    loop(token);
  } else {
    tone.value = 'idle';
    message.value = props.t.states.idle;
  }
}

function reset() {
  running.value = false;
  token++;
  packet.value = -1;
  status.value = Array(N).fill('idle');
  guards.value = Array(N).fill(0);
  runs.value = 0;
  absorbed.value = 0;
  pending.value = false;
  selected.value = 0;
  tone.value = 'idle';
  message.value = props.t.states.idle;
}

onBeforeUnmount(() => {
  running.value = false;
  token++;
});
</script>

<template>
  <div class="rounded-2xl border border-line bg-surface p-5 sm:p-7" data-spot>
    <div class="flex flex-wrap items-center gap-3">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
        @click="toggle"
      >
        <svg viewBox="0 0 16 16" class="size-3.5" fill="currentColor" aria-hidden="true">
          <path v-if="!running" d="M4 2.5v11l9-5.5z" />
          <path v-else d="M4 2.5h3v11H4zm5 0h3v11H9z" />
        </svg>
        {{ running ? t.pause : t.run }}
      </button>
      <button
        type="button"
        class="rounded-lg border border-line-strong px-4 py-2 text-sm transition hover:bg-surface-2 disabled:opacity-40"
        :disabled="!running || pending"
        @click="pending = true"
      >
        {{ pending ? t.injectQueued : t.inject }}
      </button>
      <button type="button" class="px-2 py-2 font-mono text-xs text-muted hover:text-fg" @click="reset">
        {{ t.reset }}
      </button>
    </div>

    <!-- Esteira -->
    <div class="relative mt-8">
      <div class="absolute inset-x-5 top-5 hidden h-px bg-line md:block" aria-hidden="true">
        <div
          class="h-full bg-accent transition-[width] duration-700 ease-out"
          :style="{ width: progress + '%' }"
        ></div>
      </div>

      <ol class="relative grid grid-cols-3 gap-y-6 md:grid-cols-6">
        <li v-for="(s, i) in t.stages" :key="s.id" class="flex flex-col items-center text-center">
          <button
            type="button"
            class="node relative grid size-10 place-items-center rounded-full border-2 font-mono text-xs transition"
            :class="{
              'border-line-strong bg-bg text-muted': status[i] === 'idle',
              'border-accent bg-bg text-fg active': status[i] === 'active',
              'border-accent bg-accent text-bg': status[i] === 'done',
              'border-bad bg-bad/15 text-bad shake': status[i] === 'fail',
              'border-live bg-live/15 text-live': status[i] === 'healed',
              'ring-2 ring-accent/40 ring-offset-2 ring-offset-surface': selected === i && status[i] === 'idle',
            }"
            :aria-label="s.label"
            :aria-current="selected === i"
            @click="selected = i"
          >
            <svg v-if="status[i] === 'done'" viewBox="0 0 16 16" class="size-4" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M3 8.5l3.2 3L13 4.5" />
            </svg>
            <svg v-else-if="status[i] === 'fail'" viewBox="0 0 16 16" class="size-4" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
            <svg v-else-if="status[i] === 'healed'" viewBox="0 0 16 16" class="size-4" fill="currentColor" aria-hidden="true">
              <path d="M8 1l5.5 2v4.2c0 3.4-2.3 6-5.5 7.8-3.2-1.8-5.5-4.4-5.5-7.8V3L8 1z" />
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </button>
          <span class="mt-2 text-sm" :class="status[i] === 'idle' ? 'text-muted' : 'text-fg'">{{ s.label }}</span>
          <span class="mt-1 flex h-3 items-center gap-0.5" :aria-label="`${guards[i]} ${t.stageGuards}`">
            <i v-for="g in Math.min(guards[i]!, 6)" :key="g" class="size-1.5 rounded-full bg-live"></i>
          </span>
        </li>
      </ol>
    </div>

    <!-- Estado e detalhe -->
    <div class="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
      <div class="rounded-lg border border-line bg-bg/60 p-4" aria-live="polite">
        <p
          class="font-mono text-xs uppercase tracking-[0.18em]"
          :class="{
            'text-muted': tone === 'idle',
            'text-accent': tone === 'running',
            'text-bad': tone === 'fail',
            'text-live': tone === 'healed',
          }"
        >
          {{ message }}
        </p>
        <p class="mt-2 leading-relaxed text-fg">{{ t.stages[selected]!.text }}</p>
      </div>

      <dl class="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line md:w-80">
        <div class="flex flex-col bg-surface-2 px-3 py-3">
          <dd class="font-mono text-2xl font-semibold">{{ runs }}</dd>
          <dt class="mt-1 text-[11px] leading-tight text-muted">{{ t.counters.runs }}</dt>
        </div>
        <div class="flex flex-col bg-surface-2 px-3 py-3">
          <dd class="font-mono text-2xl font-semibold">{{ absorbed }}</dd>
          <dt class="mt-1 text-[11px] leading-tight text-muted">{{ t.counters.absorbed }}</dt>
        </div>
        <div class="flex flex-col bg-surface-2 px-3 py-3">
          <dd class="font-mono text-2xl font-semibold text-live">{{ totalGuards }}</dd>
          <dt class="mt-1 text-[11px] leading-tight text-muted">{{ t.counters.guards }}</dt>
        </div>
      </dl>
    </div>

    <p class="mt-4 font-mono text-[11px] text-muted">{{ t.note }}</p>
  </div>
</template>

<style scoped>
.node.active {
  animation: pulse 1.2s ease-in-out infinite;
}
.shake {
  animation: shake 0.45s ease-in-out 2;
}
@keyframes pulse {
  50% {
    box-shadow: 0 0 0 7px color-mix(in oklab, var(--color-accent) 22%, transparent);
  }
}
@keyframes shake {
  25% {
    transform: translateX(-3px);
  }
  75% {
    transform: translateX(3px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .node.active,
  .shake {
    animation: none;
  }
}
</style>
