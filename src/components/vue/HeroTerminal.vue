<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
  title: string;
  lines: { cmd: string; out: string }[];
}>();

const reduced =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

const typed = ref<string[]>(props.lines.map(() => ''));
const shown = ref<boolean[]>(props.lines.map(() => false));
const current = ref(0);
let cancelled = false;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function play() {
  for (let i = 0; i < props.lines.length; i++) {
    current.value = i;
    for (const ch of props.lines[i]!.cmd) {
      if (cancelled) return;
      typed.value[i] += ch;
      await sleep(55);
    }
    await sleep(180);
    shown.value[i] = true;
    await sleep(380);
  }
  current.value = props.lines.length;
}

onMounted(() => {
  if (reduced) {
    typed.value = props.lines.map((l) => l.cmd);
    shown.value = props.lines.map(() => true);
    current.value = props.lines.length;
    return;
  }
  setTimeout(play, 700);
});
onBeforeUnmount(() => {
  cancelled = true;
});
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-line bg-bg/90 shadow-2xl backdrop-blur" role="img" :aria-label="lines.map((l) => `${l.cmd}: ${l.out}`).join('. ')">
    <div class="flex items-center gap-2 border-b border-line bg-surface px-3.5 py-2.5">
      <span class="size-2.5 rounded-full bg-line-strong"></span>
      <span class="size-2.5 rounded-full bg-line-strong"></span>
      <span class="size-2.5 rounded-full bg-line-strong"></span>
      <span class="ml-2 truncate font-mono text-[11px] text-muted">{{ title }}</span>
    </div>
    <div class="space-y-1.5 px-4 py-4 font-mono text-[12px] leading-relaxed">
      <div v-for="(l, i) in lines" :key="l.cmd">
        <p>
          <span class="text-live">&gt;</span>
          <span class="ml-2 text-fg">{{ typed[i] }}</span>
          <span v-if="current === i" class="caret"></span>
        </p>
        <p v-if="shown[i]" class="out pl-4 text-muted">{{ l.out }}</p>
      </div>
      <p v-if="current >= lines.length" class="pt-0.5">
        <span class="text-live">&gt;</span>
        <span class="caret ml-2"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.caret {
  display: inline-block;
  width: 0.55ch;
  height: 1.05em;
  vertical-align: -0.15em;
  background: var(--color-accent);
  animation: blink 1.1s steps(1) infinite;
}
.out {
  animation: out-in 0.3s ease-out;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
@keyframes out-in {
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .caret,
  .out {
    animation: none;
  }
}
</style>
