<template>
  <article class="selector-container">
    <section class="selector-section">
      <section class="selector-row-first">
        <section class="selector-title">
          {{ title }}
        </section>
        <section class="selector-radio-button" @click="onItemSelect">
          <img :src="selectIcon" />
        </section>
      </section>
      <section v-if="description" class="description">
        {{ description }}
      </section>
    </section>
  </article>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { ICON_SELECTED, ICON_UNSELECTED } from '../constants/image'

const props = withDefaults(
  defineProps<{
    title: string
    isSelected?: boolean
    description?: string
  }>(),
  {
    isSelected: false,
    description: ''
  }
)

const emit = defineEmits<{
  (e: 'on-item-select'): void
}>()

const selectIcon = ref(ICON_UNSELECTED)
const isSelected = ref(props.isSelected)

const onItemSelect = () => {
  isSelected.value = !isSelected.value
  selectIcon.value = isSelected.value ? ICON_SELECTED : ICON_UNSELECTED
  console.log('Icon clicked', selectIcon.value, props.isSelected)
  emit('on-item-select')
}
</script>

<style scoped lang="less">
@import '../styles/main/components/selector.less';
</style>
