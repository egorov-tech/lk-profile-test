<script setup>
defineProps({
  open: { type: Boolean, default: false },
  active: { type: String, default: 'profile' },
})

defineEmits(['close', 'navigate'])

const items = [
  { id: 'overview', label: 'Обзор' },
  { id: 'profile', label: 'Мой профиль' },
  { id: 'security', label: 'Безопасность' },
  { id: 'notifications', label: 'Уведомления' },
]
</script>

<template>
  <aside class="account-sidebar" :class="{ 'account-sidebar--open': open }" aria-label="Навигация кабинета">
    <div class="account-sidebar__brand">
      <span class="account-sidebar__mark" aria-hidden="true">L</span>
      <span>Личный кабинет</span>
      <button class="account-sidebar__close" type="button" aria-label="Закрыть меню" @click="$emit('close')">×</button>
    </div>

    <nav class="account-sidebar__nav">
      <button
        v-for="item in items"
        :key="item.id"
        class="account-sidebar__link"
        :class="{ 'account-sidebar__link--active': item.id === active }"
        type="button"
        @click="$emit('navigate', item.id)"
      >
        {{ item.label }}
      </button>
    </nav>

    <div class="account-sidebar__help">
      <p>Нужна помощь?</p>
      <a href="mailto:support@example.com">Написать в поддержку</a>
    </div>
  </aside>
</template>
