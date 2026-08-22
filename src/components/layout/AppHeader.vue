<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, Phone, X } from '@lucide/vue'
import { navLinks, site } from '@/data/site'
import { useHeaderScroll } from '@/composables/useHeaderScroll'
import SiteButton from '@/components/shared/SiteButton.vue'

const { isScrolled } = useHeaderScroll()
const route = useRoute()
const open = ref(false)

/** Light nav on dark home hero; solid cream nav once scrolled or on other pages */
const onDarkHero = computed(
  () => route.path === '/' && !isScrolled.value && !open.value,
)

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter,color] duration-300"
    :class="
      isScrolled || open
        ? 'bg-cream/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8"
    >
      <RouterLink
        to="/"
        class="group font-display text-2xl font-semibold tracking-tight md:text-[1.65rem]"
        :class="onDarkHero ? 'text-cream' : 'text-ink'"
        @click="close"
      >
        An Amazing
        <span
          :class="
            onDarkHero
              ? 'text-sage-mist'
              : 'text-sage group-hover:text-sage-deep'
          "
        >
          Smile
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium transition-colors"
          :class="
            onDarkHero
              ? route.path === link.to
                ? 'text-cream'
                : 'text-cream/80 hover:text-cream'
              : route.path === link.to
                ? 'text-ink'
                : 'text-ink-soft hover:text-ink'
          "
        >
          {{ link.label }}
          <span
            v-if="route.path === link.to"
            class="absolute -bottom-1 left-0 h-px w-full"
            :class="onDarkHero ? 'bg-sage-mist' : 'bg-sage'"
          />
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a
          :href="site.phoneHref"
          class="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          :class="
            onDarkHero
              ? 'text-cream/90 hover:text-cream'
              : 'text-ink-soft hover:text-sage'
          "
        >
          <Phone class="h-4 w-4" aria-hidden="true" />
          {{ site.phone }}
        </a>
        <SiteButton
          to="/contact"
          :variant="onDarkHero ? 'on-dark' : 'primary'"
        >
          Schedule
        </SiteButton>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center p-2 lg:hidden"
        :class="onDarkHero ? 'text-cream' : 'text-ink'"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <X v-if="open" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </div>

    <div
      id="mobile-nav"
      class="border-t border-line bg-cream lg:hidden"
      :class="open ? 'block' : 'hidden'"
    >
      <nav class="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="py-3 text-base text-ink-soft"
          @click="close"
        >
          {{ link.label }}
        </RouterLink>
        <a :href="site.phoneHref" class="py-3 text-base text-sage">
          Call {{ site.phone }}
        </a>
        <SiteButton to="/contact" class="mt-2 w-full" @click="close">
          Schedule an appointment
        </SiteButton>
      </nav>
    </div>
  </header>
</template>
