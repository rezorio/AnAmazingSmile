<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
}>()

const root = ref<HTMLElement | null>(null)
const position = ref(50)
const dragging = ref(false)

const clipStyle = computed(
  () => `polygon(0 0, ${position.value}% 0, ${position.value}% 100%, 0 100%)`,
)

function setFromClientX(clientX: number) {
  if (!root.value) return
  const rect = root.value.getBoundingClientRect()
  const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
  position.value = (x / rect.width) * 100
}

function onPointerDown(e: PointerEvent) {
  dragging.value = true
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  setFromClientX(e.clientX)
}

function onPointerMove(e: PointerEvent) {
  if (!dragging.value) return
  setFromClientX(e.clientX)
}

function onPointerUp() {
  dragging.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    position.value = Math.max(0, position.value - 3)
  }
  if (e.key === 'ArrowRight') {
    position.value = Math.min(100, position.value + 3)
  }
}

onMounted(() => {
  window.addEventListener('pointerup', onPointerUp)
})

onUnmounted(() => {
  window.removeEventListener('pointerup', onPointerUp)
})
</script>

<template>
  <div
    ref="root"
    class="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep select-none touch-none"
    role="img"
    :aria-label="`Before and after comparison. Drag to compare.`"
  >
    <img
      :src="after"
      :alt="afterAlt || 'After treatment'"
      class="absolute inset-0 h-full w-full object-cover"
      draggable="false"
    />
    <img
      :src="before"
      :alt="beforeAlt || 'Before treatment'"
      class="absolute inset-0 h-full w-full object-cover"
      :style="{ clipPath: clipStyle }"
      draggable="false"
    />

    <div
      class="pointer-events-none absolute inset-y-0 w-px bg-cream"
      :style="{ left: `${position}%` }"
    />

    <button
      type="button"
      class="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/80 bg-ink/70 text-cream backdrop-blur-sm transition-transform duration-[var(--motion-fast)] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      :style="{ left: `${position}%` }"
      aria-label="Drag to compare before and after"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(position)"
      role="slider"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @keydown="onKeydown"
    >
      <span class="text-xs tracking-widest">⇄</span>
    </button>

    <span
      class="pointer-events-none absolute left-3 top-3 bg-ink/55 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cream backdrop-blur-sm"
    >
      Before
    </span>
    <span
      class="pointer-events-none absolute right-3 top-3 bg-ink/55 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cream backdrop-blur-sm"
    >
      After
    </span>
  </div>
</template>
