<script setup lang="ts">
import { site } from '@/data/site'
import { images } from '@/data/images'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
</script>

<template>
  <RevealOnScroll class="bg-cream-deep py-24 md:py-32">
    <div
      class="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8"
    >
      <div class="reveal-child md:col-span-6">
        <div class="overflow-hidden">
          <img
            :src="images.doctor"
            :alt="site.doctor.name"
            class="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            width="900"
            height="1125"
          />
        </div>
      </div>

      <div class="reveal-child md:col-span-6">
        <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
          Your dentist
        </p>
        <h2
          class="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl"
        >
          {{ site.doctor.name }}
        </h2>
        <p class="mt-2 text-sm text-stone">
          {{ site.doctor.credentials }} · {{ site.doctor.title }}
        </p>
        <p class="mt-6 text-base leading-relaxed text-ink-soft">
          Dr. Zena earned her DDS from the University of Detroit Mercy School of
          Dentistry in 2010. With {{ site.doctor.experienceYears }} of
          experience, she pairs advanced technique with a gentle chairside
          manner — from no-prep veneers and Invisalign® to everyday family care.
        </p>
        <p class="mt-4 text-base leading-relaxed text-ink-soft">
          She takes time to listen, educate, and tailor each visit so you leave
          feeling confident and cared for.
        </p>
        <div class="mt-8">
          <SiteButton to="/about" variant="secondary">
            Meet Dr. Zena
          </SiteButton>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</template>
