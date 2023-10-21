import { mount } from '@vue/test-utils'
import Selector from '../../../components/selector.vue'
import { test, describe, expect } from 'vitest'

const wrapper = mount(Selector, {
  propsData: {
    title: 'Test',
    isSelected: false,
    description: 'Describe'
  }
})

describe('Selector', () => {
  test('should render correctly', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  test('should emiton button click when the button is clicked', () => {
    const button = wrapper.find('.selector-radio-button')
    const clickEvent = new Event('click')
    button.element.dispatchEvent(clickEvent)
    expect(wrapper.emitted('on-item-select')).toBeTruthy()
  })
})
