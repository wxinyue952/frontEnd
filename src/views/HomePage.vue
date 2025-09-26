<script setup>
//import { IconHome } from '@arco-design/web-vue/es/icon'
import { Message } from '@arco-design/web-vue'
const handleClickMini = () => {
  Message.info('hello isboyjc, click mini AButton!')
}
</script>

<template>
  <div>
    <icon-home-copy style="font-size: 40px; color: blue" />
    <icon-home-download style="font-size: 40px; color: black" />
  </div>

  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

  <HelloWorld />
</template>

<style scoped lang="scss"></style>
