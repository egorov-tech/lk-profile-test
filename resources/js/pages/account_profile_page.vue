<script setup>
import { computed, ref } from 'vue'
import AccountButton from '../components/account/account_button.vue'
import AccountHeader from '../components/account/account_header.vue'
import AccountInput from '../components/account/account_input.vue'
import AccountSectionCard from '../components/account/account_section-card.vue'
import AccountSidebar from '../components/account/account_sidebar.vue'
import AccountToast from '../components/account/account_toast.vue'

const props = defineProps({
  profile: { type: Object, default: () => ({}) },
})
const user = ref({
  firstName: props.profile.firstName ?? 'Анна',
  lastName: props.profile.lastName ?? 'Воронова',
  email: props.profile.email ?? 'anna@example.com',
  phone: props.profile.phone ?? '+7 999 123-45-67',
})
const menuOpen = ref(false)
const notice = ref('')
const userName = computed(() => `${user.value.firstName} ${user.value.lastName}`)

function saveProfile() {
  notice.value = 'Изменения сохранены'
}

function navigate() {
  menuOpen.value = false
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="account-app">
    <div v-if="menuOpen" class="account-app__scrim" aria-hidden="true" @click="closeMenu"></div>
    <AccountSidebar :open="menuOpen" active="profile" @close="closeMenu" @navigate="navigate" />

    <main class="account-main">
      <AccountHeader :user-name="userName" @open-menu="menuOpen = true" />
      <div class="account-profile">
        <div class="account-profile__intro">
          <p class="account-profile__kicker">Персональные данные</p>
          <p>Обновите данные, которые используются для входа, уведомлений и общения с поддержкой.</p>
        </div>

        <form class="account-profile__form" @submit.prevent="saveProfile">
          <AccountSectionCard title="Основная информация" description="Так вас видят коллеги и служба поддержки.">
            <div class="account-profile__fields">
              <AccountInput id="first-name" v-model="user.firstName" label="Имя" autocomplete="given-name" />
              <AccountInput id="last-name" v-model="user.lastName" label="Фамилия" autocomplete="family-name" />
              <AccountInput id="email" v-model="user.email" label="Электронная почта" type="email" autocomplete="email" />
              <AccountInput id="phone" v-model="user.phone" label="Телефон" type="tel" autocomplete="tel" hint="Используем только для важных уведомлений." />
            </div>
          </AccountSectionCard>

          <AccountSectionCard title="Безопасность" description="Пароль можно менять отдельно — это завершит активные сессии на других устройствах.">
            <a class="account-profile__security-link" href="#security">Изменить пароль <span aria-hidden="true">→</span></a>
          </AccountSectionCard>

          <div class="account-profile__actions">
            <AccountButton type="submit" label="Сохранить изменения" />
            <p>Изменения применяются только к вашему профилю.</p>
          </div>
        </form>
      </div>
    </main>
    <AccountToast v-if="notice" :message="notice" />
  </div>
</template>
