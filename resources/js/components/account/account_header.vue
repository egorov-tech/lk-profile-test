<script setup>
defineProps({
  userName: { type: String, required: true },
})

defineEmits(['open-menu'])
</script>

<template>
  <header class="account-header">
    <button class="account-header__menu" type="button" aria-label="Открыть меню" @click="$emit('open-menu')">
      <span></span><span></span><span></span>
    </button>
    <div>
      <p class="account-header__eyebrow">Настройки аккаунта</p>
      <h1 class="account-header__title">Мой профиль</h1>
    </div>
    <button class="account-header__user" type="button" aria-label="Открыть профиль">
      <span class="account-header__avatar">{{ userName.slice(0, 1) }}</span>
      <span class="account-header__user-name">{{ userName }}</span>
    </button>
  </header>
</template>
