<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Extras } from '../../i18n/content/extras';
import FlipDemo from './FlipDemo.vue';

interface Project {
  name: string;
  kind: string;
  description: string;
  highlights: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  demo?: 'flip';
}

const props = defineProps<{
  items: Project[];
  label: string;
  flip: Extras['flip'];
}>();

const selected = ref(0);
const current = computed(() => props.items[selected.value]!);
const tabs = ref<HTMLButtonElement[]>([]);

function go(next: number) {
  selected.value = (next + props.items.length) % props.items.length;
  tabs.value[selected.value]?.focus();
}
</script>

<template>
  <div class="grid gap-5 md:grid-cols-[minmax(0,17rem)_1fr]">
    <div
      role="tablist"
      :aria-label="label"
      aria-orientation="vertical"
      class="flex gap-3 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0"
    >
      <button
        v-for="(p, i) in items"
        :key="p.name"
        :id="`project-tab-${i}`"
        :ref="(el) => { if (el) tabs[i] = el as HTMLButtonElement; }"
        role="tab"
        type="button"
        :aria-selected="selected === i"
        aria-controls="project-panel"
        :tabindex="selected === i ? 0 : -1"
        class="min-w-44 shrink-0 rounded-xl border p-5 text-left transition-colors md:min-w-0"
        :class="
          selected === i
            ? 'border-accent/60 bg-surface-2'
            : 'border-line bg-surface hover:border-line-strong'
        "
        @click="selected = i"
        @keydown.down.prevent="go(selected + 1)"
        @keydown.right.prevent="go(selected + 1)"
        @keydown.up.prevent="go(selected - 1)"
        @keydown.left.prevent="go(selected - 1)"
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

        <ul class="mt-6 max-w-2xl space-y-3">
          <li v-for="h in current.highlights" :key="h" class="flex gap-3 leading-relaxed">
            <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
            <span>{{ h }}</span>
          </li>
        </ul>

        <ul class="mt-6 flex flex-wrap gap-2">
          <li v-for="tag in current.tags" :key="tag" class="chip">{{ tag }}</li>
        </ul>

        <FlipDemo v-if="current.demo === 'flip'" :t="flip" />

        <div v-if="current.links" class="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
          <a
            v-for="l in current.links"
            :key="l.href"
            :href="l.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm transition-colors hover:bg-surface-2"
          >
            {{ l.label }}
            <span aria-hidden="true">&nearr;</span>
          </a>
        </div>
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
