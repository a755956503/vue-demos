<!--  -->
<template>
  <div>
    <div>这是一个js组件</div>
    <tsx-test />
  </div>
</template>

<script>
import TsxTest from '../TsxTest';
export default {
  data() {
    return {
      a: 1
    };
  },

  components: { TsxTest },

  computed: {},

  mounted: {},

  methods: {}
}
</script>
