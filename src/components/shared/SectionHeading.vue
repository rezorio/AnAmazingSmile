<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  support?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    :class="[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
    ]"
  >
    <p
      v-if="eyebrow"
      class="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-sage"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="font-display text-4xl font-medium leading-tight text-ink md:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="support"
      class="mt-4 text-base leading-relaxed text-ink-soft md:text-lg"
    >
      {{ support }}
    </p>
  </div>
</template>
