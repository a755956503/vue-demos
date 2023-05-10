<template>
  <div>base</div>
</template>
<script setup lang="ts">
// import {  } from 'vue';
import { useCounterStore } from '../../stores/counter';
const { count, increment } = useCounterStore();
</script>