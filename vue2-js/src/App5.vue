<template>
  <div id="app" style="width:300px">
    <p>{{name}}</p>
    <a-button @click="update">点击</a-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      name: '1'
    };
  },
  methods: {
    update() {
      this.name = this.name + '1';
    }
  }
}
</script>
