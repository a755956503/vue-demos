<template>
  <div id="app">
    <p>{{name}}</p>
    <button @click="updateName"></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '1'
    };
  },
  methods: {
    updateName() {
      this.name += '1';
    }
  }
}
</script>
