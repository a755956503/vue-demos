<template>
  <div key="app">
    <div key="content">{{ state.value }}</div>
    <button @click="update">更新</button>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({ value: 1 });
const update = () => {
  state.value = state.value + 1;
}
</script>