<template>
  <a-layout>
    <a-layout-sider>
      <a-menu theme="dark">
        <a-menu-item
          v-for="{ title, path } of menus"
          :key="path"
          @click="goto(path)"
        >{{ title }}</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'LayoutPage',
  data() {
    return {
      menus: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '任务中心',
          path: '/task'
        }
      ]
    }
  },
  methods: {
    goto(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push(path)
    }
  }
}
</script>

