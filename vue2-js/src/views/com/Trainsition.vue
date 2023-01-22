<template>
  <div>
    <!-- <transition enter-class="enter" enter-to-class="enterto" enter-active-class="enteractive"> -->
    <transition name="fade" @beforeEnter="beforeEnter">
      <div v-if="id === 1" class="div1">Div1</div>
      <div v-if="id === 2" class="div2">Div2</div>
    </transition>
    <div>
      <button @click="toggle">更新</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      id: 1
    }
  },
  methods: {
    toggle() {
      if (this.id >= 2) {
        this.id = 1;
      } else {
        this.id++;
      }
    },
    beforeEnter() {
      console.log('before enter');
    }
  }
}
</script>
<style lang="less">
.div1 {
  width: 300px;
  height: 300px;
  background: green;
}
.div2 {
  width: 300px;
  height: 300px;
  background: red;
}
</style>
