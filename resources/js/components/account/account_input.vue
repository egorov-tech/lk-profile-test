<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, default: '' },
  type: { type: String, default: 'text' },
  hint: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="account-input" :for="id">
    <span class="account-input__label">{{ label }}</span>
    <input
      :id="id"
      class="account-input__control"
      :type="type"
      :value="modelValue"
      :aria-describedby="hint ? `${id}-hint` : undefined"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span v-if="hint" :id="`${id}-hint`" class="account-input__hint">{{ hint }}</span>
  </label>
</template>
