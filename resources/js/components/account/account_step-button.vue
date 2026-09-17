<script setup>
import chevronUrl from '../../../assets/figma/avanti-chevron-right.svg'

defineProps({
  label: { type: String, required: true },
  direction: { type: String, default: 'next' },
})
</script>

<template>
  <button
    class="account-step-button"
    :class="`account-step-button--${direction}`"
    :type="direction === 'next' ? 'submit' : 'button'"
  >
    <span v-if="direction === 'back'" class="account-step-button__icon account-step-button__icon--back" aria-hidden="true">
      <img :src="chevronUrl" alt="">
    </span>
    <span>{{ label }}</span>
    <span v-if="direction === 'next'" class="account-step-button__icon" aria-hidden="true">
      <img :src="chevronUrl" alt="">
    </span>
  </button>
</template>
