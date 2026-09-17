<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  symbol: { type: String, default: '' },
  selected: { type: Boolean, default: false },
})

defineEmits(['select'])
</script>

<template>
  <button
    class="account-choice-button"
    :class="{ 'account-choice-button--selected': selected }"
    type="button"
    :aria-pressed="selected"
    :data-gender="value"
    @click="$emit('select', value)"
  >
    <span class="account-choice-button__symbol" aria-hidden="true">{{ symbol }}</span>
    <span>{{ label }}</span>
  </button>
</template>
