<script setup>
defineProps({
  modelValue: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="account-document-select" for="document-type">
    <span class="account-document-select__label">Tipo di documento</span>
    <span class="account-document-select__control">
      <select
        id="document-type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" disabled>Seleziona il tipo</option>
        <option value="identity-card">Carta d'identità</option>
        <option value="passport">Passaporto</option>
        <option value="driving-licence">Patente di guida</option>
      </select>
      <span class="account-document-select__chevron" aria-hidden="true">⌄</span>
    </span>
  </label>
</template>
