<template>
  <div>{{ count.count }}</div>
  <div>
    <button @click="update">更新</button>
  </div>
</template>
<script setup lang="ts">
import {  reactive, onMounted, defineProps } from 'vue';
const count = reactive({ count: 1 });

onMounted(() => {
  console.log('onMounted');
})

function update() {
  count.count++;
}
</script>