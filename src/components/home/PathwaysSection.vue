<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from '@lucide/vue'
import { pathways } from '@/data/services'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
</script>

<template>
  <RevealOnScroll class="bg-cream py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading
        class="reveal-child"
        eyebrow="Where to begin"
        title="Choose the visit that fits you"
        support="Four clear paths — no encyclopedia of procedures on the first screen."
      />

      <div class="mt-14 grid gap-px bg-line md:grid-cols-2">
        <RouterLink
          v-for="path in pathways"
          :key="path.id"
          :to="path.to"
          class="reveal-child group relative bg-cream p-8 transition-colors duration-300 hover:bg-cream-deep md:p-10"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="font-display text-2xl font-medium text-ink md:text-3xl">
              {{ path.title }}
            </h3>
            <ArrowUpRight
              class="h-5 w-5 shrink-0 text-sage transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {{ path.description }}
          </p>
          <span
            class="mt-6 block h-px w-0 bg-sage transition-all duration-500 group-hover:w-16"
          />
        </RouterLink>
      </div>
    </div>
  </RevealOnScroll>
</template>
