import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AccountChoiceButton from '../resources/js/components/account/account_choice-button.vue'
import AccountTextField from '../resources/js/components/account/account_text-field.vue'
import AccountPersonalDataPage from '../resources/js/pages/account_personal-data-page.vue'

describe('Avanti form controls', () => {
  it('emits the typed value from a reusable text field', async () => {
    const wrapper = mount(AccountTextField, {
      props: { id: 'surname', label: 'Cognome', modelValue: '' },
    })

    await wrapper.get('input').setValue('Rossi')

    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Rossi'])
  })

  it('emits its value when a choice is selected', async () => {
    const wrapper = mount(AccountChoiceButton, {
      props: { label: 'Uomo', value: 'male', selected: false },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('select')[0]).toEqual(['male'])
  })
})

describe('Avanti personal data form', () => {
  it('changes the selected gender and confirms the next step', async () => {
    const wrapper = mount(AccountPersonalDataPage)

    await wrapper.get('[data-gender="female"]').trigger('click')
    expect(wrapper.get('[data-gender="female"]').attributes('aria-pressed')).toBe('true')

    await wrapper.get('form').trigger('submit.prevent')

    expect(wrapper.get('[role="status"]').text()).toContain('Dati salvati')
  })
})
