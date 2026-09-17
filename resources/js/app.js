import { createApp } from 'vue'
import AccountPersonalDataPage from './pages/account_personal_data_page.vue'
import '../css/account/account_tokens.css'
import '../css/account/account_layout.css'
import '../css/account/account_profile.css'

const mountPoint = document.querySelector('#account-profile-app')
createApp(AccountPersonalDataPage).mount('#account-profile-app')
