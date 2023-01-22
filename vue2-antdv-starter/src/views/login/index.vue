<template>
  <div>
    <a-button @click="login" type="primary">登录</a-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'LoginPage',
  methods: {
    ...mapActions({
      dispatchLogin: 'login'
    }),
    async login() {
      await this.dispatchLogin();
      this.$router.push('/');
    }
  }
}
</script>