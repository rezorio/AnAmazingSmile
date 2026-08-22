<script setup lang="ts">
import { insurancePlans } from '@/data/gallery'
import { site } from '@/data/site'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
</script>

<template>
  <main>
    <RevealOnScroll class="bg-cream-deep pt-28 pb-24 md:pt-32">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="reveal-child max-w-2xl">
          <h1 class="font-display text-3xl text-ink md:text-4xl">
            New patient forms
          </h1>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            Completing forms ahead of time helps us spend more of your
            appointment listening and less on paperwork. Call the office if you
            need forms emailed or mailed.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <SiteButton :href="site.phoneHref">
              Call for forms — {{ site.phone }}
            </SiteButton>
            <SiteButton to="/contact" variant="secondary">
              Request forms by email
            </SiteButton>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll class="bg-cream py-24">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="reveal-child max-w-2xl">
          <h2 class="font-display text-3xl text-ink md:text-4xl">Insurance</h2>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            We are in network with most insurance plans and also offer in-house
            dental plans — call for details. If you do not see your plan listed,
            please call our office and we will verify coverage.
          </p>
        </div>
        <ul
          class="reveal-child mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <li
            v-for="plan in insurancePlans"
            :key="plan"
            class="border-b border-line py-2.5 text-sm text-ink-soft"
          >
            {{ plan }}
          </li>
        </ul>
      </div>
    </RevealOnScroll>

    <RevealOnScroll class="bg-cream-deep py-24">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="reveal-child max-w-2xl">
          <h2 class="font-display text-3xl text-ink md:text-4xl">
            Financial options
          </h2>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            We believe cost should not be a surprise. Ask our team about payment
            options and in-house plans that fit your care path. We’ll walk
            through estimates before treatment begins.
          </p>
          <div class="mt-8">
            <SiteButton to="/contact" variant="secondary">
              Ask about financing
            </SiteButton>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </main>
</template>
