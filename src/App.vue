<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MobileStickyCta from '@/components/layout/MobileStickyCta.vue'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
    <AppHeader />
    <div id="main-content" class="flex-1 pb-20 md:pb-0">
      <RouterView />
    </div>
    <AppFooter />
    <MobileStickyCta />
  </div>
</template>
