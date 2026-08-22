<script setup lang="ts">
import { galleryCases } from '@/data/gallery'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
</script>

<template>
  <main>
    <section class="bg-cream pt-32 pb-16 md:pt-40 md:pb-20">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
          Smile gallery
        </p>
        <h1
          class="mt-4 max-w-3xl font-display text-5xl font-medium leading-tight text-ink md:text-6xl"
        >
          Stories of confidence, not a tile dump.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Drag each slider to compare real patient results from our Tempe
          practice. Each case is labeled with the procedure and outcome.
        </p>
      </div>
    </section>

    <RevealOnScroll
      v-for="(item, index) in galleryCases"
      :key="item.id"
      :class="[
        'py-16 md:py-20',
        index % 2 === 0 ? 'bg-cream-deep' : 'bg-cream',
      ]"
    >
      <div
        class="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-12 md:px-8"
      >
        <div class="reveal-child md:col-span-7">
          <BeforeAfterSlider
            :before="item.before"
            :after="item.after"
            :before-alt="`${item.title} before`"
            :after-alt="`${item.title} after`"
          />
        </div>
        <div class="reveal-child md:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-sage">
            {{ item.procedure }}
          </p>
          <h2 class="mt-3 font-display text-3xl text-ink md:text-4xl">
            {{ item.title }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            {{ item.outcome }}
          </p>
        </div>
      </div>
    </RevealOnScroll>

    <section class="border-t border-line bg-cream py-20">
      <div class="mx-auto max-w-6xl px-5 text-center md:px-8">
        <h2 class="font-display text-3xl text-ink">
          Ready for your own before &amp; after?
        </h2>
        <div class="mt-8 flex justify-center">
          <SiteButton to="/contact">Schedule a consultation</SiteButton>
        </div>
      </div>
    </section>
  </main>
</template>
