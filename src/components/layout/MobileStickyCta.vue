<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Calendar, Phone } from '@lucide/vue'
import { site } from '@/data/site'
import { useHeaderScroll } from '@/composables/useHeaderScroll'

const { pastFold } = useHeaderScroll()
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden"
    :class="pastFold ? 'translate-y-0' : 'translate-y-full'"
    aria-label="Quick actions"
  >
    <div class="grid grid-cols-2 gap-2">
      <a
        :href="site.phoneHref"
        class="inline-flex items-center justify-center gap-2 bg-transparent px-4 py-3 text-sm font-medium text-ink border border-ink/15 active:scale-[0.98]"
      >
        <Phone class="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <RouterLink
        to="/contact"
        class="inline-flex items-center justify-center gap-2 bg-sage px-4 py-3 text-sm font-medium text-cream active:scale-[0.98]"
      >
        <Calendar class="h-4 w-4" aria-hidden="true" />
        Book
      </RouterLink>
    </div>
  </div>
</template>
