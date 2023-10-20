import { mount } from '@vue/test-utils'
import ButtonTemplate from '../../../components/button-template.vue'
import { test, describe, expect } from 'vitest'

const wrapper = mount(ButtonTemplate, {
  propsData: {
    buttonText: 'Test Button'
  }
})

describe('TextCard', () => {
  test('should render correctly', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  test('should emiton button click when the button is clicked', () => {
    const button = wrapper.find('button')
    const clickEvent = new Event('click')
    button.element.dispatchEvent(clickEvent)
    expect(wrapper.emitted('on-button-click')).toBeTruthy()
  })
})
