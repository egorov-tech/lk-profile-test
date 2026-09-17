<script setup>
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
    <span v-if="direction === 'back'" aria-hidden="true">‹</span>
    <span>{{ label }}</span>
    <span v-if="direction === 'next'" aria-hidden="true">›</span>
  </button>
</template>
