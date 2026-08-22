<script setup lang="ts">
import { HeartHandshake, MapPin, Sparkles, Users } from '@lucide/vue'
import { site } from '@/data/site'
import { images } from '@/data/images'
import RevealOnScroll from '@/components/shared/RevealOnScroll.vue'
import SiteButton from '@/components/shared/SiteButton.vue'

const values = [
  {
    title: 'Patient-first pace',
    detail:
      'We listen first, explain in plain language, and never rush you into a plan.',
    icon: HeartHandshake,
  },
  {
    title: 'Family welcome',
    detail:
      'Care for every age — cleanings, emergencies, and long-term oral health.',
    icon: Users,
  },
  {
    title: 'Confident smiles',
    detail:
      'Cosmetic and restorative options designed to look natural, not overdone.',
    icon: Sparkles,
  },
] as const
</script>

<template>
  <main>
    <section class="bg-cream pt-28 md:pt-32">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="grid items-end gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:gap-12 lg:pb-14">
          <div class="lg:col-span-7">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
              About the practice
            </p>
            <h1
              class="mt-4 font-display text-4xl font-medium leading-[1.08] text-ink md:text-5xl lg:text-[3.4rem]"
            >
              A calm Tempe studio for healthy, confident smiles.
            </h1>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end lg:text-base">
            {{ site.legalName }} provides general and cosmetic dentistry for
            Tempe and neighboring communities — with care that feels personal
            from the first hello.
          </p>
        </div>
      </div>
    </section>

    <RevealOnScroll class="bg-cream py-16 md:py-20">
      <div class="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:items-center md:gap-14 md:px-8">
        <div class="reveal-child md:col-span-6">
          <img
            :src="images.office"
            alt="Bright, welcoming dental studio interior"
            class="aspect-[5/4] w-full object-cover"
            width="900"
            height="720"
          />
        </div>
        <div class="reveal-child md:col-span-6">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
            Who we are
          </p>
          <h2 class="mt-3 font-display text-3xl text-ink md:text-4xl">
            Modern care in a relaxing environment
          </h2>
          <p class="mt-5 text-base leading-relaxed text-ink-soft">
            We’re a family-friendly practice built around comfort, trust, and
            long-term oral health. Whether you’re here for a routine cleaning,
            Invisalign®, no-prep veneers, or a full smile makeover, we take time
            to understand your goals and guide you clearly.
          </p>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            Patients visit us from
            {{ site.serviceArea.join(', ') }}, and nearby communities — looking
            for dentistry that feels calm, thorough, and genuinely welcoming.
          </p>
          <div class="mt-8 flex items-start gap-3 border-t border-line pt-8">
            <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
            <div>
              <p class="text-sm font-medium text-ink">{{ site.address.full }}</p>
              <a
                :href="site.mapLink"
                class="mt-1 inline-block text-sm text-sage hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll class="bg-cream-deep py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div
          class="reveal-child grid items-end gap-6 border-b border-line pb-8 md:grid-cols-12"
        >
          <div class="md:col-span-5">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
              Our values
            </p>
            <h2 class="mt-3 font-display text-3xl text-ink md:text-[2rem]">
              What shapes every visit
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-ink-soft md:col-span-6 md:col-start-7 md:text-base">
            The same standards whether you’re new to the practice or have been
            with us for years.
          </p>
        </div>

        <ul class="grid md:grid-cols-3">
          <li
            v-for="(item, index) in values"
            :key="item.title"
            class="reveal-child border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <component
              :is="item.icon"
              class="h-5 w-5 text-sage"
              aria-hidden="true"
            />
            <p class="mt-5 font-display text-4xl text-sage/25">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-3 font-display text-xl text-ink md:text-2xl">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              {{ item.detail }}
            </p>
          </li>
        </ul>
      </div>
    </RevealOnScroll>

    <RevealOnScroll class="bg-cream py-16 md:py-20">
      <div class="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-14 md:px-8">
        <div class="reveal-child relative md:col-span-5">
          <img
            :src="images.doctor"
            :alt="site.doctor.name"
            class="aspect-[4/5] w-full object-cover object-top"
            width="800"
            height="1000"
          />
        </div>

        <div class="reveal-child flex flex-col justify-center md:col-span-7">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
            Led by
          </p>
          <h2 class="mt-3 font-display text-3xl text-ink md:text-4xl">
            {{ site.doctor.name }}, {{ site.doctor.credentials }}
          </h2>
          <p class="mt-2 text-sm text-stone">
            {{ site.doctor.title }} · {{ site.doctor.education }}
          </p>
          <p class="mt-6 text-base leading-relaxed text-ink-soft">
            With {{ site.doctor.experienceYears }} of experience, Dr. Zena leads
            the practice with advanced technique and a gentle chairside manner.
            She builds long-term relationships — getting to know patients so
            every visit feels tailored, not transactional.
          </p>
          <p class="mt-4 text-base leading-relaxed text-ink-soft">
            From family dentistry to cosmetic smile design, her goal is the same:
            help you feel confident, comfortable, and cared for.
          </p>
          <div class="mt-8">
            <SiteButton to="/contact" variant="secondary">
              Schedule with our team
            </SiteButton>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <RevealOnScroll class="bg-cream-deep py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="reveal-child max-w-3xl">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-sage">
            Our mission
          </p>
          <h2 class="mt-3 font-display text-3xl text-ink md:text-4xl">
            Comfort, trust, and smiles that last
          </h2>
          <p class="mt-5 text-base leading-relaxed text-ink-soft">
            We deliver compassionate, patient-focused dentistry that helps every
            individual achieve a healthy, confident smile. We’re committed to
            your comfort, your trust, and your long-term oral health — in a
            modern space designed to feel welcoming, not clinical and cold.
          </p>
        </div>
      </div>
    </RevealOnScroll>

    <section class="bg-ink py-16 text-cream md:py-20">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div class="max-w-xl">
          <h2 class="font-display text-3xl md:text-4xl">
            Visit An Amazing Smile
          </h2>
          <p class="mt-3 text-cream/85">
            Ready for a calmer dental experience in Tempe? Call us or request a
            time online.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <SiteButton to="/contact" variant="on-dark">
            Schedule an appointment
          </SiteButton>
          <SiteButton :href="site.phoneHref" variant="outline-light">
            {{ site.phone }}
          </SiteButton>
        </div>
      </div>
    </section>
  </main>
</template>
