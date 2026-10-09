<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: { title: string; short: string; long: string }[];
  hint: string;
}>();

const open = ref(0);
</script>

<template>
  <div>
    <p class="mb-5 font-mono text-xs text-muted">{{ hint }}</p>
    <ul class="grid gap-4 md:grid-cols-2">
      <li v-for="(it, i) in items" :key="it.title">
        <button
          type="button"
          class="card group w-full text-left"
          :class="open === i ? '!border-accent/60' : ''"
          :aria-expanded="open === i"
          :aria-controls="`lesson-${i}`"
          @click="open = open === i ? -1 : i"
        >
          <span class="flex items-start justify-between gap-4">
            <span>
              <span class="font-mono text-xs text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="mt-2 block text-xl font-semibold tracking-tight">{{ it.title }}</span>
              <span class="mt-1 block text-sm text-muted">{{ it.short }}</span>
            </span>
            <span
              class="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition duration-300 group-hover:text-fg"
              :class="open === i ? 'rotate-45 border-accent text-accent' : ''"
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" class="size-3.5" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
          </span>
          <span
            :id="`lesson-${i}`"
            class="body grid text-left"
            :class="open === i ? 'open' : ''"
            role="region"
          >
            <span class="overflow-hidden">
              <span class="mt-4 block border-t border-line pt-4 leading-relaxed">{{ it.long }}</span>
            </span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.body {
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 0.35s ease,
    opacity 0.3s ease;
}
.body.open {
  grid-template-rows: 1fr;
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .body {
    transition: none;
  }
}
</style>
