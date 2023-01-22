<template>
  <div class="page-container">
    <div>{{ appName }}</div>
    <div>{{ taskInfo ? taskInfo.name : '' }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'TaskPage',
  mounted() {
    this.getTask();
  },
  computed: {
    ...mapState(['appName']),
    // ...mapState('user', ['taskInfo'])
    ...mapGetters('task', ['taskInfo'])
  },
  methods: {
    ...mapActions('task', ['getTask'])
  }
}
</script>