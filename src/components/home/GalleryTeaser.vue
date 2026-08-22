<script setup lang="ts">
import { galleryCases } from '@/data/gallery'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider.vue'
import SiteButton from '@/components/shared/SiteButton.vue'

const featured = galleryCases[0]
const teasers = galleryCases.slice(1, 4)
</script>

<template>
  <RevealOnScroll class="bg-cream-deep py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div
        class="reveal-child flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <SectionHeading
          eyebrow="Smile gallery"
          title="Results, told with care"
          support="A few curated cases — not a wall of unlabeled tiles."
        />
        <SiteButton to="/gallery" variant="secondary" class="shrink-0">
          View gallery
        </SiteButton>
      </div>

      <div
        v-if="featured"
        class="reveal-child mt-14 grid gap-8 lg:grid-cols-12 lg:items-center"
      >
        <div class="lg:col-span-7">
          <BeforeAfterSlider
            :before="featured.before"
            :after="featured.after"
            :before-alt="`${featured.title} before`"
            :after-alt="`${featured.title} after`"
          />
        </div>
        <div class="lg:col-span-5 lg:pl-4">
          <p class="text-xs uppercase tracking-[0.2em] text-sage">
            {{ featured.procedure }}
          </p>
          <h3 class="mt-3 font-display text-3xl text-ink">
            {{ featured.title }}
          </h3>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            {{ featured.outcome }}
          </p>
        </div>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-3">
        <article
          v-for="item in teasers"
          :key="item.id"
          class="reveal-child group"
        >
          <div class="overflow-hidden">
            <img
              :src="item.after"
              :alt="item.title"
              class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              width="600"
              height="450"
            />
          </div>
          <p class="mt-4 text-xs uppercase tracking-[0.18em] text-stone">
            {{ item.procedure }}
          </p>
          <h4 class="mt-1 font-display text-xl text-ink">{{ item.title }}</h4>
        </article>
      </div>
    </div>
  </RevealOnScroll>
</template>
