<script setup lang="ts">
import { Clock3, MapPin, Phone } from '@lucide/vue'
import { hours, site } from '@/data/site'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import ScheduleForm from '@/components/contact/ScheduleForm.vue'
</script>

<template>
  <main>
    <RevealOnScroll class="bg-cream-deep pt-28 pb-20 md:pt-32 md:pb-24">
      <div class="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-14 md:px-8">
        <div class="reveal-child md:col-span-7 lg:col-span-8">
          <ScheduleForm />
        </div>

        <aside class="reveal-child space-y-6 md:col-span-5 lg:col-span-4">
          <div class="border border-line bg-cream px-6 py-6">
            <div class="flex items-center gap-2 text-sage">
              <Phone class="h-4 w-4" aria-hidden="true" />
              <p class="text-xs font-medium uppercase tracking-[0.2em]">
                Call the office
              </p>
            </div>
            <a
              :href="site.phoneHref"
              class="mt-4 block font-display text-3xl text-ink transition-colors hover:text-sage"
            >
              {{ site.phone }}
            </a>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              Fastest for emergencies, same-day openings, and insurance questions.
            </p>
          </div>

          <div class="border border-line bg-cream px-6 py-6">
            <div class="flex items-center gap-2 text-sage">
              <MapPin class="h-4 w-4" aria-hidden="true" />
              <p class="text-xs font-medium uppercase tracking-[0.2em]">Visit</p>
            </div>
            <p class="mt-4 font-display text-2xl text-ink">{{ site.name }}</p>
            <p class="mt-2 text-sm leading-relaxed text-ink-soft">
              {{ site.address.line1 }}<br />
              {{ site.address.city }}, {{ site.address.state }}
              {{ site.address.zip }}
            </p>
            <a
              :href="site.mapLink"
              class="mt-4 inline-block text-sm text-sage hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </div>

          <div class="border border-line bg-cream px-6 py-6">
            <div class="flex items-center gap-2 text-sage">
              <Clock3 class="h-4 w-4" aria-hidden="true" />
              <p class="text-xs font-medium uppercase tracking-[0.2em]">Hours</p>
            </div>
            <ul class="mt-4 space-y-2.5">
              <li
                v-for="row in hours"
                :key="row.day"
                class="flex justify-between gap-4 border-b border-line pb-2 text-sm text-ink-soft last:border-0"
              >
                <span>{{ row.day }}</span>
                <span class="text-right">{{ row.time }}</span>
              </li>
            </ul>
          </div>

          <div class="border border-sage/20 bg-sage-mist/40 px-6 py-5">
            <p class="text-sm font-medium text-ink">What happens next</p>
            <ol class="mt-3 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-ink-soft">
              <li>We review your request during office hours.</li>
              <li>A team member confirms a time that fits.</li>
              <li>New patients receive forms before the visit.</li>
            </ol>
          </div>
        </aside>
      </div>
    </RevealOnScroll>

    <section class="bg-cream pb-24">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <iframe
          title="Map to An Amazing Smile"
          :src="site.mapEmbedUrl"
          class="h-80 w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </main>
</template>
