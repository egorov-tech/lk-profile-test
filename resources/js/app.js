import { createApp } from 'vue'
import AccountProfilePage from './pages/account_profile_page.vue'
import '../css/account/account_tokens.css'
import '../css/account/account_layout.css'
import '../css/account/account_profile.css'

const mountPoint = document.querySelector('#account-profile-app')
const profile = mountPoint?.dataset.profile ? JSON.parse(mountPoint.dataset.profile) : {}

createApp(AccountProfilePage, { profile }).mount('#account-profile-app')
