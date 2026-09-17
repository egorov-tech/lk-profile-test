<script setup>
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'button' },
  loading: { type: Boolean, default: false },
})

defineEmits(['click'])
</script>

<template>
  <button
    class="account-button"
    :class="{ 'account-button--loading': loading }"
    :type="type"
    :disabled="loading"
    @click="$emit('click')"
  >
    <span>{{ loading ? 'Сохраняем…' : label }}</span>
  </button>
</template>
