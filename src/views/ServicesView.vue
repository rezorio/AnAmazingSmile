<script setup lang="ts">
import { ArrowRight, Check } from '@lucide/vue'
import { serviceCategories, visitSteps } from '@/data/services'
import { site } from '@/data/site'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
</script>

<template>
  <main>
    <section class="bg-cream pt-28 pb-0 md:pt-32">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="grid gap-12 border-b border-line pb-14 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div class="lg:col-span-7">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
              Services
            </p>
            <h1
              class="mt-4 font-display text-4xl font-medium leading-[1.1] text-ink md:text-5xl lg:text-[3.25rem]"
            >
              Care organized around how you live
            </h1>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Every category below covers what we offer, who it’s for, and what a
              visit can look like — so you can choose with confidence before you
              call.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <SiteButton to="/contact">Schedule a visit</SiteButton>
              <SiteButton :href="site.phoneHref" variant="secondary">
                Call {{ site.phone }}
              </SiteButton>
            </div>
          </div>

          <nav
            class="lg:col-span-5"
            aria-label="Jump to a service category"
          >
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-stone">
              Browse by category
            </p>
            <ul class="mt-4 divide-y divide-line border-y border-line">
              <li v-for="(category, index) in serviceCategories" :key="category.id">
                <a
                  :href="`#${category.id}`"
                  class="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-sage"
                >
                  <span class="flex items-baseline gap-3">
                    <span class="w-6 text-xs tabular-nums text-stone">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <span class="text-sm font-medium text-ink group-hover:text-sage md:text-base">
                      {{ category.title }}
                    </span>
                  </span>
                  <ArrowRight
                    class="h-4 w-4 shrink-0 text-stone transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sage"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <RevealOnScroll class="bg-cream py-14 md:py-16">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div
          class="reveal-child grid items-end gap-6 border-b border-line pb-8 md:grid-cols-12"
        >
          <div class="md:col-span-4">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
              How we work
            </p>
            <h2 class="mt-3 font-display text-3xl leading-tight text-ink md:text-[2rem]">
              A calm path from question to care
            </h2>
          </div>
          <p class="md:col-span-7 md:col-start-6 text-sm leading-relaxed text-ink-soft md:text-base">
            Whether you’re here for a cleaning or a smile makeover, the visit
            follows the same rhythm — listen first, explain clearly, then treat
            with care.
          </p>
        </div>

        <ol class="reveal-child mt-0 grid md:grid-cols-3">
          <li
            v-for="(step, index) in visitSteps"
            :key="step.title"
            class="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <p class="font-display text-4xl text-sage/30">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-4 font-display text-xl text-ink md:text-2xl">
              {{ step.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              {{ step.detail }}
            </p>
          </li>
        </ol>
      </div>
    </RevealOnScroll>

    <RevealOnScroll
      v-for="(category, index) in serviceCategories"
      :id="category.id"
      :key="category.id"
      :class="[
        'scroll-mt-28 py-20 md:py-24',
        index % 2 === 0 ? 'bg-cream' : 'bg-cream-deep',
      ]"
    >
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="reveal-child grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-5">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
              {{ category.eyebrow }}
            </p>
            <h2 class="mt-3 font-display text-3xl text-ink md:text-4xl">
              {{ category.title }}
            </h2>
            <p class="mt-4 text-base leading-relaxed text-ink-soft">
              {{ category.summary }}
            </p>
            <p class="mt-4 text-sm leading-relaxed text-ink-soft">
              {{ category.body }}
            </p>

            <div class="mt-8">
              <p class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
                Ideal if you need
              </p>
              <ul class="mt-3 space-y-2">
                <li
                  v-for="item in category.idealFor"
                  :key="item"
                  class="flex items-start gap-2 text-sm text-ink-soft"
                >
                  <Check
                    class="mt-0.5 h-4 w-4 shrink-0 text-sage"
                    aria-hidden="true"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 border border-line bg-cream px-5 py-5">
              <p class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
                What stands out
              </p>
              <ul class="mt-3 space-y-2.5">
                <li
                  v-for="highlight in category.highlights"
                  :key="highlight"
                  class="text-sm leading-relaxed text-ink"
                >
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <SiteButton to="/contact" variant="secondary" class="mt-8">
              Ask about {{ category.eyebrow.toLowerCase() }}
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </SiteButton>
          </div>

          <div class="lg:col-span-7">
            <p class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
              Treatments in this category
            </p>
            <ul class="mt-4 divide-y divide-line border-y border-line">
              <li
                v-for="item in category.items"
                :key="item.name"
                class="grid gap-2 py-4 sm:grid-cols-12 sm:gap-6"
              >
                <h3
                  class="font-medium text-ink sm:col-span-5"
                >
                  {{ item.name }}
                </h3>
                <p class="text-sm leading-relaxed text-ink-soft sm:col-span-7">
                  {{ item.detail }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <section class="border-t border-line bg-cream-deep py-16 md:py-20">
      <div
        class="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8"
      >
        <div>
          <h2 class="font-display text-3xl text-ink md:text-4xl">
            Insurance, financing &amp; first visits
          </h2>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            We work with most major plans and offer in-house options — call to
            verify yours. New patients can review forms and what to bring before
            the appointment.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <SiteButton to="/patient-info">Patient info &amp; insurance</SiteButton>
          <SiteButton to="/contact" variant="secondary">
            Schedule a visit
          </SiteButton>
        </div>
      </div>
    </section>

    <section class="bg-ink py-20 text-cream">
      <div class="mx-auto max-w-6xl px-5 md:px-8 md:text-center">
        <h2 class="font-display text-3xl md:text-4xl">
          Not sure which service you need?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-cream/90">
          Tell us what’s going on — pain, a cosmetic goal, or a routine checkup —
          and we’ll point you to the right visit without the jargon.
        </p>
        <div
          class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <SiteButton to="/contact" variant="on-dark">
            Talk with our team
          </SiteButton>
          <a
            :href="site.phoneHref"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-cream/90 transition-colors hover:text-cream"
          >
            Or call {{ site.phone }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
