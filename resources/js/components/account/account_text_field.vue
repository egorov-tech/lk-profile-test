<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="account-text-field" :for="id">
    <span class="account-text-field__label">{{ label }}</span>
    <input
      :id="id"
      class="account-text-field__control"
      :value="modelValue"
      :placeholder="placeholder"
      autocomplete="name"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>
