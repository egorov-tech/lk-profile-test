import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AccountButton from '../resources/js/components/account/account_button.vue'
import AccountInput from '../resources/js/components/account/account_input.vue'
import AccountProfilePage from '../resources/js/pages/account_profile_page.vue'

describe('account reusable controls', () => {
  it('emits click when account button is pressed', async () => {
    const wrapper = mount(AccountButton, { props: { label: 'Сохранить изменения' } })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('emits updated value from account input', async () => {
    const wrapper = mount(AccountInput, {
      props: { id: 'name', label: 'Имя', modelValue: '' },
    })

    await wrapper.get('input').setValue('Анна')

    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Анна'])
  })
})

describe('account profile page', () => {
  it('shows save confirmation after submitting profile form', async () => {
    const wrapper = mount(AccountProfilePage)

    await wrapper.get('form').trigger('submit.prevent')

    expect(wrapper.get('[role="status"]').text()).toContain('Изменения сохранены')
  })
})
