<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  CalendarDays,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  UserRound,
} from '@lucide/vue'
import { site } from '@/data/site'
import SiteButton from '@/components/shared/SiteButton.vue'

const visitReasons = [
  'New patient exam & cleaning',
  'Routine cleaning',
  'Cosmetic consultation (veneers / whitening)',
  'Invisalign® consultation',
  'Tooth pain / emergency',
  'Restorative (crown, implant, denture)',
  'Second opinion',
  'Other',
] as const

const timeWindows = [
  { value: 'morning', label: 'Morning', hint: 'Before noon' },
  { value: 'afternoon', label: 'Afternoon', hint: '12 – 4 pm' },
  { value: 'evening', label: 'Later day', hint: 'Wed evenings' },
  { value: 'flexible', label: 'Flexible', hint: 'Any opening' },
] as const

const contactMethods = [
  { value: 'call', label: 'Phone call', icon: Phone },
  { value: 'text', label: 'Text', icon: MessageSquare },
  { value: 'email', label: 'Email', icon: Mail },
] as const

const emptyForm = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  patientType: 'new' as 'new' | 'returning',
  reason: '',
  preferredDate: '',
  timeWindow: 'flexible',
  preferred: 'call',
  insurance: '',
  isEmergency: false,
  message: '',
  consent: false,
})

const form = ref(emptyForm())
const status = ref<'idle' | 'success' | 'error'>('idle')
const submitting = ref(false)

const minDate = computed(() => {
  const d = new Date()
  return d.toISOString().slice(0, 10)
})

const fieldClass =
  'mt-2 w-full border border-line bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-stone/55 focus:border-sage'

async function onSubmit() {
  status.value = 'idle'
  submitting.value = true

  try {
    await new Promise((r) => setTimeout(r, 700))
    if (
      !form.value.firstName.trim() ||
      !form.value.lastName.trim() ||
      !form.value.email.trim() ||
      !form.value.phone.trim() ||
      !form.value.reason ||
      !form.value.consent
    ) {
      throw new Error('Required fields missing')
    }
    status.value = 'success'
    form.value = emptyForm()
  } catch {
    status.value = 'error'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="space-y-8" novalidate @submit.prevent="onSubmit">
    <div class="border border-line bg-cream px-6 py-6 md:px-8 md:py-8">
      <div class="flex items-start gap-3">
        <UserRound class="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
        <div>
          <h2 class="font-display text-2xl text-ink">Your details</h2>
          <p class="mt-1 text-sm text-ink-soft">
            So we know how to reach you and prepare for your visit.
          </p>
        </div>
      </div>

      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label for="firstName" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            First name <span class="text-sage">*</span>
          </label>
          <input
            id="firstName"
            v-model="form.firstName"
            required
            type="text"
            autocomplete="given-name"
            placeholder="Zena"
            :class="fieldClass"
          />
        </div>
        <div>
          <label for="lastName" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Last name <span class="text-sage">*</span>
          </label>
          <input
            id="lastName"
            v-model="form.lastName"
            required
            type="text"
            autocomplete="family-name"
            placeholder="Alshukri"
            :class="fieldClass"
          />
        </div>
        <div>
          <label for="email" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Email <span class="text-sage">*</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            required
            type="email"
            autocomplete="email"
            placeholder="you@email.com"
            :class="fieldClass"
          />
        </div>
        <div>
          <label for="phone" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Phone <span class="text-sage">*</span>
          </label>
          <input
            id="phone"
            v-model="form.phone"
            required
            type="tel"
            autocomplete="tel"
            placeholder="(480) 000-0000"
            :class="fieldClass"
          />
        </div>
      </div>

      <fieldset class="mt-8">
        <legend class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
          Patient type
        </legend>
        <div class="mt-3 grid gap-3 sm:grid-cols-2">
          <label
            class="flex cursor-pointer items-start gap-3 border px-4 py-3 transition-colors"
            :class="
              form.patientType === 'new'
                ? 'border-sage bg-sage-mist/50'
                : 'border-line bg-cream hover:border-sage/40'
            "
          >
            <input
              v-model="form.patientType"
              type="radio"
              name="patientType"
              value="new"
              class="mt-1 accent-[var(--color-sage)]"
            />
            <span>
              <span class="block text-sm font-medium text-ink">New patient</span>
              <span class="mt-0.5 block text-xs text-ink-soft">
                First visit with Dr. Zena
              </span>
            </span>
          </label>
          <label
            class="flex cursor-pointer items-start gap-3 border px-4 py-3 transition-colors"
            :class="
              form.patientType === 'returning'
                ? 'border-sage bg-sage-mist/50'
                : 'border-line bg-cream hover:border-sage/40'
            "
          >
            <input
              v-model="form.patientType"
              type="radio"
              name="patientType"
              value="returning"
              class="mt-1 accent-[var(--color-sage)]"
            />
            <span>
              <span class="block text-sm font-medium text-ink">Returning</span>
              <span class="mt-0.5 block text-xs text-ink-soft">
                Already in our practice
              </span>
            </span>
          </label>
        </div>
      </fieldset>
    </div>

    <div class="border border-line bg-cream px-6 py-6 md:px-8 md:py-8">
      <div class="flex items-start gap-3">
        <CalendarDays class="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
        <div>
          <h2 class="font-display text-2xl text-ink">Visit preferences</h2>
          <p class="mt-1 text-sm text-ink-soft">
            Tell us what you need — we’ll confirm availability by phone or email.
          </p>
        </div>
      </div>

      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="reason" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Reason for visit <span class="text-sage">*</span>
          </label>
          <select
            id="reason"
            v-model="form.reason"
            required
            :class="fieldClass"
          >
            <option disabled value="">Select a reason</option>
            <option v-for="reason in visitReasons" :key="reason" :value="reason">
              {{ reason }}
            </option>
          </select>
        </div>

        <div>
          <label
            for="preferredDate"
            class="text-xs font-medium uppercase tracking-[0.16em] text-stone"
          >
            Preferred date
          </label>
          <input
            id="preferredDate"
            v-model="form.preferredDate"
            type="date"
            :min="minDate"
            :class="fieldClass"
          />
          <p class="mt-2 text-xs text-stone">Optional — we’ll offer the closest opening.</p>
        </div>

        <div>
          <label for="insurance" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Insurance (if any)
          </label>
          <input
            id="insurance"
            v-model="form.insurance"
            type="text"
            placeholder="Delta Dental, Cigna, self-pay…"
            :class="fieldClass"
          />
        </div>
      </div>

      <fieldset class="mt-8">
        <legend class="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-stone">
          <Clock3 class="h-3.5 w-3.5" aria-hidden="true" />
          Preferred time of day
        </legend>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label
            v-for="slot in timeWindows"
            :key="slot.value"
            class="flex cursor-pointer flex-col border px-3 py-3 transition-colors"
            :class="
              form.timeWindow === slot.value
                ? 'border-sage bg-sage-mist/50'
                : 'border-line hover:border-sage/40'
            "
          >
            <input
              v-model="form.timeWindow"
              type="radio"
              name="timeWindow"
              :value="slot.value"
              class="sr-only"
            />
            <span class="text-sm font-medium text-ink">{{ slot.label }}</span>
            <span class="mt-1 text-xs text-ink-soft">{{ slot.hint }}</span>
          </label>
        </div>
      </fieldset>

      <fieldset class="mt-8">
        <legend class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
          Preferred contact method
        </legend>
        <div class="mt-3 grid gap-3 sm:grid-cols-3">
          <label
            v-for="method in contactMethods"
            :key="method.value"
            class="flex cursor-pointer items-center gap-3 border px-4 py-3 transition-colors"
            :class="
              form.preferred === method.value
                ? 'border-sage bg-sage-mist/50'
                : 'border-line hover:border-sage/40'
            "
          >
            <input
              v-model="form.preferred"
              type="radio"
              name="preferred"
              :value="method.value"
              class="sr-only"
            />
            <component
              :is="method.icon"
              class="h-4 w-4 shrink-0 text-sage"
              aria-hidden="true"
            />
            <span class="text-sm font-medium text-ink">{{ method.label }}</span>
          </label>
        </div>
      </fieldset>

      <label
        class="mt-8 flex cursor-pointer items-start gap-3 border border-line px-4 py-4 transition-colors hover:border-sage/40"
        :class="form.isEmergency ? 'border-sage bg-sage-mist/40' : ''"
      >
        <input
          v-model="form.isEmergency"
          type="checkbox"
          class="mt-1 accent-[var(--color-sage)]"
        />
        <span>
          <span class="block text-sm font-medium text-ink">
            This is urgent / I’m in pain
          </span>
          <span class="mt-1 block text-xs leading-relaxed text-ink-soft">
            We’ll prioritize your request. For severe swelling, bleeding, or trauma,
            call
            <a :href="site.phoneHref" class="text-sage underline-offset-2 hover:underline">
              {{ site.phone }}
            </a>
            now.
          </span>
        </span>
      </label>

      <div class="mt-8">
        <label for="message" class="text-xs font-medium uppercase tracking-[0.16em] text-stone">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Symptoms, goals for your smile, best days off work, questions about financing…"
          :class="fieldClass"
        />
      </div>
    </div>

    <div class="border border-line bg-cream px-6 py-6 md:px-8 md:py-8">
      <div class="flex items-start gap-3">
        <ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
        <div>
          <h2 class="font-display text-2xl text-ink">Before you send</h2>
          <p class="mt-1 text-sm text-ink-soft">
            Requests are reviewed by our front desk during office hours. This form
            does not lock a time until we confirm with you.
          </p>
        </div>
      </div>

      <label class="mt-6 flex cursor-pointer items-start gap-3">
        <input
          v-model="form.consent"
          required
          type="checkbox"
          class="mt-1 accent-[var(--color-sage)]"
        />
        <span class="text-sm leading-relaxed text-ink-soft">
          I agree to be contacted about this appointment request and understand
          An Amazing Smile may follow up by phone, text, or email.
          <span class="text-sage">*</span>
        </span>
      </label>

      <p
        v-if="status === 'success'"
        class="mt-6 border border-sage/25 bg-sage-mist/60 px-4 py-3 text-sm text-sage"
        role="status"
      >
        Thank you — your request is in. Our team will follow up shortly to confirm
        a time that works.
      </p>
      <p
        v-else-if="status === 'error'"
        class="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
        role="alert"
      >
        Please complete the required fields, or call
        {{ site.phone }} and we’ll schedule you directly.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SiteButton type="submit" :disabled="submitting">
          {{ submitting ? 'Sending request…' : 'Request an appointment' }}
        </SiteButton>
        <p class="text-xs text-stone">
          Prefer to talk?
          <a :href="site.phoneHref" class="text-sage hover:underline">
            Call {{ site.phone }}
          </a>
        </p>
      </div>
    </div>
  </form>
</template>
