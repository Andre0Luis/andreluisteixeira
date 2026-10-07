<script setup lang="ts">
import { computed, ref } from 'vue';

interface Project {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  channels?: string[];
}

const props = defineProps<{
  items: Project[];
  label: string;
}>();

const selected = ref(0);
const current = computed(() => props.items[selected.value]!);
</script>

<template>
  <div class="grid gap-5 md:grid-cols-[minmax(0,18rem)_1fr]">
    <div role="tablist" :aria-label="label" aria-orientation="vertical" class="flex flex-col gap-3">
      <button
        v-for="(p, i) in items"
        :key="p.name"
        :id="`project-tab-${i}`"
        role="tab"
        type="button"
        :aria-selected="selected === i"
        :aria-controls="`project-panel`"
        :tabindex="selected === i ? 0 : -1"
        class="rounded-xl border p-5 text-left transition-colors"
        :class="
          selected === i
            ? 'border-line-strong bg-surface-2'
            : 'border-line bg-surface hover:border-line-strong'
        "
        @click="selected = i"
        @keydown.down.prevent="selected = (selected + 1) % items.length"
        @keydown.up.prevent="selected = (selected - 1 + items.length) % items.length"
      >
        <span class="block font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ p.kind }}</span>
        <span class="mt-2 block text-xl font-semibold tracking-tight">{{ p.name }}</span>
      </button>
    </div>

    <article
      id="project-panel"
      role="tabpanel"
      :aria-labelledby="`project-tab-${selected}`"
      class="rounded-xl border border-line bg-surface p-7"
    >
      <div :key="current.name" class="panel-in">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ current.kind }}</p>
        <h3 class="mt-3 text-2xl font-semibold tracking-tight">{{ current.name }}</h3>
        <p class="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{{ current.description }}</p>

        <ul class="mt-6 flex flex-wrap gap-2">
          <li v-for="tag in current.tags" :key="tag" class="chip">{{ tag }}</li>
        </ul>

        <ul v-if="current.channels" class="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
          <li
            v-for="ch in current.channels"
            :key="ch"
            class="rounded-md border border-line-strong px-3 py-1.5 text-sm text-fg"
          >
            {{ ch }}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<style scoped>
.panel-in {
  animation: panel-in 0.15s ease-out;
}
@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}
</style>
