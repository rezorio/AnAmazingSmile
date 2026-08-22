import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'An Amazing Smile | Dental Care in Tempe, AZ',
        description:
          'Premium general and cosmetic dentistry in Tempe with Dr. Zena Alshukri. Cleanings, veneers, Invisalign®, and calm patient-centered care.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About Dr. Zena Alshukri | An Amazing Smile',
        description:
          'Meet Dr. Zena Alshukri, DDS — compassionate Tempe dentistry with over a decade of experience.',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'Dental Services | An Amazing Smile Tempe',
        description:
          'General, cosmetic, restorative, orthodontic, and sedation dentistry in Tempe, AZ.',
      },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue'),
      meta: {
        title: 'Smile Gallery | An Amazing Smile',
        description:
          'Curated before-and-after smile stories from An Amazing Smile in Tempe.',
      },
    },
    {
      path: '/patient-info',
      name: 'patient-info',
      component: () => import('@/views/PatientInfoView.vue'),
      meta: {
        title: 'Patient Info & Insurance | An Amazing Smile',
        description:
          'New patient forms, insurance plans we work with, and financing options in Tempe.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact & Schedule | An Amazing Smile Tempe',
        description:
          'Schedule an appointment with An Amazing Smile. Call (480) 993-3696 or send a message.',
      },
    },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 96 }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || 'An Amazing Smile'
  const description =
    (to.meta.description as string) ||
    'An Amazing Smile — dental care in Tempe, Arizona.'
  document.title = title

  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', description)
})

export default router
