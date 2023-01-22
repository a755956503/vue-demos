<template>
  <div id="app" style="width:300px">
    <p>{{name}}</p>
    <input v-model="name" />
    <a-button @click="focus">点击</a-button>
    <a-input ref="user" />
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
    focus() {
      if (this.$refs.user && this.$refs.user.$el) {
        const el = this.$refs.user.$el;
        el.focus();
      }
    }
  }
}
</script>
