<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <section class="account-section-card">
    <header class="account-section-card__header">
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
    </header>
    <div class="account-section-card__body"><slot /></div>
  </section>
</template>
