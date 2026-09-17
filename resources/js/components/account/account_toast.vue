<script setup>
defineProps({ message: { type: String, required: true } })
</script>

<template>
  <div class="account-toast" role="status" aria-live="polite">
    <span aria-hidden="true">✓</span>{{ message }}
  </div>
</template>
