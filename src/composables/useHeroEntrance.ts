import { onMounted, type Ref } from 'vue'
import gsap from 'gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type HeroRefs = {
  brand: Ref<HTMLElement | null>
  headline: Ref<HTMLElement | null>
  support: Ref<HTMLElement | null>
  ctas: Ref<HTMLElement | null>
  media: Ref<HTMLElement | null>
}

export function useHeroEntrance(refs: HeroRefs) {
  const { prefersReducedMotion } = usePrefersReducedMotion()

  onMounted(() => {
    const { brand, headline, support, ctas, media } = refs

    if (prefersReducedMotion.value) {
      ;[brand, headline, support, ctas, media].forEach((r) => {
        if (r.value) {
          r.value.style.opacity = '1'
          r.value.style.transform = 'none'
        }
      })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (media.value) {
      gsap.fromTo(
        media.value,
        { scale: 1.04 },
        { scale: 1, duration: 1.25, ease: 'power2.out' },
      )
    }

    if (brand.value) {
      tl.fromTo(
        brand.value,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.15,
      )
    }

    if (headline.value) {
      tl.fromTo(
        headline.value,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.28,
      )
    }

    if (support.value) {
      tl.fromTo(
        support.value,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.4,
      )
    }

    if (ctas.value) {
      tl.fromTo(
        ctas.value,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.52,
      )
    }
  })
}
