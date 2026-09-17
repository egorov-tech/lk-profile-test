<script setup>
import burgerUrl from '../../../assets/figma/avanti-burger.svg'

defineProps({
  open: { type: Boolean, default: false },
})

defineEmits(['toggle', 'close'])
</script>

<template>
  <div class="account-mobile-menu">
    <button
      class="account-mobile-menu__trigger"
      type="button"
      aria-label="Apri menu"
      :aria-expanded="open"
      @click="$emit('toggle')"
    >
      <img :src="burgerUrl" alt="">
    </button>
    <nav v-if="open" class="account-mobile-menu__panel" role="navigation" aria-label="Menu principale">
      <a href="#personal-data" @click="$emit('close')">Dati personali</a>
      <a href="#support" @click="$emit('close')">Assistenza</a>
    </nav>
  </div>
</template>
