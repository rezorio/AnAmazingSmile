import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type RevealOptions = {
  rootMargin?: string
  threshold?: number
}

export function useRevealOnScroll(
  el: Ref<HTMLElement | null>,
  options: RevealOptions = {},
) {
  const isVisible = ref(false)
  const { prefersReducedMotion } = usePrefersReducedMotion()

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return

    if (prefersReducedMotion.value) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      {
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
        threshold: options.threshold ?? 0.12,
      },
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible }
}
