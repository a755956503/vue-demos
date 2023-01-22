<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/com">Com</router-link>
    </div> -->
    <!-- <router-view /> -->
    <Child>
      <span>Parent 1</span>
      <span>Parent 2</span>
    </Child>
    <!-- <Child>
      <template #user="user">
        <span>{{ user ? user.name : '' }}}</span>
      </template>
    </Child> -->
  </div>
</template>
<script>
import Child from './components/SlotChild.vue';
// import Child from './components/ScopedSlotChild.vue';
export default {
  components: { Child }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
