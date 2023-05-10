<template>
  <div>{{ count.count }}</div>
  <div>
    <button @click="update">更新</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: {
        count: 1
      }
    }
  },
  methods: {
    update() {
      this.count.count++;
    }
  }
})
</script>