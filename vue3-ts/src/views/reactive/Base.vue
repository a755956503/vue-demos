<template>
  <div>{{ count.count }}</div>
  <div>
    <button @click="update">更新</button>
  </div>
</template>
<script setup lang="ts">
import {  reactive } from 'vue';
const count = reactive({ count: 1 });

function update() {
  count.count++;
}
</script>