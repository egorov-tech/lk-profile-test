<script setup>
import { ref } from 'vue'
import AccountBrand from '../components/account/account_brand.vue'
import AccountChoiceButton from '../components/account/account_choice-button.vue'
import AccountDocumentSelect from '../components/account/account_document-select.vue'
import AccountInfoNote from '../components/account/account_info-note.vue'
import AccountStepButton from '../components/account/account_step-button.vue'
import AccountTextField from '../components/account/account_text-field.vue'

const surname = ref('')
const name = ref('')
const gender = ref('male')
const documentType = ref('')
const status = ref('')

function submitForm() {
  status.value = 'Dati salvati. Puoi continuare.'
}
</script>

<template>
  <div class="account-personal-data">
    <header class="account-personal-data__header">
      <AccountBrand />
    </header>

    <main class="account-personal-data__main">
      <form id="personal-data" class="account-personal-data__card" @submit.prevent="submitForm">
        <div class="account-personal-data__title-group">
          <p class="account-personal-data__eyebrow">Dati personali</p>
          <h1>Dicci chi sei</h1>
        </div>

        <div class="account-personal-data__name-row">
          <AccountTextField
            id="surname"
            v-model="surname"
            label="Cognome"
            placeholder="Inserisci il tuo cognome"
          />
          <AccountTextField
            id="name"
            v-model="name"
            label="Nome"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <fieldset class="account-personal-data__gender">
          <legend>Sesso</legend>
          <p>Serve per personalizzare l'animazione del prelievo.</p>
          <div class="account-personal-data__choices">
            <AccountChoiceButton
              label="Uomo"
              value="male"
              symbol="♂"
              :selected="gender === 'male'"
              @select="gender = $event"
            />
            <AccountChoiceButton
              label="Donna"
              value="female"
              symbol="♀"
              :selected="gender === 'female'"
              @select="gender = $event"
            />
          </div>
        </fieldset>

        <AccountDocumentSelect v-model="documentType" />
        <AccountInfoNote />

        <div class="account-personal-data__pagination">
          <AccountStepButton label="Indietro" direction="back" />
          <AccountStepButton label="Continua" direction="next" />
        </div>
      </form>
    </main>
    <p v-if="status" class="account-personal-data__status" role="status">{{ status }}</p>
  </div>
</template>
