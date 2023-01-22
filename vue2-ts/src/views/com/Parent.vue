<template>
  <div>
    <div>Parent</div>
    <div>{{ p1 }}</div>
    <Child />
  </div>
</template>
<script>
import Child from './Child';
export default {
  name: 'Parent',
  components: { Child },
  props: {
    p1: String
  },
  data() {
    return {};
  },
  created() {
    console.log(this);
  }
};
</script>
