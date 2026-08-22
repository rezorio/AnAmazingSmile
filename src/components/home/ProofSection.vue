<script setup lang="ts">
import { reviews } from '@/data/reviews'
import { site } from '@/data/site'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
</script>

<template>
  <RevealOnScroll class="bg-cream py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading
        class="reveal-child"
        eyebrow="Patient voices"
        title="What people notice first"
        support="Warmth, attentiveness, and a visit that feels easy — from real Google reviews."
      />

      <div class="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <blockquote
          v-for="review in reviews"
          :key="review.author"
          class="reveal-child border-t border-line pt-8"
        >
          <p class="font-display text-xl leading-snug text-ink md:text-2xl">
            “{{ review.quote }}”
          </p>
          <footer class="mt-6 text-sm text-stone">
            <cite class="not-italic text-ink-soft">{{ review.author }}</cite>
            <span class="mx-2 text-line">·</span>
            {{ review.source }}
          </footer>
        </blockquote>
      </div>

      <div class="reveal-child mt-12 flex flex-wrap gap-6 text-sm">
        <a
          :href="site.social.google"
          class="text-sage transition-colors hover:text-sage-deep hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Google reviews
        </a>
        <a
          :href="site.social.yelp"
          class="text-sage transition-colors hover:text-sage-deep hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Yelp reviews
        </a>
      </div>
    </div>
  </RevealOnScroll>
</template>
