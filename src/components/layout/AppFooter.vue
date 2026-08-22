<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Clock3, MapPin, Phone } from '@lucide/vue'
import { hours, navLinks, site } from '@/data/site'
import { serviceCategories } from '@/data/services'
import SiteButton from '@/components/shared/SiteButton.vue'

const careLinks = serviceCategories.slice(0, 5).map((c) => ({
  label: c.title,
  to: `/services#${c.id}`,
}))

const socialLinks = [
  { label: 'Facebook', href: site.social.facebook },
  { label: 'Instagram', href: site.social.instagram },
  { label: 'Google', href: site.social.google },
  { label: 'Yelp', href: site.social.yelp },
] as const
</script>

<template>
  <footer class="bg-ink text-cream">
    <div class="border-b border-cream/10">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8 md:py-12"
      >
        <div class="max-w-xl">
          <p class="font-display text-3xl text-cream md:text-4xl">
            {{ site.tagline }}
          </p>
          <p class="mt-3 text-sm leading-relaxed text-cream/70">
            Schedule a visit with {{ site.name }} — calm, confident dentistry in
            Tempe with {{ site.doctor.name }}.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <SiteButton to="/contact" variant="on-dark">
            Schedule an appointment
          </SiteButton>
          <SiteButton :href="site.phoneHref" variant="outline-light">
            Call {{ site.phone }}
          </SiteButton>
        </div>
      </div>
    </div>

    <div
      class="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:gap-10 md:px-8 md:py-16"
    >
      <div class="md:col-span-4">
        <RouterLink
          to="/"
          class="font-display text-3xl font-semibold tracking-tight text-cream"
        >
          An Amazing
          <span class="text-sage-mist">Smile</span>
        </RouterLink>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
          Family-friendly general and cosmetic dentistry — serving
          {{ site.serviceArea.join(', ') }}, and nearby communities.
        </p>

        <div class="mt-8 space-y-3">
          <a
            :href="site.phoneHref"
            class="flex items-center gap-3 text-sm text-cream/85 transition-colors hover:text-cream"
          >
            <Phone class="h-4 w-4 text-sage-mist" aria-hidden="true" />
            {{ site.phone }}
          </a>
          <a
            :href="site.mapLink"
            class="flex items-start gap-3 text-sm text-cream/85 transition-colors hover:text-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-sage-mist" aria-hidden="true" />
            <span>
              {{ site.address.line1 }}<br />
              {{ site.address.city }}, {{ site.address.state }}
              {{ site.address.zip }}
            </span>
          </a>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="text-xs uppercase tracking-[0.16em] text-cream/50 transition-colors hover:text-sage-mist"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ social.label }}
          </a>
        </div>
      </div>

      <div class="md:col-span-2">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-cream/45">
          Explore
        </p>
        <ul class="mt-5 space-y-2.5">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="md:col-span-3">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-cream/45">
          Care
        </p>
        <ul class="mt-5 space-y-2.5">
          <li v-for="link in careLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="md:col-span-3">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-cream/45">
          Hours
        </p>
        <ul class="mt-5 space-y-2">
          <li
            v-for="row in hours"
            :key="row.day"
            class="flex justify-between gap-4 text-sm text-cream/70"
          >
            <span>{{ row.day }}</span>
            <span class="text-right text-cream/55">{{ row.time }}</span>
          </li>
        </ul>
        <p class="mt-5 flex items-center gap-2 text-xs text-cream/45">
          <Clock3 class="h-3.5 w-3.5" aria-hidden="true" />
          Wednesdays open later · Sundays closed
        </p>
      </div>
    </div>

    <div class="border-t border-cream/10">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ site.legalName }}. All rights
          reserved.
        </p>
        <p>
          Led by {{ site.doctor.name }}, {{ site.doctor.credentials }} · Tempe,
          Arizona
        </p>
      </div>
    </div>
  </footer>
</template>
