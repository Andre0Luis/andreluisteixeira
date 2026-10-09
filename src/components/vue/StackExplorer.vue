<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Extras } from '../../i18n/content/extras';

const props = defineProps<{
  groups: { title: string; items: string[] }[];
  projects: { name: string; tags: string[] }[];
  t: Extras['stackExplorer'];
}>();

const active = ref(-1);
const picked = ref<string | null>(null);

const norm = (s: string) => s.toLowerCase();
const hit = (item: string, tag: string) =>
  norm(item) === norm(tag) || norm(item).split(/\s+/).includes(norm(tag));

const visible = computed(() => (active.value < 0 ? props.groups : [props.groups[active.value]!]));
const count = (item: string) => props.projects.filter((p) => p.tags.some((tag) => hit(item, tag))).length;
const usedIn = computed(() =>
  picked.value ? props.projects.filter((p) => p.tags.some((tag) => hit(picked.value!, tag))) : [],
);

function pick(item: string) {
  picked.value = picked.value === item ? null : item;
}
function setGroup(i: number) {
  active.value = i;
  picked.value = null;
}
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2" role="group">
      <button
        type="button"
        class="rounded-full border px-3.5 py-1.5 font-mono text-xs transition"
        :class="active < 0 ? 'border-accent bg-accent/10 text-fg' : 'border-line text-muted hover:text-fg'"
        :aria-pressed="active < 0"
        @click="setGroup(-1)"
      >
        {{ t.all }}
      </button>
      <button
        v-for="(g, i) in groups"
        :key="g.title"
        type="button"
        class="rounded-full border px-3.5 py-1.5 font-mono text-xs transition"
        :class="active === i ? 'border-accent bg-accent/10 text-fg' : 'border-line text-muted hover:text-fg'"
        :aria-pressed="active === i"
        @click="setGroup(i)"
      >
        {{ g.title }}
      </button>
    </div>

    <p class="mt-4 text-sm text-muted">{{ t.hint }}</p>

    <TransitionGroup tag="div" name="grp" class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <section v-for="g in visible" :key="g.title" class="card">
        <h3 class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ g.title }}</h3>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="item in g.items" :key="item">
            <button
              type="button"
              class="chip-btn rounded-md border px-2.5 py-1 font-mono text-sm transition"
              :class="[
                picked === item
                  ? 'border-accent bg-accent text-bg'
                  : count(item) > 0
                    ? 'border-accent/45 bg-accent/10 text-fg hover:bg-accent/20'
                    : 'border-line bg-surface-2 text-muted hover:text-fg',
              ]"
              :aria-pressed="picked === item"
              @click="pick(item)"
            >
              {{ item }}
              <span v-if="count(item) > 0" class="ml-1 opacity-70">{{ count(item) }}</span>
            </button>
          </li>
        </ul>
      </section>
    </TransitionGroup>

    <Transition name="info">
      <div v-if="picked" class="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-5" aria-live="polite">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">{{ picked }}</p>
        <template v-if="usedIn.length">
          <p class="mt-2 text-sm text-muted">{{ t.usedIn }} {{ usedIn.length }} {{ t.projects }}:</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="p in usedIn" :key="p.name" class="rounded-md border border-accent/50 px-3 py-1.5 text-sm text-fg">
              {{ p.name }}
            </li>
          </ul>
        </template>
        <p v-else class="mt-2 text-sm text-muted">{{ t.none }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.grp-enter-active,
.grp-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.grp-enter-from,
.grp-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.grp-leave-active {
  position: absolute;
}
.info-enter-active,
.info-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.info-enter-from,
.info-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.chip-btn:active {
  transform: scale(0.96);
}
</style>
