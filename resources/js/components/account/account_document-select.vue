<script setup>
import { computed, ref } from 'vue'
import chevronUrl from '../../../assets/figma/avanti-chevron-right.svg'

const props = defineProps({
  modelValue: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])
const open = ref(false)
const options = [
  { value: 'identity-card', label: "Carta d'identità" },
  { value: 'passport', label: 'Passaporto' },
  { value: 'driving-licence', label: 'Patente di guida' },
]
const selectedLabel = computed(() => options.find(({ value }) => value === props.modelValue)?.label ?? 'Seleziona il tipo')

function select(value) {
  emit('update:modelValue', value)
  open.value = false
}
</script>

<template>
  <div class="account-document-select" @keydown.esc="open = false">
    <span id="document-type-label" class="account-document-select__label">Tipo di documento</span>
    <div class="account-document-select__control">
      <button
        class="account-document-select__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-labelledby="document-type-label document-type-value"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span id="document-type-value">{{ selectedLabel }}</span>
        <span class="account-document-select__chevron" :class="{ 'account-document-select__chevron--open': open }" aria-hidden="true">
          <img :src="chevronUrl" alt="">
        </span>
      </button>
      <div v-if="open" class="account-document-select__menu" role="listbox" aria-labelledby="document-type-label">
        <button
          v-for="option in options"
          :key="option.value"
          class="account-document-select__option"
          :class="{ 'account-document-select__option--active': modelValue === option.value }"
          type="button"
          role="option"
          :aria-selected="modelValue === option.value"
          :data-value="option.value"
          @click="select(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>
