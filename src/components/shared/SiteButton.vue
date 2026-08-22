<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'on-dark' | 'outline-light'
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)

const classes: Record<string, string> = {
  primary:
    'bg-sage text-cream hover:bg-sage-deep focus-visible:outline-sage disabled:opacity-60',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-sage hover:text-sage focus-visible:outline-sage disabled:opacity-60',
  ghost:
    'bg-transparent text-sage hover:text-sage-deep underline-offset-4 hover:underline focus-visible:outline-sage',
  'on-dark':
    'bg-cream text-ink hover:bg-cream-deep focus-visible:outline-cream disabled:opacity-60',
  'outline-light':
    'bg-transparent text-cream border border-cream/70 hover:border-cream hover:bg-cream/15 focus-visible:outline-cream disabled:opacity-60',
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-[var(--motion-fast)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none'
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[base, classes[variant]]"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    :class="[base, classes[variant]]"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[base, classes[variant]]"
  >
    <slot />
  </button>
</template>
