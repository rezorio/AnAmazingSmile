import { onMounted, onUnmounted, ref } from 'vue'

export function useHeaderScroll(threshold = 24) {
  const isScrolled = ref(false)
  const pastFold = ref(false)

  const onScroll = () => {
    const y = window.scrollY
    isScrolled.value = y > threshold
    pastFold.value = y > window.innerHeight * 0.65
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrolled, pastFold }
}
