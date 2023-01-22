<template>
  <a-spin :spinning="loading">
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
  </a-spin>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'LayoutPage',
  data() {
    return {
      loading: true
    }
  },
  async mounted() {
    try {
      if (this.menus) {
        this.loading = false;
        return;
      }
      await this.getUserInfo();
      this.loading = false;
    } catch (error) {
      this.$router.push('/login');
      this.loading = false;
    }
  },
  computed: {
    ...mapState(['isLogin', 'menus'])
  },
  methods: {
    ...mapActions(['getUserInfo']),
    goto(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push(path)
    }
  }
}
</script>

