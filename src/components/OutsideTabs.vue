<script setup lang="ts">
import { computed, ref } from 'vue';

interface Tab {
  id: string;
  label: string;
  title: string;
  text: string;
  chips?: string[];
  story?: { label: string; meta: string[]; text: string };
}

const props = defineProps<{
  tabs: Tab[];
  label: string;
}>();

const active = ref(0);
const current = computed(() => props.tabs[active.value]!);
const buttons = ref<HTMLButtonElement[]>([]);

function go(next: number) {
  active.value = (next + props.tabs.length) % props.tabs.length;
  buttons.value[active.value]?.focus();
}
</script>

<template>
  <div>
    <div role="tablist" :aria-label="label" class="inline-flex gap-1 rounded-lg border border-line bg-surface p-1">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.id"
        :id="`outside-tab-${tab.id}`"
        :ref="(el) => { if (el) buttons[i] = el as HTMLButtonElement; }"
        role="tab"
        type="button"
        :aria-selected="active === i"
        aria-controls="outside-panel"
        :tabindex="active === i ? 0 : -1"
        class="rounded-md px-4 py-2 text-sm transition-colors"
        :class="active === i ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'"
        @click="active = i"
        @keydown.right.prevent="go(active + 1)"
        @keydown.left.prevent="go(active - 1)"
        @keydown.home.prevent="go(0)"
        @keydown.end.prevent="go(tabs.length - 1)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      id="outside-panel"
      role="tabpanel"
      :aria-labelledby="`outside-tab-${current.id}`"
      class="mt-6 rounded-xl border border-line bg-surface p-7"
    >
      <div :key="current.id" class="panel-in">
        <h3 class="text-2xl font-semibold tracking-tight">{{ current.title }}</h3>
        <p class="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{{ current.text }}</p>
        <aside v-if="current.story" class="mt-6 rounded-lg border border-line bg-surface-2 p-5">
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ current.story.label }}</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="m in current.story.meta" :key="m" class="chip">{{ m }}</li>
          </ul>
          <p class="mt-4 max-w-3xl leading-relaxed text-fg">{{ current.story.text }}</p>
        </aside>
        <ul v-if="current.chips" class="mt-6 flex flex-wrap gap-2">
          <li v-for="chip in current.chips" :key="chip" class="chip">{{ chip }}</li>
        </ul>
      </div>
    </div>
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
