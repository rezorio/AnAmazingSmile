<script setup lang="ts">
import { ref } from 'vue'
import { site } from '@/data/site'
import { images } from '@/data/images'
import { useHeroEntrance } from '@/composables/useHeroEntrance'
import SiteButton from '@/components/shared/SiteButton.vue'

const brand = ref<HTMLElement | null>(null)
const headline = ref<HTMLElement | null>(null)
const support = ref<HTMLElement | null>(null)
const ctas = ref<HTMLElement | null>(null)
const media = ref<HTMLElement | null>(null)

useHeroEntrance({ brand, headline, support, ctas, media })
</script>

<template>
  <section
    class="relative min-h-[100svh] overflow-hidden bg-ink text-cream"
    aria-label="Welcome"
  >
    <div class="absolute inset-0">
      <img
        ref="media"
        :src="images.hero"
        alt="Calm, modern dental treatment room"
        class="h-full w-full object-cover opacity-55"
        width="1800"
        height="1200"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/75 to-ink/45"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/40"
      />
    </div>

    <div
      class="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-28 md:pt-24"
    >
      <p
        ref="brand"
        class="font-display text-5xl font-semibold leading-none tracking-tight text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] opacity-0 md:text-7xl lg:text-8xl"
      >
        {{ site.name }}
      </p>
      <h1
        ref="headline"
        class="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-cream opacity-0 md:text-3xl"
      >
        {{ site.tagline }}
      </h1>
      <p
        ref="support"
        class="mt-4 max-w-md text-base leading-relaxed text-cream/90 opacity-0 md:text-lg"
      >
        {{ site.supportLine }}
      </p>
      <div ref="ctas" class="mt-8 flex flex-wrap gap-3 opacity-0">
        <SiteButton :href="site.phoneHref" variant="on-dark">
          Call {{ site.phone }}
        </SiteButton>
        <SiteButton to="/contact" variant="outline-light">
          Schedule a visit
        </SiteButton>
      </div>
    </div>
  </section>
</template>
