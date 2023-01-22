<template>
  <div>
    {{ this.prop1.a.b }}
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  name: 'ComProp',
  props: {
    prop1: Object
  },
  methods: {
    change() {
      this.prop1.a.b += 1;
    }
  }
}
</script>

<style>

</style>