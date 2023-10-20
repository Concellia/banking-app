<template>
  <article>
    <section class="button-template">
      <button class="button" @click="buttonClick">{{ buttonText }}</button>
    </section>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  buttonText: string
}>()

const emit = defineEmits<{
  (e: 'on-button-click'): void
}>()

const buttonClick = () => {
  emit('on-button-click')
}
</script>

<style scoped lang="less">
@import '../styles/main/components/button-templete.less';
</style>
