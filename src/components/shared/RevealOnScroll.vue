<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'

defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    as?: string
  }>(),
  { as: 'section' },
)

const attrs = useAttrs()
const root = ref<HTMLElement | null>(null)
const { isVisible } = useRevealOnScroll(root)

const mergedClass = computed(() => {
  const extra = attrs.class
  return ['reveal', isVisible.value ? 'is-visible' : '', extra]
})
</script>

<template>
  <component
    :is="as"
    ref="root"
    v-bind="attrs"
    :class="mergedClass"
  >
    <slot />
  </component>
</template>
