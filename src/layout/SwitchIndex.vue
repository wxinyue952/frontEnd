<script setup>
import switchLayoutList from '@/layout/switch/index.js'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()

// 初始化布局列表
systemStore.initSwitchLayout(switchLayoutList)
</script>

<template>
  <div class="switch-index">
    <!-- <component :is="" /> -->
    <component :is="systemStore.currentSwitchlayout" />
    <!-- <DefaultLayout /> -->
    <SidebarLayout />
  </div>
</template>

<style scoped></style>
