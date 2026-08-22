<script setup lang="ts">
import { hours, site } from '@/data/site'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
</script>

<template>
  <RevealOnScroll class="bg-cream py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading
        class="reveal-child"
        eyebrow="Visit us"
        title="Your smile is our priority"
        support="Hours, directions, and a simple next step — call or schedule online."
      />

      <div class="mt-14 grid gap-10 lg:grid-cols-12">
        <div class="reveal-child lg:col-span-5">
          <p class="font-display text-2xl text-ink">{{ site.name }}</p>
          <p class="mt-3 text-sm leading-relaxed text-ink-soft">
            {{ site.address.full }}
          </p>
          <a
            :href="site.phoneHref"
            class="mt-4 inline-block text-lg text-sage hover:text-sage-deep"
          >
            {{ site.phone }}
          </a>
          <p class="mt-6 text-sm text-ink-soft">
            In network with most plans. We also offer in-house dental plans —
            call for details. If you don’t see your plan listed, please call the
            office.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <SiteButton to="/contact">Schedule an appointment</SiteButton>
            <SiteButton :href="site.mapLink" variant="secondary">
              Get directions
            </SiteButton>
          </div>
        </div>

        <div class="reveal-child lg:col-span-3">
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-stone">
            Hours
          </p>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="row in hours"
              :key="row.day"
              class="flex justify-between gap-4 border-b border-line pb-2 text-sm text-ink-soft"
            >
              <span>{{ row.day }}</span>
              <span>{{ row.time }}</span>
            </li>
          </ul>
        </div>

        <div class="reveal-child overflow-hidden lg:col-span-4">
          <iframe
            title="Map to An Amazing Smile in Tempe"
            :src="site.mapEmbedUrl"
            class="h-72 w-full border-0 grayscale-[30%] contrast-[1.05] lg:h-full min-h-[280px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </RevealOnScroll>
</template>
